import { useState } from "react";
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { useRouterState, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { sendLeadEmail } from "@/lib/lead-email.functions";

/* ---------------------------------------------------------------------- */
/* Copy dictionary                                                         */
/* ---------------------------------------------------------------------- */

const COPY = {
  en: {
    heroTitle: "Get up to 4 free quotes",
    heroSub: "Takes about 2 minutes · No obligation",
    fromZip: "Moving From (ZIP)",
    fromZipPh: "e.g. 33101",
    toZip: "Moving To",
    toZipPh: "ZIP or city",
    getQuotes: "Get Free Quotes",
    footNote: "Up to 4 licensed Florida movers · Always free",
    // Multi-step
    title: "Request free quotes",
    step: "Step",
    of: "of",
    back: "Back",
    continueBtn: "Continue",
    submitBtn: "Get my free quotes",
    stepMoveType: "What type of move?",
    stepHomeSize: "Home size",
    stepWhen: "Where and when?",
    stepContact: "Your contact info",
    moveTypeOptions: ["Local (in Florida)", "Long distance", "Commercial / office", "Storage only"],
    homeSizeOptions: ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4+ bedrooms", "Office / commercial"],
    fromZipLabel: "Moving from (ZIP)",
    toZipLabel: "Moving to (ZIP)",
    dateLabel: "Preferred move date",
    nameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    disclaimer:
      "By submitting, you agree to be contacted by phone, text, or email by Florida Movers Direct and up to 4 matched licensed moving partners regarding your quote request.",
    privacyLink: "Privacy Policy",
    termsLink: "Terms",
    seeOur: "See our",
    and: "and",
    successTitle: "Thanks — we've got your request",
    successBody:
      "Up to 4 licensed Florida movers will contact you shortly with written quotes. Check your email and phone.",
    errorBody: "Sorry — we couldn't send your request. Please try again or email us at mardigitalcali@gmail.com.",
  },
  es: {
    heroTitle: "Reciba hasta 4 cotizaciones gratis",
    heroSub: "Toma unos 2 minutos · Sin compromiso",
    fromZip: "Mudanza desde (ZIP)",
    fromZipPh: "ej. 33101",
    toZip: "Mudanza a",
    toZipPh: "ZIP o ciudad",
    getQuotes: "Cotización Gratis",
    footNote: "Hasta 4 empresas licenciadas en Florida · Siempre gratis",
    title: "Solicite cotizaciones gratis",
    step: "Paso",
    of: "de",
    back: "Atrás",
    continueBtn: "Continuar",
    submitBtn: "Recibir mis cotizaciones",
    stepMoveType: "¿Qué tipo de mudanza?",
    stepHomeSize: "Tamaño de la vivienda",
    stepWhen: "¿Dónde y cuándo?",
    stepContact: "Sus datos de contacto",
    moveTypeOptions: ["Local (en Florida)", "Larga distancia", "Comercial / oficina", "Solo almacenamiento"],
    homeSizeOptions: ["Studio", "1 habitación", "2 habitaciones", "3 habitaciones", "4+ habitaciones", "Oficina / comercial"],
    fromZipLabel: "Mudanza desde (ZIP)",
    toZipLabel: "Mudanza a (ZIP)",
    dateLabel: "Fecha preferida",
    nameLabel: "Nombre completo",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    disclaimer:
      "Al enviar, usted acepta ser contactado por teléfono, mensaje o correo por Florida Movers Direct y hasta 4 empresas licenciadas de mudanzas para su solicitud de cotización.",
    privacyLink: "Política de Privacidad",
    termsLink: "Términos",
    seeOur: "Consulte nuestra",
    and: "y los",
    successTitle: "Gracias — recibimos su solicitud",
    successBody:
      "Hasta 4 empresas licenciadas de Florida le contactarán en breve con cotizaciones por escrito. Revise su correo y teléfono.",
    errorBody:
      "Lo sentimos — no pudimos enviar su solicitud. Intente de nuevo o escríbanos a mardigitalcali@gmail.com.",
  },
} as const;

/* ---------------------------------------------------------------------- */
/* Supabase persistence                                                    */
/* ---------------------------------------------------------------------- */

type LeadPayload = {
  language: "en" | "es";
  move_type?: string | null;
  home_size?: string | null;
  from_zip?: string | null;
  to_zip?: string | null;
  move_date?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  source_path?: string | null;
  user_agent?: string | null;
};

async function saveLead(payload: LeadPayload) {
  const { error } = await supabase.from("leads").insert({
    ...payload,
    move_date: payload.move_date || null,
  });
  if (error) throw error;
}

/* ---------------------------------------------------------------------- */
/* Hero mini-form (ZIP + ZIP)                                              */
/* ---------------------------------------------------------------------- */

export function HeroQuoteForm() {
  const lang = useLang();
  const c = COPY[lang];
  const [fromZip, setFromZip] = useState("");
  const [toZip, setToZip] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "error">("idle");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fromZip && !toZip) return;
    setStatus("saving");
    try {
      await saveLead({
        language: lang,
        from_zip: fromZip || null,
        to_zip: toZip || null,
        source_path: pathname,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="pulse-form rounded-2xl border border-border bg-white p-6 md:p-7 shadow-card text-center">
        <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="mt-4 font-display text-xl font-bold text-ink">{c.successTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{c.successBody}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="pulse-form rounded-2xl border border-border bg-white p-6 md:p-7 shadow-card"
    >
      <h2 className="font-display text-xl font-bold text-ink">{c.heroTitle}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{c.heroSub}</p>

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor="from-zip" className="block text-sm font-semibold text-ink">
            {c.fromZip}
          </label>
          <div className="relative mt-1.5">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="from-zip"
              inputMode="numeric"
              maxLength={5}
              value={fromZip}
              onChange={(e) => setFromZip(e.target.value)}
              placeholder={c.fromZipPh}
              className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="to-zip" className="block text-sm font-semibold text-ink">
            {c.toZip}
          </label>
          <div className="relative mt-1.5">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="to-zip"
              value={toZip}
              onChange={(e) => setToZip(e.target.value)}
              placeholder={c.toZipPh}
              className="w-full rounded-lg border border-border bg-white pl-9 pr-3 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "saving"}
          className="btn-cta btn-cta-hover w-full text-base disabled:opacity-70"
        >
          {status === "saving" ? "…" : c.getQuotes} <ArrowRight className="h-4 w-4" />
        </button>

        {status === "error" && (
          <p className="text-xs text-center text-red-600">{c.errorBody}</p>
        )}
        <p className="text-[11px] text-center text-muted-foreground">{c.footNote}</p>
      </div>
    </form>
  );
}

/* ---------------------------------------------------------------------- */
/* Full multi-step form                                                    */
/* ---------------------------------------------------------------------- */

type FormData = {
  moveType: string;
  homeSize: string;
  fromZip: string;
  toZip: string;
  moveDate: string;
  name: string;
  email: string;
  phone: string;
};

export function MultiStepQuoteForm() {
  const lang = useLang();
  const c = COPY[lang];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "error">("idle");
  const [data, setData] = useState<FormData>({
    moveType: "",
    homeSize: "",
    fromZip: "",
    toZip: "",
    moveDate: "",
    name: "",
    email: "",
    phone: "",
  });

  const update = (k: keyof FormData, v: string) => setData((d) => ({ ...d, [k]: v }));
  const next = () => setStep((s) => Math.min(4, s + 1));
  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    try {
      await saveLead({
        language: lang,
        move_type: data.moveType || null,
        home_size: data.homeSize || null,
        from_zip: data.fromZip || null,
        to_zip: data.toZip || null,
        move_date: data.moveDate || null,
        name: data.name || null,
        email: data.email || null,
        phone: data.phone || null,
        source_path: pathname,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });
      // Completed lead — notify by email (fire-and-forget; don't block UX).
      void sendLeadEmail({
        data: {
          name: data.name || null,
          email: data.email || null,
          phone: data.phone || null,
          from_zip: data.fromZip || null,
          to_zip: data.toZip || null,
          home_size: data.homeSize || null,
          move_type: data.moveType || null,
          move_date: data.moveDate || null,
          language: lang,
          source_path: pathname,
        },
      }).catch((err) => console.error("sendLeadEmail failed", err));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="pulse-form rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
        <div className="text-center py-8">
          <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink">{c.successTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{c.successBody}</p>
        </div>
      </div>
    );
  }

  const privacyHref = lang === "es" ? "/es/privacy-policy/" : "/privacy-policy/";
  const termsHref = lang === "es" ? "/es/terms/" : "/terms/";

  return (
    <div className="pulse-form rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
      <form onSubmit={submit}>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-ink">{c.title}</h2>
          <span className="text-xs font-semibold text-muted-foreground">
            {c.step} {step} {c.of} 4
          </span>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-surface-alt overflow-hidden">
          <div
            className="h-full bg-cta transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <div className="mt-6 min-h-[280px]">
          {step === 1 && (
            <Step title={c.stepMoveType}>
              <div className="grid gap-3 sm:grid-cols-2">
                {c.moveTypeOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => {
                      update("moveType", opt);
                      next();
                    }}
                    className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                      data.moveType === opt
                        ? "border-brand bg-brand/5 text-brand"
                        : "border-border text-ink hover:border-brand/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </Step>
          )}

          {step === 2 && (
            <Step title={c.stepHomeSize}>
              <div className="grid gap-3 sm:grid-cols-2">
                {c.homeSizeOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => {
                      update("homeSize", opt);
                      next();
                    }}
                    className={`rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                      data.homeSize === opt
                        ? "border-brand bg-brand/5 text-brand"
                        : "border-border text-ink hover:border-brand/50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </Step>
          )}

          {step === 3 && (
            <Step title={c.stepWhen}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={c.fromZipLabel} value={data.fromZip} onChange={(v) => update("fromZip", v)} />
                <Field label={c.toZipLabel} value={data.toZip} onChange={(v) => update("toZip", v)} />
                <div className="sm:col-span-2">
                  <Field
                    label={c.dateLabel}
                    type="date"
                    value={data.moveDate}
                    onChange={(v) => update("moveDate", v)}
                  />
                </div>
              </div>
            </Step>
          )}

          {step === 4 && (
            <Step title={c.stepContact}>
              <div className="grid gap-4">
                <Field label={c.nameLabel} value={data.name} onChange={(v) => update("name", v)} />
                <Field label={c.emailLabel} type="email" value={data.email} onChange={(v) => update("email", v)} />
                <Field label={c.phoneLabel} type="tel" value={data.phone} onChange={(v) => update("phone", v)} />
              </div>
            </Step>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              <ArrowLeft className="h-4 w-4" /> {c.back}
            </button>
          )}
          {step === 3 && (
            <button
              type="button"
              onClick={next}
              className="btn-cta btn-cta-hover ml-auto text-sm"
            >
              {c.continueBtn} <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              disabled={status === "saving"}
              className="btn-cta btn-cta-hover ml-auto text-sm disabled:opacity-70"
            >
              {status === "saving" ? "…" : c.submitBtn} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {status === "error" && (
          <p className="mt-3 text-xs text-center text-red-600">{c.errorBody}</p>
        )}

        <p className="mt-4 text-[11px] leading-relaxed text-center text-muted-foreground">
          {c.disclaimer} {c.seeOur}{" "}
          <a href={privacyHref} className="underline hover:text-brand">
            {c.privacyLink}
          </a>{" "}
          {c.and}{" "}
          <a href={termsHref} className="underline hover:text-brand">
            {c.termsLink}
          </a>
          .
        </p>
      </form>
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
