/* ═══════════════════════════════════════════════
   NAVEGACIÓN — Smooth scroll + sección activa + menú móvil
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  const nav      = document.getElementById('nav');
  const toggle   = document.getElementById('nav-toggle');
  const mobile   = document.getElementById('nav-mobile');
  const navLinks = document.querySelectorAll('.nav__link');
  const mobLinks = document.querySelectorAll('.nav__mobile-link');

  /* ── Scroll: barra con fondo ── */
  const onScroll = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Smooth scroll (con offset del nav) ── */
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH + 1;

      window.scrollTo({ top, behavior: 'smooth' });
      closeMobile();

      // Actualizar hash sin salto
      history.replaceState(null, '', href);
    });
  });

  /* ── Sección activa con IntersectionObserver ── */
  const sections = document.querySelectorAll('section[id]');
  const setActive = (id) => {
    navLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
    mobLinks.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === `#${id}`));
  };

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
        setActive(entry.target.id);
      }
    });
  }, { threshold: [0.3, 0.6], rootMargin: '-20% 0px -40% 0px' });

  sections.forEach(s => io.observe(s));

  /* ── Menú móvil ── */
  function closeMobile() {
    mobile?.classList.remove('is-open');
    toggle?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }

  toggle?.addEventListener('click', () => {
    const open = mobile.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  mobLinks.forEach(l => l.addEventListener('click', closeMobile));

  /* ── Año en el footer ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();