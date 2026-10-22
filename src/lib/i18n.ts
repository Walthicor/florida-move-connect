import { useRouterState } from "@tanstack/react-router";

export type Lang = "en" | "es";

/** Detect the current language from a pathname. Everything under /es/ is Spanish. */
export function langFromPath(pathname: string): Lang {
  if (pathname === "/es" || pathname === "/es/") return "es";
  if (pathname.startsWith("/es/")) return "es";
  return "en";
}

/** Strip the /es/ prefix if any, returning the underlying slug path. */
export function stripLang(pathname: string): string {
  if (pathname === "/es" || pathname === "/es/") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3); // "/es/foo/" -> "/foo/"
  return pathname;
}

/**
 * Bare slugs that have a real Spanish twin under /es/. Keep in sync with the
 * es.* route files — the language switcher falls back to /es/ or / when a slug
 * is missing here, so no link ever points at a 404.
 */
export const ES_TWIN_SLUGS = new Set<string>([
  "/",
  "/apartment-movers/",
  "/blog/",
  "/commercial-movers/",
  "/contact/",
  "/local-movers-in-florida/",
  "/long-distance-movers/",
  "/movers-in-boca-raton/",
  "/movers-in-hialeah/",
  "/movers-in-jacksonville/",
  "/movers-in-miami/",
  "/movers-in-naples/",
  "/movers-in-ocala/",
  "/movers-in-orlando/",
  "/movers-in-riverview/",
  "/movers-in-tampa/",
  "/packing-services/",
  "/piano-movers/",
  "/piano-movers-tampa/",
  "/privacy-policy/",
  "/senior-moving-services/",
  "/storage-solutions/",
  "/terms/",
]);

/** True when the given bare slug has a Spanish twin page. */
export function hasEsTwin(bareSlug: string): boolean {
  return ES_TWIN_SLUGS.has(bareSlug);
}

/**
 * Return the twin path in the other language. Same slug, opposite tree.
 * When no twin exists, fall back to the other language's home page.
 */
export function twinPath(pathname: string): string {
  const lang = langFromPath(pathname);
  const bare = stripLang(pathname);
  if (lang === "es") return bare;
  if (bare === "/") return "/es/";
  return hasEsTwin(bare) ? `/es${bare}` : "/es/";
}

/** URL builders for hreflang. */
export function enUrlFor(bareSlug: string): string {
  return bareSlug;
}
export function esUrlFor(bareSlug: string): string {
  return bareSlug === "/" ? "/es/" : `/es${bareSlug}`;
}

/** React hook: current language read from the router state. */
export function useLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return langFromPath(pathname);
}

/** React hook: convenience twin-path for the current route. */
export function useTwinPath(): string {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return twinPath(pathname);
}

/** Shared UI dictionary for chrome (Header, Footer, CTA band, form scaffolding). */
export const t = {
  en: {
    services: "Services",
    locations: "Locations",
    blog: "Blog",
    contact: "Contact",
    getFreeQuotes: "Get Free Quotes",
    languageToggleAria: "Cambiar a Español",
    languageLabel: "Language",
    footerTagline: "Compare free quotes from independent licensed Florida movers. We are not a moving company.",
    licensedInsured: "Licensed & insured partners",
    servicesTitle: "Services",
    citiesTitle: "Cities",
    contactTitle: "Contact",
    contactPage: "Contact page",
    responseWithin: "Response within 1 business hour",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimerRights: "All rights reserved.",
    disclaimerNot: "Not a moving company. We connect you with licensed Florida movers.",
    ctaBandTitle: "Ready to Move? Compare Free Quotes in 2 Minutes",
    ctaBandSub: "Up to 4 quotes from licensed Florida movers. Always free — no obligation.",
    servingArea: "Serving all of Florida — Miami to Pensacola",
  },
  es: {
    services: "Servicios",
    locations: "Ciudades",
    blog: "Blog",
    contact: "Contacto",
    getFreeQuotes: "Cotización Gratis",
    languageToggleAria: "Switch to English",
    languageLabel: "Idioma",
    footerTagline: "Compare cotizaciones gratis de empresas de mudanzas independientes con licencia en Florida. No somos una empresa de mudanzas.",
    licensedInsured: "Empresas licenciadas y aseguradas",
    servicesTitle: "Servicios",
    citiesTitle: "Ciudades",
    contactTitle: "Contacto",
    contactPage: "Página de contacto",
    responseWithin: "Respuesta en 1 hora hábil",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    disclaimerRights: "Todos los derechos reservados.",
    disclaimerNot: "No somos empresa de mudanzas. Le conectamos con empresas licenciadas en Florida.",
    ctaBandTitle: "¿Listo para mudarse? Compare cotizaciones gratis en 2 minutos",
    ctaBandSub: "Hasta 4 cotizaciones de empresas licenciadas en Florida. Siempre gratis, sin compromiso.",
    servingArea: "Cubrimos todo Florida — de Miami a Pensacola",
  },
} as const;

/** Nav lists translated per language, with correct /es/ prefixes. */
export const SERVICES_BY_LANG = {
  en: [
    { label: "Local Movers in Florida", to: "/local-movers-in-florida/" },
    { label: "Long-Distance Movers", to: "/long-distance-movers/" },
    { label: "Storage Solutions", to: "/storage-solutions/" },
    { label: "Commercial Movers", to: "/commercial-movers/" },
    { label: "Packing Services", to: "/packing-services/" },
    { label: "Piano Movers", to: "/piano-movers/" },
    { label: "Piano Movers Tampa", to: "/piano-movers-tampa/" },
    { label: "Apartment Movers", to: "/apartment-movers/" },
    { label: "Senior Moving Services", to: "/senior-moving-services/" },
  ],
  es: [
    { label: "Mudanzas Locales en Florida", to: "/es/local-movers-in-florida/" },
    { label: "Mudanzas de Larga Distancia", to: "/es/long-distance-movers/" },
    { label: "Almacenamiento", to: "/es/storage-solutions/" },
    { label: "Mudanzas Comerciales", to: "/es/commercial-movers/" },
    { label: "Servicios de Embalaje", to: "/es/packing-services/" },
    { label: "Mudanzas de Pianos", to: "/es/piano-movers/" },
    { label: "Mudanzas de Pianos en Tampa", to: "/es/piano-movers-tampa/" },
    { label: "Mudanzas de Apartamentos", to: "/es/apartment-movers/" },
    { label: "Mudanzas para Adultos Mayores", to: "/es/senior-moving-services/" },
  ],
} as const;

export const CITIES_BY_LANG = {
  en: [
    { label: "Miami", to: "/movers-in-miami/" },
    { label: "Hialeah", to: "/movers-in-hialeah/" },
    { label: "Tampa", to: "/movers-in-tampa/" },
    { label: "Riverview", to: "/movers-in-riverview/" },
    { label: "Sarasota", to: "/movers-in-sarasota/" },
    { label: "Orlando", to: "/movers-in-orlando/" },
    { label: "Ocala", to: "/movers-in-ocala/" },
    { label: "The Villages", to: "/movers-in-the-villages/" },
    { label: "Jacksonville", to: "/movers-in-jacksonville/" },
    { label: "Tallahassee", to: "/movers-in-tallahassee/" },
    { label: "Pensacola", to: "/movers-in-pensacola/" },
    { label: "Naples", to: "/movers-in-naples/" },
    { label: "Boca Raton", to: "/movers-in-boca-raton/" },
  ],
  es: [
    { label: "Miami", to: "/es/movers-in-miami/" },
    { label: "Hialeah", to: "/es/movers-in-hialeah/" },
    { label: "Tampa", to: "/es/movers-in-tampa/" },
    { label: "Riverview", to: "/es/movers-in-riverview/" },
    { label: "Orlando", to: "/es/movers-in-orlando/" },
    { label: "Ocala", to: "/es/movers-in-ocala/" },
    { label: "Jacksonville", to: "/es/movers-in-jacksonville/" },
    { label: "Naples", to: "/es/movers-in-naples/" },
    { label: "Boca Raton", to: "/es/movers-in-boca-raton/" },
  ],
} as const;

