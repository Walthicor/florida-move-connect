// Legacy / WordPress slug redirects. Every entry is served as a 301.
// Sitemap generation excludes these paths (they never return 200).
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/miami-movers/": "/movers-in-miami/",
  "/mover-in-tampa/": "/movers-in-tampa/",
  "/local-movers/": "/local-movers-in-florida/",
  "/moving-storage/": "/storage-solutions/",
  "/furniture-movers/": "/packing-services/",
  "/movers-in-sarasota/": "/local-movers-in-florida/",
  "/mudanzas-f/": "/es/",
};

export const REDIRECT_PATHS = Object.keys(LEGACY_REDIRECTS);
