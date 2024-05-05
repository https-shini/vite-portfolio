const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");

    // Verificar se o navegador suporta a preferência de tema
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    } else {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    }

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light-mode");
        } else {
            localStorage.setItem("theme", "dark-mode");
        }
    };

    // Events
    themeToggleBtns.forEach((btn) =>
        btn.addEventListener("click", handleThemeToggle)
    );
};

export default darkMode;
