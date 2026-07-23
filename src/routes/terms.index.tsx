import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/terms/")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Florida Movers Direct" },
      { name: "description", content: "Terms governing your use of Florida Movers Direct, our lead-matching service, TCPA consent, disclaimers, and limitation of liability." },
      { property: "og:title", content: "Terms of Service — Florida Movers Direct" },
      { property: "og:description", content: "The rules for using floridamoversdirect.com and our free moving quote request service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="bg-surface-alt">
        <div className="container-page py-14 md:py-20 max-w-3xl">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective date: January 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-14 md:py-16 max-w-3xl space-y-8 text-ink">
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service ("Terms") govern your access to and use of
            floridamoversdirect.com (the "Site") and the free moving-quote matching
            service offered by Florida Movers Direct ("we," "us," "our"). By using the
            Site or submitting a quote request, you agree to these Terms. If you do
            not agree, do not use the Site.
          </p>

          <Section title="1. What We Do">
            <p>
              Florida Movers Direct is a lead-generation and matching service. We are
              <strong> not</strong> a moving company, we do not perform moving
              services, we do not own trucks, and we do not employ moving crews. When
              you submit a quote request, we share your submitted information with up
              to four (4) licensed, independent moving companies so they can contact
              you directly with quotes. Any agreement to perform your move is strictly
              between you and the moving company you choose.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <p>
              You must be at least 18 years old and able to enter into a binding
              contract to use the Site. By submitting information, you represent that
              the information you provide is accurate, complete, and belongs to you
              (or that you have permission to submit it).
            </p>
          </Section>

          <Section title="3. Free Quote Requests and Partner Sharing">
            <p>
              Our service is free to consumers. By submitting a request, you authorize
              us to share the information you provide with up to four (4) licensed
              moving partners solely so they can prepare and deliver quotes to you.
              You are not obligated to accept any quote, and quotes are not binding
              until you and a mover sign a written agreement.
            </p>
          </Section>

          <Section title="4. TCPA Consent to Contact">
            <p>
              By submitting a quote request, you expressly consent to be contacted by
              Florida Movers Direct and up to four (4) matched moving partners at the
              phone number and email you provide, including by automatic dialing
              systems, pre-recorded or artificial voice messages, SMS/MMS text
              messages, and email — regardless of whether your number appears on any
              federal or state do-not-call list. This consent is not required as a
              condition of purchasing any goods or services. Message and data rates
              may apply. Reply <strong>STOP</strong> to opt out of marketing texts
              from any specific sender.
            </p>
          </Section>

          <Section title="5. No Endorsement; Independent Movers">
            <p>
              Moving partners in our network are independent third-party businesses.
              We take reasonable steps to verify that they hold applicable licenses
              (Florida Department of Agriculture and Consumer Services intrastate
              registration, and USDOT/MC authority for interstate moves), but we do
              not guarantee their performance, pricing, availability, insurance
              coverage, or any statement they make to you. You are solely responsible
              for verifying any mover before signing a contract.
            </p>
          </Section>

          <Section title="6. Your Responsibilities">
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground leading-relaxed">
              <li>Provide accurate, non-misleading information about your move;</li>
              <li>Not use the Site for any unlawful, abusive, or fraudulent purpose;</li>
              <li>Not scrape, reverse engineer, or interfere with the Site;</li>
              <li>Review each mover's estimate, contract, and insurance before booking.</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The Site, including its content, design, logos, and code, is owned by or
              licensed to Florida Movers Direct and protected by intellectual-property
              laws. You may not copy, distribute, or create derivative works from the
              Site without our prior written permission.
            </p>
          </Section>

          <Section title="8. Disclaimers">
            <p>
              The Site and our matching service are provided <strong>"as is"</strong>{" "}
              and <strong>"as available"</strong> without warranties of any kind,
              express or implied, including merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that quotes will be
              received, that any mover will accept your job, or that pricing shown
              anywhere on the Site reflects the price you will actually be quoted.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Florida Movers Direct and its
              officers, employees, and affiliates will not be liable for any
              indirect, incidental, consequential, special, or punitive damages, or
              any loss of profits or revenues, arising out of or related to your use
              of the Site, your interactions with any mover, or the performance (or
              non-performance) of any move. Our aggregate liability for direct
              damages will not exceed one hundred U.S. dollars (US $100).
            </p>
          </Section>

          <Section title="10. Indemnification">
            <p>
              You agree to defend, indemnify, and hold harmless Florida Movers Direct
              from any claims, damages, liabilities, and expenses (including
              reasonable attorneys' fees) arising out of your use of the Site, your
              breach of these Terms, or your dispute with any moving partner.
            </p>
          </Section>

          <Section title="11. Governing Law and Venue">
            <p>
              These Terms are governed by the laws of the State of Florida, without
              regard to conflict-of-laws principles. Any dispute arising out of or
              relating to these Terms or the Site will be brought exclusively in the
              state or federal courts located in Florida, and you consent to personal
              jurisdiction and venue there.
            </p>
          </Section>

          <Section title="12. Changes to These Terms">
            <p>
              We may update these Terms from time to time. Material changes will be
              posted on this page with a new "Effective date." Continued use of the
              Site after changes take effect constitutes acceptance of the updated
              Terms.
            </p>
          </Section>

          <Section title="13. Contact">
            <p className="text-muted-foreground leading-relaxed">
              Questions about these Terms? Email{" "}
              <a href="mailto:mardigitalcali@gmail.com" className="text-brand underline">
                mardigitalcali@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}
