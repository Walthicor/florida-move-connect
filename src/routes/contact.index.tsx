import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { Mail, Phone, MapPin } from "lucide-react";
import { MultiStepQuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact/")({
  head: () => pageHead({
    path: "/contact/",
    title: 'Get Free Moving Quotes | Florida Movers Direct',
    description: 'Get up to 4 free quotes from licensed Florida moving companies in 2 minutes. No obligation, no spam — just verified movers competing for your move.',
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-surface-alt">
      <div className="container-page grid items-start gap-12 py-16 md:py-20 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Contact
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-ink md:text-5xl">
            Get Your Free Moving Quotes
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Tell us about your move and we'll match you with up to 4 licensed Florida movers. Compare rates side-by-side — always free, no obligation.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-ink">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Mail className="h-4 w-4" />
              </span>
              <span className="font-semibold">Direct email placeholder available after submission</span>
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
            <ol className="mt-3 list-inside list-decimal space-y-2">
              <li>You complete the form here (about 2 minutes).</li>
              <li>We match you with up to 4 licensed Florida movers.</li>
              <li>Each mover contacts you directly with a written quote.</li>
              <li>You compare, choose, and book — no pressure.</li>
            </ol>
          </div>
        </div>

        <MultiStepQuoteForm />
      </div>
    </section>
  );
}
