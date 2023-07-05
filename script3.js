const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove active class from all links
        links.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        link.classList.add('active');
    });
});

