import { createFileRoute } from "@tanstack/react-router";
import { PagePlaceholder } from "../components/site/PagePlaceholder";

export const Route = createFileRoute("/storage-solutions/")({
  head: () => ({
    meta: [
      { title: "Storage Solutions in Florida — Free Quotes | FMD" },
      { name: "description", content: "Short-term or long-term storage in Florida. Compare free quotes from secure, licensed facilities." },
      { property: "og:title", content: "Storage Solutions" },
      { property: "og:description", content: "Secure storage in Florida — compare free quotes." },
    ],
  }),
  component: () => (
    <PagePlaceholder
      eyebrow="Storage"
      title="Storage Solutions"
      description="Between moves or just need extra space? Get quotes on secure, climate-controlled storage across Florida."
      image="/images/services-collage.jpg"
    />
  ),
});
