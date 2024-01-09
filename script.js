// SCROLLBAR TEMP CODE
const progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onresize = () =>
  (totalHeight = document.body.scrollHeight - window.innerHeight);

window.onscroll = function () {
  const progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};

// CODE FOR NAVBAR TEST
// document.addEventListener("DOMContentLoaded", function () {
//   // Get the current page pathname
//   var currentPage = window.location.pathname;

//   function highlightNavLink() {
//     let currentSection = null;

//     // Find the section currently in the viewport
//     document.querySelectorAll('section').forEach(function(section) {
//       var rect = section.getBoundingClientRect();
//       if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
//         currentSection = section.id;
//       }
//     });

//     if (currentSection) {
//       var activeLink = document.querySelector('nav a[href="#' + currentSection + '"]');
//       if (activeLink) {
//         activeLink.classList.add('active');
//       }
//     }
// };

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

console.log(document.referrer);
