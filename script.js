// SCROLLBAR CODE
const progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onresize = () =>
  (totalHeight = document.body.scrollHeight - window.innerHeight);

window.onscroll = function () {
  const progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};

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

const navBar = document.getElementById("navbar");

navBar.addEventListener("click", (e) => {
  const clickedBtn = e.target;
  if (clickedBtn !== resumeBtn) {
    [...clickedBtn.parentElement.children].slice(0, 4).forEach((btn) => {
      if (btn.classList.contains("active")) btn.classList.remove("active");
      btn.dataset.clicked = "false";
    });
    clickedBtn.classList.add("active");
    clickedBtn.dataset.clicked = "true";
  }
});

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 50;
  pages.forEach((page) => {
    const isVisible =
      scrollPos >= page[0].offsetTop &&
      scrollPos < page[0].offsetTop + page[0].offsetHeight;
    if (!page[1].classList.contains("active") && isVisible)
      page[1].classList.add("active");
    else if (
      page[1].classList.contains("active") &&
      !isVisible &&
      page[1].dataset.clicked === "false"
    )
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

exitBtn.addEventListener("click", (e) => {
  e.target.parentElement.classList.add("overlay-hidden");
  projects.forEach((el) => el.classList.add("overlay-hidden"));
});

projNamesList.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() !== "p") return;
  if (e.target.classList[0] !== "opener") {
    const overlayContent = document.getElementById(
      e.target.dataset.projectName
    );
    overlayScreen.classList.remove("overlay-hidden");
    overlayContent.classList.remove("overlay-hidden");
  }
});

//CODE FOR SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) entry.target.classList.add("scroll-show");
    else entry.target.classList.remove("scroll-show");
  });
});

const hiddenElements = document.querySelectorAll(".scroll-hidden");
hiddenElements.forEach((el) => observer.observe(el));
