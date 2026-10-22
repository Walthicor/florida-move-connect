import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, SITE_URL } from "@/lib/seo";
import {
  PageHero,
  PageCostTable,
  PageLocalKnowledge,
  PageNeighborhoods,
  PageFaq,
} from "@/components/site/PageBlocks";
import { ProseSection, CheckList } from "@/components/site/ContentSections";

const PATH = "/es/movers-in-riverview/";

const FMCSA_SAFER_URL = "https://safer.fmcsa.dot.gov/";
const FDACS_SEARCH_URL = "https://www.fdacs.gov/Consumer-Resources/Business-Search";

const FAQS = [
  {
    q: "¿Cuánto cuesta una mudanza en Riverview, FL?",
    a: "Las compañías de mudanzas en Riverview cobran entre $95 y $150 por hora con dos trabajadores y camión, la misma estructura por hora que se usa en todo Florida. Como estimado, la mayoría de los hogares paga $650-$1,100 por dos habitaciones y $900-$1,600 por tres. El precio final depende del tamaño de la vivienda, el acceso y la fecha, y solo la cotización escrita es definitiva.",
  },
  {
    q: "¿Por qué las cotizaciones en Riverview salen más altas de lo que indica la tarifa por hora?",
    a: "Gran parte de Riverview son casas nuevas de dos pisos con escalera, entradas largas o acceso por el garaje, y muchas urbanizaciones quedan a varias millas de la US-301 o la I-75. El tiempo de manejo dentro de South Hillsborough y cargar muebles por escaleras son los dos factores que más horas facturables suman.",
  },
  {
    q: "¿Las HOA de Riverview piden documentos antes de que llegue el camión?",
    a: "Muchas comunidades planificadas de Riverview y Apollo Beach limitan el tamaño del camión, piden registrar la fecha de la mudanza con anticipación y solo permiten trabajar de día. Consulte las reglas de su asociación antes de reservar y pase a cada compañía cualquier requisito de certificado de seguro (COI) mientras todavía compara cotizaciones.",
  },
  {
    q: "¿Una mudanza de Riverview a Tampa o Brandon es una mudanza local?",
    a: "Sí. El centro de Tampa está a unas 15 millas al norte y Brandon queda a poca distancia por la US-301, así que ambas se cobran por hora como mudanza local de menos de 50 millas. Solo las mudanzas que superan esa distancia o salen de Florida pasan a cobrarse por inventario o por peso.",
  },
  {
    q: "¿Cómo encuentro compañías de mudanzas cerca de mí en Riverview?",
    a: "Busque compañías que ya trabajen en South Hillsborough, porque conocen las reglas de las garitas de las HOA, el tráfico de la US-301 y los retrasos de cierre de los constructores. Pida a cada una su registro FDACS, un estimado por escrito y su política para cambios de fecha. Con un solo formulario aquí, su solicitud llega hasta a cuatro compañías de mudanzas licenciadas en Riverview.",
  },
  {
    q: "¿Cuándo es más barato mudarse en Riverview?",
    a: "A mitad de mes, entre semana y fuera del verano. Los cierres de casas nuevas se concentran a fin de mes, y de junio a septiembre hay más demanda y lluvias por la tarde que retrasan la carga. Reservar con tres o cuatro semanas de anticipación le da opciones reales de compañías.",
  },
  {
    q: "¿Qué pasa si mi fecha de cierre y mi fecha de mudanza no coinciden?",
    a: "Pregunte por almacenamiento en tránsito al pedir cotizaciones. Si el cierre en Riverview y la fecha de entrada a su nueva casa no coinciden, sus muebles pueden quedarse en el camión o en una bodega en lugar de moverse dos veces, lo que sale más barato que pagarle a una cuadrilla por esperar.",
  },
];

export const Route = createFileRoute("/es/movers-in-riverview/")({
  head: () => {
    const base = pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Riverview FL | Compañías de Mudanza Licenciadas",
      description:
        "Mudanzas en Riverview, FL desde $95-$150 por hora; unos $650-$1,100 por dos habitaciones. Compare gratis hasta 4 compañías de mudanzas licenciadas en South Hillsborough.",
      faqs: FAQS,
    });
    return {
      ...base,
      scripts: [
        ...base.scripts,
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Servicios de mudanza",
            name: "Mudanzas en Riverview, FL",
            url: `${SITE_URL}${PATH}`,
            inLanguage: "es-US",
            areaServed: {
              "@type": "City",
              name: "Riverview",
              containedInPlace: { "@type": "State", name: "Florida" },
            },
            provider: { "@id": `${SITE_URL}/#organization` },
          }),
        },
      ],
    };
  },
  component: RiverviewEsPage,
});

function RiverviewEsPage() {
  return (
    <>
      <PageHero
        eyebrow="Riverview · South Hillsborough"
        h1="Mudanzas en Riverview, FL"
        intro="Las compañías de mudanzas en Riverview cobran entre $95 y $150 por hora con dos trabajadores y camión: como estimado, $650-$1,100 por dos habitaciones y $900-$1,600 por una casa de tres. Complete el formulario una vez y hasta 4 compañías de mudanza licenciadas y aseguradas que cubren Riverview, Apollo Beach y Gibsonton le envían cotizaciones gratis."
        ctaLabel="Cotización gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios estimados · Riverview"
        title="¿Cuánto cuesta una mudanza en Riverview?"
        col1="Tamaño"
        col2="Rango estimado"
        col3="Cuadrilla y tiempo"
        rows={[
          { size: "Estudio / 1 habitación", price: "$400 – $700", detail: "2 trabajadores + camión, 3-4 hrs" },
          { size: "2 habitaciones", price: "$650 – $1,100", detail: "3 trabajadores + camión, 4-6 hrs" },
          { size: "3 habitaciones", price: "$900 – $1,600", detail: "3-4 trabajadores + camión, 6-8 hrs" },
          { size: "4+ habitaciones", price: "$1,400 – $2,600", detail: "4+ trabajadores + camión, 8-10 hrs" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="¿Qué hace diferente una mudanza en Riverview?"
        items={[
          {
            t: "Urbanizaciones nuevas y cierres de constructores",
            d: "Riverview creció con comunidades planificadas, así que muchas mudanzas son la primera entrada a una casa nueva en la fecha de cierre del constructor. Esas fechas cambian. Confirme su cierre antes de fijar el día y pregunte a cada compañía cuánto cuesta un cambio de fecha.",
          },
          {
            t: "Reglas de HOA y garitas",
            d: "Las comunidades de South Hillsborough suelen limitar el tamaño del camión, permitir trabajo solo de día y pedir que la fecha se registre en la asociación o la garita. Si un camión de 26 pies no puede entrar, hay que trasladar todo en un vehículo más pequeño, y ese tiempo extra se cobra.",
          },
          {
            t: "Acceso por la US-301 y la I-75",
            d: "Dos direcciones de Riverview a cinco millas pueden quedar a veinte minutos a las 5 p.m. en la US-301 o en Big Bend Road. Las compañías cotizan el trayecto real, así que cruzar el intercambio de la I-75 en hora pico suma más tiempo que el mismo trabajo a las 9 a.m.",
          },
          {
            t: "Casas de dos pisos y entradas por el garaje",
            d: "La vivienda típica es de dos pisos, con la escalera cerca de la puerta y una entrada larga. Subir y bajar escaleras hace más lento cada mueble pesado. Describa las escaleras, el largo de la entrada y cualquier garita antes de aceptar una cotización.",
          },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="¿Qué zonas de Riverview cubren las compañías de mudanza?"
        items={[
          "Panther Trace",
          "Boyette",
          "Rivercrest",
          "Summerfield",
          "Bloomingdale",
          "Apollo Beach",
          "Gibsonton",
        ]}
        tail="— y el resto de South Hillsborough."
      />
      <ProseSection
        eyebrow="Mudanzas cercanas"
        title="¿Se muda entre Riverview, Tampa y otras ciudades?"
        bg="bg-background"
      >
        <p>
          Riverview es ante todo una ciudad de personas que trabajan en Tampa. La mayoría de las
          familias que llegan cambian un apartamento en Tampa por una casa de tres o cuatro
          habitaciones, por eso la mudanza típica en Riverview necesita una cuadrilla más grande que
          la anterior. Si sale desde la ciudad, revise las{" "}
          <Link to="/es/movers-in-tampa/">mudanzas en Tampa</Link> para el punto de origen, y
          nuestra guía de{" "}
          <Link to="/es/local-movers-in-florida/">mudanzas locales en Florida</Link> para entender
          cómo se calcula cada cotización por hora.
        </p>
        <p>
          Si deja el estado, compare{" "}
          <Link to="/es/long-distance-movers/">mudanzas de larga distancia</Link> con ventanas de
          entrega por escrito. Si la fecha de cierre del constructor no coincide con su salida, el{" "}
          <Link to="/es/storage-solutions/">almacenamiento para mudanzas en Florida</Link> cubre esa
          brecha, y la guía de{" "}
          <Link to="/es/apartment-movers/">mudanzas de apartamentos y condominios</Link> explica el
          ascensor y el COI si sale de un complejo en Brandon o Tampa. Para un piano, consulte las{" "}
          <Link to="/es/piano-movers-tampa/">mudanzas de pianos en Tampa</Link>.
        </p>
      </ProseSection>
      <ProseSection
        eyebrow="Antes de contratar"
        title="¿Cómo verificar una compañía de mudanzas en Riverview?"
        bg="bg-surface-alt"
      >
        <p>
          Florida Movers Direct es un servicio gratuito que le conecta con compañías independientes;
          no somos una compañía de mudanzas. Verificar toma dos minutos y conviene hacerlo antes de
          pagar cualquier depósito:
        </p>
        <CheckList
          items={[
            <>
              <strong className="text-ink">Mudanzas dentro de Florida:</strong> pida el número de
              registro FDACS y confírmelo en el{" "}
              <a href={FDACS_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
                registro de empresas de FDACS
              </a>
              .
            </>,
            <>
              <strong className="text-ink">Mudanzas fuera de Florida:</strong> pida el número USDOT
              y revíselo en la{" "}
              <a href={FMCSA_SAFER_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand hover:underline">
                base de datos FMCSA SAFER
              </a>
              .
            </>,
            <>
              <strong className="text-ink">Todo por escrito:</strong> el estimado, el COI que pida su
              HOA y los números de registro deben estar en papel antes del día de la mudanza.
            </>,
          ]}
        />
      </ProseSection>
      <PageFaq title="Preguntas frecuentes sobre mudanzas en Riverview" faqs={FAQS} />
    </>
  );
}
