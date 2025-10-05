document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const lightBtn = document.getElementById("light-mode-btn");
    const darkBtn = document.getElementById("dark-mode-btn");
    const blueBtn = document.getElementById("blue-mode-btn");

    function setTheme(theme) {
        body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to light mode if no theme is saved
        setTheme("light");
    }

    // Event listeners for the buttons
    lightBtn.addEventListener("click", () => setTheme("light"));
    darkBtn.addEventListener("click", () => setTheme("dark"));
    blueBtn.addEventListener("click", () => setTheme("blue"));
});