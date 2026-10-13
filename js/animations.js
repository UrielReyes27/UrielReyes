/* ═══════════════════════════════════════════════
   REVEAL ON SCROLL
   — Observa elementos .reveal
   — Re-escanea cuando el DOM cambia (cards de proyectos)
   — Fallback global para no dejar contenido invisible
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let observer = null;

  function markAllVisible() {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  function initObserver() {
    if (reduced || !('IntersectionObserver' in window)) {
      markAllVisible();
      return;
    }

    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          entry.target.style.setProperty('--reveal-delay', `${delay}ms`);
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el));
  }

  // Exponer función para re-escanear (usada por projects.js)
  window.__revealScan = function () {
    if (observer) {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el));
    } else if (reduced) {
      markAllVisible();
    }
  };

  initObserver();

  /* ── Re-escanear cuando el DOM cambie (p. ej. cards de proyectos) ── */
  if ('MutationObserver' in window && observer) {
    const mo = new MutationObserver(() => {
      // Debounce ligero para no disparar en cada micro-cambio
      if (mo._t) clearTimeout(mo._t);
      mo._t = setTimeout(() => window.__revealScan(), 50);
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  /* ── Red de seguridad: si algo quedó oculto tras 4 s,
        forzarlo visible para no romper el sitio ── */
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (document.hidden) return;
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) el.classList.add('is-visible');
      });
    }, 4000);
  });
})();