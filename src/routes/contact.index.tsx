import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact/")({
  head: () => ({
    meta: [
      { title: "Contact Florida Movers Direct — Get Free Quotes" },
      { name: "description", content: "Contact Florida Movers Direct or start your free quote request. Up to 4 quotes from licensed Florida movers." },
      { property: "og:title", content: "Contact Florida Movers Direct" },
      { property: "og:description", content: "Start your free quote request." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-surface-alt">
        <div className="container-page py-16 md:py-20 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              Contact
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">
              Let's get you moving
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Tell us about your move and we'll match you with up to 4 licensed Florida
              movers. Always free — no obligation.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-ink">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+18005550100" className="font-semibold hover:text-brand">
                  (800) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href="mailto:hello@floridamoversdirect.com"
                  className="font-semibold hover:text-brand"
                >
                  hello@floridamoversdirect.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Serving all of Florida</span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-card"
          >
            <h2 className="font-display text-xl font-bold text-ink">Request free quotes</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Takes about 2 minutes.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Move date" name="date" type="date" />
              <Field label="Moving from (zip)" name="from" />
              <Field label="Moving to (zip)" name="to" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-ink">Home size</label>
              <select className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20">
                <option>Studio</option>
                <option>1 bedroom</option>
                <option>2 bedrooms</option>
                <option>3 bedrooms</option>
                <option>4+ bedrooms</option>
                <option>Office / commercial</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn-cta btn-cta-hover mt-6 w-full text-base"
            >
              Get my free quotes <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-[11px] text-center text-muted-foreground">
              By submitting you agree to be contacted by up to 4 licensed movers.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
