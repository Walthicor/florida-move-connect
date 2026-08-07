import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ORG_SCHEMA } from "@/lib/seo";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { CtaBand } from "../components/site/CtaBand";
import { QuoteBand } from "../components/site/QuoteBand";
import { TrustBar } from "../components/site/TrustBar";
import { FloatingActions } from "../components/site/FloatingActions";
import { ScrollReveal } from "../components/site/ScrollReveal";
import { Breadcrumbs } from "../components/site/Breadcrumbs";

const TOP_SERVICES = [
  { to: "/local-movers-in-florida/", label: "Local Movers" },
  { to: "/long-distance-movers/", label: "Long Distance" },
  { to: "/movers-in-miami/", label: "Miami Movers" },
  { to: "/movers-in-tampa/", label: "Tampa Movers" },
  { to: "/movers-in-orlando/", label: "Orlando Movers" },
  { to: "/contact/", label: "Get Free Quotes" },
] as const;

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-16">
      <div className="max-w-lg text-center">
        <h1 className="font-display text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-ink">
          Page not found
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved. Try one
          of these instead:
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-cta btn-cta-hover">
            Go home
          </Link>
        </div>
        <div className="mt-8 grid gap-2 sm:grid-cols-2 text-left">
          {TOP_SERVICES.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="rounded-lg border border-border bg-white px-4 py-3 text-sm font-semibold text-ink hover:border-brand hover:text-brand transition"
            >
              {s.label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-cta btn-cta-hover"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-ink hover:border-brand hover:text-brand transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Florida Movers Direct — Compare Free Quotes from Licensed FL Movers" },
      {
        name: "description",
        content:
          "Get up to 4 free quotes from licensed, FDACS & FMCSA verified Florida moving companies. Local, long-distance, storage, commercial and more.",
      },
      { name: "author", content: "Florida Movers Direct" },
      { property: "og:site_name", content: "Florida Movers Direct" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Florida Movers Direct — Compare Free Quotes from Licensed FL Movers" },
      { name: "twitter:title", content: "Florida Movers Direct — Compare Free Quotes from Licensed FL Movers" },
      { property: "og:description", content: "Get up to 4 free quotes from licensed, FDACS & FMCSA verified Florida moving companies. Local, long-distance, storage, commercial and more." },
      { name: "twitter:description", content: "Get up to 4 free quotes from licensed, FDACS & FMCSA verified Florida moving companies. Local, long-distance, storage, commercial and more." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/SeQkoU9N6vbSQSv9DnATSPRX2tI2/social-images/social-1784863055346-Contact_Florida_Movers_Direct.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/SeQkoU9N6vbSQSv9DnATSPRX2tI2/social-images/social-1784863055346-Contact_Florida_Movers_Direct.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap",
      },
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-family.jpg",
        fetchPriority: "high",
      } as unknown as { rel: string; href: string },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_SCHEMA),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterPathname();
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const noBandRoutes = new Set(["/", "/es", "/contact", "/es/contact"]);
  const showQuoteBand = !noBandRoutes.has(normalized);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.origin);
      const isQuoteDestination = url.origin === window.location.origin && (url.pathname === "/contact/" || url.pathname === "/es/contact/");
      const isQuoteCta = anchor.classList.contains("btn-cta") || anchor.classList.contains("pulse-cta") || anchor.dataset.quoteTrigger === "true";
      if (!isQuoteDestination || !isQuoteCta) return;

      const form = document.querySelector<HTMLElement>("[data-quote-form]");
      if (!form) return;
      event.preventDefault();
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstControl = form.querySelector<HTMLElement>("input, button");
      window.setTimeout(() => firstControl?.focus({ preventScroll: true }), 350);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HtmlLangSync />
      <ScrollReveal />
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <TrustBar />
        <Breadcrumbs />
        {showQuoteBand && <QuoteBand />}
        <main className="flex-1">
          <Outlet />
        </main>
        <CtaBand />
        <Footer />
        <FloatingActions />
      </div>
    </QueryClientProvider>
  );
}

function HtmlLangSync() {
  const pathname = useRouterPathname();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const isEs = pathname === "/es" || pathname === "/es/" || pathname.startsWith("/es/");
    document.documentElement.lang = isEs ? "es" : "en";
  }, [pathname]);
  return null;
}

function useRouterPathname() {
  return useRouterState({ select: (s) => s.location.pathname });
}


