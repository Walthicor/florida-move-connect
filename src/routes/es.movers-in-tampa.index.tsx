import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import {
  PageHero,
  PageCostTable,
  PageLocalKnowledge,
  PageNeighborhoods,
  PageFaq,
} from "@/components/site/PageBlocks";
import { ProseSection, CheckList } from "@/components/site/ContentSections";

const PATH = "/es/movers-in-tampa/";

const FMCSA_SAFER_URL = "https://safer.fmcsa.dot.gov/";
const FDACS_SEARCH_URL = "https://www.fdacs.gov/Consumer-Resources/Business-Search";

const FAQS = [
  {
    q: "¿Cuánto cuesta una mudanza en Tampa?",
    a: "Como estimado, $400-$800 por un apartamento de 1 habitación y $800-$1,400 por una casa de 2-3 habitaciones, con tarifas de $95-$150 por hora para dos trabajadores. Suele ser menos que el mismo trabajo en Miami, aunque el precio cambia según el tamaño de la vivienda y el acceso. Solo la cotización escrita es definitiva.",
  },
  {
    q: "¿Las compañías de mudanzas de Tampa cubren Brandon, Riverview y Wesley Chapel?",
    a: "Sí. Las compañías de mudanzas locales de Tampa atienden los suburbios al este y al sur de la ciudad, como Brandon y Riverview, y al norte por la I-75 hasta Wesley Chapel. Las mudanzas dentro del área metropolitana se cobran por hora como cualquier mudanza local; solo cambia el tiempo de manejo.",
  },
  {
    q: "¿Cuál es el mejor momento para programar una mudanza en Tampa?",
    a: "Temprano en la mañana, a mitad de mes y entre semana. En verano, empezar a las 7-8 a.m. evita el calor y las tormentas de la tarde; si cruza la bahía, evite el tráfico de los puentes de 7 a 9 a.m. y de 4 a 7 p.m.",
  },
  {
    q: "¿Las compañías de Tampa cubren St. Petersburg y Clearwater?",
    a: "Sí, el condado de Pinellas es territorio habitual. Las mudanzas que cruzan la bahía se cobran con la misma tarifa por hora; solo cambia el tiempo de manejo, que se reduce programando bien el horario.",
  },
  {
    q: "¿Los edificios de Tampa piden certificado de seguro (COI)?",
    a: "Las torres de Channelside, Downtown y la mayoría de Westshore lo piden, y muchas comunidades de apartamentos en New Tampa y la zona de USF también. La administración quiere el COI archivado antes de liberar el ascensor de servicio, así que envíelo en cuanto tenga fecha.",
  },
  {
    q: "¿Las compañías de Tampa pueden guardar mis cosas entre contratos?",
    a: "Muchas compañías de Tampa trabajan con bodegas locales u ofrecen almacenamiento en contenedores, útil cuando las fechas de cierre no coinciden. Indíquelo en el formulario y las compañías lo incluirán en sus cotizaciones.",
  },
  {
    q: "¿Con cuánta anticipación debo reservar una mudanza en Tampa?",
    a: "Fuera de temporada, una o dos semanas suele bastar. Para el verano, fechas de fin de mes o cualquier mudanza que necesite reservar ascensor, calcule tres o cuatro semanas.",
  },
  {
    q: "¿Qué debo decirle a la compañía de mudanzas antes del día?",
    a: "El nombre del edificio o la comunidad, los datos de la reserva de ascensor o muelle de carga, las escaleras y cualquier objeto grande como un piano o una caja fuerte. El acceso en Tampa varía mucho entre una torre de Channelside y un bungalow de Seminole Heights, y esos detalles cambian el tamaño de la cuadrilla y el precio.",
  },
];

export const Route = createFileRoute("/es/movers-in-tampa/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Tampa FL | Compañías de Mudanza Licenciadas",
      description:
        "Compare compañías de mudanzas licenciadas en Tampa para mudanzas locales, de apartamentos, comerciales y de larga distancia en Hillsborough. Cotizaciones gratis.",
      faqs: FAQS,
      service: { serviceType: "Servicios de mudanza", areaServed: "Tampa, FL" },
    }),
  component: TampaEsPage,
});

function TampaEsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tampa · Compañías licenciadas"
        h1="Mudanzas en Tampa, FL"
        intro="Las mudanzas locales en Tampa cuestan, como estimado, $400-$800 por 1 habitación y $800-$1,400 por una casa de 2-3 habitaciones, con cuadrillas de $95-$150 por hora. Tampa Bay tiene su propia lógica: una bahía que divide el área metropolitana, los corredores de la I-275 y la I-4, y tormentas casi diarias en verano. Compare cotizaciones gratis de compañías de mudanzas licenciadas en Tampa, desde apartamentos en South Tampa hasta casas nuevas en Riverview y Wesley Chapel."
        ctaLabel="Cotización gratis"
        ctaHref="/es/contact/"
      />
      <PageCostTable
        eyebrow="Precios estimados · Tampa"
        title="¿Cuánto cuesta una mudanza en Tampa?"
        col1="Tamaño"
        col2="Rango estimado"
        col3="Tiempo típico"
        rows={[
          { size: "Estudio / 1 habitación", price: "$400 – $800", detail: "3-4 hrs" },
          { size: "2 habitaciones", price: "$650 – $1,100", detail: "4-6 hrs" },
          { size: "3 habitaciones", price: "$800 – $1,400", detail: "6-8 hrs" },
          { size: "4+ habitaciones", price: "$1,300 – $2,400", detail: "8-10 hrs" },
        ]}
      />
      <PageLocalKnowledge
        eyebrow="Conocimiento local"
        title="¿Qué afecta el precio de una mudanza en Tampa?"
        items={[
          {
            t: "Congestión en la I-275 y la I-4",
            d: "Los dos corredores principales de Tampa definen su horario. La I-275 se congestiona desde Carrollwood hasta Downtown en hora pico, y el intercambio de la I-4 cerca de Ybor City es uno de los peores cuellos de botella de la región. Las compañías que conocen Tampa cotizan tiempos reales de manejo entre barrios, no millas en línea recta.",
          },
          {
            t: "El cruce de la bahía",
            d: "De South Tampa a St. Petersburg hay unas 25 millas, pero por los puentes Howard Frankland o Gandy, que se paralizan en hora pico. Las cuadrillas con experiencia programan los cruces antes de las 7 a.m. o después de las 7 p.m. en trabajos por hora, y esa sola decisión puede ahorrar $150-$300.",
          },
          {
            t: "Tormentas de verano",
            d: "De julio a septiembre hay aguaceros casi todas las tardes que pueden cerrar un muelle de carga por una hora mientras corre el reloj. Las compañías serias de Tampa empiezan a las 7-8 a.m. para evitar el calor y la lluvia.",
          },
          {
            t: "Reglas de los complejos de apartamentos",
            d: "Las grandes comunidades de apartamentos de Tampa, sobre todo en New Tampa, Westshore y la zona de USF, suelen pedir certificado de seguro, ascensor de carga reservado o permiso de zona de carga. Algunas solo permiten mudanzas entre semana o en ciertos horarios. Dé el nombre de la comunidad al pedir la cotización para tener los papeles listos.",
          },
        ]}
      />
      <PageNeighborhoods
        eyebrow="Cobertura"
        title="¿Qué barrios y zonas cercanas de Tampa cubren las compañías de mudanza?"
        items={[
          "South Tampa",
          "Hyde Park",
          "Westshore",
          "Downtown y Channelside",
          "Seminole Heights",
          "New Tampa",
          "Carrollwood",
          "Temple Terrace",
          "Brandon",
          "Riverview",
          "Wesley Chapel",
          "St. Petersburg",
          "Clearwater",
        ]}
        tail="— y Largo, al otro lado de la bahía."
      />
      <ProseSection
        eyebrow="Edificios"
        title="¿Cómo son las mudanzas de apartamentos, condos y oficinas en Tampa?"
        bg="bg-background"
      >
        <p>
          Tampa tiene dos extremos: torres frente al agua en Downtown y Westshore, y grandes
          comunidades de apartamentos desde New Tampa hasta Brandon. Cada tipo de edificio cambia el
          trabajo y la cuadrilla que necesita.
        </p>
        <CheckList
          items={[
            <>
              <strong className="text-ink">Apartamentos y condos:</strong> reservas de ascensor de
              carga, entrega del COI y horarios de muelle son comunes en las torres del centro. Nuestra
              guía de{" "}
              <Link to="/es/apartment-movers/" className="font-semibold text-brand hover:underline">
                mudanzas de apartamentos y condominios en Florida
              </Link>{" "}
              explica qué coordinar con su edificio antes de que llegue el camión.
            </>,
            <>
              <strong className="text-ink">Oficinas y locales comerciales:</strong> las mudanzas en
              el distrito de negocios de Westshore o en las torres de oficinas del centro suelen hacerse
              de noche o en fin de semana. Vea las{" "}
              <Link to="/es/commercial-movers/" className="font-semibold text-brand hover:underline">
                mudanzas comerciales en Florida
              </Link>{" "}
              para saber cómo se planean y cotizan.
            </>,
          ]}
        />
      </ProseSection>
      <ProseSection
        eyebrow="Objetos especiales"
        title="¿Tiene un piano u otro objeto especial?"
        bg="bg-surface-alt"
      >
        <p>
          Una mudanza de casa y una mudanza de piano necesitan equipo distinto. Mencione cualquier
          piano, caja fuerte o mesa de billar en su solicitud para que la cuadrilla llegue preparada.
          Para el instrumento, vea nuestra página de{" "}
          <Link to="/es/piano-movers-tampa/">mudanzas de pianos en Tampa</Link>.
        </p>
      </ProseSection>
      <ProseSection
        eyebrow="Entre casas"
        title="¿Qué opciones de almacenamiento hay en Tampa?"
        bg="bg-background"
      >
        <p>
          Las fechas de cierre y de inicio de contrato rara vez coinciden, y en un área en
          crecimiento como Tampa, donde las casas nuevas de Wesley Chapel y Riverview dependen del
          calendario del constructor, es común tener unas semanas de diferencia. Muchas compañías de
          Tampa ofrecen almacenamiento en tránsito o trabajan con bodegas locales. Compare el{" "}
          <Link to="/es/storage-solutions/">almacenamiento para mudanzas en Florida</Link> o mencione
          que lo necesita en el formulario.
        </p>
      </ProseSection>
      <ProseSection
        eyebrow="Antes de contratar"
        title="¿Cómo verificar una compañía de mudanzas en Tampa?"
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
              edificio y los números de registro deben estar en papel antes del día de la mudanza.
            </>,
          ]}
        />
      </ProseSection>
      <ProseSection
        eyebrow="Zonas cercanas"
        title="¿Se muda al sur de Tampa o a otra ciudad?"
        bg="bg-background"
      >
        <p>
          Si su nueva casa está en South Hillsborough, revise las{" "}
          <Link to={"/es/movers-in-riverview/" as "/"}>mudanzas en Riverview</Link>, con precios,
          reglas de HOA y zonas como Apollo Beach y Gibsonton. Por la I-4, compare las{" "}
          <Link to="/es/movers-in-orlando/">mudanzas en Orlando</Link>; al norte, las{" "}
          <Link to="/es/movers-in-ocala/">mudanzas en Ocala</Link>. Cada cotización de Tampa usa la
          misma estructura por hora que explicamos en las{" "}
          <Link to="/es/local-movers-in-florida/">mudanzas locales en Florida</Link>, y si sale del
          estado, compare las{" "}
          <Link to="/es/long-distance-movers/">mudanzas de larga distancia</Link>.
        </p>
      </ProseSection>
      <PageFaq title="Preguntas frecuentes sobre mudanzas en Tampa" faqs={FAQS} />
    </>
  );
}
