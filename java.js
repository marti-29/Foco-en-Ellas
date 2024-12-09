let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function showSlides() {
  const slides = document.getElementsByClassName("slidefade");
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex <0) { slideIndex = slides.length - 1; }

  for (let i = 0; i <slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
