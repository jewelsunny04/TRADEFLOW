// about.js
document.addEventListener('DOMContentLoaded', () => {
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.2}s`;
        row.classList.add('fade-in');
    });
});

