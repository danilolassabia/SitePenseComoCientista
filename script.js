function expandList(id) {
  console.log("entrou");
  const moreItens = document.getElementById(`more-itens-${id}`);
  const plus = document.getElementById(`plus-${id}`);
  moreItens.classList.toggle("visible");
  plus.textContent = moreItens.classList.contains("visible") ? "-" : "+";
  console.log(moreItens);
  console.log(plus);
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
    startX,
    startScrollLeft;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;

    const newScrollLeft = startScrollLeft - (e.pageX - startX);
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      isDragging = false;
      return;
    }

    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);

  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });
});
