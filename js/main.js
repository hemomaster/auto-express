document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".carousel-box", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".carousel-pagination",
      clickable: true,
    },
  });
});
