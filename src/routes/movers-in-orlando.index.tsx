import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-orlando/")({
  head: () => ({
    meta: [
      { title: "Movers in Orlando — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed Orlando movers. FDACS & FMCSA verified." },
      { property: "og:title", content: "Movers in Orlando" },
      { property: "og:description", content: "Compare free quotes from licensed Orlando movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Orlando"
      title="Movers in Orlando"
      description="Central Florida's top-rated moving pros — compare quotes and book with confidence."
      image="/images/family-moving.jpg"
    />
  ),
});
