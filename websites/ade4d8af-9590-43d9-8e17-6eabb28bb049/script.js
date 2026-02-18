document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    
    document.body.appendChild(mobileMenu);

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : 'auto';
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

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
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    const accordionButtons = document.querySelectorAll('.accordion button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        });
    });
});