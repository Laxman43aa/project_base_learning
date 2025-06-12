// Simple frontend interactivity and animation

document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector("button");
    const inputField = document.querySelector("input");

    // Animate search button on click
    searchBtn.addEventListener("click", () => {
        const query = inputField.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            inputField.value = '';
        } else {
            alert("Please enter a search term.");
        }
    });

    // Input glow on focus
    inputField.addEventListener("focus", () => {
        inputField.style.boxShadow = "0 0 10px #e23744";
    });

    inputField.addEventListener("blur", () => {
        inputField.style.boxShadow = "none";
    });
});
