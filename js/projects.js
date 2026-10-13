/* ═══════════════════════════════════════════════════════════
   PROYECTOS — Carrusel editorial + Modal amplio
   Gestos táctiles con detección de dirección
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const PROJECTS = [
    {
      id: 'pos-taqueria',
      num: '01',
      title: 'Sistema POS para Taquería',
      subtitle: 'Pedidos · Cocina · Caja',
      tagline: 'Sistema académico que conecta pedidos desde tablets, comandas en cocina y cobro en caja.',
      techs: ['Android Studio'],
      preview: 'pos',
      featured: true,
      problem: 'Los pedidos, la comunicación con cocina y el cobro requieren coordinación. Sin un flujo digital, las comandas se pierden, las mesas se confunden y el cobro se retrasa.',
      solution: 'Un flujo digital que relaciona la selección de productos en una tablet, la recepción de comandas en una pantalla de cocina y el registro de venta con generación de ticket en caja.',
      features: [
        'Pedidos desde tablets o teléfonos',
        'Asociación de cada pedido a una mesa',
        'Recepción de comandas en pantalla de cocina',
        'Identificación de mesa y estado del pedido',
        'Seguimiento: nuevo → preparación → listo',
        'Registro de venta y generación de ticket en caja',
        'Flujo contemplado para pago en efectivo o tarjeta'
      ],
      result: 'Proyecto académico desarrollado en equipo. Digitaliza la conexión entre el pedido del cliente, la preparación en cocina y la operación de caja.',
      note: 'Tecnología verificada: Android Studio. El stack exacto (lenguajes, base de datos) está por confirmar. La demostración es un prototipo visual del flujo.',
      gallery: [
        { type: 'pos', caption: 'Flujo completo · Tablet → Cocina → Caja' },
        { type: 'pos-tablet', caption: 'Interfaz del cliente · selección de productos' },
        { type: 'pos-kitchen', caption: 'Pantalla de cocina · comandas por mesa' },
        { type: 'pos-cash', caption: 'Caja · cobro y ticket' }
      ]
    },
    {
      id: 'conciliador-cfdi',
      num: '02',
      title: 'Conciliador CFDI',
      subtitle: 'Automatización documental',
      tagline: 'Comparación de archivos XML para detectar facturas faltantes, duplicadas o canceladas.',
      techs: ['PHP', 'MySQL', 'XML', 'Excel'],
      preview: 'cfdi',
      problem: 'La conciliación manual de facturas XML entre el SAT y SAP implicaba revisar grandes volúmenes de documentos, detectar faltantes, duplicados y cancelados. El proceso podía consumir días de trabajo.',
      solution: 'Herramienta que compara grandes volúmenes de archivos XML, identifica facturas faltantes, detecta duplicados y señala canceladas, generando resultados listos para la conciliación documental.',
      features: [
        'Comparación de grandes volúmenes de archivos XML',
        'Identificación de facturas faltantes',
        'Detección de duplicados',
        'Identificación de facturas canceladas',
        'Generación de resultados para conciliación'
      ],
      result: 'Procesos que podían tomar días se redujeron a minutos.',
      note: 'Herramienta de conciliación y validación documental. No implica integración directa con APIs del SAT o SAP.',
      gallery: [
        { type: 'cfdi', caption: 'Comparación de archivos XML · estados de resultado' },
        { type: 'cfdi-resumen', caption: 'Resumen de conciliación · coincidencias y diferencias' }
      ]
    },
    {
      id: 'editor-xml',
      num: '03',
      title: 'Editor Masivo de XML',
      subtitle: 'Procesamiento por lotes',
      tagline: 'Búsqueda y reemplazo de múltiples valores en archivos XML de forma simultánea.',
      techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'XML'],
      preview: 'xml',
      problem: 'Corregir folios, fechas y códigos en cientos de archivos XML manualmente era una tarea lenta, repetitiva y propensa a errores.',
      solution: 'Editor que procesa archivos XML por lotes, permitiendo búsqueda y reemplazo de palabras o valores en múltiples documentos de forma simultánea.',
      features: [
        'Procesamiento por lotes',
        'Búsqueda y reemplazo de palabras o valores',
        'Corrección de folios, fechas y códigos',
        'Procesamiento de numerosos archivos',
        'Reducción de tareas repetitivas'
      ],
      result: 'Operaciones que antes requerían mucho tiempo pueden ejecutarse en segundos, según el tipo de procesamiento.',
      gallery: [
        { type: 'xml', caption: 'Comparación antes / después · valores sustituidos' },
        { type: 'xml-lote', caption: 'Procesamiento por lotes · múltiples archivos' }
      ]
    },
    {
      id: 'control-qr',
      num: '04',
      title: 'Control de Salida con QR',
      subtitle: 'Digitalización de autorizaciones',
      tagline: 'Sistema para digitalizar el flujo de salida de equipos mediante solicitudes, autorizaciones y códigos QR.',
      techs: ['PHP', 'MySQL'],
      preview: 'qr',
      problem: 'El flujo de salida de equipos dependía de papeleo y revisiones manuales por parte del personal de vigilancia, dificultando el control y la trazabilidad.',
      solution: 'Sistema digital que registra solicitudes de salida, gestiona autorizaciones con firmas digitales y genera códigos QR para que vigilancia pueda validar rápidamente la información asociada.',
      features: [
        'Registro de solicitudes de salida',
        'Flujo de autorización',
        'Firmas digitales',
        'Generación y lectura de códigos QR',
        'Consulta de información asociada a la salida'
      ],
      result: '«Digitalización del procedimiento, reduciendo la dependencia del papeleo.»',
      gallery: [
        { type: 'qr', caption: 'Flujo · solicitud → autorización → QR → validación' }
      ]
    },
    {
      id: 'inventario-ti',
      num: '05',
      title: 'Control de Inventario TI',
      subtitle: 'Gestión de activos tecnológicos',
      tagline: 'Aplicación para administrar activos tecnológicos y facilitar el seguimiento de equipos de cómputo.',
      techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      preview: 'inv',
      problem: 'El control de equipos de cómputo, asignaciones y movimientos se realizaba sin una herramienta centralizada, dificultando el seguimiento de activos.',
      solution: 'Aplicación web para registrar equipos con número de serie, modelo y características, asignarlos a usuarios, consultar su estado y mantener un historial de cambios y movimientos.',
      features: [
        'Registro de equipos',
        'Número de serie, modelo y características',
        'Asignación de equipos a usuarios',
        'Estado y disponibilidad',
        'Historial de cambios y movimientos',
        'Organización de información para control de activos'
      ],
      result: 'Mejora en el control y la asignación de equipos tecnológicos.',
      gallery: [
        { type: 'inv', caption: 'Listado de equipos · estados y ubicación' }
      ]
    },
    {
      id: 'desarrollo-web',
      num: '06',
      title: 'Desarrollo de Páginas Web',
      subtitle: 'Interfaces digitales modernas',
      tagline: 'Creación de sitios web modernos, interfaces responsivas y experiencias digitales funcionales.',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'Angular'],
      preview: 'web',
      problem: 'Los negocios y proyectos personales necesitan una presencia digital moderna, rápida y adaptable a cualquier dispositivo.',
      solution: 'Diseño y desarrollo de sitios web con estructura semántica, diseño responsivo, componentes interactivos y buenas prácticas de accesibilidad y rendimiento.',
      features: [
        'Maquetación responsiva (móvil, tablet, escritorio)',
        'Interfaces interactivas con JavaScript y Angular',
        'Estructura semántica y accesible',
        'Optimización de rendimiento y carga',
        'Integración de componentes y APIs REST',
        'Publicación en servicios como GitHub Pages'
      ],
      result: 'Este mismo portafolio es una muestra del trabajo: HTML, CSS y JavaScript puros, sin frameworks, optimizado para GitHub Pages.',
      note: 'Esta sección representa una capacidad técnica del perfil. No incluye proyectos de clientes específicos.',
      gallery: [
        { type: 'web', caption: 'Estructura responsiva · componentes y layout' }
      ]
    }
  ];

  /* ═══════════════════════════════════════════════
     PREVIEWS VISUALES
     ═══════════════════════════════════════════════ */
  const previews = {
    pos: () => `
      <div class="preview-pos">
        <div class="preview-pos__device">
          <div class="preview-pos__device-head">
            <span>Tablet · Mesa 4</span>
            <span class="preview-pos__dot"></span>
          </div>
          <div class="preview-pos__item"><span>Tacos al pastor ×3</span><span>$45</span></div>
          <div class="preview-pos__item"><span>Agua horchata ×1</span><span>$25</span></div>
          <div class="preview-pos__item preview-pos__item--muted"><span>Salsa extra</span><span>$0</span></div>
          <div class="preview-pos__cta">Enviar a cocina</div>
        </div>
        <div class="preview-pos__arrow" aria-hidden="true">▸</div>
        <div class="preview-pos__kitchen">
          <div class="preview-pos__device-head">
            <span>Cocina · #128</span>
            <span class="preview-pos__dot preview-pos__dot--amber"></span>
          </div>
          <div class="preview-pos__krow is-new">Mesa 4 · 3 tacos pastor</div>
          <div class="preview-pos__krow is-prep">Mesa 7 · 2 quesadillas</div>
          <div class="preview-pos__krow is-ready">Mesa 2 · Orden completa</div>
        </div>
        <div class="preview-pos__arrow" aria-hidden="true">▸</div>
        <div class="preview-pos__cash">
          <div class="preview-pos__device-head">
            <span>Caja · Ticket</span>
            <span class="preview-pos__dot preview-pos__dot--green"></span>
          </div>
          <div class="preview-pos__total"><span>Total</span><strong>$70</strong></div>
          <div class="preview-pos__pay">
            <span class="is-active">Efectivo</span>
            <span>Tarjeta</span>
          </div>
        </div>
      </div>`,

    'pos-tablet': () => `
      <div class="preview-pos preview-pos--single">
        <div class="preview-pos__device">
          <div class="preview-pos__device-head">
            <span>Tablet · Mesa 4</span>
            <span class="preview-pos__dot"></span>
          </div>
          <div class="preview-pos__item"><span>Tacos al pastor ×3</span><span>$45</span></div>
          <div class="preview-pos__item"><span>Agua horchata ×1</span><span>$25</span></div>
          <div class="preview-pos__item"><span>Quesadilla ×1</span><span>$35</span></div>
          <div class="preview-pos__item preview-pos__item--muted"><span>Salsa extra</span><span>$0</span></div>
          <div class="preview-pos__total" style="border-top:1px solid var(--c-border);margin-top:auto">
            <span>Subtotal</span><strong>$105</strong>
          </div>
          <div class="preview-pos__cta">Enviar a cocina</div>
        </div>
      </div>`,

    'pos-kitchen': () => `
      <div class="preview-pos preview-pos--single">
        <div class="preview-pos__kitchen">
          <div class="preview-pos__device-head">
            <span>Cocina · Vista de comandas</span>
            <span class="preview-pos__dot preview-pos__dot--amber"></span>
          </div>
          <div class="preview-pos__krow is-new">#128 · Mesa 4 · 3 tacos pastor · 1 horchata</div>
          <div class="preview-pos__krow is-prep">#127 · Mesa 7 · 2 quesadillas · 1 agua</div>
          <div class="preview-pos__krow is-prep">#126 · Mesa 3 · 4 tacos surtidos</div>
          <div class="preview-pos__krow is-ready">#125 · Mesa 2 · Orden completa</div>
        </div>
      </div>`,

    'pos-cash': () => `
      <div class="preview-pos preview-pos--single">
        <div class="preview-pos__cash">
          <div class="preview-pos__device-head">
            <span>Caja · Ticket #128</span>
            <span class="preview-pos__dot preview-pos__dot--green"></span>
          </div>
          <div class="preview-pos__item"><span>3 tacos al pastor</span><span>$45</span></div>
          <div class="preview-pos__item"><span>1 agua horchata</span><span>$25</span></div>
          <div class="preview-pos__total" style="border-top:1px solid var(--c-border);margin-top:6px">
            <span>Total</span><strong>$70</strong>
          </div>
          <div class="preview-pos__pay">
            <span class="is-active">Efectivo</span>
            <span>Tarjeta</span>
          </div>
        </div>
      </div>`,

    cfdi: () => `
      <div class="preview-cfdi">
        <div class="preview-cfdi__header"><span>Conciliación XML</span><span>Demo · datos ficticios</span></div>
        <div class="preview-cfdi__row" style="--i:0"><span class="preview-cfdi__file">FAC-2024-001.xml</span><span class="preview-cfdi__size">12 KB</span><span class="preview-cfdi__status ok">OK</span></div>
        <div class="preview-cfdi__row" style="--i:1"><span class="preview-cfdi__file">FAC-2024-002.xml</span><span class="preview-cfdi__size">8 KB</span><span class="preview-cfdi__status ok">OK</span></div>
        <div class="preview-cfdi__row" style="--i:2"><span class="preview-cfdi__file">FAC-2024-003.xml</span><span class="preview-cfdi__size">15 KB</span><span class="preview-cfdi__status warn">DUPLICADO</span></div>
        <div class="preview-cfdi__row" style="--i:3"><span class="preview-cfdi__file">FAC-2024-004.xml</span><span class="preview-cfdi__size">—</span><span class="preview-cfdi__status err">FALTANTE</span></div>
        <div class="preview-cfdi__row" style="--i:4"><span class="preview-cfdi__file">FAC-2024-005.xml</span><span class="preview-cfdi__size">10 KB</span><span class="preview-cfdi__status info">CANCELADO</span></div>
      </div>`,

    'cfdi-resumen': () => `
      <div class="preview-cfdi">
        <div class="preview-cfdi__header"><span>Resumen</span><span>5 archivos procesados</span></div>
        <div class="preview-cfdi__row"><span class="preview-cfdi__file">Coincidencias</span><span class="preview-cfdi__size">3</span><span class="preview-cfdi__status ok">OK</span></div>
        <div class="preview-cfdi__row"><span class="preview-cfdi__file">Duplicados</span><span class="preview-cfdi__size">1</span><span class="preview-cfdi__status warn">REVISAR</span></div>
        <div class="preview-cfdi__row"><span class="preview-cfdi__file">Faltantes</span><span class="preview-cfdi__size">1</span><span class="preview-cfdi__status err">ALERTA</span></div>
        <div class="preview-cfdi__row"><span class="preview-cfdi__file">Cancelados</span><span class="preview-cfdi__size">1</span><span class="preview-cfdi__status info">INFO</span></div>
      </div>`,

    xml: () => `
      <div class="preview-xml">
        <div class="preview-xml__tabs">
          <span class="preview-xml__tab">original.xml</span>
          <span class="preview-xml__tab is-active">modificado.xml</span>
        </div>
        <pre class="preview-xml__code"><span class="tag">&lt;cfdi:Comprobante</span>
  <span class="attr">Folio</span>=<span class="del">"A-001"</span> <span class="hl">"A-101"</span>
  <span class="attr">Fecha</span>=<span class="del">"2024-01-15"</span> <span class="hl">"2024-02-01"</span>
  <span class="attr">Total</span>=<span class="str">"1450.00"</span><span class="tag">&gt;</span>
  <span class="tag">&lt;cfdi:Emisor</span> <span class="attr">Rfc</span>=<span class="str">"XAXX010101000"</span><span class="tag">/&gt;</span>
<span class="tag">&lt;/cfdi:Comprobante&gt;</span></pre>
      </div>`,

    'xml-lote': () => `
      <div class="preview-xml">
        <div class="preview-xml__tabs">
          <span class="preview-xml__tab is-active">lote · 128 archivos</span>
        </div>
        <pre class="preview-xml__code">✓ FAC-2024-001.xml  <span class="hl">modificado</span>
✓ FAC-2024-002.xml  <span class="hl">modificado</span>
✓ FAC-2024-003.xml  <span class="hl">modificado</span>
✓ FAC-2024-004.xml  <span class="hl">modificado</span>
… 124 archivos más
<span class="tag">Proceso completado en 3.2s</span></pre>
      </div>`,

    qr: () => `
      <div class="preview-qr">
        <div class="preview-qr__flow">
          <div class="preview-qr__step is-done">Solicitud creada</div>
          <div class="preview-qr__step is-done">Autorización</div>
          <div class="preview-qr__step is-active">Código QR</div>
          <div class="preview-qr__step">Validación en puerta</div>
        </div>
        <div class="preview-qr__code" aria-hidden="true"></div>
      </div>`,

    inv: () => `
      <div class="preview-inv">
        <div class="preview-inv__toolbar">
          <div class="preview-inv__search">Buscar equipo…</div>
          <div class="preview-inv__filter">Todos</div>
        </div>
        <div class="preview-inv__row" style="--i:0"><span class="preview-inv__sn">DEV-001</span><span class="preview-inv__name">Laptop</span><span class="preview-inv__state active">Activo</span><span class="preview-inv__loc">Piso 1</span></div>
        <div class="preview-inv__row" style="--i:1"><span class="preview-inv__sn">DEV-002</span><span class="preview-inv__name">Monitor</span><span class="preview-inv__state active">Activo</span><span class="preview-inv__loc">Piso 1</span></div>
        <div class="preview-inv__row" style="--i:2"><span class="preview-inv__sn">DEV-003</span><span class="preview-inv__name">Impresora</span><span class="preview-inv__state maint">Mantto.</span><span class="preview-inv__loc">Piso 2</span></div>
        <div class="preview-inv__row" style="--i:3"><span class="preview-inv__sn">DEV-004</span><span class="preview-inv__name">Desktop</span><span class="preview-inv__state stock">Stock</span><span class="preview-inv__loc">Almacén</span></div>
      </div>`,

    web: () => `
      <div class="preview-web">
        <div class="preview-web__browser">
          <div class="preview-web__chrome">
            <span class="preview-web__dot" style="background:#ff5f56"></span>
            <span class="preview-web__dot" style="background:#ffbd2e"></span>
            <span class="preview-web__dot" style="background:#27c93f"></span>
            <div class="preview-web__url">https://tu-sitio.dev</div>
          </div>
          <div class="preview-web__view">
            <div class="preview-web__hero">
              <div class="preview-web__bar" style="width:60%"></div>
              <div class="preview-web__bar" style="width:40%"></div>
              <div class="preview-web__btn"></div>
            </div>
            <div class="preview-web__grid">
              <div class="preview-web__card"></div>
              <div class="preview-web__card"></div>
              <div class="preview-web__card"></div>
            </div>
          </div>
        </div>
        <div class="preview-web__labels">
          <span>HTML5</span><span>CSS3</span><span>JS</span><span>Angular</span>
        </div>
      </div>`
  };

  /* ═══════════════════════════════════════════════
     RENDER DEL CARRUSEL
     ═══════════════════════════════════════════════ */
  const carousel = document.getElementById('projects-carousel');
  const track    = document.getElementById('projects-track');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');
  const idxCur   = document.getElementById('carousel-current');
  const idxTot   = document.getElementById('carousel-total');
  const bar      = document.getElementById('carousel-bar');
  const dotsWrap = document.getElementById('carousel-dots');

  if (!track) return;

  track.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-slide ${i === 0 ? 'is-active' : ''} ${p.featured ? 'is-featured' : ''}" data-id="${p.id}" data-index="${i}">
      <div class="project-slide__info">
        <span class="project-slide__num">Proyecto ${p.num}</span>
        <h3 class="project-slide__title">${p.title}</h3>
        ${p.subtitle ? `<p class="project-slide__subtitle">${p.subtitle}</p>` : ''}
        <p class="project-slide__tagline">${p.tagline}</p>
        <div class="project-slide__techs">
          ${p.techs.slice(0, 4).map(t => `<span>${t}</span>`).join('')}
        </div>
        <button class="project-slide__cta" data-open-project="${p.id}" aria-label="Explorar proyecto: ${p.title}">
          Explorar proyecto
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </button>
      </div>
      <div class="project-slide__visual">
        ${(previews[p.preview] || previews.cfdi)()}
      </div>
    </article>
  `).join('');

  if (idxTot) idxTot.textContent = String(PROJECTS.length).padStart(2, '0');

  if (dotsWrap) {
    dotsWrap.innerHTML = PROJECTS.map((p, i) =>
      `<button class="carousel-dot ${i === 0 ? 'is-active' : ''}" data-goto="${i}" aria-label="Ir al proyecto ${i + 1}: ${p.title}"></button>`
    ).join('');
  }

  /* ═══════════════════════════════════════════════
     LÓGICA DEL CARRUSEL
     ═══════════════════════════════════════════════ */
  let currentIndex = 0;
  const totalSlides = PROJECTS.length;
  const slides = track.querySelectorAll('.project-slide');
  const dots = dotsWrap ? dotsWrap.querySelectorAll('.carousel-dot') : [];

  function getStepSize() {
    if (!slides[0]) return 0;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap) || 24;
    return slides[0].getBoundingClientRect().width + gap;
  }

  function updateCarousel(animate = true) {
    const step = getStepSize();
    const viewport = track.parentElement;
    const viewportW = viewport.getBoundingClientRect().width;
    const slideW = slides[0].getBoundingClientRect().width;
    const offset = (viewportW - slideW) / 2;
    const x = -currentIndex * step + offset;

    if (!animate) track.classList.add('is-no-transition');
    track.style.transform = `translate3d(${x}px, 0, 0)`;
    if (!animate) {
      requestAnimationFrame(() => track.classList.remove('is-no-transition'));
    }

    slides.forEach((s, i) => s.classList.toggle('is-active', i === currentIndex));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === currentIndex));

    if (idxCur) idxCur.textContent = String(currentIndex + 1).padStart(2, '0');
    if (bar) {
      const pct = 100 / totalSlides;
      bar.style.width = `${pct}%`;
      bar.style.left = `${pct * currentIndex}%`;
    }

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === totalSlides - 1;
  }

  function goTo(i) {
    currentIndex = Math.max(0, Math.min(totalSlides - 1, i));
    updateCarousel();
  }

  prevBtn?.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn?.addEventListener('click', () => goTo(currentIndex + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  carousel?.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(currentIndex - 1); }
  });

  /* ═══════════════════════════════════════════════
     DRAG / SWIPE CON DETECCIÓN DE DIRECCIÓN
     ───────────────────────────────────────────────
     Reglas:
       1. Esperamos al menos THRESHOLD_DIR px de movimiento
          para decidir si el gesto es horizontal o vertical.
       2. Si es vertical → NO capturamos el gesto; el navegador
          hace el scroll normal de la página.
       3. Si es horizontal → aplicamos transform al track.
       4. Solo cambiamos de slide si supera SWIPE_THRESHOLD en X.
       5. Los movimientos pequeños (< 8px) se ignoran completamente.
     ═══════════════════════════════════════════════ */
  const viewport = track.parentElement;

  const THRESHOLD_DIR   = 10;  // px mínimos para decidir dirección
  const SWIPE_THRESHOLD = 60;  // px mínimos para cambiar de slide
  const SMALL_MOVE      = 8;   // px por debajo → no es un gesto

  let gesture = null; // { pointerId, startX, startY, startTx, direction }

  function getOffset() {
    const viewportW = viewport.getBoundingClientRect().width;
    const slideW = slides[0].getBoundingClientRect().width;
    return (viewportW - slideW) / 2;
  }

  function onPointerDown(e) {
    // No interferir con clicks del CTA ni con el modal
    if (e.target.closest('.project-slide__cta')) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    gesture = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startTx: currentIndex * getStepSize(),
      direction: null, // 'h' | 'v' | null
    };
  }

  function onPointerMove(e) {
    if (!gesture || gesture.pointerId !== e.pointerId) return;

    const dx = e.clientX - gesture.startX;
    const dy = e.clientY - gesture.startY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    // ── Fase 1: decidir dirección ──
    if (gesture.direction === null) {
      // Movimiento demasiado pequeño → esperar
      if (absDx < SMALL_MOVE && absDy < SMALL_MOVE) return;

      // Necesitamos al menos THRESHOLD_DIR en alguna dirección
      if (absDx < THRESHOLD_DIR && absDy < THRESHOLD_DIR) return;

      // Decidir según el eje dominante
      if (absDx > absDy * 1.2) {
        // Horizontal confirmado → capturamos el gesto
        gesture.direction = 'h';
        viewport.classList.add('is-dragging');
        track.classList.add('is-no-transition');
        try { viewport.setPointerCapture(e.pointerId); } catch (_) {}
      } else {
        // Vertical → NO capturamos. Dejamos que el navegador scrollee.
        gesture.direction = 'v';
        return;
      }
    }

    // ── Fase 2: si es horizontal, movemos el track ──
    if (gesture.direction === 'h') {
      const offset = getOffset();
      track.style.transform = `translate3d(${-gesture.startTx + dx + offset}px, 0, 0)`;
    }
  }

  function onPointerUp(e) {
    if (!gesture || gesture.pointerId !== e.pointerId) {
      gesture = null;
      return;
    }

    const dx = e.clientX - gesture.startX;
    const direction = gesture.direction;

    viewport.classList.remove('is-dragging');
    track.classList.remove('is-no-transition');

    // Si nunca se decidió dirección (tap sin movimiento), no hacer nada
    if (direction === 'h') {
      // Cambiar de slide solo si supera el umbral
      if (Math.abs(dx) >= SWIPE_THRESHOLD) {
        goTo(dx < 0 ? currentIndex + 1 : currentIndex - 1);
      } else {
        // Snap de vuelta al slide actual
        updateCarousel();
      }
    }
    // Si direction === 'v' o null → el navegador gestiona el scroll normal

    gesture = null;
  }

  function onPointerCancel(e) {
    if (!gesture || gesture.pointerId !== e.pointerId) return;
    viewport.classList.remove('is-dragging');
    track.classList.remove('is-no-transition');
    // Snap de vuelta sin cambiar slide
    updateCarousel();
    gesture = null;
  }

  viewport?.addEventListener('pointerdown', onPointerDown, { passive: true });
  viewport?.addEventListener('pointermove', onPointerMove, { passive: true });
  viewport?.addEventListener('pointerup', onPointerUp);
  viewport?.addEventListener('pointercancel', onPointerCancel);
  viewport?.addEventListener('dragstart', e => e.preventDefault());

  window.addEventListener('resize', () => updateCarousel(false));
  requestAnimationFrame(() => updateCarousel(false));

  /* ═══════════════════════════════════════════════
     MODAL DE PROYECTO
     ═══════════════════════════════════════════════ */
  const modal        = document.getElementById('project-modal');
  const modalHeader  = document.getElementById('project-modal-header');
  const modalBody    = document.getElementById('project-modal-body');
  let lastFocused = null;

  function openModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;

    lastFocused = document.activeElement;

    modalHeader.innerHTML = `
      <p class="project-modal__eyebrow">Proyecto ${p.num}</p>
      <h3 class="project-modal__title" id="project-modal-title">${p.title}</h3>
      ${p.subtitle ? `<p class="project-modal__subtitle">${p.subtitle}</p>` : ''}
      <p class="project-modal__tagline">${p.tagline}</p>
      <button class="project-modal__close" data-modal-close aria-label="Cerrar detalle del proyecto">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6 6 18M6 6l12 12"/>
        </svg>
      </button>
    `;

    const gallerySlides = p.gallery.map((g, i) => `
      <div class="pd-gallery__slide ${i === 0 ? 'is-active' : ''}" data-gallery-index="${i}" aria-hidden="${i === 0 ? 'false' : 'true'}">
        ${(previews[g.type] || previews.cfdi)()}
      </div>
    `).join('');

    const galleryDots = p.gallery.map((g, i) =>
      `<button class="pd-gallery__dot ${i === 0 ? 'is-active' : ''}" data-gallery-goto="${i}" aria-label="Ver vista ${i + 1}: ${g.caption}"></button>`
    ).join('');

    modalBody.innerHTML = `
      <section class="pd-section">
        <h4 class="pd-section__head">Vista del proyecto</h4>
        <div class="pd-gallery" id="pd-gallery">
          <div class="pd-gallery__stage" id="pd-gallery-stage">
            ${gallerySlides}
          </div>
          <div class="pd-gallery__controls">
            <div class="pd-gallery__nav">
              <button class="pd-gallery__btn" id="pd-gallery-prev" aria-label="Vista anterior">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M19 12H5M11 18l-6-6 6-6"/>
                </svg>
              </button>
              <button class="pd-gallery__btn" id="pd-gallery-next" aria-label="Vista siguiente">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </button>
            </div>
            <p class="pd-gallery__caption" id="pd-gallery-caption">${p.gallery[0].caption}</p>
            <div class="pd-gallery__dots">${galleryDots}</div>
          </div>
        </div>
      </section>

      <section class="pd-section">
        <h4 class="pd-section__head">Problema y solución</h4>
        <div class="pd-grid-2">
          <div class="pd-card">
            <h5>Problema</h5>
            <p>${p.problem}</p>
          </div>
          <div class="pd-card">
            <h5>Solución</h5>
            <p>${p.solution}</p>
          </div>
        </div>
      </section>

      <section class="pd-section">
        <h4 class="pd-section__head">Funcionalidades</h4>
        <div class="pd-features">
          ${p.features.map(f => `<div class="pd-feature">${f}</div>`).join('')}
        </div>
      </section>

      <section class="pd-section">
        <h4 class="pd-section__head">Tecnologías</h4>
        <div class="pd-techs">
          ${p.techs.map(t => `<span>${t}</span>`).join('')}
        </div>
      </section>

      <section class="pd-section">
        <h4 class="pd-section__head">Resultado</h4>
        <p class="pd-result">${p.result}</p>
        ${p.note ? `<p class="pd-note">${p.note}</p>` : ''}
      </section>

      <div class="pd-actions">
        <a href="mailto:urielrj27@gmail.com?subject=Consulta%20sobre%20${encodeURIComponent(p.title)}" class="btn btn--primary">
          Solicitar información
        </a>
        <button class="btn btn--ghost" data-modal-close>Cerrar</button>
      </div>
    `;

    initGallery(p);

    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('is-open'));
    document.body.classList.add('no-scroll');

    setTimeout(() => modal.querySelector('.project-modal__close')?.focus(), 100);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      modal.hidden = true;
      if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    }, 400);
  }

  function initGallery(p) {
    const gallerySlides = modalBody.querySelectorAll('.pd-gallery__slide');
    const galleryDots   = modalBody.querySelectorAll('.pd-gallery__dot');
    const prev   = modalBody.querySelector('#pd-gallery-prev');
    const next   = modalBody.querySelector('#pd-gallery-next');
    const caption = modalBody.querySelector('#pd-gallery-caption');
    if (!gallerySlides.length) return;

    let idx = 0;
    const total = gallerySlides.length;

    function update() {
      gallerySlides.forEach((s, i) => {
        s.classList.toggle('is-active', i === idx);
        s.setAttribute('aria-hidden', String(i !== idx));
      });
      galleryDots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
      if (caption) caption.textContent = p.gallery[idx].caption;
      if (prev) prev.disabled = idx === 0;
      if (next) next.disabled = idx === total - 1;
    }

    prev?.addEventListener('click', () => { if (idx > 0) { idx--; update(); } });
    next?.addEventListener('click', () => { if (idx < total - 1) { idx++; update(); } });
    galleryDots.forEach((d, i) => d.addEventListener('click', () => { idx = i; update(); }));

    update();
  }

  document.addEventListener('click', e => {
    const openBtn = e.target.closest('[data-open-project]');
    if (openBtn) {
      e.preventDefault();
      e.stopPropagation();
      openModal(openBtn.dataset.openProject);
      return;
    }
    if (e.target.closest('[data-modal-close]')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal && !modal.hidden) closeModal();
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) el.classList.add('is-visible');
      });
    }, 2500);
  });
})();