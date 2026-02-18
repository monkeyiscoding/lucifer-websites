document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    const accordionButtons = document.querySelectorAll('.accordion-button');

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    accordionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            button.classList.toggle('active');
            content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
        });
    });

    document.addEventListener('click', (event) => {
        if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    const sections = document.querySelectorAll('main section');
    const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);
                navLinksArray.forEach(link => link.classList.remove('active'));
                navLinksArray[index].classList.add('active');
            }
        });
    }, {
        threshold: 0.3
    });

    sections.forEach(section => observer.observe(section));
});