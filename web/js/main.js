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
