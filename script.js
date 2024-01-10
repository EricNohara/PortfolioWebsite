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
import {
  hiddenBoxElements,
  hiddenHrElements,
  handleBoxObserve,
  handleHrObserve,
} from "./modules/scroll-animations.js";

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
hiddenHrElements.forEach((el) => handleHrObserve(el));
hiddenBoxElements.forEach((el) => handleBoxObserve(el));
