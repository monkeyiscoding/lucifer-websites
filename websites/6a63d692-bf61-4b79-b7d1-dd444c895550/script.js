document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.cta');
    menuToggle.addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submitted!');
    });
});