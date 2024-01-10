// SCROLLBAR CODE
const progress = document.getElementById("progressbar");
const scrollPath = document.getElementById("scrollpath");
let totalHeight = document.body.scrollHeight - window.innerHeight;

const resizeTotalHeight = function () {
  totalHeight = document.body.scrollHeight - window.innerHeight;
};

const handleUpdateScrollBar = function () {
  const progHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progHeight + "%";
};

const handleScrollBarClick = function (e) {
  const clickRatio = e.clientY / window.innerHeight;
  const newHeight = totalHeight * clickRatio;
  window.scrollTo({ top: newHeight });
};

export {
  resizeTotalHeight,
  handleUpdateScrollBar,
  handleScrollBarClick,
  progress,
  scrollPath,
};
