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

document.getElementById('scroll-btn').addEventListener('click', function() {
  var mainInterface = document.getElementById('main-interface');
  var scrollTop = mainInterface.offsetTop;
  var duration = 900; // adjust speed (in milliseconds)

  var interval = duration / 50; // 50 steps
  var step = scrollTop / 50;

  var currentTop = window.scrollY;

  for (var i = 0; i < 50; i++) {
    setTimeout(function(i) {
      return function() {
        window.scrollTo(0, currentTop + (step * i));
      };
    }(i), i * interval);
  }
});


