import { useState } from "react";
import { ArrowRight, CalendarDays, CheckCircle2, Mail, MapPin, Phone, User } from "lucide-react";
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
    date: "Preferred Date",
    submit: "Get My Free Quote",
    sending: "Sending…",
    invalid: "Please complete name, phone, valid email and both ZIPs.",
    error: "Sorry — we couldn't send your request. Please try again.",
    successTitle: "Thanks — we've got your request",
    successBody:
      "Up to 4 licensed Florida movers can contact you shortly with written quotes.",
    disclaimer:
      "By submitting, you agree to be contacted by phone, text or email by Florida Movers Direct and up to 4 matched licensed moving partners.",
    seeOur: "See our",
    privacy: "Privacy Policy",
    and: "and",
    terms: "Terms",
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
    date: "Fecha preferida",
    submit: "Solicitar Cotización Gratis",
    sending: "Enviando…",
    invalid: "Complete nombre, teléfono, correo válido y ambos ZIPs.",
    error: "Lo sentimos — no pudimos enviar su solicitud. Intente de nuevo.",
    successTitle: "Gracias — recibimos su solicitud",
    successBody:
      "Hasta 4 empresas licenciadas de Florida pueden contactarle pronto con cotizaciones.",
    disclaimer:
      "Al enviar, acepta ser contactado por teléfono, mensaje o correo por Florida Movers Direct y hasta 4 empresas licenciadas.",
    seeOur: "Consulte nuestra",
    privacy: "Política de Privacidad",
    and: "y los",
    terms: "Términos",
  },
} as const;

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(30),
  email: z.string().trim().email().max(255),
  fromZip: z.string().trim().min(3).max(80),
  toZip: z.string().trim().min(2).max(80),
  moveDate: z.string().trim().max(40).optional(),
});

type FormData = {
  name: string;
  phone: string;
  email: string;
  fromZip: string;
  toZip: string;
  moveDate: string;
};

const empty: FormData = { name: "", phone: "", email: "", fromZip: "", toZip: "", moveDate: "" };

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

  const privacyHref = lang === "es" ? "/es/privacy-policy/" : "/privacy-policy/";
  const termsHref = lang === "es" ? "/es/terms/" : "/terms/";

  const up = (k: keyof FormData, v: string) => {
    setError("");
    setData((d) => ({ ...d, [k]: v }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({
      name: data.name,
      phone: data.phone,
      email: data.email,
      fromZip: data.fromZip,
      toZip: data.toZip,
      moveDate: data.moveDate,
    });
    if (!parsed.success) {
      setError(c.invalid);
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
          move_date: parsed.data.moveDate || null,
          language: lang,
          source_path: pathname,
        },
      });
      if (!result.sent) throw new Error("email_not_sent");
      setStatus("sent");
    } catch {
      setStatus("error");
      setError(c.error);
    }
  };

  if (status === "sent") {
    return (
      <div data-quote-form className="quote-card-dark pulse-form-orange rounded-3xl p-8 text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-cta/20 text-cta">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-4 font-display text-2xl font-bold text-white">{c.successTitle}</h2>
        <p className="mt-2 text-sm text-white/70">{c.successBody}</p>
      </div>
    );
  }

  return (
    <div data-quote-form className="quote-card-dark pulse-form-orange rounded-3xl p-6 md:p-8">
      <form onSubmit={submit} noValidate>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
          {c.title}
        </h2>
        <p className="mt-1 text-sm text-white/70">{c.sub}</p>

        <div className="mt-6 grid gap-4">
          <DarkField
            label={c.name}
            icon={<User className="h-4 w-4" />}
            value={data.name}
            onChange={(v) => up("name", v)}
            placeholder={c.namePh}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <DarkField
              label={c.phone}
              type="tel"
              inputMode="tel"
              icon={<Phone className="h-4 w-4" />}
              value={data.phone}
              onChange={(v) => up("phone", v)}
              placeholder={c.phonePh}
            />
            <DarkField
              label={c.email}
              type="email"
              icon={<Mail className="h-4 w-4" />}
              value={data.email}
              onChange={(v) => up("email", v)}
              placeholder={c.emailPh}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <DarkField
              label={c.from}
              icon={<MapPin className="h-4 w-4" />}
              value={data.fromZip}
              onChange={(v) => up("fromZip", v)}
              placeholder={c.fromPh}
            />
            <DarkField
              label={c.to}
              icon={<MapPin className="h-4 w-4" />}
              value={data.toZip}
              onChange={(v) => up("toZip", v)}
              placeholder={c.toPh}
            />
          </div>
          <DarkField
            label={c.date}
            type="date"
            icon={<CalendarDays className="h-4 w-4" />}
            value={data.moveDate}
            onChange={(v) => up("moveDate", v)}
          />
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-500/15 px-3 py-2 text-center text-xs font-semibold text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "saving"}
          className="pulse-btn-cta mt-6 flex w-full min-h-14 items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 text-base font-bold text-ink shadow-lg transition hover:brightness-105 disabled:opacity-70"
        >
          {status === "saving" ? c.sending : c.submit}
          <ArrowRight className="h-5 w-5" />
        </button>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-white/60">
          {c.disclaimer} {c.seeOur}{" "}
          <a href={privacyHref} className="underline hover:text-cta">{c.privacy}</a> {c.and}{" "}
          <a href={termsHref} className="underline hover:text-cta">{c.terms}</a>.
        </p>
      </form>
    </div>
  );
}

function DarkField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  inputMode,
  icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  icon?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-wide text-white/85">{label}</span>
      <div className="relative mt-2">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
            {icon}
          </span>
        )}
        <input
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full min-h-12 rounded-xl border border-white/20 bg-white/5 py-3 text-white placeholder-white/40 outline-none transition focus:border-cta/70 focus:bg-white/10 focus:ring-2 focus:ring-cta/40 ${
            icon ? "pl-10 pr-3" : "px-3"
          }`}
        />
      </div>
    </label>
  );
}
