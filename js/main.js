const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
