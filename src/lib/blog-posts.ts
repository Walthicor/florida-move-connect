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
    image: "/__l5e/assets-v1/eb89c274-9067-43d1-addc-f9a6378e584d/local-movers-in-miami-costs.jpg",
    imageAlt: "Couple reviewing a local moving estimate in Miami",
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
    image: "/__l5e/assets-v1/e6d70080-93a6-4f16-a558-c2651f439f34/florida-moving-checklist.jpg",
    imageAlt: "Florida couple reviewing their moving quote on a laptop",
    metaTitle: "Florida Moving Checklist: Week-by-Week 2026 Guide",
    metaDescription:
      "Complete 8-week moving checklist for Florida — from booking movers 6 weeks out to hurricane-season prep. Downloadable timeline + local tips.",
  },
  {
    slug: "snowbird-moving-florida-guide",
    title: "Snowbird Moving to Florida: The Complete Guide",
    excerpt:
      "Best dates, costs ($1,800-$4,500), storage-in-transit, gated community rules and domicile basics for snowbirds heading south in 2026.",
    category: "Moving Guides",
    date: "2026-02-05",
    dateLabel: "February 5, 2026",
    image: "/__l5e/assets-v1/42d63b09-d1cb-442b-aa30-f5abf9513a27/snowbird-moving-florida.jpg",
    imageAlt: "Retired couple arriving at a Florida home with suitcases at golden hour",
    metaTitle: "Snowbird Moving to Florida: 2026 Seasonal Guide",
    metaDescription:
      "Complete snowbird moving guide: best dates, costs, storage-in-transit, gated community rules, and how to time your Florida arrival. 2026 updated.",
  },
  {
    slug: "hurricane-season-moving-florida",
    title: "Moving to Florida During Hurricane Season: What to Know",
    excerpt:
      "Yes, you can move during Florida hurricane season (June 1-Nov 30). Full-value insurance, force majeure clauses, NOAA monitoring and the safer months within the season.",
    category: "Moving Guides",
    date: "2026-02-19",
    dateLabel: "February 19, 2026",
    image: "/__l5e/assets-v1/a6234d7c-7531-410e-afe8-071b0d3ebd04/hurricane-moving-florida.jpg",
    imageAlt: "Moving truck driving on a Florida highway under dramatic hurricane-season clouds",
    metaTitle: "Moving to Florida During Hurricane Season: 2026 Guide",
    metaDescription:
      "Can you move during Florida hurricane season? Yes — with the right prep. Best months within the season, insurance coverage, backup dates and evacuation planning.",
  },
  {
    slug: "professional-movers-vs-diy-truck-florida",
    title: "Professional Movers vs Rental Truck: The Real Florida Cost Comparison",
    excerpt:
      "Rent a truck or hire movers? Full 2026 cost comparison including hidden Florida costs — fuel, insurance, mileage, damage risk. See when DIY actually saves money.",
    category: "Moving Tips",
    date: "2026-03-05",
    dateLabel: "March 5, 2026",
    image: "/__l5e/assets-v1/2563bd2d-da1d-4f70-8d6e-d4c3497a0286/professional-movers-vs-diy-truck-florida.jpg",
    imageAlt: "Florida couple comparing a rental moving truck and a professional moving van in their driveway",
    metaTitle: "Professional Movers vs DIY Truck in Florida: Real 2026 Cost Comparison",
    metaDescription:
      "Rent a truck or hire movers? Full cost comparison including hidden Florida costs — fuel, insurance, mileage, damage risk. See when DIY actually saves money.",
  },
  {
    slug: "moving-with-pets-florida-heat",
    title: "Moving with Pets in Florida: The Complete Safety Guide",
    excerpt:
      "Florida heat kills pets faster than most owners realize. Full safety protocol: transport rules, hot car risks, hotel policies, vet timing and settling in tips.",
    category: "Moving Tips",
    date: "2026-03-19",
    dateLabel: "March 19, 2026",
    image: "/__l5e/assets-v1/99727100-1641-4616-8499-9bbb222dd194/moving-with-pets-florida-heat.jpg",
    imageAlt: "Happy family with a golden retriever and cat carrier inside an air-conditioned SUV in Florida",
    metaTitle: "Moving with Pets in Florida Heat: Safety Guide 2026",
    metaDescription:
      "Moving with dogs, cats or exotic pets in Florida heat? Complete safety guide: transport rules, hot car risks, hotel policies, vet timing and settling in tips.",
  },
  {
    slug: "interstate-move-to-florida-timeline",
    title: "How Long Does an Interstate Move to Florida Really Take?",
    excerpt:
      "Interstate moves to Florida take 1-14 days for delivery. Full timeline by origin state, factors that speed up or delay, and expedited options.",
    category: "Moving Guides",
    date: "2026-04-02",
    dateLabel: "April 2, 2026",
    image: "/__l5e/assets-v1/4071e295-1195-46ef-b3b4-22589d4b409e/interstate-move-to-florida.jpg",
    imageAlt: "White moving truck driving south on an interstate highway toward Florida with palm trees on the horizon",
    metaTitle: "How Long Does an Interstate Move to Florida Take? (2026)",
    metaDescription:
      "Interstate moves to Florida take 1-14 days for delivery. Full timeline by origin state, factors that speed up or delay, and expedited options.",
  },
  {
    slug: "moving-insurance-florida-explained",
    title: "Moving Insurance in Florida: What You Actually Need",
    excerpt:
      "Released value vs full-value protection vs third-party insurance — what each covers, real 2026 costs, and what Florida movers legally must offer.",
    category: "Moving Guides",
    date: "2026-04-16",
    dateLabel: "April 16, 2026",
    image: "/__l5e/assets-v1/bbd937a6-cd2b-4a35-bad3-9ab459280159/moving-insurance-florida.jpg",
    imageAlt: "Florida homeowner reviewing a moving insurance document at a bright kitchen table with a laptop",
    metaTitle: "Moving Insurance in Florida: What You Actually Need (2026)",
    metaDescription:
      "Moving insurance explained: released value vs full-value protection vs third-party. What each covers, real costs, and what movers legally must offer.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
