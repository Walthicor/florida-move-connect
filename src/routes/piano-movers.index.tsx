import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/piano-movers/")({
  head: () => ({
    meta: [
      { title: "Piano Movers in Florida — Specialty Move Quotes" },
      { name: "description", content: "Upright, baby grand, or concert grand — compare free quotes from specialty piano movers." },
      { property: "og:title", content: "Piano Movers" },
      { property: "og:description", content: "Specialty piano moving quotes in Florida." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Specialty"
      title="Piano Movers"
      description="Upright, baby grand, concert grand — trained piano movers with the right equipment and insurance."
      image="/images/professional-mover.jpg"
    />
  ),
});
