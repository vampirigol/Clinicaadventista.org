# Sitio web — Red de Clínicas Adventistas

Prototipo del sitio en **HTML + CSS + JavaScript** (sin herramientas de compilación),
con la **paleta azul** de la marca, fondos claros y toques de *glassmorphism*.
Pensado para que **corra en local** abriéndolo directo en el navegador.

## Cómo verlo en tu computadora (local)

**Opción A — la más simple (doble clic):**
1. Abre la carpeta `web/`.
2. Haz **doble clic** en `index.html` → se abre en tu navegador con todo el diseño.

**Opción B — con un servidor local (recomendado para que cargue todo igual que en producción):**
```bash
cd web
python3 -m http.server 8000
# luego abre http://localhost:8000 en tu navegador
```
(o, si tienes Node: `npx serve` dentro de `web/`).

## Estructura

```
web/
├─ index.html            ← la página (estructura/contenido)
├─ css/
│  └─ styles.css         ← todos los estilos (paleta azul, glass, responsive)
├─ js/
│  └─ main.js            ← animación sutil al hacer scroll
└─ assets/
   └─ img/
      ├─ logo.png        ← logo horizontal (cabecera)
      ├─ logo-cruz.png   ← emblema de la cruz (footer / favicon)
      └─ partners/       ← logos de colaboradores
```

## Lenguajes y tecnología

- **Ahora (prototipo):** HTML5 + CSS3 + JavaScript (vanilla). Funciona en cualquier navegador,
  sin instalar nada. Por eso se puede abrir local con doble clic.
- **Producción (recomendado):** **Astro + Tailwind CSS** sobre **DigitalOcean**. Astro compila a
  este mismo HTML/CSS/JS pero añade componentes reutilizables, build optimizado y mejor SEO. Se
  scaffolda cuando el diseño esté aprobado.

## Logo en alta resolución

El logo de la cabecera (`assets/img/logo.png`) se tomó del sitio actual y es de baja resolución
(400×60). Para que quede **nítido**, reemplaza ese archivo por la versión en alta (mismo nombre
`logo.png`) y se actualiza solo. Igual para `logo-cruz.png`.
