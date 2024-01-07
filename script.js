// SCROLLBAR TEMP CODE
const progress = document.getElementById("progressbar");
const totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  const progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};

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
