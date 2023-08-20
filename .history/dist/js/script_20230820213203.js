// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("navbar-fixed", window.scrollY > 0);
});


// Close Navbar 
window.addEventListener("click", function (e) {
  if (e.target != navMenu)