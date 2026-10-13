/* ═══════════════════════════════════════════════════════════
   ECOSISTEMA TECNOLÓGICO
   Interacción + posicionamiento inteligente del panel flotante
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     MAPA DE TECNOLOGÍAS → PROYECTOS RELACIONADOS
     Solo relaciones verificadas con el portafolio
     ═══════════════════════════════════════════════ */
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

  /* ═══════════════════════════════════════════════
     INICIALIZACIÓN
     ═══════════════════════════════════════════════ */
  const ecosystem = document.getElementById('ecosystem');
  if (!ecosystem) return;

  const nodes = ecosystem.querySelectorAll('[data-tech]');
  const panel = document.getElementById('eco-detail');
  const panelName = document.getElementById('eco-detail-name');
  const panelDesc = document.getElementById('eco-detail-desc');
  const panelProjects = document.getElementById('eco-detail-projects');
  const panelProjectsList = document.getElementById('eco-detail-projects-list');
  const connections = ecosystem.querySelectorAll('[data-connection]');

  if (!panel) return;

  let activeId = null;
  let activeNode = null;
  let closeTimer = null;

  const isTouch = window.matchMedia('(hover: none)').matches;
  const isMobile = () => window.innerWidth < 768;

  /* ═══════════════════════════════════════════════
     POSICIONAMIENTO INTELIGENTE DEL PANEL
     ═══════════════════════════════════════════════ */
  function positionPanel(node) {
    const rect = node.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Reset estilos previos
    panel.style.top = 'auto';
    panel.style.bottom = 'auto';
    panel.style.left = 'auto';
    panel.style.right = 'auto';
    panel.classList.remove('eco-detail--above', 'eco-detail--below', 'eco-detail--mobile');

    // ── Móvil: panel anclado al fondo del viewport ──
    if (isMobile()) {
      panel.classList.add('eco-detail--mobile');
      return;
    }

    // ── Desktop: decidir arriba o abajo ──
    const spaceBelow = vh - rect.bottom;
    const spaceAbove = rect.top;
    const neededSpace = panelRect.height + 24; // margen

    const showAbove = spaceBelow < neededSpace && spaceAbove > spaceBelow;
    panel.classList.add(showAbove ? 'eco-detail--above' : 'eco-detail--below');

    // ── Posición vertical ──
    if (showAbove) {
      panel.style.bottom = `${vh - rect.top + 12}px`;
    } else {
      panel.style.top = `${rect.bottom + 12}px`;
    }

    // ── Posición horizontal con clamping ──
    const panelWidth = panelRect.width || 340;
    const idealLeft = rect.left + rect.width / 2 - panelWidth / 2;
    const minLeft = 16;
    const maxLeft = vw - panelWidth - 16;
    const clampedLeft = Math.max(minLeft, Math.min(maxLeft, idealLeft));

    panel.style.left = `${clampedLeft}px`;

    // Pequeña flecha indicadora
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

    clearTimeout(closeTimer);

    // Nodos
    nodes.forEach(n => {
      const isActive = n.dataset.tech === id;
      n.classList.toggle('is-active', isActive);
      n.classList.toggle('is-dimmed', !isActive);
    });

    // Conexiones
    connections.forEach(c => {
      const connected = (c.dataset.connection || '').split(' ').includes(id);
      c.classList.toggle('is-lit', connected);
    });

    // Contenido del panel
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

    // Mostrar + posicionar
    panel.classList.add('is-visible');
    panel.setAttribute('aria-hidden', 'false');

    // Posicionar después de que el panel tenga dimensiones reales
    requestAnimationFrame(() => {
      positionPanel(node);
    });
  }

  function deactivate() {
    activeId = null;
    activeNode = null;
    nodes.forEach(n => n.classList.remove('is-active', 'is-dimmed'));
    connections.forEach(c => c.classList.remove('is-lit'));
    panel.classList.remove('is-visible');
    panel.setAttribute('aria-hidden', 'true');
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      deactivate();
    }, 220);
  }

  function cancelClose() {
    clearTimeout(closeTimer);
  }

  /* ═══════════════════════════════════════════════
     EVENTOS DE NODOS
     ═══════════════════════════════════════════════ */
  nodes.forEach(node => {
    const id = node.dataset.tech;

    // Click / tap
    node.addEventListener('click', (e) => {
      e.preventDefault();
      if (activeId === id) {
        deactivate();
      } else {
        activate(id, node);
      }
    });

    // Teclado
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate(id, node);
      }
    });

    node.addEventListener('focus', () => {
      if (!isTouch) activate(id, node);
    });

    // Hover (solo desktop con hover fino)
    if (!isTouch) {
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

  // Mantener el panel abierto al mover el cursor hacia él
  panel.addEventListener('mouseenter', cancelClose);
  panel.addEventListener('mouseleave', scheduleClose);

  // Click fuera → desactivar
  document.addEventListener('click', (e) => {
    if (!ecosystem.contains(e.target) && !panel.contains(e.target)) {
      deactivate();
    }
  });

  // Escape → desactivar
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeId) deactivate();
  });

  // Reposicionar al hacer scroll o resize
  let rafId = null;
  function reposition() {
    if (!activeNode || !activeId) return;
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      positionPanel(activeNode);
    });
  }

  window.addEventListener('scroll', reposition, { passive: true });
  window.addEventListener('resize', () => {
    if (isMobile() && activeId) deactivate();
    reposition();
  });
})();