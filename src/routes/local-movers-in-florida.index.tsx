import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/local-movers-in-florida/")({
  head: () => ({
    meta: [
      { title: "Local Movers in Florida — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed local movers across Florida. FDACS & FMCSA verified." },
      { property: "og:title", content: "Local Movers in Florida" },
      { property: "og:description", content: "Compare free quotes from licensed local Florida movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Local Movers"
      title="Local Movers in Florida"
      description="Moving across town or to the next zip code? Compare up to 4 free quotes from licensed local Florida movers."
      image="/images/professional-mover.jpg"
    />
  ),
});
