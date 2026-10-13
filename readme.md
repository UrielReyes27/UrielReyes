# Uriel Reyes — Portafolio Profesional

Portafolio web personal de **Bryan Uriel Reyes Jiménez** (Uriel Reyes), Desarrollador
Full Stack e Ingeniero en TICs.

Experiencia de entrada cinematográfica, narrativa visual al hacer scroll,
carrusel premium de proyectos con casos de estudio interactivos y un sistema de
galería dentro de modales amplios.

---

## 🎯 Características

- **Intro cinematográfica** con haz de luz verde que se reproduce en cada recarga.
- **Hero editorial** con composición tipográfica y partículas interactivas.
- **Carrusel horizontal premium** con drag/swipe, teclado, dots y barra de progreso.
- **Modal amplio por proyecto** con header fijo, galería navegable, problema/solución
  en dos columnas, funcionalidades y tecnologías.
- **6 proyectos** con previews visuales únicos (POS, CFDI, XML, QR, Inventario, Web).
- **Diseño responsive** desde móvil hasta escritorio.
- **Accesibilidad**: navegación por teclado, `aria-*`, focus trap en modal,
  `prefers-reduced-motion` respetado.

---

## 🧱 Stack

- **HTML5** semántico
- **CSS3** (custom properties, grid, animaciones, `prefers-reduced-motion`)
- **JavaScript vanilla** (sin frameworks, sin build)
- **Canvas 2D** para partículas y red de nodos
- **Google Fonts** (Inter + JetBrains Mono)

Todo optimizado para publicarse directamente en **GitHub Pages**.

---

## 📁 Estructura

```
.
├── index.html
├── css/
│   ├── variables.css       # Design tokens
│   ├── base.css            # Reset + tipografía
│   ├── intro.css           # Intro cinematográfica
│   ├── layout.css          # Nav, secciones, footer
│   ├── components.css      # Botones, cursor, reveal
│   ├── sections.css        # Hero, about, tech, timeline, contact
│   ├── projects.css        # Carrusel + modal + previews
│   └── responsive.css
├── js/
│   ├── intro.js            # Secuencia de entrada
│   ├── particles.js        # Canvas del hero
│   ├── cursor.js           # Cursor personalizado
│   ├── navigation.js       # Nav + smooth scroll + menú móvil
│   ├── animations.js       # Reveal on scroll
│   ├── projects.js         # Carrusel + modal + galería
│   └── main.js             # Init global
├── assets/
│   └── favicon.svg
├── README.md
└── .nojekyll
```

---

## ⚙️ Personalización pendiente

Antes de publicar, reemplaza estos marcadores en `index.html`:

| Marcador | Descripción |
|----------|-------------|
| `TU_USUARIO_GITHUB` | Tu usuario de GitHub (sección Contacto) |
| `TU_USUARIO_LINKEDIN` | Tu usuario de LinkedIn (sección Contacto) |

Busca en `index.html`:

```html
<a href="https://github.com/TU_USUARIO_GITHUB" ...>
<a href="https://www.linkedin.com/in/TU_USUARIO_LINKEDIN/" ...>
```

---

## 🧪 Probar localmente

No requiere build. Opciones:

### Opción A — Live Server (recomendado)

En VS Code:

1. Instala la extensión **Live Server**.
2. Clic derecho sobre `index.html` → **Open with Live Server**.
3. El navegador abrirá en `http://127.0.0.1:5500/`.

### Opción B — Servidor con Python

```bash
python3 -m http.server 8000
```

Abre: `http://localhost:8000`

### Opción C — Servidor con Node

```bash
npx serve .
```

---

## 🌐 Publicar en GitHub Pages

1. Crea un repositorio en GitHub llamado `uriel-reyes-portfolio`.

2. Sube todos los archivos:

```bash
git init
git add .
git commit -m "feat: portafolio profesional"
git branch -M main
git remote add origin https://github.com/TU_USUARIO_GITHUB/uriel-reyes-portfolio.git
git push -u origin main
```

3. En GitHub, entra a **Settings → Pages**.

4. En **Source**, selecciona `Deploy from a branch`.

5. Branch: `main`, folder: `/ (root)`.

6. Guarda. En 1–2 minutos tu sitio estará en:

```
https://TU_USUARIO_GITHUB.github.io/uriel-reyes-portfolio/
```

---

## ✏️ Actualizar proyectos

Todos los proyectos viven en `js/projects.js`, en el array `PROJECTS`.

### Agregar un nuevo proyecto

```js
{
  id: 'nuevo-proyecto',
  num: '07',
  title: 'Nombre del proyecto',
  tagline: 'Frase breve que explique su propósito.',
  techs: ['PHP', 'MySQL'],
  preview: 'cfdi',  // cfdi | xml | qr | inv | pos | web
  problem: '...',
  solution: '...',
  features: ['...', '...'],
  result: '...',
  note: 'Aclaración opcional.',
  gallery: [
    { type: 'cfdi', caption: 'Descripción de la vista' }
  ]
}
```

### Agregar una imagen real a la galería

En el array `gallery`:

```js
gallery: [
  { type: 'image', src: 'assets/proyectos/mi-captura.png', caption: 'Pantalla principal' }
]
```

Y en el render de la galería dentro de `openModal`, agrega el caso:

```js
${g.type === 'image'
  ? `<img src="${g.src}" alt="${g.caption}" style="max-width:100%;height:auto">`
  : (previews[g.type] || previews.cfdi)()}
```

---

## 🎬 Comportamiento de la intro

- Se reproduce en **cada recarga completa** del documento.
- Se puede **saltar** con el botón o con la tecla `Escape`.
- Se desactiva automáticamente con `prefers-reduced-motion: reduce`.
- Fuerza `history.scrollRestoration = 'manual'` para evitar que el navegador
  restaure la sección anterior al recargar.
- No bloquea la página: si el JS falla, hay un fallback de 5 s.

---

## 🎠 Cómo funciona el carrusel

- **Flechas** en la parte inferior.
- **Dots** para navegar directo a un proyecto.
- **Teclado** `←` / `→` cuando el carrusel tiene el foco.
- **Drag / swipe** en desktop y móvil (pointer events).
- La slide activa se **centra** en el viewport; las vecinas quedan
  parcialmente visibles para invitar a explorar.
- Se detiene automáticamente durante la interacción del usuario
  (no hay autoplay).

---

## 🖼️ Cómo funciona el modal

- Cada proyecto abre un **modal amplio** (máx. 1080px, 92vh).
- **Header fijo** con número, título y tagline.
- **Body scrollable** con:
  1. Galería navegable (flechas ‹ › + dots + caption).
  2. Problema y Solución en dos columnas.
  3. Funcionalidades en grid.
  4. Tecnologías como etiquetas.
  5. Resultado + nota técnica.
  6. Acciones (Solicitar información / Cerrar).
- **Cerrar**: click en botón ✕, click en backdrop, o tecla `Escape`.
- **Accesibilidad**: focus trap dentro del modal, foco devuelto al botón
  que lo abrió al cerrar.

---

## ♿ Accesibilidad

- Contraste AA/AAA en todos los textos.
- Navegación completa por teclado.
- `aria-*` en modal, nav, carrusel y botones.
- Focus visible en todos los elementos interactivos.
- Respeta `prefers-reduced-motion`.
- Contenido visible sin JavaScript (fallback de visibilidad forzada).

---

## 🔒 Nota sobre la honestidad técnica

Los proyectos del portafolio reflejan **experiencia verificada** según el CV:

- **Sistema POS para Taquería**: tecnología confirmada = Android Studio.
  El stack exacto está pendiente de confirmar. La demostración es un
  **prototipo visual** del flujo, no una reproducción del sistema original.
- **Conciliador CFDI**: PHP, MySQL, XML, Excel. No implica integración
  directa con APIs del SAT o SAP.
- **Editor XML**: PHP, MySQL, HTML, CSS, JavaScript, XML.
- **Control QR**: PHP, MySQL. Firmas y datos mostrados son ficticios.
- **Inventario TI**: PHP, MySQL, HTML, CSS, JavaScript.
- **Desarrollo Web**: capacidad técnica demostrada con este mismo portafolio.

Ninguna captura o demostración usa datos reales de empresas, clientes o
personas. Todos los datos mostrados son ficticios y están identificados
como demostración.

---

## 📄 Licencia

Contenido y código © Uriel Reyes. Todos los derechos reservados.# UrielReyes
