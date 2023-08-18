// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar");
  navbar.classList.toggle("fixed", window.scrollY > 0);
}
