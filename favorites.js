let position = 0;
const slides = document.getElementsByClassName("carousel");
const length = slides.length;

document.getElementById("carouselRight").addEventListener("click", function () {
  toNext();
});

document.getElementById("carouselLeft").addEventListener("click", function () {
  toPrev();
});

function toNext() {
  updatePosition();
  if (position === length - 1) {
    position = 0;
  } else {
    position++;
  }
}
function toPrev() {
  updatePosition();
  if (position === 0) {
    position = length - 1;
  } else {
    position--;
  }
}

function updatePosition() {
  for (let slide of slides) {
    slide.classList.remove("block");
  }
  slides[position].classList.add("block");
}
