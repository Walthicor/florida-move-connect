import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, ChevronDown, Tag, User } from "lucide-react";
import { getPost, BLOG_POSTS } from "@/lib/blog-posts";
import { pageHead, SITE_URL, ORG_LOGO } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug/")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Florida Movers Direct" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const path = `/blog/${params.slug}/`;
    const base = pageHead({
      path,
      title: post.metaTitle,
      description: post.metaDescription,
      image: post.image,
      faqs: FAQS,
    });
    const url = `${SITE_URL}${path}`;
    const image = post.image.startsWith("http")
      ? post.image
      : `${SITE_URL}${post.image}`;
    const blogPosting = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: [image],
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Organization",
        name: "Florida Movers Direct Team",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Florida Movers Direct",
        logo: { "@type": "ImageObject", url: ORG_LOGO },
      },
    };
    return {
      ...base,
      scripts: [
        ...(base.scripts ?? []),
        { type: "application/ld+json", children: JSON.stringify(blogPosting) },
      ],
    };
  },
  notFoundComponent: NotFoundView,
  component: ArticlePage,
});

const FAQS = [
  {
    q: "What do movers charge per hour in Florida?",
    a: "Between $95 and $150 per hour for two movers and a truck; each additional mover adds $40-$60/hour. Miami and Naples sit at the top of that range, Ocala and Gainesville near the bottom.",
  },
  {
    q: "Should I tip my movers?",
    a: "Tipping is customary but optional: $4-$6 per mover per hour, or 10-15% of the bill split among the crew, for good service. Cold water on a Florida summer job is almost as appreciated.",
  },
  {
    q: "Do movers require a deposit in Florida?",
    a: "Reputable movers ask for $0-$200 to reserve a date. Demands for large cash deposits (25%+ upfront) are a red flag under Florida consumer protection guidance.",
  },
];

function NotFoundView() {
  return (
    <section className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-ink">Article not found</h1>
      <p className="mt-2 text-muted-foreground">
        The post you're looking for doesn't exist.
      </p>
      <Link
        to="/blog/"
        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white"
      >
        Back to the blog <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

function ArticlePage() {
  const { post } = Route.useLoaderData();

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-surface-alt border-b border-border">
        <div className="container-page py-12 md:py-16 max-w-[820px]">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-brand">
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <time dateTime={post.date}>{post.dateLabel}</time>
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <User className="h-3 w-3" /> Florida Movers Direct Team
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      {/* Hero image */}
      <div className="container-page pt-8 md:pt-10 max-w-[820px]">
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full rounded-2xl object-cover aspect-[16/9] shadow-soft"
        />
      </div>

      {/* Body */}
      <div className="container-page py-10 md:py-12 max-w-[720px] prose-blog">
        <p className="text-lg text-ink leading-relaxed">
          Movers in Florida cost <strong>$400 to $1,600</strong> for a local
          move and <strong>$2,200 to $6,500+</strong> for a long-distance move,
          as of 2026. A typical 2-3 bedroom local move averages{" "}
          <strong>$850-$1,500</strong>, with hourly rates of{" "}
          <strong>$95-$150</strong> for a two-mover crew and truck. Below is
          the full breakdown by home size, plus the factors that push your
          price up or down — and how to cut 20-30% off legally.
        </p>

        <h2 className="mt-10 font-display text-2xl md:text-3xl font-bold text-ink">
          Florida Moving Costs by Home Size (2026)
        </h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-surface-alt text-ink">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Home Size</th>
                <th className="text-left px-4 py-3 font-semibold">Local (under 50 mi)</th>
                <th className="text-left px-4 py-3 font-semibold">Long Distance (1,000+ mi)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["Studio", "$400-$700", "$1,200-$2,500"],
                ["1 Bedroom", "$500-$900", "$1,800-$3,200"],
                ["2-3 Bedroom", "$850-$1,600", "$2,800-$5,000"],
                ["4+ Bedroom", "$1,400-$2,800", "$4,500-$8,000+"],
              ].map((row) => (
                <tr key={row[0]} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-ink">{row[0]}</td>
                  <td className="px-4 py-3 text-ink">{row[1]}</td>
                  <td className="px-4 py-3 text-ink">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold text-ink">
          The 6 Factors That Set Your Price
        </h2>
        <ul className="mt-5 space-y-4 text-ink">
          <li>
            <strong>Distance and access:</strong> stairs, elevators, long
            carries — each adds time or flat fees ($40-$100 per flight of
            stairs).
          </li>
          <li>
            <strong>Season:</strong> May through September is peak (school
            calendars + lease turnovers). Expect 20-30% higher rates than
            winter.
          </li>
          <li>
            <strong>Date:</strong> the last weekend of any month is the most
            expensive 72 hours in moving. Mid-month weekdays are cheapest.
          </li>
          <li>
            <strong>Packing:</strong> full professional packing adds
            $600-$1,200 for a typical home but saves 3-4 days of your labor.
          </li>
          <li>
            <strong>Specialty items:</strong> pianos ($150-$800), safes, pool
            tables and art crating are quoted separately.
          </li>
          <li>
            <strong>Storage:</strong> if your new home is not ready,
            storage-in-transit runs $150-$400/month.
          </li>
        </ul>
      </div>

      {/* Mid-article CTA */}
      <MidCta />

      <div className="container-page py-10 md:py-12 max-w-[720px]">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-ink">
          How to Pay Less (Without Risking a Scam)
        </h2>
        <p className="mt-4 text-ink">
          Compare 3-4 licensed movers — prices for the identical job routinely
          vary 30-40%. Move mid-month on a weekday. Declutter first: movers
          price by time or weight, and the average family pays to transport
          hundreds of pounds it will never use. Book 4+ weeks ahead in peak
          season. And never choose a mover just because the quote is
          dramatically lowest — quotes 40% under market are the classic setup
          for hostage-load scams.
        </p>

        <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold text-ink">
          Frequently Asked Questions
        </h2>
        <FaqList />

        {/* Author box */}
        <div className="mt-12 rounded-2xl border border-border bg-surface-alt p-6 flex gap-4 items-start">
          <div className="h-12 w-12 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
            <User className="h-6 w-6" />
          </div>
          <div>
            <div className="font-display font-bold text-ink">
              Florida Movers Direct Team
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              We connect Florida residents with FDACS and FMCSA-verified
              licensed movers. Our editorial team publishes practical,
              no-fluff guides based on real 2026 pricing across the state.
            </p>
          </div>
        </div>
      </div>

      {/* End CTA is the global CtaBand rendered by __root; add an extra in-content one for emphasis */}
      <MidCta variant="end" />
    </article>
  );
}

function MidCta({ variant = "mid" }: { variant?: "mid" | "end" }) {
  return (
    <section className="bg-cta text-white">
      <div className="container-page py-10 md:py-12 max-w-[820px] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <h3 className="font-display text-xl md:text-2xl font-bold">
            {variant === "end"
              ? "Ready to compare real Florida movers?"
              : "See what your move actually costs"}
          </h3>
          <p className="mt-1 text-white/90 text-sm">
            Get up to 4 free quotes from licensed FDACS-verified movers.
          </p>
        </div>
        <Link
          to="/contact/"
          className="pulse-cta inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-cta shadow-card"
        >
          Get Free Quotes <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-white overflow-hidden">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-display font-semibold text-ink">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition ${
                  isOpen ? "rotate-180 text-brand" : "text-muted-foreground"
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-muted-foreground">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Make sure the module is not tree-shaken to nothing when only 1 post exists.
void BLOG_POSTS;
