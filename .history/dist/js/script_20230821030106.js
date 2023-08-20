// Navbar Line
const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  if (window.scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

const toTopButton = document.getElementById("to-top");
const toBottomButton = document.getElementById("to-bottom");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition < windowHeight) {
    toBottomButton.style.display = "flex";
    toTopButton.style.display = "none";
  } else if (scrollPosition + windowHeight >= documentHeight) {
    toTopButton.style.display = "flex";
    toBottomButton.style.display = "none";
  } else {
    toTopButton.style.display = "none";
    toBottomButton.style.display = "none";
  }
});

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});
