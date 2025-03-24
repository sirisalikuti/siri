const creations = [
    { title: "TASK 1", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task1/FrontendTask2a.html" },
    { title: "TASK 2", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task2/FrontendTask3.html" },
    { title: "TASK 3", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task3/FrontendTask4.html" },
    { title: "TASK 4", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task4/FrontendTask5.html" },
    { title: "TASK 5", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task5/FrontendTask8.html" },
    { title: "TASK 6", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task6/FrontendTask9.html" },
    { title: "TASK 7", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task7/FrontendTask10.html" },
    { title: "TASK 8", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task8/FrontendTask11a.html" },
    { title: "TASK 9", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task9/FrontendendTask11b.html" },
    { title: "TASK 10", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task10/FrontendTask12a.html" },
    { title: "TASK 11", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task11/FrontendTask13.html" },
    { title: "TASK 12", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task12/FrontendTask14b.html" },
    { title: "TASK 13", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task13/FrontendTask15a.html" },
    { title: "TASK 14", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task14/FrontendTask15b.html" },
];

function setupPortfolio() {
    const projectsList = document.getElementById('projectsList');
    const projectViewer = document.getElementById('projectViewer');

    if (!projectsList || !projectViewer) {
        console.error('Portfolio elements missing');
        return;
    }

    // Create project cards
    creations.forEach(creation => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.url = creation.url;
        card.innerHTML = `<h3>${creation.title}</h3>`;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.project-card').forEach(item => {
                item.classList.remove('active');
            });
            card.classList.add('active');
            projectViewer.innerHTML = `<iframe src="${creation.url}"></iframe>`;
        });
        
        projectsList.appendChild(card);
    });

    // Load first project by default
    if (creations.length > 0) {
        projectsList.firstChild.classList('active');
        projectViewer.innerHTML = `<iframe src="${creations[0].url}"></iframe>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        setupPortfolio();
    } catch (error) {
        //console.error('Error setting up portfolio:', error);
    }
});