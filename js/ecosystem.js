/* ═══════════════════════════════════════════════════════════
   ECOSISTEMA TECNOLÓGICO
   Desktop: panel flotante
   Móvil: modal amplio con backdrop y X visible
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const TECH_PROJECTS = {
    'php':           ['Conciliador CFDI', 'Editor Masivo XML', 'Control QR', 'Inventario TI'],
    'mysql':         ['Conciliador CFDI', 'Editor Masivo XML', 'Control QR', 'Inventario TI'],
    'xml':           ['Conciliador CFDI', 'Editor Masivo XML'],
    'excel':         ['Conciliador CFDI'],
    'javascript':    ['Editor Masivo XML', 'Inventario TI', 'Desarrollo Web'],
    'html':          ['Editor Masivo XML', 'Inventario TI', 'Desarrollo Web'],
    'css':           ['Editor Masivo XML', 'Inventario TI', 'Desarrollo Web'],
    'angular':       ['Desarrollo Web'],
    'dotnet':        ['Creaxid · proyectos .NET'],
    'csharp':        ['Creaxid · proyectos .NET'],
    'sqlserver':     [],
    'rest':          ['Desarrollo Web · integraciones'],
    'git':           ['Todos los proyectos'],
    'github':        ['Todos los proyectos'],
    'vscode':        ['Desarrollo general'],
    'visualstudio':  ['Creaxid · proyectos .NET'],
    'lan':           ['Wilson · soporte TI'],
    'dhcp':          ['Wilson · soporte TI'],
    'cpanel':        ['Despliegue web'],
    'packettracer':  ['Formación · Redes'],
    'android':       ['Sistema POS'],
    'unity':         ['Creaxid · RA/RV'],
    'arjs':          ['Formación · RA'],
    'sap':           ['Contexto empresarial']
  };

  const ecosystem = document.getElementById('ecosystem');
  if (!ecosystem) return;

  const nodes = ecosystem.querySelectorAll('[data-tech]');
  const panel = document.getElementById('eco-detail');
  const panelName = document.getElementById('eco-detail-name');
  const panelDesc = document.getElementById('eco-detail-desc');
  const panelProjects = document.getElementById('eco-detail-projects');
  const panelProjectsList = document.getElementById('eco-detail-projects-list');
  const connections = ecosystem.querySelectorAll('[data-connection]');
  const panelClose = document.getElementById('eco-detail-close');

  if (!panel) return;

  let activeId = null;
  let activeNode = null;
  let closeTimer = null;
  let lastFocused = null;

  const isMobileViewport = () => window.innerWidth < 1024;

  /* ═══════════════════════════════════════════════
     POSICIONAMIENTO DEL PANEL (solo desktop)
     ═══════════════════════════════════════════════ */
  function positionPanel(node) {
    if (isMobileViewport()) return;

    const rect = node.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    panel.style.top = 'auto';
    panel.style.bottom = 'auto';
    panel.style.left = 'auto';
    panel.style.right = 'auto';
    panel.classList.remove('eco-detail--above', 'eco-detail--below');

    const spaceBelow = vh - rect.bottom;
    const spaceAbove = rect.top;
    const neededSpace = panelRect.height + 24;

    const showAbove = spaceBelow < neededSpace && spaceAbove > spaceBelow;
    panel.classList.add(showAbove ? 'eco-detail--above' : 'eco-detail--below');

    if (showAbove) {
      panel.style.bottom = `${vh - rect.top + 12}px`;
    } else {
      panel.style.top = `${rect.bottom + 12}px`;
    }

    const panelWidth = panelRect.width || 340;
    const idealLeft = rect.left + rect.width / 2 - panelWidth / 2;
    const minLeft = 16;
    const maxLeft = vw - panelWidth - 16;
    const clampedLeft = Math.max(minLeft, Math.min(maxLeft, idealLeft));

    panel.style.left = `${clampedLeft}px`;

    const arrowOffset = rect.left + rect.width / 2 - clampedLeft;
    panel.style.setProperty('--arrow-x', `${arrowOffset}px`);
  }

  /* ═══════════════════════════════════════════════
     ACTIVAR / DESACTIVAR
     ═══════════════════════════════════════════════ */
  function activate(id, node) {
    if (activeId === id) return;
    activeId = id;
    activeNode = node;
    lastFocused = node;

    clearTimeout(closeTimer);

    nodes.forEach(n => {
      const isActive = n.dataset.tech === id;
      n.classList.toggle('is-active', isActive);
      n.classList.toggle('is-dimmed', !isActive);
      n.setAttribute('aria-pressed', String(isActive));
    });

    connections.forEach(c => {
      const connected = (c.dataset.connection || '').split(' ').includes(id);
      c.classList.toggle('is-lit', connected);
    });

    panelName.textContent = node.dataset.label || node.textContent.trim();
    panelDesc.textContent = node.dataset.desc || '';

    const projects = TECH_PROJECTS[id] || [];
    if (projects.length) {
      panelProjects.hidden = false;
      panelProjectsList.innerHTML = projects.map(p => `<li>${p}</li>`).join('');
    } else {
      panelProjects.hidden = true;
      panelProjectsList.innerHTML = '';
    }

    panel.classList.add('is-visible');
    panel.setAttribute('aria-hidden', 'false');

    // En móvil: bloqueo scroll + backdrop + foco al cierre
    if (isMobileViewport()) {
      document.body.classList.add('no-scroll');
      document.body.classList.add('eco-modal-open');
      requestAnimationFrame(() => {
        panelClose?.focus();
      });
    } else {
      requestAnimationFrame(() => positionPanel(node));
    }
  }

  function deactivate() {
    const wasMobile = isMobileViewport();

    activeId = null;
    activeNode = null;

    nodes.forEach(n => {
      n.classList.remove('is-active', 'is-dimmed');
      n.setAttribute('aria-pressed', 'false');
    });
    connections.forEach(c => c.classList.remove('is-lit'));
    panel.classList.remove('is-visible');
    panel.setAttribute('aria-hidden', 'true');

    if (wasMobile) {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('eco-modal-open');
      if (lastFocused && document.contains(lastFocused)) {
        lastFocused.focus({ preventScroll: true });
      }
    }
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => deactivate(), 260);
  }

  function cancelClose() {
    clearTimeout(closeTimer);
  }

  /* ═══════════════════════════════════════════════
     EVENTOS DE NODOS
     ═══════════════════════════════════════════════ */
  nodes.forEach(node => {
    const id = node.dataset.tech;
    let pointerHandled = false;

    // pointerdown → respuesta inmediata en táctil
    node.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        pointerHandled = true;
        e.preventDefault();
        if (activeId === id) deactivate();
        else activate(id, node);
      }
    }, { passive: false });

    node.addEventListener('click', (e) => {
      e.preventDefault();
      if (pointerHandled) {
        pointerHandled = false;
        return;
      }
      if (activeId === id) deactivate();
      else activate(id, node);
    });

    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (activeId === id) deactivate();
        else activate(id, node);
      }
    });

    node.addEventListener('focus', () => {
      if (!isMobileViewport()) activate(id, node);
    });

    if (!isMobileViewport()) {
      let hoverTimer;
      node.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => activate(id, node), 160);
        cancelClose();
      });
      node.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
        scheduleClose();
      });
    }
  });

  // Panel: mantener abierto al acercar el cursor (desktop)
  panel.addEventListener('mouseenter', cancelClose);
  panel.addEventListener('mouseleave', scheduleClose);

  // Botón X
  panelClose?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    deactivate();
  });

  // Click en backdrop (solo móvil)
  panel.addEventListener('click', (e) => {
    if (isMobileViewport() && e.target === panel) {
      deactivate();
    }
  });

  // Click fuera
  document.addEventListener('click', (e) => {
    if (isMobileViewport()) return;
    if (!ecosystem.contains(e.target) && !panel.contains(e.target)) {
      deactivate();
    }
  });

  // Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeId) deactivate();
  });

  // Focus trap en móvil mientras el modal está abierto
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    if (!isMobileViewport() || !activeId) return;

    const focusables = panel.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  // Reposicionar en scroll/resize (solo desktop)
  let rafId = null;
  function reposition() {
    if (!activeNode || !activeId) return;
    if (isMobileViewport()) return;
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      positionPanel(activeNode);
    });
  }

  window.addEventListener('scroll', reposition, { passive: true });
  window.addEventListener('resize', () => {
    if (isMobileViewport() && activeId) {
      // El panel ya está en modo modal; no hace falta reposicionar
    } else if (!isMobileViewport()) {
      reposition();
    }
  });
})();