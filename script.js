// SCROLLBAR TEMP CODE
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};
