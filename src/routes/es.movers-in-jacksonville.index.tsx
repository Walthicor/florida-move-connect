import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-jacksonville/";
const FAQS = [
  { q: "¿Cubren toda Duval County?", a: "Sí, las 840 millas cuadradas de Jacksonville: Beaches, Southside, Riverside, Mandarin, Northside." },
  { q: "¿Manejan mudanzas militares (PCS)?", a: "Sí. Empresas certificadas para PCS desde NAS Jax y Mayport. Coordinamos con housing y JPPSO." },
  { q: "¿Los puentes afectan el tiempo?", a: "Sí — cruces por Main Street Bridge, Fuller Warren y Buckman pueden sumar 20-40 min en hora pico." },
];

export const Route = createFileRoute("/es/movers-in-jacksonville/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Jacksonville FL | Empresas Licenciadas",
      description: "Empresas de mudanzas licenciadas en Jacksonville y Duval County: precios 2026, traslados militares PCS de NAS Jax y rutas con puentes. Cotice gratis hoy mismo.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Jacksonville, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Jacksonville · Licenciadas FDACS"
        h1="Empresas de Mudanzas en Jacksonville"
        intro="La ciudad más grande de Florida en área. Beaches, Southside, Riverside, Mandarin y mudanzas militares desde NAS Jax y Mayport."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Jacksonville"
        title="Costos típicos en Jacksonville"
        col1="Tamaño"
        col2="Rango"
        col3="Notas"
        rows={[
          { size: "Estudio / 1 habitación", price: "$400-$800", detail: "Estimado local" },
          { size: "2-3 habitaciones", price: "$750-$1,300", detail: "Estimado local" },
          { size: "4+ habitaciones", price: "$1,200-$2,200", detail: "Estimado local" },
          { size: "Cruce de ciudad (Beaches a Westside)", price: "+1-2 horas", detail: "Tiempo de manejo facturable" },
          { size: "PCS militar", price: "Cotización especial", detail: "GBL / DPS coordinado" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Particularidades de Jacksonville"
        items={[
          { t: "840 millas cuadradas", d: "Mudanzas dentro de Duval pueden ser de 30-45 min entre puntos. Presupueste tiempo de traslado." },
          { t: "Puentes", d: "Fuller Warren, Main Street, Buckman y Dames Point — evite hora pico si es posible." },
          { t: "PCS militar", d: "NAS Jax y Mayport requieren empresas certificadas GBL. Ventanas específicas de entrega." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas que servimos en Jacksonville"
        items={[
          "Downtown", "Riverside", "San Marco", "Mandarin", "Southside", "Jax Beach", "Atlantic Beach", "Neptune Beach", "Ponte Vedra", "Orange Park", "Northside", "Arlington",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
