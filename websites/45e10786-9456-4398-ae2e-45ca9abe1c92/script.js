const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

mobileMenuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll');
    }
});

const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
};

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(e.target.getAttribute('href'));
    });
});

const observerOptions = {
    root: null,
    threshold: 0.7
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const content = item.nextElementSibling;
        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = 1;
        } else {
            content.style.maxHeight = null;
            content.style.opacity = 0;
        }
    });
});