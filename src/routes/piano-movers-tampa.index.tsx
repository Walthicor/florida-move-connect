import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/piano-movers-tampa/")({
  head: () => ({
    meta: [
      { title: "Piano Movers in Tampa — Specialty Move Quotes | FMD" },
      { name: "description", content: "Compare free quotes from specialty piano movers in Tampa Bay." },
      { property: "og:title", content: "Piano Movers Tampa" },
      { property: "og:description", content: "Compare free piano moving quotes in Tampa." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Piano Movers · Tampa"
      title="Piano Movers in Tampa"
      description="Tampa Bay's specialty piano movers — trained crews, padded trucks, full insurance."
      image="/images/professional-mover.jpg"
    />
  ),
});
