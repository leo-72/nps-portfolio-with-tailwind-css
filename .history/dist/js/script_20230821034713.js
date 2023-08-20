// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;
const toTop = document.querySelector("#to-top");
const toBottom = document.querySelector("#to-bottom");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  if (window.scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
    toBottom.classList.add("hidden");
    toBottom.classList.remove("flex");
  } else {
    navbar.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
    toBottom.classList.remove("hidden");
    toBottom.classList.add("flex");
  }
};

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});

let calcScrollValue = () => {
  let scrollToTop = document.getElementById("to-top");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;

  
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
