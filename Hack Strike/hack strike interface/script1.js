var swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    initialSlide: 2,
    speed: 500,
    loop: true,
    rotate: true,
    mousewheel: {
    invert: false,
  },
});

document.getElementById('main-interface').addEventListener('click', function() {
  var maininterface = document.getElementById('main-interface');
  maininterface.scrollIntoView({ behavior: 'smooth' });
});