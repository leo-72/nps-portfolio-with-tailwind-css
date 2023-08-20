// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;
const toTop = document.querySelector("#to-top");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});



// Navbar Fixed
window.addEventListener("scroll", function () {
  navbar.classList.toggle("navbar-fixed", window.scrollY > 0);
  toTop.classList.toggle("hidden", window.scrollY > fixedNav);
  toTop.classList.toggle("flex", window.scrollY < fixedNav);
});

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});
