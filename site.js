document.documentElement.classList.add('js');

(function () {
  // Get current page name (defaults to index.html)
  const p = location.pathname.split('/').pop() || 'index.html';

  // Highlight active nav link
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === p) {
      a.classList.add('active');
    }
  });

  // Intersection Observer for reveal-on-scroll animations
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.18 }
  );

  // Apply observer once DOM is loaded
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  });
})();
