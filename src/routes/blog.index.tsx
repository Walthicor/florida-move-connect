import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead({
      path: "/blog/",
      title: "Florida Moving Blog — Costs, Guides & City Tips",
      description:
        "Practical Florida moving guides: costs, city-by-city tips, packing, and how to hire licensed movers. Updated for 2026.",
    }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Blog
        </span>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-ink">
          Florida moving guides & tips
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Real editorial content from the Florida Movers Direct team — costs,
          city guides, and how to hire licensed movers with confidence.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug/"
              params={{ slug: p.slug }}
              className="group rounded-2xl border border-border bg-white overflow-hidden shadow-soft hover:-translate-y-0.5 hover:border-brand transition"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-alt">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.03] transition"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">
                    {p.category}
                  </span>
                  <time className="text-muted-foreground" dateTime={p.date}>
                    {p.dateLabel}
                  </time>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-brand transition">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
