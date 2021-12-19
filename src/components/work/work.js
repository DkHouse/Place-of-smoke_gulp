const workSwiper = new Swiper('.work__content', {
    loop: true,
    //стрелки
    navigation: {
         nextEl: '.swiper-button--next2',
         prevEl: '.swiper-button--prev2'
    }, 
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loopedSlides: 6,
    autoHeight: true,
    grabCursor: true, 
 });
