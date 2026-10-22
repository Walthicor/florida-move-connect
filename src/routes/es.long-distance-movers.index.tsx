import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PageHero, PageCostTable, PageLocalKnowledge, PageRoutes, PageFaq } from "@/components/site/PageBlocks";

const PATH = "/es/long-distance-movers/";
const FAQS = [
  { q: "¿Cuánto cuesta una mudanza de larga distancia desde Florida?", a: "Rango típico 2026: $1,800-$8,000+. Depende de peso/volumen, distancia y servicios adicionales. Miami-Atlanta 2 habitaciones ~$3,500-$5,500; Tampa-NY 3 habitaciones ~$6,000-$8,500." },
  { q: "¿Miami a Orlando es larga distancia?", a: "No. Aunque son ~230 millas, casi todas las empresas de Florida lo cotizan por hora + millaje. Regulado por FDACS, no FMCSA." },
  { q: "¿Qué es el almacenamiento en tránsito (SIT)?", a: "SIT es cuando su empresa guarda sus pertenencias en su bodega mientras espera que su nueva casa esté lista. Usualmente hasta 90 días. Más económico que renovar contrato con un self-storage separado." },
  { q: "¿Qué NO pueden transportar?", a: "Non-allowables: aerosoles, propano, gasolina, químicos inflamables, perecederos, plantas vivas y objetos de valor personal irremplazable (joyas, documentos, dinero). Estos van con usted." },
];

export const Route = createFileRoute("/es/long-distance-movers/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas de Larga Distancia desde Florida | Cotice Gratis",
      description: "Empresas de mudanzas de larga distancia con licencia FMCSA y costos 2026 entre $1,800 y $8,000. Compare 4 cotizaciones gratis con estimados por escrito.",
      faqs: FAQS,
      service: { serviceType: "Long Distance Moving Services", areaServed: "Florida" },
    }),
  component: () => (
    <>
      <PageHero
        eyebrow="Larga distancia · Verificadas FMCSA"
        h1="Empresas de Mudanzas de Larga Distancia desde Florida"
        intro="Costos 2026 típicos de $1,800 a $8,000+ según ruta y tamaño de vivienda. Compare hasta 4 cotizaciones por escrito de empresas con licencia federal FMCSA."
        ctaLabel="Cotización Gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios 2026 · rutas comunes"
        title="Costos estimados por ruta y tamaño de vivienda"
        col1="Ruta"
        col2="1-2 habitaciones"
        col3="3-4 habitaciones"
        rows={[
          { size: "Miami → Atlanta", price: "$2,500-$4,500", detail: "$4,500-$7,000" },
          { size: "Tampa → Nueva York", price: "$4,500-$6,500", detail: "$6,500-$9,500" },
          { size: "Orlando → Texas", price: "$3,500-$5,500", detail: "$5,500-$8,500" },
          { size: "Jacksonville → Chicago", price: "$4,000-$6,000", detail: "$6,000-$9,000" },
          { size: "Miami → California", price: "$6,500-$9,000", detail: "$9,000-$14,000" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Cotización vinculante vs no vinculante"
        title="Binding vs non-binding: qué firma usted"
        items={[
          { t: "Vinculante (Binding)", d: "El precio es fijo aunque el peso real varíe. Protege contra sorpresas al entregar." },
          { t: "No vinculante", d: "El precio final se calcula con el peso real. Puede subir hasta 110% del estimado en día de mudanza." },
          { t: "Not-to-exceed (recomendado)", d: "Estimado máximo. Paga menos si pesa menos, nunca más que el estimado." },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Verifique antes de firmar"
        title="Cómo verificar una empresa de larga distancia"
        items={[
          { t: "Número USDOT y MC", d: "Toda empresa interestatal debe tener número USDOT y MC activos con FMCSA. Verifique en fmcsa.dot.gov/protect-your-move." },
          { t: "Historial de quejas", d: "Revise historial en FMCSA y BBB. Empresas serias tienen pocas quejas resueltas." },
          { t: "Seguro y liabilidad", d: "Confirme que ofrecen 'Full Value Protection' (60¢/lb es el mínimo federal, insuficiente para muebles caros)." },
        ]}
      />
      <PageRoutes
        eyebrow="Cuánto tarda"
        title="Ventanas de entrega típicas desde Florida"
        items={[
          "Florida → Sureste (GA, SC, NC, AL): 2-5 días laborables",
          "Florida → Noreste (NY, NJ, MA, PA): 5-10 días laborables",
          "Florida → Medio Oeste (IL, OH, MI): 5-10 días laborables",
          "Florida → Suroeste (TX, AZ, NM): 7-14 días laborables",
          "Florida → Costa Oeste (CA, WA, OR): 10-21 días laborables",
        ]}
      />
      <PageFaq title="Preguntas frecuentes" faqs={FAQS} />
    </>
  ),
});
