// Central SEO helper for TanStack Start head() blocks.
// Provides absolute canonical URLs, Open Graph, Twitter cards, hreflang
// alternates, and JSON-LD (Service + FAQPage) for every route.

import type { Lang } from "./i18n";
import { enUrlFor, esUrlFor } from "./i18n";

export const SITE_URL = "https://floridamoversdirect.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-family.jpg`;
export const ORG_LOGO = `${SITE_URL}/images/logo.jpg`;

export const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Florida Movers Direct",
  url: SITE_URL,
  logo: ORG_LOGO,
  areaServed: "Florida",
  description:
    "Free platform connecting Florida residents with licensed, FDACS and FMCSA-verified moving companies.",
};

export type FaqItem = { q: string; a: string };
export type ServiceMeta = { serviceType: string; areaServed?: string };

export interface PageHeadOptions {
  /**
   * Route path with trailing slash. For EN pages the underlying slug path
   * (e.g. "/movers-in-miami/"). Also accepts the ES path ("/es/movers-in-miami/"),
   * which is normalized so hreflang alternates always resolve to the same slug.
   */
  path: string;
  title: string;
  description: string;
  image?: string;
  faqs?: FaqItem[];
  service?: ServiceMeta;
  /** Defaults to "en". Set "es" on every Spanish route. */
  lang?: Lang;
  /** Skip hreflang alternates when no translated twin exists (e.g. blog articles). */
  noAlternates?: boolean;
}

export function pageHead(opts: PageHeadOptions) {
  const lang: Lang = opts.lang ?? "en";

  // Normalize the incoming path to the underlying slug (never includes /es/).
  const bareSlug =
    opts.path === "/es" || opts.path === "/es/"
      ? "/"
      : opts.path.startsWith("/es/")
      ? opts.path.slice(3)
      : opts.path;

  const enPath = enUrlFor(bareSlug);
  const esPath = esUrlFor(bareSlug);
  const canonicalPath = lang === "es" ? esPath : enPath;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const enUrl = `${SITE_URL}${enPath}`;
  const esUrl = `${SITE_URL}${esPath}`;

  const image = opts.image
    ? opts.image.startsWith("http")
      ? opts.image
      : `${SITE_URL}${opts.image}`
    : DEFAULT_OG_IMAGE;

  const scripts: Array<{ type: string; children: string }> = [];

  if (opts.service) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: opts.service.serviceType,
        areaServed: opts.service.areaServed ?? "Florida",
        provider: {
          "@type": "Organization",
          name: "Florida Movers Direct",
          url: SITE_URL,
          logo: ORG_LOGO,
        },
      }),
    });
  }

  if (opts.faqs && opts.faqs.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: opts.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    });
  }

  const ogLocale = lang === "es" ? "es_US" : "en_US";
  const ogLocaleAlt = lang === "es" ? "en_US" : "es_US";

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:image", content: image },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Florida Movers Direct" },
      { property: "og:locale", content: ogLocale },
      { property: "og:locale:alternate", content: ogLocaleAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      ...(opts.noAlternates
        ? []
        : [
            { rel: "alternate", hrefLang: "en", href: enUrl },
            { rel: "alternate", hrefLang: "es", href: esUrl },
            { rel: "alternate", hrefLang: "x-default", href: enUrl },
          ]),
    ],
    scripts,
  };
}
