import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-tampa/")({
  head: () => ({
    meta: [
      { title: "Movers in Tampa — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed movers in Tampa, FL. FDACS & FMCSA verified." },
      { property: "og:title", content: "Movers in Tampa" },
      { property: "og:description", content: "Compare free quotes from licensed Tampa movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Tampa"
      title="Movers in Tampa"
      description="From South Tampa to Wesley Chapel — licensed Tampa Bay movers ready to quote."
      image="/images/movers-truck.jpg"
    />
  ),
});
