import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Home as HomeIcon,
  Truck,
  Warehouse,
  Building2,
  Package,
  Piano,
  Sofa,
  CheckCircle2,
  DollarSign,
} from "lucide-react";
import { pageHead } from "@/lib/seo";
import { HeroQuoteForm } from "@/components/site/QuoteForm";
import { NetworkDisclosure } from "@/components/site/NetworkDisclosure";
import heroVideo from "@/assets/hero-cinematic.mp4.asset.json";

const PATH = "/es/";

const FAQS = [
  {
    q: "¿Realmente es gratis?",
    a: "Sí. Recibir cotizaciones es 100% gratis y sin obligación. Las empresas de mudanzas nos pagan cuando reservan un cliente — usted nunca paga por comparar cotizaciones.",
  },
  {
    q: "¿Cuántas empresas me llamarán?",
    a: "Hasta 4 empresas licenciadas en Florida coincidirán con su solicitud. Usted decide con quién hablar y a quién contratar. Sin llamadas de docenas de vendedores.",
  },
  {
    q: "¿Todas las empresas están licenciadas?",
    a: "Trabajamos únicamente con empresas independientes con licencia: registro FDACS para mudanzas dentro de Florida y número USDOT con autoridad FMCSA para mudanzas interestatales. Usted puede consultar ambos registros gratis en safer.fmcsa.dot.gov y en el registro FDACS antes de firmar.",
  },
  {
    q: "¿Cuánto tiempo tarda?",
    a: "Enviar la solicitud toma unos 2 minutos. La mayoría de las empresas responden con cotizaciones por escrito en 1 hora hábil.",
  },
  {
    q: "¿Qué información necesitan las empresas?",
    a: "ZIP de origen, ZIP de destino, tamaño de la vivienda y fecha preferida. Con eso pueden preparar cotizaciones precisas y por escrito.",
  },
  {
    q: "¿Puedo obtener cotizaciones para mudanzas de última hora?",
    a: "Sí — indique su fecha y las empresas con disponibilidad responderán primero. La temporada de mayor demanda en Florida es de mayo a septiembre; reserve con anticipación cuando pueda.",
  },
];

const SERVICES = [
  { icon: HomeIcon, title: "Mudanzas Locales", desc: "Empresas por hora dentro de Florida. Desde $95-$150/hora según el tamaño de la vivienda.", anchor: "Mudanzas locales en Florida", to: "/es/local-movers-in-florida/" },
  { icon: Truck, title: "Larga Distancia", desc: "Mudanzas interestatales con transportistas registrados ante FMCSA. Precio fijo o por peso.", anchor: "Mudanzas de larga distancia", to: "/es/long-distance-movers/" },
  { icon: Warehouse, title: "Almacenamiento", desc: "Storage-in-transit y bodegas con clima controlado.", anchor: "Almacenamiento y mudanzas", to: "/es/storage-solutions/" },
  { icon: Building2, title: "Mudanzas Comerciales", desc: "Oficinas y comercios. Fines de semana, IT y COIs.", anchor: "Mudanzas comerciales en Florida", to: "/es/commercial-movers/" },
  { icon: Package, title: "Servicios de Embalaje", desc: "Embalaje profesional completo o solo frágiles.", anchor: "Servicios de embalaje profesional", to: "/es/packing-services/" },
  { icon: Piano, title: "Mudanzas de Pianos", desc: "Especialistas certificados para pianos verticales y de cola.", anchor: "Mudanzas de pianos en Florida", to: "/es/piano-movers/" },
  { icon: Sofa, title: "Mudanzas de Apartamentos", desc: "Complejos con COI, ascensores y HOAs.", anchor: "Mudanzas de apartamentos y condos", to: "/es/apartment-movers/" },
];

const COST_ROWS = [
  { size: "Studio / 1 hab", price: "$95-$110/hr", detail: "2-3 trabajadores · 3-5 horas" },
  { size: "2 habitaciones", price: "$110-$130/hr", detail: "3 trabajadores · 5-7 horas" },
  { size: "3 habitaciones", price: "$130-$160/hr", detail: "3-4 trabajadores · 7-9 horas" },
  { size: "4+ habitaciones", price: "$160-$200/hr", detail: "4+ trabajadores · 9+ horas" },
];

export const Route = createFileRoute("/es/")({
  head: () =>
    pageHead({
      path: PATH,
      lang: "es",
      title: "Mudanzas en Florida | Compare Cotizaciones Gratis",
      description: "Compare hasta 4 cotizaciones gratis de empresas de mudanzas licenciadas en Florida, verificadas por FDACS y FMCSA, para mudanzas locales y de larga distancia.",
      faqs: FAQS,
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <CostTable />
      <WhyUs />
      <Cities />
      <Faq />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden isolate">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-family.jpg"
        aria-hidden="true"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,83,148,0.88)_0%,rgba(11,25,45,0.78)_55%,rgba(11,25,45,0.55)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/25" />

      <div className="relative container-page py-16 md:py-24 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur border border-white/25 px-3 py-1 text-xs font-semibold text-white shadow-soft">
            <ShieldCheck className="h-3.5 w-3.5" />
            Empresas con licencia · usted puede verificarla
          </span>
          <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
            Empresas de Mudanzas en Florida. Compare Cotizaciones Gratis.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed">
            Reciba hasta 4 cotizaciones gratis de empresas de mudanzas independientes con licencia en Florida en solo 2 minutos. Usted puede confirmar la licencia de cualquier empresa: número USDOT en la base FMCSA SAFER para mudanzas interestatales, o registro FDACS para mudanzas dentro de Florida. Locales, larga distancia, comercial, almacenamiento y más — sin compromiso.
          </p>
          <ul className="mt-6 grid gap-2 text-sm text-white">
            {[
              "Todas las empresas licenciadas y aseguradas",
              "Hasta 4 cotizaciones por escrito",
              "Respuesta en 1 hora hábil",
              "Siempre gratis, sin obligación",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <HeroQuoteForm />
        </div>
      </div>
      <NetworkDisclosure />
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "1", t: "Envíe su solicitud", d: "Cuéntenos qué tipo de mudanza necesita, tamaño de la vivienda y fechas. Toma 2 minutos." },
    { n: "2", t: "Le conectamos con empresas", d: "Emparejamos su solicitud con hasta 4 empresas licenciadas de Florida disponibles en su ruta." },
    { n: "3", t: "Compare y contrate", d: "Reciba cotizaciones por escrito, compare y contrate la que mejor se ajuste — sin obligación." },
  ];
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Cómo funciona</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Tres pasos hasta su cotización</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-white p-7 shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white font-display font-bold text-lg">
                {s.n}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Servicios</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Todo tipo de mudanza en Florida</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={s.to as "/"}
                className="group rounded-2xl border border-border bg-white p-6 shadow-soft hover:border-brand hover:shadow-card transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink group-hover:text-brand">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand">
                  {s.anchor} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CostTable() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Precios 2026</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Costos promedio de mudanzas locales en Florida</h2>
          <p className="mt-3 text-sm text-muted-foreground">Los precios varían según piso, distancia al camión y complejidad. Estas tarifas son promedios reales en Florida en 2026.</p>
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
          <table className="hidden sm:table w-full text-left">
            <thead className="bg-navy text-navy-foreground">
              <tr>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Tamaño</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Tarifa por hora</th>
                <th className="px-6 py-4 font-display text-sm font-bold uppercase tracking-wider">Duración típica</th>
              </tr>
            </thead>
            <tbody>
              {COST_ROWS.map((r, i) => (
                <tr key={r.size} className={i % 2 === 0 ? "bg-white" : "bg-surface-alt"}>
                  <td className="px-6 py-4 font-semibold text-ink">{r.size}</td>
                  <td className="px-6 py-4 text-ink">
                    <span className="inline-flex items-center gap-1.5">
                      <DollarSign className="h-4 w-4 text-brand" />
                      {r.price}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-ink">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="sm:hidden divide-y divide-border">
            {COST_ROWS.map((r) => (
              <div key={r.size} className="bg-white p-5">
                <div className="font-display font-bold text-ink">{r.size}</div>
                <div className="mt-2 text-sm text-ink font-semibold">{r.price}</div>
                <div className="mt-1 text-xs text-muted-foreground">{r.detail}</div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Solo rangos típicos — los estimados varían según el tamaño de la vivienda, acceso, escaleras, distancia y temporada. Solo una cotización por escrito es vinculante.</p>
      </div>
    </section>
  );
}

function WhyUs() {
  const pros = [
    "Enfocados 100% en Florida — no somos una plataforma nacional",
    "Le indicamos cómo verificar la licencia FDACS o el número USDOT de cada empresa",
    "Solo 4 empresas emparejadas — no será bombardeado con llamadas",
    "Precios reales de Florida, incluyendo tarifas por edificios y ascensores",
    "Empresas con experiencia local: condos en Miami, tormentas en Tampa, tráfico en Orlando",
  ];
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-4xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">Por qué elegirnos</span>
        <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Florida Movers Direct vs sitios nacionales</h2>
        <ul className="mt-8 space-y-3">
          {pros.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 shadow-soft">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand" />
              <span className="text-sm md:text-base text-ink leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cities() {
  const cities = [
    { name: "Miami", to: "/es/movers-in-miami/" },
    { name: "Tampa", to: "/es/movers-in-tampa/" },
    { name: "Orlando", to: "/es/movers-in-orlando/" },
    { name: "Ocala", to: "/es/movers-in-ocala/" },
    { name: "Jacksonville", to: "/es/movers-in-jacksonville/" },
    { name: "Naples", to: "/es/movers-in-naples/" },
    { name: "Boca Raton", to: "/es/movers-in-boca-raton/" },
  ];
  return (
    <section className="bg-background">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Ciudades</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-ink">Empresas de mudanzas en las principales ciudades de Florida</h2>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {cities.map((c) => (
            <Link
              key={c.name}
              to={c.to as "/"}
              className="rounded-xl border border-border bg-white p-4 text-center font-semibold text-ink hover:border-brand hover:text-brand transition shadow-soft"
            >
              Mudanzas en {c.name} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-surface-alt">
      <div className="container-page py-16 md:py-20 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">Preguntas frecuentes</h2>
        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display font-bold text-ink">{f.q}</span>
                  <ChevronDown className={"h-5 w-5 text-muted-foreground transition-transform " + (isOpen ? "rotate-180 text-brand" : "")} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
