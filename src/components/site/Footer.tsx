import { Link } from "@tanstack/react-router";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { SERVICES, CITIES } from "./data";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-white p-1.5">
                <img src="/images/logo.jpg" alt="Florida Movers Direct" className="h-8 w-auto" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Compare free quotes from licensed Florida movers.
              <br />
              FDACS and FMCSA verified.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white/80">
              <ShieldCheck className="h-4 w-4 text-cta" />
              Licensed & insured partners
            </div>
          </div>

          <FooterCol title="Services" items={SERVICES} />
          <FooterCol title="Cities" items={CITIES} />

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cta" />
                <a href="tel:+18005550100" className="hover:text-white">
                  (800) 555-0100
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cta" />
                <a href="mailto:hello@floridamoversdirect.com" className="hover:text-white">
                  hello@floridamoversdirect.com
                </a>
              </li>
              <li>
                <Link to="/contact/" className="hover:text-white">
                  Contact page
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-xs text-white/60">
              <Link to="/privacy-policy/" className="block hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms/" className="block hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Florida Movers Direct. All rights reserved.</p>
          <p>Not a moving company. We connect you with licensed Florida movers.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to} className="hover:text-white transition">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
