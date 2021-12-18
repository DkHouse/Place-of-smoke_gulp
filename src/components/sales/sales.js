let salesSwiper = new Swiper('.sales', {
     loop: true,
     //стрелки
     navigation: {
          nextEl: '.swiper-button--next',
          prevEl: '.swiper-button--prev'
     }, 
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loopedSlides:4,
      autoHeight: true,
      grabCursor: true,
      breakpoints: {
          768: {
              slidesPerView: 2,
              spaceBetween: 30,
              slidesPerGroup: 1,
               loopedSlides:2,
          }
      }
 });
 