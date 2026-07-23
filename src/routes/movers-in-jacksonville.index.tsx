import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/movers-in-jacksonville/")({
  head: () => ({
    meta: [
      { title: "Movers in Jacksonville — Compare Free Quotes | FMD" },
      { name: "description", content: "Compare free quotes from licensed Jacksonville movers. FDACS & FMCSA verified." },
      { property: "og:title", content: "Movers in Jacksonville" },
      { property: "og:description", content: "Compare free quotes from licensed Jacksonville movers." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Jacksonville"
      title="Movers in Jacksonville"
      description="From the Beaches to Riverside — Duval County's licensed movers ready to quote."
      image="/images/hero-family.jpg"
    />
  ),
});
