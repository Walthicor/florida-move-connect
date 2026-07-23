import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-miami/")({
  head: () => ({
    meta: [
      { title: "Movers in Miami — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed movers in Miami, FL. FDACS & FMCSA verified partners." },
      { property: "og:title", content: "Movers in Miami" },
      { property: "og:description", content: "Compare free quotes from licensed Miami movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Miami"
      title="Movers in Miami"
      description="Miami-Dade's most trusted moving pros — compare up to 4 free quotes in about 2 minutes."
      image="/images/quote-couple.jpg"
    />
  ),
});
