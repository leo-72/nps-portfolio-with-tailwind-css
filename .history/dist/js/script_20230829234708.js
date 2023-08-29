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
  if (window.scrollY > 10) {
    navbar.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    navbar.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
});
