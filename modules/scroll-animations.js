const hiddenHrElements = document.querySelectorAll(".scroll-hide-hr");
const hiddenBoxElements = document.querySelectorAll(".scroll-hide-box");

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

const handleHrObserve = function (el) {
  hrObserver.observe(el);
};

const handleBoxObserve = function (el) {
  boxObserver.observe(el);
};

export {
  hiddenBoxElements,
  hiddenHrElements,
  handleBoxObserve,
  handleHrObserve,
};
