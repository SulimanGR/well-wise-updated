// Toggle night mode and icon
function toggleNightMode() {
    const currentTheme = document.body.getAttribute('data-theme');
    const button = document.querySelector('.toggle-button');
    
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');  // Switch to light mode
        localStorage.setItem('theme', 'light');
        button.innerHTML = '🌙';  // Moon icon
    } else {
        document.body.setAttribute('data-theme', 'dark');  // Switch to dark mode
        localStorage.setItem('theme', 'dark');
        button.innerHTML = '☀️';  // Sun icon
    }
}

// Check for saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const button = document.querySelector('.toggle-button');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        button.innerHTML = '☀️';  // Sun icon
    } else {
        document.body.removeAttribute('data-theme'); // Default to light mode
        button.innerHTML = '🌙';  // Moon icon
    }
});
