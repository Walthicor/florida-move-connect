import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { BookOpen, ArrowRight } from "lucide-react";

const PATH = "/es/blog/";

export const Route = createFileRoute("/es/blog/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Blog | Guías de Mudanzas en Florida — Florida Movers Direct",
      description:
        "Guías, consejos y precios reales de mudanzas en Florida. Costos 2026, comparativos de empresas y cómo prepararse para su mudanza.",
    }),
  component: Page,
});

function Page() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-24 max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          <BookOpen className="h-3.5 w-3.5" />
          Blog
        </span>
        <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold text-ink leading-[1.05]">
          Guías de mudanzas en Florida
        </h1>
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          Estamos preparando artículos con precios, consejos y comparativos para ayudarle a tomar decisiones informadas. Mientras tanto, comience por nuestras guías principales:
        </p>
        <ul className="mt-8 space-y-3">
          {[
            { label: "Guía completa: mudanzas locales en Florida", to: "/es/local-movers-in-florida/" },
            { label: "Larga distancia: costos y empresas verificadas", to: "/es/long-distance-movers/" },
            { label: "Almacenamiento y storage-in-transit", to: "/es/storage-solutions/" },
            { label: "Mudanzas en Miami: condos y COIs", to: "/es/movers-in-miami/" },
          ].map((l) => (
            <li key={l.to}>
              <Link
                to={l.to as "/"}
                className="flex items-center justify-between rounded-xl border border-border bg-white p-4 shadow-soft hover:border-brand hover:text-brand transition"
              >
                <span className="font-semibold text-ink">{l.label}</span>
                <ArrowRight className="h-4 w-4 text-brand" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
