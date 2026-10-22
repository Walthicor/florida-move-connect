// Global breadcrumb navigation + BreadcrumbList JSON-LD, plus the
// "Last updated" freshness line for service, city and blog pages.
// Rendered once in __root so every route gets consistent authority signals.

import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/seo";
import { langFromPath, stripLang, type Lang } from "@/lib/i18n";
import { BLOG_POSTS } from "@/lib/blog-posts";

/** Bump this when site content is materially reviewed. */
export const LAST_UPDATED = { en: "August 2026", es: "Agosto 2026" } as const;

const LABELS: Record<string, { en: string; es: string }> = {
  "/local-movers-in-florida/": { en: "Local Movers in Florida", es: "Mudanzas Locales en Florida" },
  "/long-distance-movers/": { en: "Long-Distance Movers", es: "Mudanzas de Larga Distancia" },
  "/storage-solutions/": { en: "Storage Solutions", es: "Almacenamiento" },
  "/commercial-movers/": { en: "Commercial Movers", es: "Mudanzas Comerciales" },
  "/packing-services/": { en: "Packing Services", es: "Servicios de Embalaje" },
  "/apartment-movers/": { en: "Apartment Movers", es: "Mudanzas de Apartamentos" },
  "/piano-movers/": { en: "Piano Movers", es: "Mudanzas de Pianos" },
  "/piano-movers-tampa/": { en: "Piano Movers Tampa", es: "Mudanzas de Pianos en Tampa" },
  "/piano-movers-miami/": { en: "Piano Movers Miami", es: "Mudanzas de Pianos en Miami" },
  "/piano-movers-orlando/": { en: "Piano Movers Orlando", es: "Mudanzas de Pianos en Orlando" },
  "/piano-movers-jacksonville/": { en: "Piano Movers Jacksonville", es: "Mudanzas de Pianos en Jacksonville" },
  "/piano-movers-boca-raton/": { en: "Piano Movers Boca Raton", es: "Mudanzas de Pianos en Boca Raton" },
  "/piano-movers-the-villages/": { en: "Piano Movers The Villages", es: "Mudanzas de Pianos en The Villages" },
  "/grand-piano-movers/": { en: "Grand Piano Movers", es: "Mudanzas de Pianos de Cola" },
  "/piano-moving-cost/": { en: "Piano Moving Cost", es: "Costo de Mudanza de Piano" },
  "/movers-in-miami/": { en: "Movers in Miami", es: "Mudanzas en Miami" },
  "/movers-in-hialeah/": { en: "Movers in Hialeah", es: "Mudanzas en Hialeah" },
  "/movers-in-tampa/": { en: "Movers in Tampa", es: "Mudanzas en Tampa" },
  "/movers-in-riverview/": { en: "Movers in Riverview", es: "Mudanzas en Riverview" },
  "/movers-in-orlando/": { en: "Movers in Orlando", es: "Mudanzas en Orlando" },
  "/movers-in-ocala/": { en: "Movers in Ocala", es: "Mudanzas en Ocala" },
  "/movers-in-the-villages/": { en: "Movers in The Villages", es: "Mudanzas en The Villages" },
  "/movers-in-jacksonville/": { en: "Movers in Jacksonville", es: "Mudanzas en Jacksonville" },
  "/movers-in-tallahassee/": { en: "Movers in Tallahassee", es: "Mudanzas en Tallahassee" },
  "/movers-in-pensacola/": { en: "Movers in Pensacola", es: "Mudanzas en Pensacola" },
  "/movers-in-sarasota/": { en: "Movers in Sarasota", es: "Mudanzas en Sarasota" },
  "/movers-in-naples/": { en: "Movers in Naples", es: "Mudanzas en Naples" },
  "/movers-in-boca-raton/": { en: "Movers in Boca Raton", es: "Mudanzas en Boca Raton" },
  "/contact/": { en: "Contact", es: "Contacto" },
  "/about/": { en: "About Us", es: "Quiénes Somos" },
  "/blog/": { en: "Blog", es: "Blog" },
  "/privacy-policy/": { en: "Privacy Policy", es: "Política de Privacidad" },
  "/terms/": { en: "Terms of Service", es: "Términos de Servicio" },
};

const HUBS = {
  services: { en: "Services", es: "Servicios" },
  cities: { en: "Florida Movers", es: "Mudanzas en Florida" },
  piano: { en: "Piano Movers", es: "Mudanzas de Pianos" },
  blog: { en: "Blog", es: "Blog" },
};

type Crumb = { name: string; path: string };

function prettify(slug: string) {
  return slug
    .replace(/^\/|\/$/g, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function withLang(path: string, lang: Lang) {
  if (lang === "en") return path;
  return path === "/" ? "/es/" : `/es${path}`;
}

export function buildCrumbs(pathname: string): { lang: Lang; crumbs: Crumb[]; bare: string } {
  const lang = langFromPath(pathname);
  const bare = stripLang(pathname.endsWith("/") ? pathname : `${pathname}/`);
  const home = { name: lang === "es" ? "Inicio" : "Home", path: withLang("/", lang) };
  if (bare === "/") return { lang, crumbs: [home], bare };

  const crumbs: Crumb[] = [home];
  const isCity = bare.startsWith("/movers-in-");
  const isPianoCity = bare.startsWith("/piano-movers-") || bare === "/grand-piano-movers/" || bare === "/piano-moving-cost/";
  const isBlogPost = bare.startsWith("/blog/") && bare !== "/blog/";

  if (isCity) {
    crumbs.push({ name: HUBS.cities[lang], path: withLang("/local-movers-in-florida/", lang) });
  } else if (isPianoCity) {
    crumbs.push({ name: HUBS.piano[lang], path: withLang("/piano-movers/", lang) });
  } else if (isBlogPost) {
    crumbs.push({ name: HUBS.blog[lang], path: withLang("/blog/", lang) });
  } else if (
    bare !== "/contact/" &&
    bare !== "/about/" &&
    bare !== "/blog/" &&
    bare !== "/privacy-policy/" &&
    bare !== "/terms/"
  ) {
    crumbs.push({ name: HUBS.services[lang], path: withLang("/local-movers-in-florida/", lang) });
  }

  let name = LABELS[bare]?.[lang];
  if (!name && isBlogPost) {
    const slug = bare.replace("/blog/", "").replace(/\/$/, "");
    name = BLOG_POSTS.find((p) => p.slug === slug)?.title ?? prettify(slug);
  }
  const last = { name: name ?? prettify(bare), path: withLang(bare, lang) };
  // Avoid duplicating the hub when the page *is* the hub.
  if (crumbs[crumbs.length - 1]?.path !== last.path) crumbs.push(last);

  return { lang, crumbs, bare };
}

/** Service, city, piano and blog pages carry the freshness line. */
function showsLastUpdated(bare: string) {
  if (bare === "/" || bare === "/contact/" || bare === "/privacy-policy/" || bare === "/terms/") return false;
  return true;
}

export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { lang, crumbs, bare } = buildCrumbs(pathname);
  if (crumbs.length < 2) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };

  const updatedLabel = lang === "es" ? "Última actualización" : "Last updated";

  return (
    <div className="border-b border-border bg-surface-alt/60">
      <div className="container-page flex flex-wrap items-center justify-between gap-2 py-2.5">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" />}
                  {isLast ? (
                    <span className="font-semibold text-ink" aria-current="page">
                      {c.name}
                    </span>
                  ) : (
                    <Link to={c.path as "/"} className="hover:text-brand transition">
                      {c.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
        {showsLastUpdated(bare) && (
          <p className="text-xs text-muted-foreground">
            {updatedLabel}: <time dateTime="2026-08">{LAST_UPDATED[lang]}</time>
          </p>
        )}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
