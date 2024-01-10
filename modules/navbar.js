// SELECT PAGES
const titlePage = document.getElementById("title-page");
const abtPage = document.getElementById("about-page");
const projPage = document.getElementById("projects-page");
const contactPage = document.getElementById("contact-page");

// SELECT NAVBAR BUTTONS
const homeBtn = document.querySelector(".home-btn");
const abtBtn = document.querySelector(".abt-btn");
const projectsBtn = document.querySelector(".projects-btn");
const contactBtn = document.querySelector(".contact-btn");

const pages = [
  [titlePage, homeBtn],
  [abtPage, abtBtn],
  [projPage, projectsBtn],
  [contactPage, contactBtn],
];

const handleNavBarBtns = function () {
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
};

export { handleNavBarBtns, contactPage };
