import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageNeighborhoods, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-orlando/";
const FAQS = [
  { q: "¿Cuánto cuesta mudarse en Orlando?", a: "Local: $95-$140/hr. 2 hab: $700-$1,200. Mudanzas en corredores turísticos suman 30-60 min por tráfico." },
  { q: "¿Es peor mudarse a fin de mes?", a: "Sí — Orlando tiene alta rotación de rentas los últimos 3 días del mes. Reserve con 4-6 semanas si no puede evitar esa ventana." },
  { q: "¿Qué pasa con I-4?", a: "I-4 entre Disney y Downtown es cuello de botella 6-9 AM y 3-7 PM. Programe cargas fuera de esas ventanas." },
];

export const Route = createFileRoute("/es/movers-in-orlando/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Orlando FL | Empresas Licenciadas · Cotizaciones Gratis",
      description: "Empresas de mudanzas en Orlando. Costos 2026, corredor turístico I-4 y rotación de rentas. Compare hasta 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Orlando, FL" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Orlando · Licenciadas FDACS"
        h1="Empresas de Mudanzas en Orlando"
        intro="Las mudanzas locales en Orlando cuestan $95-$140 por hora: $600-$1,150 para un apartamento de 2 habitaciones. Servicio en toda el área metro: Downtown, Winter Park, Lake Nona, Dr. Phillips, Kissimmee y Windermere. Hasta 4 cotizaciones gratis de empresas licenciadas."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Orlando"
        title="Costos típicos de mudanza en Orlando"
        col1="Tamaño"
        col2="Rango"
        col3="Duración"
        rows={[
          { size: "Studio / 1 hab", price: "$350-$650", detail: "3-5 hrs" },
          { size: "2 habitaciones", price: "$600-$1,150", detail: "5-7 hrs" },
          { size: "3 habitaciones", price: "$950-$1,700", detail: "7-9 hrs" },
          { size: "4+ habitaciones", price: "$1,500-$2,600", detail: "9-12 hrs" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="Particularidades de Orlando"
        items={[
          { t: "Corredor turístico", d: "I-Drive, Sand Lake y proximidad a los parques agregan tráfico impredecible." },
          { t: "Rotación de rentas", d: "Los últimos 3 días del mes concentran mudanzas; reserve con anticipación." },
          { t: "Comunidades con guardia", d: "Windermere, Reunion y Isleworth requieren pases del guard-house — programe entrada." },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas que servimos en Orlando"
        items={[
          "Downtown Orlando", "Winter Park", "Lake Nona", "Dr. Phillips", "Windermere", "Metrowest", "College Park", "Baldwin Park", "Kissimmee", "Celebration", "Reunion", "Ocoee", "Apopka",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
