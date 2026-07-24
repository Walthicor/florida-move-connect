import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { CtaBand } from "@/components/site/CtaBand";
import { sendLeadEmail } from "@/lib/lead-email.functions";

export const Route = createFileRoute("/contact/")({
  head: () => pageHead({
    path: "/contact/",
    title: 'Get Free Moving Quotes | Florida Movers Direct',
    description: 'Get up to 4 free quotes from licensed Florida moving companies in 2 minutes. No obligation, no spam — just verified movers competing for your move.',
  }),
  component: ContactPage,
});

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

function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
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
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
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
        language: "en",
        source_path: pathname,
      },
    }).catch((err) => console.error("sendLeadEmail failed", err));
    setSubmitted(true);
  };

  return (
    <>
      <section className="bg-surface-alt">
        <div className="container-page py-16 md:py-20 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Contact
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">
              Get Your Free Moving Quotes
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Tell us about your move and we'll match you with up to 4 licensed Florida
              movers. Compare rates side-by-side — always free, no obligation.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-ink">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:mardigitalcali@gmail.com"
                  className="font-semibold hover:text-brand"
                >
                  mardigitalcali@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-semibold">Response within 1 business hour</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Serving all of Florida — Miami to Pensacola</span>
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-border bg-white p-5 text-sm text-muted-foreground">
              <p className="font-semibold text-ink">What happens next?</p>
              <ol className="mt-3 space-y-2 list-decimal list-inside">
                <li>You complete the 4-step form (about 2 minutes).</li>
                <li>We match you with up to 4 licensed Florida movers.</li>
                <li>Each mover contacts you directly with a written quote.</li>
                <li>You compare, choose, and book — no pressure.</li>
              </ol>
            </div>
          </div>

          <div className="pulse-form rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card">
            {submitted ? (
              <SuccessPanel />
            ) : (
              <form onSubmit={submit}>
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-xl font-bold text-ink">
                    Request free quotes
                  </h2>
                  <span className="text-xs font-semibold text-muted-foreground">
                    Step {step} of 4
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
                    <Step title="What type of move?">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {["Local (in Florida)", "Long distance", "Commercial / office", "Storage only"].map(
                          (opt) => (
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
                          )
                        )}
                      </div>
                    </Step>
                  )}

                  {step === 2 && (
                    <Step title="Home size">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {["Studio", "1 bedroom", "2 bedrooms", "3 bedrooms", "4+ bedrooms", "Office / commercial"].map(
                          (opt) => (
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
                          )
                        )}
                      </div>
                    </Step>
                  )}

                  {step === 3 && (
                    <Step title="Where and when?">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Moving from (ZIP)" value={data.fromZip} onChange={(v) => update("fromZip", v)} />
                        <Field label="Moving to (ZIP)" value={data.toZip} onChange={(v) => update("toZip", v)} />
                        <div className="sm:col-span-2">
                          <Field
                            label="Preferred move date"
                            type="date"
                            value={data.moveDate}
                            onChange={(v) => update("moveDate", v)}
                          />
                        </div>
                      </div>
                    </Step>
                  )}

                  {step === 4 && (
                    <Step title="Your contact info">
                      <div className="grid gap-4">
                        <Field label="Full name" value={data.name} onChange={(v) => update("name", v)} />
                        <Field label="Email" type="email" value={data.email} onChange={(v) => update("email", v)} />
                        <Field label="Phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} />
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
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="button"
                      onClick={next}
                      className="btn-cta btn-cta-hover ml-auto text-sm"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                  {step === 4 && (
                    <button type="submit" className="btn-cta btn-cta-hover ml-auto text-sm">
                      Get my free quotes <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-center text-muted-foreground">
                  By submitting, you agree to be contacted by phone, text, or email by
                  Florida Movers Direct and up to 4 matched licensed moving partners
                  regarding your quote request. See our{" "}
                  <a href="/privacy-policy/" className="underline hover:text-brand">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms/" className="underline hover:text-brand">
                    Terms
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
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

function SuccessPanel() {
  return (
    <div className="text-center py-8">
      <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
        <CheckCircle2 className="h-7 w-7" />
      </div>
      <h2 className="mt-4 font-display text-2xl font-bold text-ink">
        Thanks — we've got your request
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Up to 4 licensed Florida movers will contact you shortly with written quotes.
        Check your email and phone.
      </p>
    </div>
  );
}
