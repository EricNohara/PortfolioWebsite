import {
  resizeTotalHeight,
  handleUpdateScrollBar,
  handleScrollBarClick,
  progress,
  scrollPath,
} from "./modules/scrollbar.js";
import { handleNavBarBtns, contactPage } from "./modules/navbar.js";
import { opener, openerFunction } from "./modules/sublist-opener.js";
import {
  exitBtn,
  projNamesList,
  handleExit,
  handleProjectNameClick,
} from "./modules/overlay.js";

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
opener.forEach((el) => openerFunction(el));

// CODE FOR OVERLAY
exitBtn.addEventListener("click", (e) => handleExit(e));

projNamesList.addEventListener("click", (e) => handleProjectNameClick(e));

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
