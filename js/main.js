document.addEventListener("DOMContentLoaded", () => {
  // SCROLL SMOOTH
  // к якорным ссылкам добавить класс scroll-link
  {
    const scrollLinks = document.querySelectorAll("a.scroll-link");
    const scrollToElem = (el) => {
      document.querySelector(el).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    scrollLinks.forEach((link) => {
      link.addEventListener("click", (evt) => {
        evt.preventDefault();
        scrollToElem(link.getAttribute("href"));
      });
    });
  }

  // CAROUSEL
  var swiper = new Swiper(".carousel-box", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
});
