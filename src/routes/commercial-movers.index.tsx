import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/commercial-movers/")({
  head: () => ({
    meta: [
      { title: "Commercial Movers in Florida — Free Office Move Quotes" },
      { name: "description", content: "Office and business relocation in Florida. Compare free quotes from commercial moving specialists." },
      { property: "og:title", content: "Commercial Movers" },
      { property: "og:description", content: "Office & business relocation quotes in Florida." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Commercial"
      title="Commercial Movers"
      description="Office relocations, warehouses, retail — commercial moving specialists across Florida."
      image="/images/professional-mover.jpg"
    />
  ),
});
