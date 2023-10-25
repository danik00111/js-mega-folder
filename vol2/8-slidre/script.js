document.addEventListener("DOMContentLoaded", () => { // just a safeguard
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
      case 0: classesFunc('lightred'); break;
      case 1: classesFunc('lightblue'); break;
      case 2: classesFunc('lightyellow'); break;
    }
  }
  const classesFunc = (x) => {
    sliderContainer.classList.forEach((className) => {
      if(className !== 'slider-container') { sliderContainer.classList.remove(className); }
      sliderContainer.classList.add(x);
    });
  };
  const goToNextSlide = () => { currentIndex = (currentIndex + 1) % slides.length; showSlide(currentIndex); updateDots(); }
  const goToPrevSlide = () => { currentIndex = (currentIndex - 1 + slides.length) % slides.length; showSlide(currentIndex); updateDots(); }
  prevBtn.addEventListener("click", goToPrevSlide);
  nextBtn.addEventListener("click", goToNextSlide);
  dots.forEach((dot, index) => { dot.addEventListener("click", () => { goToNthSlide(index) }); });
  showSlide(currentIndex);
  updateDots();
});