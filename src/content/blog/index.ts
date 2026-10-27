// Registry of blog articles that live in their own files (October 2026 onward).
// The original 9 articles still live in src/routes/blog.$slug.index.tsx.
import type { BlogArticleModule } from "./types";
import costNyToFlorida from "./cost-to-move-new-york-to-florida";
import bindingEstimates from "./binding-vs-non-binding-moving-estimates";
import newResidentChecklist from "./new-florida-resident-checklist";
import climateStorage from "./climate-controlled-storage-florida";
import movingOutOfFlorida from "./moving-out-of-florida-cost";
import seniorDownsizing from "./downsizing-for-seniors-florida";
import lastMinuteMovers from "./last-minute-movers-florida";
import smallMoves from "./small-moves-hourly-movers-florida";

export const ARTICLE_MODULES: BlogArticleModule[] = [
  costNyToFlorida,
  bindingEstimates,
  newResidentChecklist,
  climateStorage,
  movingOutOfFlorida,
  seniorDownsizing,
  lastMinuteMovers,
  smallMoves,
];

export const ARTICLE_BY_SLUG: Record<string, BlogArticleModule> = Object.fromEntries(
  ARTICLE_MODULES.map((m) => [m.meta.slug, m]),
);
