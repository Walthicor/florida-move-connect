import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { SERVICES_BY_LANG, CITIES_BY_LANG, useLang, t } from "@/lib/i18n";

export function Footer() {
  const lang = useLang();
  const dict = t[lang];
  const services = SERVICES_BY_LANG[lang];
  const cities = CITIES_BY_LANG[lang];
  const contactHref = lang === "es" ? "/es/contact/" : "/contact/";
  const blogHref = lang === "es" ? "/es/blog/" : "/blog/";
  const privacyHref = lang === "es" ? "/es/privacy-policy/" : "/privacy-policy/";
  const termsHref = lang === "es" ? "/es/terms/" : "/terms/";

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="rounded-md bg-white p-1.5">
                <img src="/images/logo.webp" width={1130} height={520} alt="Florida Movers Direct" className="h-8 w-auto" loading="lazy" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {dict.footerTagline}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs text-white/80">
              <ShieldCheck className="h-4 w-4 text-cta" />
              {dict.licensedInsured}
            </div>
          </div>

          <FooterCol title={dict.servicesTitle} items={services} />
          <FooterCol title={dict.citiesTitle} items={cities} />

          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              {dict.contactTitle}
            </h2>
            <Link
              to={contactHref as "/contact/"}
              className="pulse-cta mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-cta px-5 py-3 text-sm font-semibold text-white shadow-card hover:brightness-110 transition"
            >
              {dict.getFreeQuotes}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              <li>
                <Link to={contactHref as "/contact/"} className="hover:text-white">
                  {dict.contactPage}
                </Link>
              </li>
              <li>
                <Link to="/about/" className="hover:text-white">
                  {lang === "es" ? "Quiénes Somos" : "About Us"}
                </Link>
              </li>
              <li>
                <Link to={blogHref as "/blog/"} className="hover:text-white">
                  {dict.blog}
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-2 text-xs text-white/60">
              <Link to={privacyHref as "/privacy-policy/"} className="block hover:text-white">
                {dict.privacy}
              </Link>
              <Link to={termsHref as "/terms/"} className="block hover:text-white">
                {dict.terms}
              </Link>
            </div>
          </div>

        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/50 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Florida Movers Direct. {dict.disclaimerRights}</p>
          <p>{dict.disclaimerNot}</p>
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
      <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-white/75">
        {items.map((it) => (
          <li key={it.to}>
            <Link to={it.to as "/"} className="hover:text-white transition">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
