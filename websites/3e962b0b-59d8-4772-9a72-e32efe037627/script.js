document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const accordionTitles = document.querySelectorAll('.accordion-title');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    accordionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = title.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    };

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });
});