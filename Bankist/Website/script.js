'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // Doesn't snap to the top when clicking the button
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Smooth scrolling for hero button

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
  // Scrolling to section1
  const s1coords = section1.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
})

// Smooth scrolling for nav buttons

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault();

  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})

// Tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab'); // get only the tab (spans are present inside the tab -> we get the parent that has the class)
  if(!clicked) return; // Guard clause: for clicking 'tabsContainer'; don't continue the execution of this function

  // Change active tab
  tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));

  clicked.classList.add('operations__tab--active');

  // Change active content
  tabsContent.forEach((content) => content.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});

// Nav links hover animation

const nav = document.querySelector('.nav');

const hoverHandler = function (e) {
  if(e.target.classList.contains('nav__link')) {
    const activeLink = e.target;
    const siblings = nav.querySelectorAll('.nav__link');
    const logo = nav.querySelector('.nav__logo');

    siblings.forEach(s => {
      if(s !== activeLink) s.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', hoverHandler.bind(0.5));
nav.addEventListener('mouseout', hoverHandler.bind(1));

// Sticky nav (Intersection Observer API)

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const intersecHandler = (entries) => {
  const [entry] = entries;

  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObs = new IntersectionObserver(intersecHandler, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObs.observe(header);

// Revealing the sections on scroll

const allSections = document.querySelectorAll('.section')

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // Optimal
};

const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});
allSections.forEach(s => {
  sectionObs.observe(s);
  s.classList.add('section--hidden');
});

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = (entries, observer) => {
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  // We cannot remove the blur filter right now. If bad internet, the blur will get removed but the image is not still loaded, so we need to know when the image is loaded

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
})

imgTargets.forEach(img => imgObserver.observe(img));

// Slider component

// Buttons
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currentSlide = 0;
const maxSlide = slides.length - 1;

// For dots
const dotsContainer = document.querySelector('.dots');

const createDots = () => {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};

const focusDot = (slide) => {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

const nextSlide = () => {
  if(currentSlide === maxSlide) currentSlide = 0;
  else currentSlide++;

  goToSlide(currentSlide);
  focusDot(currentSlide);
};

const prevSlide = () => {
  if(currentSlide === 0) currentSlide = maxSlide;
  else currentSlide--;

  goToSlide(currentSlide);
  focusDot(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Left/Right arrow keys

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft') prevSlide();
  else if(e.key === 'ArrowRight') nextSlide();
});

// Dots

const initSliderComponent = () => {
  goToSlide(0);
  createDots();
  focusDot(0);
}
initSliderComponent();

dotsContainer.addEventListener('click', (e) => {
  if(e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;

    goToSlide(slide);
    focusDot(slide);
  }
});