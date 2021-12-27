// init Swiper:
const salesSwiper = new Swiper('.sales', {
  loop: false,
  //стрелки
  navigation: {
    nextEl: '.swiper-button--next',
    prevEl: '.swiper-button--prev'
  },
  slidesPerView: 4,
  slidesPerGroup: 1,
  loopedSlides: 4,
  autoHeight: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      loopedSlides: 4,
    },
    760: {
      slidesPerView: 1,
      loopedSlides: 4,
    },
    900: {
      slidesPerView: 2,
      loopedSlides: 4,
    },
    1280: {
      slidesPerView: 3,
      loopedSlides: 4,
    },
    1920: {
      slidesPerView: 4,
      loopedSlides: 4,
    },
  }
});
