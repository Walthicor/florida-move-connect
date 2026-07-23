import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Moving Tips & Guides — Florida Movers Direct Blog" },
      { name: "description", content: "Moving guides, tips, and Florida-specific advice from Florida Movers Direct." },
      { property: "og:title", content: "Florida Movers Direct Blog" },
      { property: "og:description", content: "Moving guides & Florida-specific tips." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = [
    { title: "How to pack a Florida kitchen in a day", tag: "Packing" },
    { title: "Moving to Miami: everything you need to know", tag: "Miami" },
    { title: "Long-distance moves from Florida — a checklist", tag: "Long distance" },
    { title: "Hurricane season moving tips", tag: "Florida" },
    { title: "Choosing a licensed Florida mover", tag: "Guide" },
    { title: "Piano moving: what it really costs", tag: "Specialty" },
  ];
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          Blog
        </span>
        <h1 className="mt-2 font-display text-4xl md:text-5xl font-bold text-ink">
          Moving tips & Florida guides
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">
          Practical, no-fluff advice for moving in and around Florida. Posts coming soon.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-white p-6 shadow-soft hover:-translate-y-0.5 hover:border-brand transition"
            >
              <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                {p.tag}
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink">
                {p.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Coming soon — real editorial content lands in the next iteration.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
