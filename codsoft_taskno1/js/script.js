// To select all sections and Navigation links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

// Function to handle scroll event
window.onscroll = () => {
    // Loop through each section
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the section's bound
        if (top >= offset && top < offset + height) {
            // Loop through each navigation link
            navLinks.forEach(links => {
                // Remove 'active' class from all navigation links
                links.classList.remove('active');
                // Add 'active' class to the navigation link corresponding to the current section
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Toggle 'sticky' class for header when scrolling
header.classList.toggle('sticky', window.scrollY > 100);

// Event listener for DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Event listener for menu icon click
    menuIcon.addEventListener('click', () => {
        // Toggle 'active' class for navbar
        navbar.classList.toggle('active');
    });
});