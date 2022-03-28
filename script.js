// -- NAVBAR & BURGER ICON --

const burger = document.querySelector(".nav__burger");
const nav = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links li");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");

  nav.classList.toggle("nav__links-Slide-Active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = "navLinkFade 1s ease forwards";
    }
  });
});

// -- LIGHT & DARK MODE --

let darkMode = localStorage.getItem("darkMode");
const mainHeading = document.querySelector(".main__heading");
const modeButtons = document.querySelectorAll(".nav__changeModeButton");
const navImages = document.querySelectorAll(".nav__image");
const mainImage = document.querySelector(".main__image");

// For CSS Property
let rootStyles = getComputedStyle(document.documentElement);
let darkColor = rootStyles.getPropertyValue("--clr-dark");
let lightColor = rootStyles.getPropertyValue("--clr-light");

// Functions for changing light to dark
const enableLightMode = () => {
  document.documentElement.style.setProperty("--clr-dark", darkColor);
  document.documentElement.style.setProperty("--clr-light", lightColor);

  navImages.forEach((navImage) => {
    navImage.src = "./img/night-mode.png";
  });

  mainImage.style.backgroundImage = "url(./img/brightness.png)";
  mainHeading.textContent = "Hey, light mode!";

  localStorage.setItem("darkMode", null);
};

// and vice versa
const enableDarkMode = () => {
  document.documentElement.style.setProperty("--clr-light", darkColor);
  document.documentElement.style.setProperty("--clr-dark", lightColor);

  navImages.forEach((navImage) => {
    navImage.src = "./img/sun.png";
  });

  mainImage.style.backgroundImage = "url(./img/night-mode.png)";
  mainHeading.textContent = "Hey, dark mode!";

  localStorage.setItem("darkMode", "enabled");
};

// If current mode (in the local storage) is "enabled", set the mode to dark
if (darkMode === "enabled") {
  enableDarkMode();
} else {
  enableLightMode();
}

// Do the change when the mode button/toggle is clicked
modeButtons.forEach((modeButton) => {
  modeButton.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      enableLightMode();
    }
  });
});
