# Agregar "Senior Moving Services" al menú y al footer

## Qué se hace

- Añadir la página de mudanzas para adultos mayores al desplegable **Services** del header y a la columna **Services** del footer, en inglés y español.
- Mantener intactos los enlaces internos (anclas) ya existentes en Naples, Boca Raton y Ocala.
- No se cambia ninguna URL, título, canonical ni contenido de las páginas.

## Detalle técnico

- `src/lib/i18n.ts`: agregar una entrada a `SERVICES_BY_LANG`:
  - `en`: `{ label: "Senior Moving Services", to: "/senior-moving-services/" }`
  - `es`: `{ label: "Mudanzas para Adultos Mayores", to: "/es/senior-moving-services/" }`
- Header y Footer ya consumen `SERVICES_BY_LANG`, así que ambos se actualizan automáticamente.
- `src/components/site/data.ts` mantiene una lista `SERVICES` heredada; se añade la misma entrada en inglés para que quede consistente.
- Verificación: revisar en el preview que el enlace aparezca en el dropdown y en el footer, y que ambas rutas respondan bien.
