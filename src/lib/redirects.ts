// Legacy / WordPress slug redirects. Every entry is served as a 301.
// Sitemap generation excludes these paths (they never return 200).
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/miami-movers/": "/movers-in-miami/",
  "/mover-in-tampa/": "/movers-in-tampa/",
  "/local-movers/": "/local-movers-in-florida/",
  "/moving-storage/": "/storage-solutions/",
  "/moving-and-storage-in-florida/": "/storage-solutions/",
  "/mudanzas-f/": "/es/",
  "/about-us/": "/about/",
  "/terms-of-service/": "/terms/",
  "/how-it-works/": "/",
  "/tampa-piano-movers/": "/piano-movers-tampa/",
  "/cookie-policy-eu/": "/privacy-policy/",
  "/blog/moving-to-florida-guide/": "/blog/interstate-move-to-florida-timeline/",
};

export const REDIRECT_PATHS = Object.keys(LEGACY_REDIRECTS);
