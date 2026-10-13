/* ═══════════════════════════════════════════════
   CANVAS DEL HERO — Red de nodos conectados
   Reacciona suavemente al cursor
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  const cv = document.getElementById('hero-canvas');
  if (!cv) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = cv.getContext('2d', { alpha: true });
  let w, h, particles, raf, dpr;
  const mouse = { x: -9999, y: -9999, active: false };

  function init() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = cv.width  = cv.offsetWidth  * dpr;
    h = cv.height = cv.offsetHeight * dpr;
    cv.style.width  = '100%';
    cv.style.height = '100%';

    const count = window.innerWidth < 768 ? 30 : 60;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * dpr,
      vy: (Math.random() - 0.5) * 0.25 * dpr,
      r: (Math.random() * 1.4 + 0.4) * dpr,
      a: Math.random() * 0.4 + 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const linkDist = 140 * dpr;

    // Actualizar posiciones
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

      // Atracción suave al cursor
      if (mouse.active) {
        const dx = mouse.x * dpr - p.x;
        const dy = mouse.y * dpr - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 200 * 200 * dpr * dpr) {
          p.x += dx * 0.0015;
          p.y += dy * 0.0015;
        }
      }
    });

    // Dibujar conexiones
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < linkDist) {
          const alpha = (1 - d / linkDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 255, 135, ${alpha})`;
          ctx.lineWidth = 0.6 * dpr;
          ctx.stroke();
        }
      }
    }

    // Dibujar partículas
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 135, ${p.a})`;
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  // Pausar cuando el hero no está visible (performance)
  const hero = document.getElementById('inicio');
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) {
      if (!raf) draw();
    } else {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }, { threshold: 0 });
  io.observe(hero);

  // Seguir cursor (solo desktop)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    hero.addEventListener('mousemove', e => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      // Parallax del glow
      const glow = document.getElementById('hero-glow');
      if (glow) {
        glow.style.left = `${mouse.x}px`;
        glow.style.top  = `${mouse.y}px`;
      }
    });
    hero.addEventListener('mouseleave', () => { mouse.active = false; });
  }

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    raf = null;
    init();
    if (io.takeRecords && hero.getBoundingClientRect().top < window.innerHeight) draw();
  });

  init();
})();