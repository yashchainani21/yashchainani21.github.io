(function() {
    function initDarkModeToggle() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (!darkModeToggle) return;

        // Check for saved theme preference or default to system preference
        const currentTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Set initial theme
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
        } else if (systemPrefersDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }

        // Update toggle icon based on current theme
        updateToggleIcon();

        // Toggle dark mode on button click
        darkModeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleIcon();
        });

        function updateToggleIcon() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const icon = darkModeToggle.querySelector('i');
            
            if (currentTheme === 'dark') {
                icon.className = 'fas fa-sun';
                darkModeToggle.setAttribute('title', 'Switch to light mode');
            } else {
                icon.className = 'fas fa-moon';
                darkModeToggle.setAttribute('title', 'Switch to dark mode');
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDarkModeToggle);
    } else {
        initDarkModeToggle();
    }
})();