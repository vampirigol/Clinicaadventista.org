# 04 · Arquitectura y contenido — todo lo que debe contener la web

Mapa completo del sitio y, **página por página**, qué debe incluir, su objetivo y sus CTAs.

## A. Mapa del sitio (sitemap)

| Página | URL sugerida | Objetivo principal |
|--------|--------------|--------------------|
| Inicio | `/` | Presentar la marca y dirigir a las 3 conversiones |
| Especialidades (índice) | `/especialidades/` | Listar y enlazar a cada servicio |
| Detalle de especialidad | `/especialidades/{servicio}/` | Vender el servicio + CTA |
| Sucursales (índice) | `/sucursales/` | Listar sedes + mapa |
| Detalle de sucursal | `/sucursales/{ciudad}/` | SEO local + cita en esa sede |
| Servicio × sucursal | `/{servicio}-en-{ciudad}/` | SEO local profundo |
| Consultas online | `/consultas-online/` | Vender telemedicina |
| Nosotros | `/nosotros/` | Confianza: misión, valores, historia |
| Profesionales | `/profesionales/` | Confianza: equipo médico |
| Testimonios | `/testimonios/` | Prueba social |
| Blog / Educación | `/blog/` y `/blog/{articulo}/` | SEO informativo + captación |
| Preguntas frecuentes | `/preguntas-frecuentes/` | Resolver dudas + SEO |
| Contacto | `/contacto/` | Lead: WhatsApp, teléfono, formulario, mapa |
| Agendar cita | `/agendar/` | Conversión central |
| Aviso de privacidad | `/aviso-de-privacidad/` | Cumplimiento legal |
| Términos / Cookies | `/terminos/` | Cumplimiento legal |

## B. Componentes globales

- **Barra superior:** teléfono, email, acceso a "Consultas online".
- **Header fijo:** logo, navegación, botón **"Agendar cita"** (siempre visible).
- **Botón flotante (móvil):** WhatsApp + llamar.
- **Footer:** datos de contacto, sucursales, enlaces, COFEPRIS, redes, aviso de privacidad,
  boletín de suscripción.
- **Bloques reutilizables:** tarjeta de servicio, tarjeta de sucursal, ficha de profesional,
  bloque de testimonio, bloque de confianza (logos/certificaciones), CTA de cita.

## C. Contenido por página

### 1. Inicio `/`
- **Hero:** propuesta de valor + subtítulo + **doble CTA** (Agendar cita / Consulta online) +
  señales de confianza (COFEPRIS, nº de sucursales, años, pacientes).
- **Barra de confianza:** estadísticas clave.
- **Especialidades:** grid de servicios con enlace a cada uno.
- **¿Por qué elegirnos?:** 4-6 propuestas de valor (atención integral, profesionales, valores, tecnología).
- **Sucursales:** vista rápida de sedes + mapa.
- **Consultas online:** bloque que explica y enlaza a telemedicina.
- **Testimonios** + **profesionales destacados**.
- **Blog destacado** (últimos artículos).
- **CTA final** de cita + footer.

### 2. Detalle de especialidad `/especialidades/{servicio}/`
Qué es · para quién · síntomas/casos · cómo es la atención (proceso paso a paso) · tecnología/equipo ·
profesionales del área · testimonios · **precio orientativo** *(si aplica)* · FAQ del servicio ·
sucursales donde se ofrece · **CTA** (cita / online / WhatsApp).

### 3. Detalle de sucursal `/sucursales/{ciudad}/`
Nombre y dirección · **mapa** · horarios · teléfono/WhatsApp · servicios disponibles en esa sede ·
fotos reales · profesionales de la sede · cómo llegar/estacionamiento · reseñas/testimonios locales ·
**CTA** de cita en esa sucursal. *(Datos estructurados `LocalBusiness`.)*

### 4. Servicio × sucursal `/{servicio}-en-{ciudad}/`
Página orientada a SEO local ("Oftalmología en Ciudad Juárez"): combina el contenido del servicio
con los datos de la sede y un CTA directo. Genera muchas combinaciones de alto valor.

### 5. Consultas online `/consultas-online/`
Cómo funciona (pasos) · qué especialidades aplican · requisitos · precios/pago · privacidad ·
FAQ · **CTA** para iniciar la consulta (integración con la plataforma actual).

### 6. Nosotros `/nosotros/`
Misión ("Sanar cuerpos, tocar corazones…") · valores · historia · enfoque integral · colaboradores
(ADRA, etc.) · responsabilidad social/brigadas · **CTA** suave a cita/contacto.

### 7. Profesionales `/profesionales/`
Fichas: foto, nombre, especialidad, credenciales, sucursal(es), breve bio. Filtro por especialidad/sede.
*(Datos estructurados `Physician`.)*

### 8. Testimonios `/testimonios/`
Testimonios con foto/nombre/servicio; reseñas de Google embebidas; video si existe.

### 9. Blog `/blog/`
Artículos educativos orientados a SEO; categorías por especialidad; cada artículo enlaza al servicio
relacionado y a un CTA.

### 10. Preguntas frecuentes `/preguntas-frecuentes/`
Agrupadas por tema (citas, pagos, seguros, consultas online, privacidad). *(Datos estructurados `FAQPage`.)*

### 11. Contacto `/contacto/`
Teléfono, **WhatsApp**, email, direcciones de todas las sucursales, mapa, **formulario corto** y
horario de atención.

### 12. Agendar cita `/agendar/`
Formulario corto: **servicio → sucursal → fecha/hora preferida → datos de contacto** → confirmación.
Pre-rellenar servicio/sucursal según la página de origen. Mensaje de confianza + aviso de privacidad.

### 13. Legales
Aviso de privacidad (LFPDPPP), términos y política de cookies.

## D. Tono y estilo de contenido

- Claro, cercano y profesional; explicar sin tecnicismos innecesarios.
- Enfatizar **beneficio para el paciente** y **confianza**.
- Cada página termina invitando a la acción (las 3 rutas).

## E. Inventario y migración *(se completa con el ZIP)*

Cuando suba el ZIP a `/contenido-original/`, generaré:
- **Inventario** de todas las páginas/textos/imágenes actuales.
- **Mapa de migración:** URL antigua → URL nueva (+ **redirecciones 301**).
- Lista de contenido a **reescribir** (orientado a conversión/SEO) vs. **reutilizar tal cual**.
- Lista de **imágenes** a optimizar o reemplazar (calidad premium).

> Esto evita perder posicionamiento y asegura que nada de valor se quede fuera.
