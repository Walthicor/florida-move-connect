import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-ocala/")({
  head: () => ({
    meta: [
      { title: "Movers in Ocala — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed Ocala movers. FDACS & FMCSA verified." },
      { property: "og:title", content: "Movers in Ocala" },
      { property: "og:description", content: "Compare free quotes from licensed Ocala movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Ocala"
      title="Movers in Ocala"
      description="North-Central Florida movers who know Marion County like the back of their hand."
      image="/images/professional-mover.jpg"
    />
  ),
});
