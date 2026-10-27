import { useState, useId } from "react";
import { ArrowRight, Building2, CalendarDays, CheckCircle2, Home, Mail, MapPin, Phone, Ruler, User } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { sendLeadEmail } from "@/lib/lead-email.functions";

const COPY = {
  en: {
    title: "Get Your Free Quote",
    sub: "Fast response. No obligation.",
    name: "Full Name",
    namePh: "Jane Doe",
    phone: "Phone",
    phonePh: "(813) 555-0100",
    email: "Email",
    emailPh: "you@email.com",
    from: "Moving From (ZIP)",
    fromPh: "33578",
    to: "Moving To (ZIP)",
    toPh: "33607",
    propertyType: "Property Type",
    size: "Size",
    date: "Preferred Date",
    submit: "Get My Free Quote",
    sending: "Sending…",
    invalid: "Please complete all required fields (name, phone, email, ZIPs, property type, size).",
    error: "Sorry — we couldn't send your request. Please try again.",
    successTitle: "Thanks — we've got your request",
    successBody:
      "Up to 4 licensed Florida movers can contact you shortly with written quotes.",
    disclaimer:
      "By submitting, you agree to be contacted by phone, text or email by Florida Movers Direct and up to 4 matched licensed moving partners.",
    consent:
      "I agree to be contacted about my move by phone, text message or email by Florida Movers Direct and up to 4 matched licensed movers, including by automated means. Consent is not a condition of any purchase. Message and data rates may apply; reply STOP to opt out of texts.",
    consentRequired: "Please check the box to agree to be contacted so movers can send your quotes.",
    seeOur: "See our",
    privacy: "Privacy Policy",
    and: "and",
    terms: "Terms",
    propertyOptions: [
      { v: "house", l: "House" },
      { v: "apartment", l: "Apartment" },
      { v: "condo", l: "Condo" },
      { v: "townhouse", l: "Townhouse" },
      { v: "commercial", l: "Commercial / Office" },
      { v: "storage", l: "Storage Only" },
    ],
    residentialSizes: [
      { v: "studio", l: "Studio" },
      { v: "1br", l: "1 Bedroom" },
      { v: "2br", l: "2 Bedrooms" },
      { v: "3br", l: "3 Bedrooms" },
      { v: "4br", l: "4 Bedrooms" },
      { v: "5br+", l: "5+ Bedrooms" },
    ],
    commercialSizes: [
      { v: "<1000", l: "Under 1,000 sq ft" },
      { v: "1000-3000", l: "1,000 – 3,000 sq ft" },
      { v: "3000-5000", l: "3,000 – 5,000 sq ft" },
      { v: "5000+", l: "5,000+ sq ft" },
    ],
    storageSizes: [
      { v: "small", l: "Small (5x5 – 5x10)" },
      { v: "medium", l: "Medium (10x10 – 10x15)" },
      { v: "large", l: "Large (10x20 – 10x30)" },
    ],
    selectPh: "Select…",
  },
  es: {
    title: "Reciba su Cotización Gratis",
    sub: "Respuesta rápida. Sin compromiso.",
    name: "Nombre Completo",
    namePh: "María Pérez",
    phone: "Teléfono",
    phonePh: "(813) 555-0100",
    email: "Correo",
    emailPh: "tu@email.com",
    from: "Origen (ZIP)",
    fromPh: "33578",
    to: "Destino (ZIP)",
    toPh: "33607",
    propertyType: "Tipo de Propiedad",
    size: "Tamaño",
    date: "Fecha preferida",
    submit: "Solicitar Cotización Gratis",
    sending: "Enviando…",
    invalid: "Complete todos los campos (nombre, teléfono, correo, ZIPs, tipo de propiedad y tamaño).",
    error: "Lo sentimos — no pudimos enviar su solicitud. Intente de nuevo.",
    successTitle: "Gracias — recibimos su solicitud",
    successBody:
      "Hasta 4 empresas licenciadas de Florida pueden contactarle pronto con cotizaciones.",
    disclaimer:
      "Al enviar, acepta ser contactado por teléfono, mensaje o correo por Florida Movers Direct y hasta 4 empresas licenciadas.",
    consent:
      "Acepto que Florida Movers Direct y hasta 4 empresas de mudanzas licenciadas me contacten sobre mi mudanza por teléfono, mensaje de texto o correo, incluso por medios automatizados. El consentimiento no es condición de compra. Pueden aplicar tarifas de mensajes y datos; responda STOP para dejar de recibir mensajes.",
    consentRequired: "Marque la casilla para aceptar el contacto y que las empresas puedan enviarle sus cotizaciones.",
    seeOur: "Consulte nuestra",
    privacy: "Política de Privacidad",
    and: "y los",
    terms: "Términos",
    propertyOptions: [
      { v: "house", l: "Casa" },
      { v: "apartment", l: "Apartamento" },
      { v: "condo", l: "Condominio" },
      { v: "townhouse", l: "Townhouse" },
      { v: "commercial", l: "Comercial / Oficina" },
      { v: "storage", l: "Solo Almacenaje" },
    ],
    residentialSizes: [
      { v: "studio", l: "Estudio" },
      { v: "1br", l: "1 Habitación" },
      { v: "2br", l: "2 Habitaciones" },
      { v: "3br", l: "3 Habitaciones" },
      { v: "4br", l: "4 Habitaciones" },
      { v: "5br+", l: "5+ Habitaciones" },
    ],
    commercialSizes: [
      { v: "<1000", l: "Menos de 1,000 sq ft" },
      { v: "1000-3000", l: "1,000 – 3,000 sq ft" },
      { v: "3000-5000", l: "3,000 – 5,000 sq ft" },
      { v: "5000+", l: "5,000+ sq ft" },
    ],
    storageSizes: [
      { v: "small", l: "Pequeña (5x5 – 5x10)" },
      { v: "medium", l: "Mediana (10x10 – 10x15)" },
      { v: "large", l: "Grande (10x20 – 10x30)" },
    ],
    selectPh: "Seleccione…",
  },
} as const;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  fromZip: z.string().trim().min(3).max(80),
  toZip: z.string().trim().min(2).max(80),
  propertyType: z.string().trim().min(1).max(40),
  size: z.string().trim().min(1).max(40),
  moveDate: z.string().trim().max(40).optional(),
});

type FormData = {
  name: string;
  phone: string;
  email: string;
  fromZip: string;
  toZip: string;
  propertyType: string;
  size: string;
  moveDate: string;
};

const empty: FormData = {
  name: "",
  phone: "",
  email: "",
  fromZip: "",
  toZip: "",
  propertyType: "",
  size: "",
  moveDate: "",
};

export function HeroQuoteForm() {
  return <MultiStepQuoteForm />;
}

export function MultiStepQuoteForm({
  initialData,
}: {
  variant?: "hero" | "full" | "compact";
  initialData?: Partial<FormData & { from_zip?: string; to_zip?: string }>;
} = {}) {
  const lang = useLang();
  const c = COPY[lang];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const sendLeadEmailFn = useServerFn(sendLeadEmail);
  const [data, setData] = useState<FormData>({ ...empty, ...initialData });
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const consentId = useId();

  const privacyHref = lang === "es" ? "/es/privacy-policy/" : "/privacy-policy/";
  const termsHref = lang === "es" ? "/es/terms/" : "/terms/";

  const up = (k: keyof FormData, v: string) => {
    setError("");
    setData((d) => {
      const next = { ...d, [k]: v };
      if (k === "propertyType") next.size = "";
      return next;
    });
  };

  const sizeOptions =
    data.propertyType === "commercial"
      ? c.commercialSizes
      : data.propertyType === "storage"
      ? c.storageSizes
      : c.residentialSizes;

  const propertyLabel =
    c.propertyOptions.find((o) => o.v === data.propertyType)?.l || data.propertyType;
  const sizeLabel = sizeOptions.find((o) => o.v === data.size)?.l || data.size;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(c.invalid);
      return;
    }
    if (!consent) {
      setError(c.consentRequired);
      return;
    }
    setStatus("saving");
    setError("");
    try {
      await supabase.from("leads").insert({
        language: lang,
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email,
        from_zip: parsed.data.fromZip,
        to_zip: parsed.data.toZip,
        move_type: parsed.data.propertyType,
        home_size: parsed.data.size,
        move_date: parsed.data.moveDate || null,
        source_path: pathname,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });

      const result = await sendLeadEmailFn({
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          from_zip: parsed.data.fromZip,
          to_zip: parsed.data.toZip,
          move_type: propertyLabel,
          home_size: sizeLabel,
          move_date: parsed.data.moveDate || null,
          language: lang,
          source_path: pathname,
        },
      });
      if (!result.sent) throw new Error("email_not_sent");
      setStatus("sent");
      // GA4: count the lead (mark "generate_lead" as a key event in GA4).
      try {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        w.gtag?.("event", "generate_lead", {
          form_location: pathname,
          move_type: parsed.data.propertyType,
          home_size: parsed.data.size,
          language: lang,
        });
      } catch {
        /* analytics must never break the form */
      }
    } catch {
      setStatus("error");
      setError(c.error);
    }
  };

  if (status === "sent") {
    return (
      <div data-quote-form className="quote-card-light pulse-form-light rounded-3xl p-8 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-cta/15 text-cta">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">{c.successTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{c.successBody}</p>
      </div>
    );
  }

  return (
    <div data-quote-form className="quote-card-light pulse-form-light rounded-3xl p-6 md:p-8">
      <form onSubmit={submit} noValidate>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-ink">
          {c.title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>

        <div className="mt-6 grid gap-4">
          <LightField
            label={c.name}
            icon={<User className="h-4 w-4" />}
            value={data.name}
            onChange={(v) => up("name", v)}
            placeholder={c.namePh}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <LightField
              label={c.phone}
              type="tel"
              inputMode="tel"
              icon={<Phone className="h-4 w-4" />}
              value={data.phone}
              onChange={(v) => up("phone", v)}
              placeholder={c.phonePh}
            />
            <LightField
              label={c.email}
              type="email"
              icon={<Mail className="h-4 w-4" />}
              value={data.email}
              onChange={(v) => up("email", v)}
              placeholder={c.emailPh}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LightField
              label={c.from}
              icon={<MapPin className="h-4 w-4" />}
              value={data.fromZip}
              onChange={(v) => up("fromZip", v)}
              placeholder={c.fromPh}
            />
            <LightField
              label={c.to}
              icon={<MapPin className="h-4 w-4" />}
              value={data.toZip}
              onChange={(v) => up("toZip", v)}
              placeholder={c.toPh}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LightSelect
              label={c.propertyType}
              icon={<Building2 className="h-4 w-4" />}
              value={data.propertyType}
              onChange={(v) => up("propertyType", v)}
              placeholder={c.selectPh}
              options={c.propertyOptions}
            />
            <LightSelect
              label={c.size}
              icon={
                data.propertyType === "commercial" || data.propertyType === "storage" ? (
                  <Ruler className="h-4 w-4" />
                ) : (
                  <Home className="h-4 w-4" />
                )
              }
              value={data.size}
              onChange={(v) => up("size", v)}
              placeholder={c.selectPh}
              options={sizeOptions}
              disabled={!data.propertyType}
            />
          </div>
          <LightField
            label={c.date}
            type="date"
            rightIcon={<CalendarDays className="h-4 w-4" />}
            value={data.moveDate}
            onChange={(v) => up("moveDate", v)}
          />
        </div>

        <label htmlFor={consentId} className="mt-5 flex items-start gap-3 text-left text-xs leading-relaxed text-muted-foreground cursor-pointer">
          <input
            id={consentId}
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              setError("");
            }}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-input accent-[var(--color-cta)]"
          />
          <span>{c.consent}</span>
        </label>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/10 px-3 py-2 text-center text-xs font-semibold text-red-700">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "saving"}
          className="pulse-btn-cta mt-6 flex w-full min-h-14 items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 text-base font-bold text-cta-foreground shadow-lg transition hover:brightness-105 disabled:opacity-70"
        >
          {status === "saving" ? c.sending : c.submit}
          <ArrowRight className="h-5 w-5" />
        </button>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
          {c.seeOur}{" "}
          <a href={privacyHref} className="underline hover:text-cta">{c.privacy}</a> {c.and}{" "}
          <a href={termsHref} className="underline hover:text-cta">{c.terms}</a>.
        </p>
      </form>
    </div>
  );
}

function LightField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  inputMode,
  icon,
  rightIcon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}) {
  const padLeft = icon ? "pl-10" : "pl-3";
  const padRight = rightIcon ? "pr-10" : "pr-3";
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-ink/85">{label}</span>
      <div className="relative mt-2">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        )}
        <input
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full min-h-12 rounded-xl border border-input bg-white py-3 text-foreground placeholder-muted-foreground outline-none transition focus:border-cta focus:bg-white focus:ring-2 focus:ring-cta/30 ${padLeft} ${padRight}`}
        />
        {rightIcon && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {rightIcon}
          </span>
        )}
      </div>
    </label>
  );
}

function LightSelect({
  label,
  value,
  onChange,
  placeholder,
  icon,
  options,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  options: ReadonlyArray<{ v: string; l: string }>;
  disabled?: boolean;
}) {
  const padLeft = icon ? "pl-10" : "pl-3";
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-ink/85">{label}</span>
      <div className="relative mt-2">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </span>
        )}
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full min-h-12 appearance-none rounded-xl border border-input bg-white pr-9 py-3 text-foreground outline-none transition focus:border-cta focus:ring-2 focus:ring-cta/30 disabled:opacity-60 ${padLeft}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.v} value={o.v}>
              {o.l}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </label>
  );
}
