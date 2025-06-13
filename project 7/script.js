// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Animate hero section on load
    const heroContent = document.querySelector(".hero-content");
    const profilePic = document.querySelector(".profile-pic");

    heroContent.style.opacity = 0;
    heroContent.style.transform = "translateX(-50px)";
    profilePic.style.opacity = 0;
    profilePic.style.transform = "translateX(50px)";

    setTimeout(() => {
        heroContent.style.transition = "all 1s ease";
        heroContent.style.opacity = 1;
        heroContent.style.transform = "translateX(0)";

        profilePic.style.transition = "all 1s ease";
        profilePic.style.opacity = 1;
        profilePic.style.transform = "translateX(0)";
    }, 300);

    // Portfolio image hover animation (extra effect)
    const portfolioItems = document.querySelectorAll(".portfolio-gallery img");
    portfolioItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = "scale(0.8)";
        item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`;

        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "scale(1)";
        }, 600);

        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });
});
