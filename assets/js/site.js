(() => {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Home: the hovered or focused project opens. First tap on touch tablets opens, second follows the link.
  const row = document.querySelector('.row');
  if (row) {
    const slices = [...row.children];
    const open = el => slices.forEach(s => s.classList.toggle('on', s === el));
    const touch = matchMedia('(hover: none) and (min-width: 861px)');
    slices.forEach(el => {
      el.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') open(el); });
      el.addEventListener('focus', () => open(el));
      el.addEventListener('click', e => {
        if (touch.matches && !el.classList.contains('on')) { e.preventDefault(); open(el); }
      });
    });
  }

  // Project videos play only while on screen. With reduced motion they stay paused; controls are always available.
  if (!still && 'IntersectionObserver' in window) {
    document.querySelectorAll('video').forEach(v => {
      new IntersectionObserver(([en]) => {
        if (en.isIntersecting) v.play().catch(() => {}); else v.pause();
      }, { threshold: 0.6 }).observe(v);
    });
  }
})();
