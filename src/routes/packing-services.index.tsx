import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/packing-services/")({
  head: () => ({
    meta: [
      { title: "Packing Services in Florida — Free Quotes | FMD" },
      { name: "description", content: "Full-service or partial packing by licensed Florida movers. Compare free quotes today." },
      { property: "og:title", content: "Packing Services" },
      { property: "og:description", content: "Compare free packing service quotes in Florida." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Packing"
      title="Packing Services"
      description="Let the pros handle the boxes. Full-service and partial packing quotes from vetted Florida movers."
      image="/images/family-moving.jpg"
    />
  ),
});
