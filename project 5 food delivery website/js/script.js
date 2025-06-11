// Animate search button click
document.querySelector('.search button').addEventListener('click', function () {
    const btn = this;
    btn.textContent = "Searching...";
    btn.disabled = true;

    setTimeout(() => {
        btn.textContent = "Search";
        btn.disabled = false;
        alert("Search initiated. (Add backend logic here!)");
    }, 1500);
});

// Fade-in animation on restaurant cards
window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.restaurant-item');
    items.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
