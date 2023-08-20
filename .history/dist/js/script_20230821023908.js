// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;
const btnToTop = document.querySelector("#to-top");
const toTop = document.querySelector("#toTop");
const toBottom = document.querySelector("#toBottom");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  if (window.scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
    btntoTop.classList.remove("hidden");
    btntoTop.classList.add("flex");
  } else {
    navbar.classList.remove("navbar-fixed");
    btnToTop.classList.remove("flex");
    btnToTop.classList.add("hidden");
  }
};

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});
