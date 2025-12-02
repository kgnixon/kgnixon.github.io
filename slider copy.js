document.addEventListener('DOMContentLoaded', function() {

  const container = document.querySelector(".slider-container");
  const nextButtons = document.querySelectorAll(".next");
  const prevButtons = document.querySelectorAll(".prev");
  const slide = document.querySelector(".slide");
  const indicator = document.querySelectorAll(".indicator");
  
  let index = 0;

  function moveSlider() {
    const slideWidth = slide.offsetWidth;
    
    if (index < 0) {
      index = 4;
    }
    if (index > 4) {
      index = 0;
    }

    container.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  function updateIndicators() {
    indicator.forEach(btn => btn.classList.remove("active"));
    indicator[index].classList.add("active");
  }

  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      index++;
      moveSlider();
      updateIndicators();
    });
  });

  prevButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      index--;
      moveSlider();
      updateIndicators();
    });
  });

  indicator.forEach(btn => {
    btn.addEventListener("click", () => {
      index = parseInt(btn.id);
      moveSlider();
      updateIndicators();
    });
  });

  window.addEventListener("resize", moveSlider);
  window.addEventListener("load", moveSlider);
  
});