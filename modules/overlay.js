const exitBtn = document.getElementById("exit-icon");
const projNamesList = document.getElementById("list");
const overlayScreen = document.querySelector(".overlay-screen");
const projects = document.querySelectorAll(".project");
const navBar = document.getElementById("navbar");
const contactPage = document.getElementById("contact-page");

const handleExit = function (e) {
  e.target.parentElement.classList.add("overlay-hidden");
  projects.forEach((el) => el.classList.add("overlay-hidden"));
  navBar.classList.remove("overlay-hidden");
  contactPage.style.setProperty("z-index", "100", "important");
};

const handleProjectNameClick = function (e) {
  const project = e.target;
  if (project.tagName.toLowerCase() !== "p") return;
  if (project.classList[0] !== "opener") {
    const overlayContent = document.getElementById(project.dataset.projectName);
    overlayScreen.classList.remove("overlay-hidden");
    overlayContent.classList.remove("overlay-hidden");
    navBar.classList.add("overlay-hidden");
    contactPage.style.setProperty("z-index", "10", "important");
  }
};

export { exitBtn, projNamesList, handleExit, handleProjectNameClick };
