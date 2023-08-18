// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu -     

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
});

// Navbar Fixed
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("navbar-fixed", window.scrollY > 0);
});
