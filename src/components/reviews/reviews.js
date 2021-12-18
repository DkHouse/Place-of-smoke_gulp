let reviewsSwiper = new Swiper('.reviews__slider-content', {
    loop: true,
    //стрелки
    navigation: {
         nextEl: '.swiper-button--prev3',
         prevEl: '.swiper-button--next3'
    }, 
    slidesPerView: 3.2,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loopedSlides: 3.2,
    autoHeight: true,
    grabCursor: true,
 });
