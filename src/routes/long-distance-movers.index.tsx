import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/long-distance-movers/")({
  head: () => ({
    meta: [
      { title: "Long-Distance Movers — Free Quotes | Florida Movers Direct" },
      { name: "description", content: "Moving out of state or across the country? Compare free quotes from licensed long-distance movers." },
      { property: "og:title", content: "Long-Distance Movers" },
      { property: "og:description", content: "Compare free quotes from licensed long-distance Florida movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Long Distance"
      title="Long-Distance Movers"
      description="Moving out of state or cross-country? We'll match you with FMCSA-licensed long-distance movers."
      image="/images/movers-truck.jpg"
    />
  ),
});
