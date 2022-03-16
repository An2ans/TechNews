document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

var slideIndex = 0;
var timer;
showSlides();

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timer);

  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  clearTimeout(timer);

  showSlides((slideIndex = n));
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  clearTimeout(timer);

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  timer = setTimeout(showSlides, 8000);
}

//scrollreveal to reveal each section while scrolling down

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal(".news-cards", { delay: 500 });
ScrollReveal().reveal(".banner-one", { delay: 500 });
ScrollReveal().reveal(".banner-two", { delay: 500 });
ScrollReveal().reveal(".footer-links", { delay: 500 });
