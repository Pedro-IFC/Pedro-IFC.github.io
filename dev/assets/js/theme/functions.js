const routes = {
    '/': '/home.html',
    '/about': '/about.html',
    '/contact': '/contact.html'
};

function fetchHTML(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        });
}

function router() {
    const path = window.location.hash.substring(1) || '/';
    const appDiv = document.getElementById('app');
    const route ="./views"+routes[path] || null;

    if (route) {
        fetchHTML(route)
            .then(html => {
                appDiv.innerHTML = html;
            })
            .catch(error => {
                appDiv.innerHTML = `<h1>404</h1><p>Página não encontrada.</p>`;
                console.error('Error fetching the HTML:', error);
            });
    } else {
        appDiv.innerHTML = `<h1>404</h1><p>Página não encontrada.</p>`;
    }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
