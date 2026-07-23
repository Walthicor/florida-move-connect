import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/apartment-movers/")({
  head: () => ({
    meta: [
      { title: "Apartment Movers in Florida — Free Quotes | FMD" },
      { name: "description", content: "Studios to 3-bedroom apartments — compare free quotes from licensed Florida apartment movers." },
      { property: "og:title", content: "Apartment Movers" },
      { property: "og:description", content: "Compare free apartment moving quotes in Florida." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Apartments"
      title="Apartment Movers"
      description="Stairs, elevators, tight hallways — apartment moving pros who've seen it all."
      image="/images/family-moving.jpg"
    />
  ),
});
