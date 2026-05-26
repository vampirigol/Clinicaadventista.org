# 05 · Plan de acción

Fases, entregables y tiempos. Las semanas son **estimaciones**; se ajustan según alcance final,
disponibilidad de contenido y velocidad de aprobaciones.

## Resumen de fases

| Fase | Nombre | Duración aprox. | Resultado |
|------|--------|------------------|-----------|
| 0 | Descubrimiento | 1 sem | Inventario + objetivos + accesos |
| 1 | Estrategia y contenido | 1–2 sem | Mensajes, arquitectura y textos |
| 2 | Diseño | 1–2 sem | **Propuesta visual autorizada** |
| 3 | Desarrollo | 2–4 sem | Sitio en Astro funcionando |
| 4 | Contenido y SEO | 1–2 sem (en paralelo) | Migración + SEO técnico |
| 5 | QA y lanzamiento | 1 sem | Sitio en vivo |
| 6 | Optimización | Continuo | Mejoras por datos |

---

## Fase 0 — Descubrimiento
- [ ] Recibir y analizar el **ZIP** de contenido (`/contenido-original/`).
- [ ] Inventario de páginas/URLs actuales.
- [ ] Definir cómo se gestionan hoy: **citas**, **consultas online** y **leads** (herramientas).
- [ ] Accesos necesarios: dominio/DNS, hosting actual, DigitalOcean, analítica, Google Business.
- [ ] Confirmar quién editará el contenido (define si usamos CMS).
- **Entregable:** documento de descubrimiento + línea base de métricas.

## Fase 1 — Estrategia y contenido
- [ ] Cerrar mensajes y propuesta de valor por audiencia.
- [ ] Aprobar arquitectura de información (doc 04).
- [ ] Redactar/optimizar textos página por página (orientados a conversión + SEO).
- [ ] Definir taxonomía de blog y primeras temáticas.
- **Entregable:** textos listos + mapa de migración (URL antigua → nueva).

## Fase 2 — Diseño  ⭐ (punto de autorización)
- [x] Propuesta visual v1 (mockup de inicio) — `/propuestas-diseno/`.
- [ ] **Autorización del diseño** (doc 06, checklist de visto bueno).
- [ ] Mockups de páginas clave: especialidad, sucursal, agendar, consultas online.
- [ ] Sistema de diseño final (componentes).
- **Entregable:** **diseño autorizado** + biblioteca de componentes.

## Fase 3 — Desarrollo
- [ ] Configurar proyecto **Astro + Tailwind** y despliegue en **DigitalOcean**.
- [ ] Maquetar componentes globales (header, footer, CTAs, WhatsApp flotante).
- [ ] Construir plantillas: inicio, especialidad, sucursal, servicio×sucursal, online, nosotros,
      profesionales, testimonios, blog, FAQ, contacto, agendar, legales.
- [ ] Integrar **formularios/citas**, **consultas online** y **WhatsApp/CRM**.
- [ ] Datos estructurados (Schema.org) y analítica con eventos de conversión.
- **Entregable:** sitio funcional en entorno de pruebas.

## Fase 4 — Contenido y SEO (en paralelo con la 3)
- [ ] Cargar todo el contenido e imágenes (optimizadas).
- [ ] Configurar **redirecciones 301** desde URLs antiguas.
- [ ] SEO técnico: sitemap, metadatos, Open Graph, robots.
- [ ] Optimizar Google Business de cada sucursal.
- **Entregable:** contenido migrado + SEO listo.

## Fase 5 — QA y lanzamiento
- [ ] Pruebas: enlaces, formularios, responsive, navegadores, accesibilidad (AA).
- [ ] Core Web Vitals en verde.
- [ ] Verificar que las 3 conversiones funcionan y se miden.
- [ ] **Checklist de lanzamiento** (abajo) → publicar.
- **Entregable:** sitio en vivo + analítica activa.

## Fase 6 — Optimización (continuo)
- [ ] Tablero mensual de KPIs (citas/online/leads por fuente y sucursal).
- [ ] Pruebas A/B en CTAs y páginas clave.
- [ ] Calendario de blog y publicaciones en Google Business.
- **Entregable:** informe mensual + mejoras priorizadas.

---

## Checklist de lanzamiento
- [ ] Dominio + **HTTPS** (SSL) configurados.
- [ ] Redirecciones 301 verificadas (sin enlaces rotos).
- [ ] Analítica + eventos de conversión + seguimiento WhatsApp/llamadas.
- [ ] Formularios entregan a email/CRM y notifican.
- [ ] Aviso de privacidad y banner de cookies publicados.
- [ ] Sitemap enviado a Google Search Console.
- [ ] Pruebas en móvil reales.
- [ ] Copias de seguridad activadas.

## Roles (RACI simplificado)
| Tarea | Tú (cliente) | Claude Code (desarrollo) |
|-------|--------------|--------------------------|
| Contenido, fotos, accesos | **Responsable** | Apoya/optimiza |
| Estrategia y arquitectura | Aprueba | **Propone** |
| Diseño | **Autoriza** | Propone/itera |
| Desarrollo y SEO técnico | Aprueba | **Ejecuta** |
| Operación de citas/CRM | **Responsable** | Integra |

> **Dependencia crítica:** el avance depende de **contenido (ZIP)**, **accesos** y **aprobaciones**
> a tiempo. Por eso la Fase 2 marca el punto de autorización antes de invertir en desarrollo.
