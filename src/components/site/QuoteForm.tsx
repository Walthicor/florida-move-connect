import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Home,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import { z } from "zod";

import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { sendLeadEmail } from "@/lib/lead-email.functions";

const COPY = {
  en: {
    heroTitle: "Get up to 4 free quotes",
    heroSub: "Complete it here in about 2 minutes · No obligation",
    getQuotes: "Get Free Quotes",
    title: "Request free quotes",
    step: "Step",
    of: "of",
    back: "Back",
    continueBtn: "Continue",
    submitBtn: "Send my request",
    stepMoveType: "What type of move?",
    stepHomeSize: "Home size",
    stepRoute: "Where are you moving?",
    stepWhen: "When do you want to move?",
    stepContact: "Your contact info",
    moveTypeOptions: ["Local (in Florida)", "Long distance", "Commercial / office", "Storage only"],
    homeSizeOptions: ["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4+ bedrooms", "Office / commercial"],
    flexibilityOptions: ["Exact date", "Flexible by 1-3 days", "Flexible by a week", "Still planning"],
    fromZipLabel: "Moving from ZIP",
    fromZipPh: "e.g. 33101",
    toZipLabel: "Moving to ZIP or city",
    toZipPh: "e.g. 32801 or Orlando",
    dateLabel: "Preferred move date",
    flexibilityLabel: "Date flexibility",
    nameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    required: "Please complete this step to continue.",
    invalidRoute: "Enter your origin and destination.",
    invalidDate: "Choose a move date or select your flexibility.",
    invalidContact: "Enter a valid name, phone and email.",
    disclaimer:
      "By submitting, you agree to be contacted by phone, text, or email by Florida Movers Direct and up to 4 matched licensed moving partners regarding your quote request.",
    privacyLink: "Privacy Policy",
    termsLink: "Terms",
    seeOur: "See our",
    and: "and",
    successTitle: "Thanks — we've got your request",
    successBody:
      "Your lead was sent. Up to 4 licensed Florida movers can contact you shortly with written quotes.",
    errorBody: "Sorry — we couldn't send your request. Please try again or email us at mardigitalcali@gmail.com.",
  },
  es: {
    heroTitle: "Reciba hasta 4 cotizaciones gratis",
    heroSub: "Complételo aquí en unos 2 minutos · Sin compromiso",
    getQuotes: "Cotización Gratis",
    title: "Solicite cotizaciones gratis",
    step: "Paso",
    of: "de",
    back: "Atrás",
    continueBtn: "Continuar",
    submitBtn: "Enviar solicitud",
    stepMoveType: "¿Qué tipo de mudanza?",
    stepHomeSize: "Tamaño de la vivienda",
    stepRoute: "¿Desde dónde y hacia dónde?",
    stepWhen: "¿Cuándo quiere mudarse?",
    stepContact: "Sus datos de contacto",
    moveTypeOptions: ["Local (en Florida)", "Larga distancia", "Comercial / oficina", "Solo almacenamiento"],
    homeSizeOptions: ["Studio", "1 habitación", "2 habitaciones", "3 habitaciones", "4+ habitaciones", "Oficina / comercial"],
    flexibilityOptions: ["Fecha exacta", "Flexible 1-3 días", "Flexible una semana", "Todavía planeando"],
    fromZipLabel: "ZIP de origen",
    fromZipPh: "ej. 33101",
    toZipLabel: "ZIP o ciudad de destino",
    toZipPh: "ej. 32801 u Orlando",
    dateLabel: "Fecha preferida",
    flexibilityLabel: "Flexibilidad de fecha",
    nameLabel: "Nombre completo",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    required: "Complete este paso para continuar.",
    invalidRoute: "Ingrese origen y destino.",
    invalidDate: "Elija una fecha o seleccione su flexibilidad.",
    invalidContact: "Ingrese nombre, teléfono y correo válidos.",
    disclaimer:
      "Al enviar, usted acepta ser contactado por teléfono, mensaje o correo por Florida Movers Direct y hasta 4 empresas licenciadas de mudanzas para su solicitud de cotización.",
    privacyLink: "Política de Privacidad",
    termsLink: "Términos",
    seeOur: "Consulte nuestra",
    and: "y los",
    successTitle: "Gracias — recibimos su solicitud",
    successBody:
      "Su solicitud fue enviada. Hasta 4 empresas licenciadas de Florida pueden contactarle pronto con cotizaciones por escrito.",
    errorBody:
      "Lo sentimos — no pudimos enviar su solicitud. Intente de nuevo o escríbanos a mardigitalcali@gmail.com.",
  },
} as const;

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

type FormData = {
  moveType: string;
  homeSize: string;
  fromZip: string;
  toZip: string;
  moveDate: string;
  flexibility: string;
  name: string;
  email: string;
  phone: string;
};

type FieldName = keyof FormData;

const leadClientSchema = z.object({
  moveType: z.string().trim().min(1).max(80),
  homeSize: z.string().trim().min(1).max(80),
  fromZip: z.string().trim().min(3).max(80),
  toZip: z.string().trim().min(2).max(80),
  moveDate: z.string().trim().max(40).optional(),
  flexibility: z.string().trim().min(1).max(80),
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(7).max(30),
});

const emptyData: FormData = {
  moveType: "",
  homeSize: "",
  fromZip: "",
  toZip: "",
  moveDate: "",
  flexibility: "",
  name: "",
  email: "",
  phone: "",
};

async function saveLead(payload: LeadPayload) {
  const { error } = await supabase.from("leads").insert({
    ...payload,
    move_date: payload.move_date || null,
  });
  if (error) throw error;
}

export function HeroQuoteForm() {
  return <MultiStepQuoteForm variant="hero" />;
}

export function MultiStepQuoteForm({
  variant = "full",
  initialData,
}: {
  variant?: "hero" | "full" | "compact";
  initialData?: Partial<FormData>;
}) {
  const lang = useLang();
  const c = COPY[lang];
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "saving" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [data, setData] = useState<FormData>({ ...emptyData, ...initialData });

  const totalSteps = 5;
  const isHero = variant === "hero";
  const privacyHref = lang === "es" ? "/es/privacy-policy/" : "/privacy-policy/";
  const termsHref = lang === "es" ? "/es/terms/" : "/terms/";

  const normalized = useMemo(
    () => ({
      moveType: data.moveType.trim(),
      homeSize: data.homeSize.trim(),
      fromZip: data.fromZip.trim(),
      toZip: data.toZip.trim(),
      moveDate: data.moveDate.trim(),
      flexibility: data.flexibility.trim(),
      name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone.trim(),
    }),
    [data],
  );

  const update = (k: FieldName, v: string) => {
    setError("");
    setData((d) => ({ ...d, [k]: v }));
  };

  const validateStep = (targetStep = step) => {
    if (targetStep === 1 && !normalized.moveType) return c.required;
    if (targetStep === 2 && !normalized.homeSize) return c.required;
    if (targetStep === 3 && (!normalized.fromZip || !normalized.toZip)) return c.invalidRoute;
    if (targetStep === 4 && !normalized.moveDate && !normalized.flexibility) return c.invalidDate;
    return "";
  };

  const goNext = () => {
    const message = validateStep();
    if (message) {
      setError(message);
      return;
    }
    setStep((s) => Math.min(totalSteps, s + 1));
  };

  const back = () => {
    setError("");
    setStep((s) => Math.max(1, s - 1));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadClientSchema.safeParse(normalized);
    if (!parsed.success) {
      setError(c.invalidContact);
      return;
    }

    setStatus("saving");
    setError("");
    try {
      await saveLead({
        language: lang,
        move_type: parsed.data.moveType,
        home_size: parsed.data.homeSize,
        from_zip: parsed.data.fromZip,
        to_zip: parsed.data.toZip,
        move_date: parsed.data.moveDate || null,
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        source_path: pathname,
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });

      const emailResult = await sendLeadEmail({
        data: {
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          from_zip: parsed.data.fromZip,
          to_zip: parsed.data.toZip,
          home_size: parsed.data.homeSize,
          move_type: parsed.data.moveType,
          move_date: parsed.data.moveDate || null,
          flexibility: parsed.data.flexibility,
          language: lang,
          source_path: pathname,
        },
      });

      if (!emailResult.sent) {
        throw new Error("Lead email was not sent");
      }

      setStatus("sent");
    } catch {
      setStatus("error");
      setError(c.errorBody);
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

  return (
    <div className="pulse-form rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
      {isHero && (
        <div className="mb-5">
          <h2 className="font-display text-xl font-bold text-ink">{c.heroTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{c.heroSub}</p>
        </div>
      )}

      <form onSubmit={submit} noValidate>
        <div className="flex items-center justify-between gap-4">
          <h2 className={`font-display font-bold text-ink ${isHero ? "text-lg" : "text-xl"}`}>
            {c.title}
          </h2>
          <span className="shrink-0 text-xs font-semibold text-muted-foreground">
            {c.step} {step} {c.of} {totalSteps}
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-alt">
          <div className="h-full bg-cta transition-all" style={{ width: `${(step / totalSteps) * 100}%` }} />
        </div>

        <div className="mt-6 min-h-[300px]">
          {step === 1 && (
            <Step title={c.stepMoveType}>
              <OptionGrid
                options={c.moveTypeOptions}
                value={data.moveType}
                onSelect={(opt) => {
                  update("moveType", opt);
                  setStep(2);
                }}
              />
            </Step>
          )}

          {step === 2 && (
            <Step title={c.stepHomeSize}>
              <OptionGrid
                options={c.homeSizeOptions}
                value={data.homeSize}
                onSelect={(opt) => {
                  update("homeSize", opt);
                  setStep(3);
                }}
              />
            </Step>
          )}

          {step === 3 && (
            <Step title={c.stepRoute}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={c.fromZipLabel}
                  value={data.fromZip}
                  onChange={(v) => update("fromZip", v)}
                  placeholder={c.fromZipPh}
                  inputMode="text"
                  icon="pin"
                />
                <Field
                  label={c.toZipLabel}
                  value={data.toZip}
                  onChange={(v) => update("toZip", v)}
                  placeholder={c.toZipPh}
                  inputMode="text"
                  icon="pin"
                />
              </div>
            </Step>
          )}

          {step === 4 && (
            <Step title={c.stepWhen}>
              <div className="grid gap-4">
                <Field
                  label={c.dateLabel}
                  type="date"
                  value={data.moveDate}
                  onChange={(v) => update("moveDate", v)}
                  icon="calendar"
                />
                <div>
                  <p className="block text-sm font-semibold text-ink">{c.flexibilityLabel}</p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    {c.flexibilityOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => update("flexibility", opt)}
                        className={`min-h-11 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
                          data.flexibility === opt
                            ? "border-brand bg-brand/5 text-brand"
                            : "border-border text-ink hover:border-brand/50"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Step>
          )}

          {step === 5 && (
            <Step title={c.stepContact}>
              <div className="grid gap-4">
                <Field label={c.nameLabel} value={data.name} onChange={(v) => update("name", v)} icon="user" />
                <Field label={c.emailLabel} type="email" value={data.email} onChange={(v) => update("email", v)} icon="mail" />
                <Field label={c.phoneLabel} type="tel" value={data.phone} onChange={(v) => update("phone", v)} inputMode="tel" icon="phone" />
              </div>
            </Step>
          )}
        </div>

        {error && <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-center text-xs font-semibold text-red-700">{error}</p>}

        <div className="mt-6 flex items-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={back}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-ink hover:bg-surface-alt"
            >
              <ArrowLeft className="h-4 w-4" /> {c.back}
            </button>
          )}
          {step > 2 && step < totalSteps && (
            <button type="button" onClick={goNext} className="btn-cta btn-cta-hover ml-auto text-sm">
              {c.continueBtn} <ArrowRight className="h-4 w-4" />
            </button>
          )}
          {step === totalSteps && (
            <button type="submit" disabled={status === "saving"} className="btn-cta btn-cta-hover ml-auto text-sm disabled:opacity-70">
              {status === "saving" ? "…" : c.submitBtn} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
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

function OptionGrid({ options, value, onSelect }: { options: readonly string[]; value: string; onSelect: (value: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((opt) => (
        <button
          type="button"
          key={opt}
          onClick={() => onSelect(opt)}
          className={`min-h-11 rounded-lg border px-4 py-3 text-left text-sm font-semibold transition ${
            value === opt ? "border-brand bg-brand/5 text-brand" : "border-border text-ink hover:border-brand/50"
          }`}
        >
          {opt}
        </button>
      ))}
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
  icon?: "pin" | "calendar" | "user" | "mail" | "phone";
}) {
  const Icon = icon === "pin" ? MapPin : icon === "calendar" ? CalendarDays : icon === "user" ? User : icon === "mail" ? Mail : icon === "phone" ? Phone : Home;
  return (
    <div>
      <label className="block text-sm font-semibold text-ink">{label}</label>
      <div className="relative mt-1.5">
        {icon && <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          inputMode={inputMode}
          className={`min-h-11 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 ${icon ? "pl-9" : ""}`}
        />
      </div>
    </div>
  );
}