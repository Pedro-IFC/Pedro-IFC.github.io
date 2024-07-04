jQuery("document").ready(function(){
    AOS.init();
    const swiper = new Swiper('.swiper', {
        slidesPerView: 2,
        spaceBetween: 32,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        }
      })
});