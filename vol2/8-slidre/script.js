document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let sliderContainer = document.querySelector('.slider-container');
  let currentIndex = 0;
  const showSlide = (index) => { slider.style.transform = `translateX(-${index * 100}%)`; }
  const goToNthSlide = (n) => { currentIndex = n; showSlide(currentIndex); updateDots(); }
  const updateDots = () => {
    dots.forEach((dot, index) => { dot.classList.toggle("active", index === currentIndex); });
    switch(currentIndex) {
      case 0:
        sliderContainer.classList.add('lightred');
        sliderContainer.classList.remove('lightblue');
        sliderContainer.classList.remove('lightyellow');
      break; case 1:
        sliderContainer.classList.remove('lightred');
        sliderContainer.classList.add('lightblue');
        sliderContainer.classList.remove('lightyellow');
      break; case 2:
        sliderContainer.classList.remove('lightred');
        sliderContainer.classList.remove('lightblue');
        sliderContainer.classList.add('lightyellow');
      break;
    }
  }
  const goToNextSlide = () => { currentIndex = (currentIndex + 1) % slides.length; showSlide(currentIndex); updateDots(); }
  const goToPrevSlide = () => { currentIndex = (currentIndex - 1 + slides.length) % slides.length; showSlide(currentIndex); updateDots(); }
  prevBtn.addEventListener("click", goToPrevSlide);
  nextBtn.addEventListener("click", goToNextSlide);
  dots.forEach((dot, index) => { dot.addEventListener("click", () => { goToNthSlide(index) }); });
  showSlide(currentIndex);
  updateDots();
});