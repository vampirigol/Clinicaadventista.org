// Slider de la home: auto-rotación + dots + flechas. Sin dependencias.
(function () {
  var slider = document.getElementById('hslider');
  if (!slider) return;
  var slides = slider.querySelectorAll('.hslide');
  var dotsBox = slider.querySelector('.hslide-dots');
  var prev = slider.querySelector('.hslide-arrow.prev');
  var next = slider.querySelector('.hslide-arrow.next');
  if (slides.length < 2) return;

  // Construir dots
  slides.forEach(function (_, i) {
    var b = document.createElement('button');
    b.setAttribute('aria-label', 'Ir al slide ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', function () { go(i); });
    dotsBox.appendChild(b);
  });
  var dots = dotsBox.querySelectorAll('button');

  var current = 0, timer;
  function go(i) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (i + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    reset();
  }
  function reset() {
    clearInterval(timer);
    timer = setInterval(function () { go(current + 1); }, 6000);
  }
  prev.addEventListener('click', function () { go(current - 1); });
  next.addEventListener('click', function () { go(current + 1); });
  slider.addEventListener('mouseenter', function () { clearInterval(timer); });
  slider.addEventListener('mouseleave', reset);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) clearInterval(timer); else reset();
  });
  reset();
})();

// Animación sutil al hacer scroll (mejora progresiva: si no hay JS, todo es visible).
(function () {
  if (!('IntersectionObserver' in window)) return;
  document.body.classList.add('reveal-on');

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
