import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { routeTree } from "@/routeTree.gen";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { REDIRECT_PATHS } from "@/lib/redirects";

const BASE_URL = "https://floridamoversdirect.com";

type AnyRoute = { fullPath?: string; children?: unknown };

/** Walk the generated route tree and collect every concrete page path. */
function collectPaths(route: AnyRoute, out: Set<string>) {
  const full = route.fullPath;
  if (typeof full === "string" && full.length > 0) {
    out.add(full);
  }
  const children = route.children;
  if (children) {
    const list = Array.isArray(children) ? children : Object.values(children);
    for (const child of list) collectPaths(child as AnyRoute, out);
  }
  return out;
}

const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** Public, indexable, HTTP-200 page paths derived from the real route table. */
export function getSitemapPaths(): string[] {
  const raw = Array.from(collectPaths(routeTree as AnyRoute, new Set<string>()));
  const paths = new Set<string>();

  for (const p of raw) {
    if (p.includes("$") || p.includes("*")) continue; // dynamic / splat
    if (p.startsWith("/api/") || p.startsWith("/lovable")) continue;
    if (p.includes("sitemap")) continue;
    const path = withSlash(p);
    if (REDIRECT_PATHS.includes(path)) continue; // 301, never 200
    paths.add(path);
  }

  // Dynamic blog articles (EN only — Spanish articles do not exist).
  for (const post of BLOG_POSTS) paths.add(`/blog/${post.slug}/`);

  return Array.from(paths).sort();
}

function priorityFor(path: string): string {
  if (path === "/" || path === "/es/") return "1.0";
  if (path.startsWith("/blog/") && path !== "/blog/") return "0.6";
  if (path === "/blog/" || path === "/es/blog/") return "0.5";
  if (path.includes("privacy-policy") || path.includes("terms")) return "0.2";
  if (path.includes("contact")) return "0.6";
  return "0.8";
}

function changefreqFor(path: string): string {
  if (path === "/" || path === "/es/" || path.endsWith("/blog/")) return "weekly";
  if (path.includes("privacy-policy") || path.includes("terms")) return "yearly";
  return "monthly";
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = getSitemapPaths();
        const all = new Set(paths);

        const urls = paths.map((path) => {
          const isEs = path === "/es/" || path.startsWith("/es/");
          const bare = isEs ? (path === "/es/" ? "/" : path.slice(3)) : path;
          const enPath = bare;
          const esPath = bare === "/" ? "/es/" : `/es${bare}`;
          // Only emit hreflang alternates when BOTH versions really exist.
          const hasPair = all.has(enPath) && all.has(esPath);

          return [
            `  <url>`,
            `    <loc>${BASE_URL}${path}</loc>`,
            ...(hasPair
              ? [
                  `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${enPath}"/>`,
                  `    <xhtml:link rel="alternate" hreflang="es" href="${BASE_URL}${esPath}"/>`,
                  `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${enPath}"/>`,
                ]
              : []),
            `    <changefreq>${changefreqFor(path)}</changefreq>`,
            `    <priority>${priorityFor(path)}</priority>`,
            `  </url>`,
          ].join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
