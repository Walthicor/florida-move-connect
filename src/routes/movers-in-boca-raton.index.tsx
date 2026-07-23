import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-boca-raton/")({
  head: () => ({
    meta: [
      { title: "Movers in Boca Raton — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed Boca Raton movers. FDACS & FMCSA verified." },
      { property: "og:title", content: "Movers in Boca Raton" },
      { property: "og:description", content: "Compare free quotes from licensed Boca Raton movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Boca Raton"
      title="Movers in Boca Raton"
      description="Palm Beach County's trusted moving pros — compare free quotes fast."
      image="/images/family-moving.jpg"
    />
  ),
});
