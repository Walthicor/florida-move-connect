// Blog post registry. Add new posts by appending an entry here.
export type BlogCategory =
  | "Moving Costs"
  | "Moving Guides"
  | "Florida Cities"
  | "Moving Tips";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // ISO
  dateLabel: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-much-do-movers-cost-florida",
    title: "How Much Do Movers Cost in Florida? (2026 Price Guide)",
    excerpt:
      "Movers in Florida cost $400–$1,600 for a local move and $2,200–$6,500+ long distance. Full 2026 breakdown by home size, city and season.",
    category: "Moving Costs",
    date: "2026-01-15",
    dateLabel: "January 15, 2026",
    image: "/images/hero-family.jpg",
    imageAlt: "Florida movers loading a truck",
    metaTitle: "How Much Do Movers Cost in Florida? 2026 Price Guide",
    metaDescription:
      "Movers in Florida cost $400-$1,600 for local moves and $2,200-$6,500 long distance. Full 2026 price breakdown by home size, city and season.",
  },
  {
    slug: "florida-moving-checklist-8-weeks",
    title: "The Ultimate Florida Moving Checklist (8-Week Timeline)",
    excerpt:
      "Complete 8-week moving checklist for Florida — booking movers 6 weeks out, condo COIs, hurricane-season prep and humidity-safe packing.",
    category: "Moving Guides",
    date: "2026-01-22",
    dateLabel: "January 22, 2026",
    image: "/images/family-moving.jpg",
    imageAlt: "Florida family planning their move with a checklist",
    metaTitle: "Florida Moving Checklist: Week-by-Week 2026 Guide",
    metaDescription:
      "Complete 8-week moving checklist for Florida — from booking movers 6 weeks out to hurricane-season prep. Downloadable timeline + local tips.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
