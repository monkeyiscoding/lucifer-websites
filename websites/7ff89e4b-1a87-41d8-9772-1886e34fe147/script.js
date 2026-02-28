document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('main section');
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const accordionButtons = document.querySelectorAll('.accordion-button');

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', () => {
        navLinksContainer.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // Intersection Observer for active nav link
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Accordion functionality
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const chevron = button.querySelector('.chevron');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                chevron.textContent = '▼';
            } else {
                content.style.display = 'block';
                chevron.textContent = '▲';
            }
        });
    });
});