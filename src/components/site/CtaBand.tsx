import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="bg-cta text-cta-foreground">
      <div className="container-page py-14 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
            Ready to Move? Compare Free Quotes in 2 Minutes
          </h2>
          <p className="mt-2 text-white/90 text-sm md:text-base">
            Up to 4 quotes from licensed Florida movers. Always free — no obligation.
          </p>
        </div>
        <Link
          to="/contact/"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-cta shadow-card hover:bg-white/95 transition"
        >
          Get Free Quotes
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
