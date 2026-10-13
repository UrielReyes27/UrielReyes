/* ═══════════════════════════════════════════════
   INTRO CINEMATOGRÁFICA
   — Se ejecuta en CADA recarga completa del documento
   — Fuerza scroll al inicio (no restaura posición previa)
   — Respetuosa con prefers-reduced-motion
   — Saltable con botón o tecla Escape
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  const intro   = document.getElementById('intro');
  const skipBtn = document.getElementById('intro-skip');
  const canvas  = document.getElementById('intro-canvas');
  const body    = document.body;

  if (!intro) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Desactivar restauración de scroll del navegador ──
  // Sin esto, al recargar en #contacto, el navegador vuelve a esa sección
  // y la intro se reproduce "por encima" sin que el usuario la vea.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);

  // ── Reiniciar estado del intro por si el navegador conservó clases ──
  intro.classList.remove('is-done', 'is-skipped', 'is-lit', 'is-scanning', 'is-exiting', 'is-running');
  intro.setAttribute('aria-hidden', 'false');
  body.classList.add('is-loading');
  body.classList.remove('no-scroll');

  // ── Caso: movimiento reducido → mostrar contenido directo ──
  if (reducedMotion) {
    intro.classList.add('is-done');
    intro.setAttribute('aria-hidden', 'true');
    body.classList.remove('is-loading');
    document.dispatchEvent(new CustomEvent('intro:done'));
    return;
  }

  // ── Ejecutar secuencia ──
  startSequence();

  function startSequence() {
    intro.classList.add('is-running');

    // FASE 1 (0–600ms): nombre aparece
    // FASE 2 (600–2200ms): línea de luz recorre el nombre
    setTimeout(() => {
      intro.classList.add('is-scanning');
      setTimeout(() => intro.classList.add('is-lit'), 800);
    }, 600);

    // FASE 3 (2200–3000ms): transición al hero
    const exitTimer = setTimeout(() => finishIntro(false), 2600);

    // Botón saltar
    skipBtn?.addEventListener('click', () => {
      clearTimeout(exitTimer);
      finishIntro(true);
    }, { once: true });

    // Tecla Escape
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        clearTimeout(exitTimer);
        finishIntro(true);
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);

    // Iniciar partículas
    if (canvas) initIntroParticles(canvas);
  }

  /* ── Finalizar intro ── */
  function finishIntro(skipped) {
    if (skipped) intro.classList.add('is-skipped');
    intro.classList.add('is-exiting');

    setTimeout(() => {
      intro.classList.add('is-done');
      intro.setAttribute('aria-hidden', 'true');
      body.classList.remove('is-loading');
      // Asegurar que arrancamos en el top tras la intro
      window.scrollTo(0, 0);
      document.dispatchEvent(new CustomEvent('intro:done'));
    }, skipped ? 250 : 800);
  }

  /* ── Partículas discretas de fondo ── */
  function initIntroParticles(cv) {
    const ctx = cv.getContext('2d');
    let w, h, particles, raf;

    function resize() {
      w = cv.width  = window.innerWidth;
      h = cv.height = window.innerHeight;
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.5 + 0.1,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 135, ${p.a})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 135, ${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    document.addEventListener('intro:done', () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    }, { once: true });
  }
})();