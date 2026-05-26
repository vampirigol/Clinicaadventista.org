# 03 · Plan de rediseño (UX + diseño + tecnología)

## 1. Principios de UX

1. **Conversión primero:** cada página tiene un objetivo claro y un CTA visible en todo momento.
2. **Mobile-first:** se diseña para el móvil y se escala a escritorio.
3. **Confianza visible:** señales de credibilidad (COFEPRIS, equipo, testimonios) cerca de cada decisión.
4. **Fricción mínima:** rutas cortas a la cita; formularios breves; nada que distraiga del objetivo.
5. **Accesible e inclusivo:** legible, navegable por teclado, buen contraste.
6. **Rápido:** la velocidad es parte de la experiencia y del SEO.

## 2. Arquitectura de información (resumen)

Estructura orientada a las 3 conversiones y al SEO local. **Detalle completo en el doc 04.**

```
Inicio
├─ Especialidades
│   ├─ Oftalmología · Odontología · Psicología
│   ├─ Medicina integral · Terapia física · Laboratorio
├─ Sucursales
│   └─ Juárez · Obregón · Loreto (x2) · Valle de la Trinidad
│       └─ (Servicio × Sucursal para SEO local)
├─ Consultas online
├─ Nosotros (misión, valores, profesionales, colaboradores)
├─ Testimonios
├─ Blog / Educación en salud
├─ Preguntas frecuentes
├─ Contacto
└─ Agendar cita  ·  Aviso de privacidad
```

## 3. Sistema de diseño (premium / corporativo) — resumen

> Especificación completa con paleta, tipografía y componentes en el **doc 06** y el **mockup**.

- **Tono:** elegante, sobrio, confiable; mucho aire (espacios en blanco), detalles dorados sutiles.
- **Color:** azul marino profundo + acento dorado + neutros cálidos; verde/teal de apoyo (salud).
- **Tipografía:** serif elegante para titulares (autoridad) + sans limpia para texto (legibilidad).
- **Componentes:** header fijo con CTA, tarjetas de servicio/sucursal, fichas de profesional,
  bloques de testimonio, formularios cortos, botón flotante de WhatsApp en móvil.
- **Fotografía:** real, cálida y profesional (personas, equipo, instalaciones); evitar stock genérico.

## 4. Responsive y accesibilidad

- Breakpoints móvil / tablet / escritorio; navegación tipo "hamburguesa" con CTA siempre visible.
- Objetivo **WCAG 2.1 AA:** contraste suficiente, foco visible, navegación por teclado, etiquetas
  ARIA en formularios, textos alternativos en imágenes, tamaños de toque adecuados.

## 5. Rendimiento (Core Web Vitals)

- Metas: **LCP < 2.5s · INP < 200ms · CLS < 0.1**.
- Cómo: HTML estático (Astro), imágenes optimizadas (AVIF/WebP, `lazy`), CSS mínimo, casi cero JS
  por defecto (islas de interactividad solo donde se necesita), fuentes optimizadas, CDN/caché.

## 6. Recomendación tecnológica

> Pediste recomendación. Con **DigitalOcean** como servidor y **Claude Code** como entorno de
> desarrollo, esta es la opción con mejor relación velocidad/SEO/mantenimiento para tu caso.

### Stack propuesto
| Capa | Elección | Por qué |
|------|----------|---------|
| **Framework** | **Astro** | Genera HTML estático ultrarrápido (ideal SEO/conversión); añade interactividad solo donde hace falta ("islas"). Perfecto para sitio de contenido + marketing. |
| **Estilos** | **Tailwind CSS** | Desarrollo rápido y consistente con el sistema de diseño; CSS muy ligero en producción. |
| **Contenido** | Markdown/MDX en el repo, o **CMS headless** (p. ej. para que tu equipo edite sin tocar código) | Empezamos con contenido en el repo; si tu equipo necesita editar, añadimos un CMS. |
| **Formularios / leads** | Endpoint propio o servicio de formularios + **WhatsApp/CRM** | Las solicitudes llegan por email/CRM y WhatsApp con seguimiento. |
| **Citas** | Formulario de solicitud y/o integración con tu sistema de agenda | Según cómo gestionen hoy las citas (a definir con el ZIP/operación). |
| **Consultas online** | Enlace/integración con tu plataforma de telemedicina actual | Reutilizamos lo que ya usan. |
| **Analítica** | Analítica web + eventos + seguimiento de llamadas/WhatsApp | Medir las 3 conversiones por fuente y sucursal. |

### Despliegue en DigitalOcean (opciones)
- **App Platform** (más sencillo, despliegue automático desde el repo de GitHub), **o**
- **Droplet** con Nginx sirviendo el sitio estático (más control, muy económico).
- **CI/CD:** push a la rama → build → publicación automática.
- **Esenciales:** dominio, **HTTPS** (SSL), copias de seguridad y CDN.

### Alternativas consideradas
- **WordPress optimizado:** muy fácil de editar para personal no técnico, pero más lento, más
  mantenimiento/seguridad y peor base de rendimiento. Viable si la edición autónoma del contenido
  por el equipo es la prioridad #1.
- **Webflow/Framer:** rápido de diseñar, pero costo mensual y menos control/portabilidad.

> **Mi recomendación:** **Astro + Tailwind en DigitalOcean**, y si tu equipo necesita editar sin
> programar, añadimos un **CMS headless** ligero encima. Lo confirmamos antes de desarrollar.

## 7. Seguridad y privacidad (datos de salud)

- **HTTPS** en todo el sitio; formularios con protección anti-spam.
- **LFPDPPP (México):** aviso de privacidad, consentimiento explícito al enviar datos, y manejo
  responsable de la información sensible de salud.
- Banner de cookies/consentimiento para analítica.
- No exponer datos de pacientes en el front; mínima retención.

## 8. Editor de contenido (quién y cómo se actualiza)

Decisión clave a confirmar: **¿quién mantendrá el contenido (noticias, profesionales, sucursales)?**
- Si es el equipo (no técnico) → **CMS headless** con interfaz amigable.
- Si los cambios son ocasionales → contenido en el repo (más simple y económico).
