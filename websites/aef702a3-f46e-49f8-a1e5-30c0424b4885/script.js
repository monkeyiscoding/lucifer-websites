document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
    const navbarNav = document.querySelector(".navbar-nav");
    const body = document.body;
    const faqItems = document.querySelectorAll(".faq-item");

    mobileMenuButton.addEventListener("click", function () {
        mobileMenuOverlay.classList.toggle("active");
        navbarNav.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });

    mobileMenuOverlay.addEventListener("click", function () {
        mobileMenuOverlay.classList.remove("active");
        navbarNav.classList.remove("active");
        body.classList.remove("no-scroll");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            mobileMenuOverlay.classList.remove("active");
            navbarNav.classList.remove("active");
            body.classList.remove("no-scroll");
        }
    });

    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const chevron = item.querySelector(".chevron");

        question.addEventListener("click", function () {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
            chevron.style.transform = chevron.style.transform === "rotate(90deg)" ? "rotate(0deg)" : "rotate(90deg)";
        });
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    document.querySelectorAll(".nav-link").forEach((link) => {
                        link.classList.toggle("active", link.getAttribute("href").slice(1) === entry.target.id);
                    });
                }
            });
        },
        { threshold: 0.7 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
    });
});