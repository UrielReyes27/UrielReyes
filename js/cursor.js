/* ═══════════════════════════════════════════════
   CURSOR PERSONALIZADO — Solo escritorio
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!finePointer || reduced) return;

  const cursor = document.getElementById('cursor');
  const dot    = cursor?.querySelector('.cursor__dot');
  const ring   = cursor?.querySelector('.cursor__ring');
  if (!cursor || !dot || !ring) return;

  const pos = { mx: 0, my: 0, rx: 0, ry: 0 };

  document.body.classList.add('has-cursor');

  document.addEventListener('mousemove', e => {
    pos.mx = e.clientX;
    pos.my = e.clientY;
    dot.style.transform = `translate(${pos.mx}px, ${pos.my}px) translate(-50%, -50%)`;
  }, { passive: true });

  // Suavizado del anillo
  function loop() {
    pos.rx += (pos.mx - pos.rx) * 0.18;
    pos.ry += (pos.my - pos.ry) * 0.18;
    ring.style.transform = `translate(${pos.rx}px, ${pos.ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  // Hover state en elementos interactivos
  const hoverables = 'a, button, [data-nav], .project-card, .tech-card, input, textarea, [role="button"]';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverables)) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverables)) cursor.classList.remove('is-hover');
  });

  // Ocultar al salir de la ventana
  document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
  document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
})();