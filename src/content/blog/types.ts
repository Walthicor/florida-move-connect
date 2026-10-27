import type { JSX } from "react";
import type { BlogPost } from "@/lib/blog-posts";

/** One self-contained blog article: metadata, body, FAQs and interlinking. */
export interface BlogArticleModule {
  meta: BlogPost;
  Body: () => JSX.Element;
  faqs: { q: string; a: string }[];
  /** Slugs of 2 related articles (existing or new) shown as "Related guides". */
  silo: string[];
  /** Money-page links shown at the end of the article. Use real site paths with trailing slash. */
  next: {
    service: { to: string; label: string };
    city: { to: string; label: string };
  };
}
