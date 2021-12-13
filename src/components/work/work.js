let workSwiper = new Swiper('.work__content', {
    loop: true,
    //стрелки
    navigation: {
         nextEl: '.swiper-button--prev2',
         prevEl: '.swiper-button--next2'
    }, 
    slidesPerView: 3,
    spaceBetween: 15,
    slidesPerGroup: 1,
    loopedSlides: 6,
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
