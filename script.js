// SCROLLBAR CODE
const progress = document.getElementById("progressbar");
const scrollPath = document.getElementById("scrollpath");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onresize = () =>
  (totalHeight = document.body.scrollHeight - window.innerHeight);

window.onscroll = function () {
  const progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};

scrollPath.addEventListener("click", (e) => {
  const clickRatio = e.clientY / window.innerHeight;
  const newHeight = totalHeight * clickRatio;
  window.scrollTo({ top: newHeight });
});

progress.addEventListener("click", (e) => {
  const clickRatio = e.clientY / window.innerHeight;
  const newHeight = totalHeight * clickRatio;
  window.scrollTo({ top: newHeight });
});

// CODE FOR NAVBAR
const titlePage = document.getElementById("title-page");
const abtPage = document.getElementById("about-page");
const projPage = document.getElementById("projects-page");
const contactPage = document.getElementById("contact-page");

const homeBtn = document.querySelector(".home-btn");
const abtBtn = document.querySelector(".abt-btn");
const projectsBtn = document.querySelector(".projects-btn");
const contactBtn = document.querySelector(".contact-btn");
const resumeBtn = document.querySelector(".resume-btn");
const pages = [
  [titlePage, homeBtn],
  [abtPage, abtBtn],
  [projPage, projectsBtn],
  [contactPage, contactBtn],
];

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 50;
  pages.forEach((page) => {
    const isVisible =
      scrollPos >= page[0].offsetTop &&
      scrollPos < page[0].offsetTop + page[0].offsetHeight;
    if (!page[1].classList.contains("active") && isVisible)
      page[1].classList.add("active");
    else if (page[1].classList.contains("active") && !isVisible)
      page[1].classList.remove("active");
  });
});

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
