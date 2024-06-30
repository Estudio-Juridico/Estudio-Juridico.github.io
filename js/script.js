

window.sr = ScrollReveal();
  sr.reveal('.navbar', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.imgtransision ', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.p2 ', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.p1 ', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.fila', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.topics', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.izquierda', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.derecha', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });

window.sr = ScrollReveal();
  sr.reveal('.rueda', { 
    duration: 4000,
    rotate:{
      x:1,
      y:180,
    }
  })
window.sr = ScrollReveal();
  sr.reveal('.info-wrap', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });
  
window.sr = ScrollReveal();
  sr.reveal('.anime', { 
    duration: 4000,
    rotate:{
      x:1,
      y:180,
    }
  })
  
/**
 * MOBILE NAVBAR TOGGLER
 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);
*/


/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
*/


/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

/**
 * NEXT SLIDE
 */
const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */
const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
};

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * AUTOMATIC SLIDE
 */
const slideIntervalTime = 3000; // Tiempo en milisegundos (3 segundos)
let autoSlideInterval;

const startAutoSlide = function () {
  autoSlideInterval = setInterval(slideNext, slideIntervalTime);
};

const stopAutoSlide = function () {
  clearInterval(autoSlideInterval);
};

// Inicia el movimiento automático del slider
startAutoSlide();

// Opcional: Detener el movimiento automático cuando el usuario interactúa con los botones
sliderNextBtn.addEventListener("click", stopAutoSlide);
sliderPrevBtn.addEventListener("click", stopAutoSlide);

// Opcional: Reiniciar el movimiento automático después de un tiempo de inactividad tras la interacción del usuario
const restartAutoSlide = function () {
  stopAutoSlide();
  startAutoSlide();
};

sliderNextBtn.addEventListener("click", restartAutoSlide);
sliderPrevBtn.addEventListener("click", restartAutoSlide);
