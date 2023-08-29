// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;
const toTop = document.querySelector("#to-top");
const toTopButton = document.getElementById("to-top");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-fixed");
    toTopButton.classList.remove("hidden");
    toTopButton.classList.add("flex");
  } else {
    navbar.classList.remove("navbar-fixed");
    toTopButton.classList.remove("flex");
    toTopButton.classList.add("hidden");
  }
};

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});
