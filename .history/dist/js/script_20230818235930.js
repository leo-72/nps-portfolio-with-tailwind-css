// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if ( > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
