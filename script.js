import {
  resizeTotalHeight,
  handleUpdateScrollBar,
  handleScrollBarClick,
  progress,
  scrollPath,
} from "./modules/scrollbar.js";

import { handleNavBarBtns, contactPage } from "./modules/navbar.js";

const handleWindowScroll = function () {
  handleUpdateScrollBar();
  handleNavBarBtns();
};

// SCROLLBAR
window.addEventListener("resize", resizeTotalHeight);

window.addEventListener("scroll", handleWindowScroll);

scrollPath.addEventListener("click", (e) => handleScrollBarClick(e));

progress.addEventListener("click", (e) => handleScrollBarClick(e));

// CODE FOR OPENING THE DROPDOWNS
const opener = document.querySelectorAll(".opener");
opener.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hidden");
  })
);

// CODE FOR OVERLAY
const exitBtn = document.getElementById("exit-icon");
const projNamesList = document.getElementById("list");
const overlayScreen = document.querySelector(".overlay-screen");
const projects = document.querySelectorAll(".project");
const navBar = document.getElementById("navbar");

exitBtn.addEventListener("click", (e) => {
  e.target.parentElement.classList.add("overlay-hidden");
  projects.forEach((el) => el.classList.add("overlay-hidden"));
  navBar.classList.remove("overlay-hidden");
  contactPage.style.setProperty("z-index", "100", "important");
});

projNamesList.addEventListener("click", (e) => {
  const project = e.target;
  if (project.tagName.toLowerCase() !== "p") return;
  if (project.classList[0] !== "opener") {
    const overlayContent = document.getElementById(project.dataset.projectName);
    overlayScreen.classList.remove("overlay-hidden");
    overlayContent.classList.remove("overlay-hidden");
    navBar.classList.add("overlay-hidden");
    contactPage.style.setProperty("z-index", "10", "important");
  }
});

//CODE FOR SCROLL ANIMATION
const hrObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("scroll-show-hr");
    else entry.target.classList.remove("scroll-show-hr");
  });
});

const boxObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("scroll-show-box");
    else entry.target.classList.remove("scroll-show-box");
  });
});

const hiddenHrElements = document.querySelectorAll(".scroll-hide-hr");
const hiddenBoxElements = document.querySelectorAll(".scroll-hide-box");
hiddenHrElements.forEach((el) => hrObserver.observe(el));
hiddenBoxElements.forEach((el) => boxObserver.observe(el));
