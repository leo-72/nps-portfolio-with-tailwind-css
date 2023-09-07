const navbarLine = document.querySelector("#navbarline");
const navMenu = document.querySelector("#nav-menu");
const navbar = document.querySelector("header");
const fixedNav = navbar.offsetTop;
const toTop = document.getElementById("to-top");
const darkMode = document.querySelector("#dark-mode");
const darkModeContainer = document.querySelector(".dark-mode-container");
const html = document.querySelector("html");
const darkModeInitialBottom = 44;

navbarLine.addEventListener("click", function () {
  navbarLine.classList.toggle("nl-active");
  navMenu.classList.toggle("hidden");
});

window.onscroll = function () {
  const scrollY = window.scrollY;
  const slideUpButtonBottom = scrollY + toTop.getBoundingClientRect().height;

  if (scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
    toTop.style.display = "block";
    if (slideUpButtonBottom >= 0) {
      darkModeContainer.classList.add("dark-mode-slide-up");
      darkModeContainer.classList.remove("dark-mode-slide-down");
    }
  } else {
    navbar.classList.remove("navbar-fixed");
    toTop.classList.add("hide");
    darkModeContainer.classList.add("dark-mode-slide-down");
    darkModeContainer.classList.remove("dark-mode-slide-up");
    setTimeout(() => {
      toTop.style.display = "none";
      toTop.classList.remove("hide");
    }, 500);
  }
};

// Close Navbar
window.addEventListener("click", function (e) {
  if (e.target != navbarLine && e.target != navMenu) {
    navbarLine.classList.remove("nl-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode
darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light ";
  }
});

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkMode.checked = true;
  darkModeContainer.style.bottom = `${darkModeInitialBottom}px`;
} else {
  darkMode.checked = false;
  darkModeContainer.style.bottom = `${darkModeInitialBottom}px`;
}
