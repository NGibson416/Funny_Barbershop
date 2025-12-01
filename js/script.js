// MOBILE SIDEBAR FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {

// Get sidebar elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('mobile-sidebar');
const sidebarClose = document.getElementById('sidebar-close');

// Check if elements exist
if (!mobileMenuBtn || !sidebar || !sidebarClose) {
console.error('Sidebar elements not found');
return;
}

// Toggle sidebar when hamburger button is clicked
mobileMenuBtn.addEventListener('click', function(e) {
e.preventDefault();
sidebar.classList.toggle('active');
if (sidebar.classList.contains('active')) {
console.log('Sidebar opened');
} else {
console.log('Sidebar closed');
}
});

// Close sidebar when X button is clicked
sidebarClose.addEventListener('click', function(e) {
e.preventDefault();
sidebar.classList.remove('active');
console.log('Sidebar closed');
});

// Close sidebar when clicking outside of it
document.addEventListener('click', function(e) {
// Check if click is outside both sidebar and hamburger button
if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
sidebar.classList.remove('active');
}
});

// Handle window resize - hide sidebar if screen gets larger
window.addEventListener('resize', function() {
if (window.innerWidth > 900) {
sidebar.classList.remove('active');
}
});

// Navigation smooth scroll functionality
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href').substring(1);
scrollToSection(targetId);
});
});
});

// Smooth scroll function
function scrollToSection(sectionId) {
const section = document.getElementById(sectionId);
if (section) {
section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}
