import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  PageHero,
  PageCostTable,
  PageLocalKnowledge,
  PageNeighborhoods,
  PageFaq,
} from "@/components/site/PageBlocks";

const PATH = "/es/movers-in-hialeah/";

const FAQS = [
  {
    q: "¿Cuánto cuesta una mudanza en Hialeah?",
    a: "Entre $95 y $150 por hora con dos trabajadores y camión. Un apartamento de una habitación suele costar $400-$700, dos habitaciones $650-$1,100 y una casa de tres habitaciones $900-$1,600. Escaleras y recorridos largos aumentan las horas facturables.",
  },
  {
    q: "¿Las cuadrillas hablan español?",
    a: "Sí. Priorizamos empresas cuyos estimadores, despachadores y jefes de cuadrilla atienden en español, para que el estimado escrito y la coordinación del día coincidan con la conversación que usted tuvo. Indíquelo en el formulario y le conectamos con empresas bilingües.",
  },
  {
    q: "¿Qué exige mi edificio el día de la mudanza?",
    a: "Muchos edificios de Hialeah piden un certificado de seguro (COI) de la empresa, reservar el ascensor o la zona de carga, y mudanzas solo entre semana. Solicite el COI apenas elija la empresa: la administración rara vez aprueba el acceso el mismo día.",
  },
  {
    q: "¿Cubren mudanzas dentro del condado Miami-Dade?",
    a: "Constantemente. Hialeah hacia Miami, Doral, Miami Lakes o Hialeah Gardens se cobra por hora e incluye el tiempo de manejo. El tráfico del Palmetto después de las 3 PM encarece el trabajo, por eso conviene comenzar temprano.",
  },
];

export const Route = createFileRoute("/es/movers-in-hialeah/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Hialeah FL | Empresas Licenciadas · Gratis",
      description:
        "Empresas de mudanzas en Hialeah con atención en español. Desde $95/hora, apartamentos y mudanzas dentro de Miami-Dade. Compare hasta 4 cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Moving Services", areaServed: "Hialeah, FL" },
    });
    return base;
  },
  component: () => (
    <>
      <PageHero
        eyebrow="Hialeah · Miami-Dade"
        h1="Mudanzas en Hialeah, FL"
        intro="Las mudanzas en Hialeah cuestan entre $95 y $150 por hora con dos trabajadores y camión: unos $400-$700 para un apartamento de una habitación y $900-$1,600 para una casa de tres. Complete el formulario una vez y hasta 4 empresas licenciadas y aseguradas le envían cotizaciones gratis."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · Hialeah"
        title="Costos de mudanza en Hialeah"
        col1="Tamaño"
        col2="Rango"
        col3="Cuadrilla y tiempo"
        rows={[
          { size: "Studio / 1 habitación", price: "$400 – $700", detail: "2 trabajadores + camión, 3-4 hrs" },
          { size: "2 habitaciones", price: "$650 – $1,100", detail: "3 trabajadores, 4-6 hrs" },
          { size: "3 habitaciones", price: "$900 – $1,600", detail: "3-4 trabajadores, 6-8 hrs" },
          { size: "4+ habitaciones", price: "$1,400 – $2,600", detail: "4+ trabajadores, 8-10 hrs" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Realidad local"
        title="Lo que distingue una mudanza en Hialeah"
        items={[
          {
            t: "Vivienda multifamiliar densa",
            d: "Edificios de apartamentos y dúplex con escaleras compartidas y estacionamientos pequeños donde un camión de 26 pies no maniobra. Muchos edificios exigen certificado de seguro y ventana de carga reservada.",
          },
          {
            t: "Mudanzas dentro de Miami-Dade",
            d: "Hialeah hacia Miami, Doral o Miami Lakes se cobra por hora, así que el tráfico del Palmetto y la 826 forma parte de la factura. Empezar temprano reduce el costo del mismo trabajo.",
          },
          {
            t: "Atención en español",
            d: "Un estimado escrito que usted no puede leer completo es el origen de la mayoría de los reclamos. Priorizamos empresas que trabajan en español de principio a fin, incluida la documentación.",
          },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="Áreas que cubrimos"
        items={[
          "Hialeah Gardens",
          "Miami Lakes",
          "West Hialeah",
          "Palm Springs North",
          "Frontera con Opa-locka",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
