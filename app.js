
// Select the hamburger and nav menu
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

