// Hamburger menu: shows and hides the navigation on mobile

// Get the hamburger button and the nav menu from the page
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

// Toggle the "open" class on the nav when the button is clicked
menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});

// Close the menu after a nav link is clicked (so it doesn't cover the page)
const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
  });
});