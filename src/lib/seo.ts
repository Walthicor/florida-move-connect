// Central SEO helper for TanStack Start head() blocks.
// Provides absolute canonical URLs, Open Graph, Twitter cards, and JSON-LD
// (Service + FAQPage) for every route.

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
  /** Route path with trailing slash, e.g. "/local-movers-in-florida/" */
  path: string;
  title: string;
  description: string;
  /** Absolute or root-relative image URL. Defaults to site social image. */
  image?: string;
  faqs?: FaqItem[];
  service?: ServiceMeta;
}

export function pageHead(opts: PageHeadOptions) {
  const url = `${SITE_URL}${opts.path}`;
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

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Florida Movers Direct" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
