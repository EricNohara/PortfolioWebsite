const opener = document.querySelectorAll(".opener");

const openerFunction = function (el) {
  el.addEventListener("click", (e) => {
    e.target.nextElementSibling.classList.toggle("hidden");
  });
};

export { opener, openerFunction };
