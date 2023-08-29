// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;
const toTop = document.getElementById("#to-top");

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  if (window.scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});
