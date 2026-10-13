/* ═══════════════════════════════════════════════
   MAIN — Reacciones al fin de la intro
   ═══════════════════════════════════════════════ */
(function () {
  'use strict';

  // Cuando la intro termine, liberar scroll y notificar
  document.addEventListener('intro:done', () => {
    document.body.classList.remove('is-loading');
  });

  // Fallback: si por alguna razón la intro nunca dispara 'intro:done',
  // liberar el scroll tras 5s para no bloquear la página.
  setTimeout(() => {
    document.body.classList.remove('is-loading');
  }, 5000);
})();