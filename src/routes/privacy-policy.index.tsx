import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/CtaBand";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy/")({
  head: () =>
    pageHead({
      path: "/privacy-policy/",
      title: "Privacy Policy | Florida Movers Direct Quote Service",
      description: "How Florida Movers Direct collects, uses and shares the details you submit when requesting moving quotes, including TCPA consent and Florida and CCPA rights.",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <section className="bg-surface-alt">
        <div className="container-page py-14 md:py-20 max-w-3xl">
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-ink">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective date: January 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-14 md:py-16 max-w-3xl prose-content space-y-8 text-ink">
          <Intro>
            Florida Movers Direct ("we," "us," "our") operates floridamoversdirect.com
            (the "Site") as a lead-generation service that connects Florida consumers
            with licensed, independent moving companies. This Privacy Policy explains
            what information we collect, how we use and share it, and the choices you
            have. By using the Site or submitting a quote request, you agree to this
            policy.
          </Intro>

          <Section title="1. Information We Collect">
            <p>When you request quotes, we collect the information you submit, which typically includes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full name, email address, and phone number</li>
              <li>Origin and destination ZIP codes</li>
              <li>Preferred move date and estimated home size or move type</li>
              <li>Any additional details you provide about your move</li>
            </ul>
            <p>
              We also automatically collect limited technical data (IP address, browser
              type, device information, referring URL, and pages visited) through
              server logs and standard analytics tools.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information you submit to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Match your quote request with up to four (4) licensed moving partners;</li>
              <li>Contact you by phone, text (SMS), and email about your request;</li>
              <li>Verify the quality and accuracy of submissions and prevent fraud;</li>
              <li>Improve our Site, matching algorithms, and customer service;</li>
              <li>Comply with applicable laws and legal process.</li>
            </ul>
          </Section>

          <Section title="3. How We Share Your Information">
            <p>
              <strong>Moving partners.</strong> When you submit a quote request, we
              share the information you provide with up to four (4) licensed moving
              companies solely for the purpose of providing the quotes you requested.
              Each partner is an independent business and will use your information
              under its own privacy policy once shared.
            </p>
            <p>
              <strong>Service providers.</strong> We share information with vendors who
              help us operate the Site (hosting, analytics, email/SMS delivery, fraud
              prevention) under contracts that limit their use of the data to services
              performed for us.
            </p>
            <p>
              <strong>Legal and safety.</strong> We may disclose information when
              required by law, subpoena, or court order, or to protect the rights,
              property, or safety of Florida Movers Direct, our users, or the public.
            </p>
            <p>
              We do not sell your personal information for money. Sharing your details
              with matched moving partners so they can quote your move is a core part
              of the service you requested.
            </p>
          </Section>

          <Section title="4. TCPA Consent for Calls, Texts, and Email">
            <p>
              By submitting a quote request, you expressly consent to be contacted by
              Florida Movers Direct and up to four (4) matched licensed moving
              partners at the phone number and email you provide, including by:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Automatic telephone dialing systems (autodialers);</li>
              <li>Pre-recorded or artificial voice messages;</li>
              <li>SMS/MMS text messages;</li>
              <li>Email.</li>
            </ul>
            <p>
              This consent is not required as a condition of purchasing any goods or
              services. Message and data rates may apply. You may opt out of marketing
              texts at any time by replying <strong>STOP</strong>, and you may opt out
              of marketing calls or emails by contacting us using the details below or
              by asking any calling partner to place your number on their internal
              do-not-call list.
            </p>
          </Section>

          <Section title="5. Data Retention and Deletion Requests">
            <p>
              We retain your submission for as long as reasonably necessary to provide
              the service you requested, comply with our legal obligations, resolve
              disputes, and enforce our agreements — typically no longer than 24
              months from your last interaction, unless a longer period is required by
              law.
            </p>
            <p>
              To request deletion of your information, or to access or correct it,
              email us at{" "}
              <a href="mailto:mardigitalcali@gmail.com" className="text-brand underline">
                mardigitalcali@gmail.com
              </a>{" "}
              from the email address you used to submit your request, with the subject
              line "Data Deletion Request." We will respond within the timeframes
              required by applicable law. Please note we cannot control the retention
              policies of moving partners who received your information; you may
              contact them directly to request deletion from their systems.
            </p>
          </Section>

          <Section title="6. Florida and CCPA Privacy Rights">
            <p>
              Florida residents (under the Florida Digital Bill of Rights, where
              applicable) and California residents (under the California Consumer
              Privacy Act, "CCPA") have the following rights regarding their personal
              information:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Right to know</strong> what personal information we collect, use, and share about you;</li>
              <li><strong>Right to access</strong> a copy of the personal information we hold;</li>
              <li><strong>Right to correct</strong> inaccurate personal information;</li>
              <li><strong>Right to delete</strong> personal information we collected from you, subject to legal exceptions;</li>
              <li><strong>Right to opt out</strong> of the "sale" or "sharing" of personal information for cross-context behavioral advertising;</li>
              <li><strong>Right to non-discrimination</strong> for exercising any of these rights.</li>
            </ul>
            <p>
              We do not knowingly sell or share personal information of consumers
              under 16. To exercise any of the rights above, email{" "}
              <a href="mailto:mardigitalcali@gmail.com" className="text-brand underline">
                mardigitalcali@gmail.com
              </a>
              . We will verify your identity before fulfilling the request.
            </p>
          </Section>

          <Section title="7. Cookies and Analytics">
            <p>
              We use cookies and similar technologies to keep the Site working, measure
              traffic, and improve performance. You can control cookies through your
              browser settings; disabling them may affect Site functionality.
            </p>
          </Section>

          <Section title="8. Security">
            <p>
              We use commercially reasonable administrative, technical, and physical
              safeguards to protect the information you submit. No system is 100%
              secure, and we cannot guarantee the security of information transmitted
              over the internet.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The Site is not directed to children under 13, and we do not knowingly
              collect personal information from children under 13. If you believe a
              child has provided us information, contact us and we will delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Material changes
              will be posted on this page with a new "Effective date." Continued use of
              the Site after changes take effect constitutes acceptance of the updated
              policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              Questions about this Privacy Policy or your data can be sent to{" "}
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

function Intro({ children }: { children: React.ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed">{children}</p>;
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
