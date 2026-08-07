import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/apartment-movers/";
const FAQS = [
  { q: "¿Necesito COI para mi edificio?", a: "Casi todos los edificios en Miami, Tampa y Orlando piden un Certificate of Insurance del mover, nombrando al building como additional insured. Se emite gratis 48-72 hrs antes." },
  { q: "¿Cuánto tarda mudarse de un apartamento?", a: "Studio: 2-4 hrs. 1 hab: 3-5 hrs. 2 hab: 5-7 hrs. Con ascensor lento o distancia al camión, sume 1-2 hrs." },
  { q: "¿Reservan el ascensor por mí?", a: "Ustedes deben reservarlo con el building management; el mover llega en la ventana asignada. Sin reserva, el edificio puede rechazar la mudanza al llegar." },
];

export const Route = createFileRoute("/es/apartment-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Empresas de Mudanzas de Apartamentos en Florida | COI y HOA",
      description: "Especialistas en mudanzas de apartamentos y condos en Florida. Manejamos COIs, reserva de ascensores y reglas HOA. Compare 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Apartment and Condo Moving Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Apartamentos y condos"
        h1="Empresas de Mudanzas de Apartamentos en Florida"
        intro="Una mudanza de apartamento en Florida cuesta $400-$1,200 según el tamaño y los pisos, con $95-$150 por hora como base. Manejamos COIs, reservas de ascensor de carga, ventanas de mudanza del HOA y accesos con guard-house. Sin sorpresas al llegar al edificio."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026"
        title="Costos típicos de mudanza de apartamento"
        col1="Tamaño"
        col2="Rango"
        col3="Notas"
        rows={[
          { size: "Studio", price: "$300-$550", detail: "2 trabajadores · 3-4 hrs" },
          { size: "1 habitación", price: "$450-$800", detail: "2-3 trabajadores · 4-5 hrs" },
          { size: "2 habitaciones", price: "$700-$1,300", detail: "3 trabajadores · 5-7 hrs" },
          { size: "3+ habitaciones", price: "$1,200-$2,200", detail: "3-4 trabajadores · 7-9 hrs" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Requisitos del edificio"
        title="Qué exige el building en Florida"
        items={[
          { t: "Certificate of Insurance (COI)", d: "Nombrando al edificio como additional insured. Emitido por la empresa 48-72 hrs antes." },
          { t: "Reserva de ascensor de carga", d: "Ventana asignada — llegar tarde o temprano puede cancelar la mudanza." },
          { t: "Reglas HOA", d: "Algunas asociaciones prohíben mudanzas los domingos o después de las 5 PM. Verifique antes de reservar." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Preparación"
        title="Checklist antes del día"
        items={[
          { t: "Confirme COI aprobado", d: "El building debe enviar OK por escrito." },
          { t: "Empaque frágiles la noche antes", d: "Reduce horas facturables el día de mudanza." },
          { t: "Reserve parqueadero para el camión", d: "En Brickell y Downtown Tampa se necesita permiso." },
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
