# Auditoría de robots.txt y sitemap.xml — floridamoversdirect.com

## Resultado: todo cumple. No hay URLs que agregar ni quitar.

Verifiqué el código fuente y el sitio en vivo. Ambos archivos ya cumplen todas tus reglas.

### robots.txt (verificado en vivo)
- La directiva Sitemap apunta a `https://floridamoversdirect.com/sitemap.xml` (nunca a lovable.app). Correcto.
- No hay reglas Disallow, así que Google puede rastrear las páginas con etiqueta noindex y ver esa etiqueta. Correcto.
- Los bloques de bots de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) están en Allow. Correcto.
- **Cambios: ninguno.**

### sitemap.xml (verificado en vivo, 64 URLs)
- Las 64 URLs usan `https://floridamoversdirect.com/` absoluto, todas con barra final. Correcto.
- Las 64 URLs devuelven estado 200. Correcto.
- Los 7 slugs viejos con redirección (miami-movers, mover-in-tampa, local-movers, moving-storage, furniture-movers, movers-in-sarasota, mudanzas-f) NO están en el sitemap y devuelven 301 reales del servidor. Correcto.
- No hay URLs de /es/blog/ de artículos (devuelven 404 y no están listadas). Correcto.
- No hay feeds, assets JS/CSS/KML, /wp-admin/, búsquedas ni URLs de plantilla. Correcto.
- Las canónicas de las páginas coinciden exactamente con su URL en el sitemap (verificado en Home, /es/, senior-moving-services EN y ES, y un artículo de blog).
- El sitemap se genera automáticamente desde la tabla de rutas real, así que siempre coincide con las páginas existentes.
- **Cambios: ninguno.**

### URLs a agregar: ninguna
### URLs a quitar: ninguna

## Qué haría al aprobar
Nada. Esta tanda es solo de verificación y ya pasó completa. Si en el futuro creas páginas nuevas, el sitemap las incluirá solo, y si conviertes una página en redirección, se excluirá sola.
