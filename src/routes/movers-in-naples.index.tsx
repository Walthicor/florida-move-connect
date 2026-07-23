import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-naples/")({
  head: () => ({
    meta: [
      { title: "Movers in Naples — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed Naples movers. FDACS & FMCSA verified." },
      { property: "og:title", content: "Movers in Naples" },
      { property: "og:description", content: "Compare free quotes from licensed Naples movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Naples"
      title="Movers in Naples"
      description="Southwest Florida moving pros — white-glove service on the Paradise Coast."
      image="/images/quote-couple.jpg"
    />
  ),
});
