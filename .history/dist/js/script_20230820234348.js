// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const toTop = document.querySelector("#to-top");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const
  if (getBoundingClientRect().top > 100) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Navbar Fixed
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("header");
  navbar.classList.toggle("navbar-fixed", window.scrollY > 0);
});

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});
