// SCROLLBAR TEMP CODE
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};

// CODE FOR OPENING THE DROPDOWNS
let opener = document.querySelectorAll(".opener");
opener.forEach((el) =>
  el.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hidden");
  })
);

// CODE FOR OVERLAY
let exitBtn = document.getElementById("exit-icon");

exitBtn.addEventListener("click", (e) => {
  console.log(e.target.parentElement);
  e.target.parentElement.classList.add("hidden");
});
