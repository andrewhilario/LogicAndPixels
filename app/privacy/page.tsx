import type { Metadata } from "next";
import Link from "next/link";
import { LegalSiteHeader } from "@/components/legal-site-header";
import { LegalSection } from "@/components/legal-section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Logic & Pixels collects, uses, and protects personal information when you use our website and services."
};

const EFFECTIVE = "March 23, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LegalSiteHeader />
      <main className="flex-1">
        <div className="border-b bg-muted/30">
          <div className="container max-w-3xl px-4 py-10 md:px-6 md:py-14">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              Legal
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Effective date: {EFFECTIVE}. Last updated: {EFFECTIVE}.
            </p>
          </div>
        </div>
        <article className="container max-w-3xl space-y-10 px-4 py-10 md:px-6 md:py-14">
          <LegalSection title="1. Introduction">
            <p>
              Logic &amp; Pixels (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              respects your privacy. This Privacy Policy explains how we collect,
              use, disclose, store, and protect information when you visit our
              website, use our contact or inquiry forms, engage us for professional
              services, or otherwise interact with us online or offline in
              connection with our business.
            </p>
            <p>
              By accessing our website or submitting information to us, you
              acknowledge that you have read this policy. If you do not agree,
              please discontinue use of our digital properties and refrain from
              submitting personal data.
            </p>
          </LegalSection>

          <LegalSection title="2. Who we are">
            <p>
              Logic &amp; Pixels provides information technology services,
              including custom software, websites, and related consulting. For
              privacy inquiries, you may contact us at{" "}
              <a
                href="mailto:logicandpixels@gmail.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                logicandpixels@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:info-dev@logicandpixels.dev"
                className="font-medium text-primary underline-offset-4 hover:underline break-all"
              >
                info-dev@logicandpixels.dev
              </a>
              .
            </p>
          </LegalSection>

          <LegalSection title="3. Scope">
            <p>
              This policy applies to personal data we process as a data
              controller in connection with our own marketing website and general
              business operations. If we process personal data on behalf of a
              client under a services agreement, that processing is governed by
              the contract with the client and any separate data processing terms,
              which may differ from this policy.
            </p>
          </LegalSection>

          <LegalSection title="4. Information we collect">
            <p className="font-medium text-foreground">
              4.1 Information you provide voluntarily
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Identity and contact details: name, email address, phone number,
                company or institution, job title, and similar identifiers.
              </li>
              <li>
                Project and inquiry content: descriptions of your requirements,
                attachments you send, meeting notes you share, and messages
                submitted through forms or email.
              </li>
              <li>
                Account or collaboration data: if we issue credentials or use
                third-party tools for delivery, we may process usernames and
                related profile fields you provide.
              </li>
            </ul>
            <p className="font-medium text-foreground">
              4.2 Information collected automatically
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Technical data: IP address, approximate location derived from IP,
                browser type and version, device type, operating system, and
                referring URLs.
              </li>
              <li>
                Usage data: pages viewed, time and date of access, click paths,
                and interaction events, collected through cookies and similar
                technologies as described in our{" "}
                <Link
                  href="/cookies"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Cookie Policy
                </Link>
                .
              </li>
            </ul>
            <p className="font-medium text-foreground">
              4.3 Information from third parties
            </p>
            <p>
              We may receive professional contact information from referrals,
              publicly available sources, industry directories, or event
              organizers when it is lawful to do so.
            </p>
          </LegalSection>

          <LegalSection title="5. How we use personal data">
            <p>We use personal data for purposes including:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Responding to inquiries, preparing proposals, and delivering
                contracted services.
              </li>
              <li>
                Operating, securing, and improving our website, including
                troubleshooting, analytics (where permitted), and fraud prevention.
              </li>
              <li>
                Sending administrative messages, service updates, and—where
                legally permitted—marketing communications you can opt out of.
              </li>
              <li>
                Complying with law, regulatory requests, court orders, and
                enforcing our agreements.
              </li>
              <li>
                Protecting the rights, safety, and property of Logic &amp;
                Pixels, our clients, and the public.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="6. Legal bases (where applicable)">
            <p>
              Depending on your jurisdiction, we rely on one or more of the
              following legal bases: your consent (for example, non-essential
              cookies or certain marketing); performance of a contract or
              pre-contractual steps; our legitimate interests in operating and
              growing a professional services business, provided those interests
              are not overridden by your rights; and compliance with legal
              obligations.
            </p>
          </LegalSection>

          <LegalSection title="7. Disclosure of personal data">
            <p>
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Service providers that host our site, store data, provide email
                delivery, analytics, customer relationship tools, or project
                management platforms, subject to confidentiality and processing
                terms.
              </li>
              <li>
                Professional advisers such as lawyers or accountants when
                required for legitimate business purposes.
              </li>
              <li>
                Authorities when we believe disclosure is necessary to comply with
                law or to protect rights and safety.
              </li>
              <li>
                Successors in the event of a merger, acquisition, or asset sale,
                with notice where required by law.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="8. International transfers">
            <p>
              We may process or store data in the Philippines and other countries
              where we or our subprocessors operate. Where we transfer personal
              data across borders, we implement appropriate safeguards such as
              contractual clauses or other mechanisms required by applicable law.
            </p>
          </LegalSection>

          <LegalSection title="9. Retention">
            <p>
              We retain personal data only as long as necessary for the purposes
              described in this policy, including satisfying legal, accounting,
              and reporting requirements. Retention periods vary depending on the
              nature of the data and our relationship with you. Contact records
              and project materials may be retained longer where we have an
              ongoing legitimate need or legal obligation.
            </p>
          </LegalSection>

          <LegalSection title="10. Security">
            <p>
              We implement administrative, technical, and organizational measures
              designed to protect personal data against unauthorized access,
              alteration, disclosure, or destruction. No method of transmission or
              storage is completely secure; we encourage you to use strong
              passwords and secure channels when sharing sensitive information.
            </p>
          </LegalSection>

          <LegalSection title="11. Your rights">
            <p>
              Subject to applicable law, you may have the right to access,
              correct, delete, or restrict processing of your personal data, to
              data portability, to object to certain processing, and to withdraw
              consent where processing is consent-based. You may also have the
              right to lodge a complaint with a supervisory authority. To exercise
              these rights, contact us using the email addresses in Section 2. We
              may need to verify your identity before fulfilling a request.
            </p>
          </LegalSection>

          <LegalSection title="12. Children">
            <p>
              Our services are directed to businesses and adults. We do not
              knowingly collect personal data from children under the age where
              parental consent is required in their jurisdiction. If you believe
              we have collected such data, please contact us and we will take
              appropriate steps to delete it.
            </p>
          </LegalSection>

          <LegalSection title="13. Third-party websites">
            <p>
              Our website may contain links to third-party sites or integrations.
              We are not responsible for the privacy practices of those third
              parties. We encourage you to read their policies before providing
              information.
            </p>
          </LegalSection>

          <LegalSection title="14. Automated decision-making">
            <p>
              We do not use automated decision-making or profiling that produces
              legal or similarly significant effects on individuals in
              connection with this website.
            </p>
          </LegalSection>

          <LegalSection title="15. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The effective
              date at the top will be revised, and where changes are material we
              will provide additional notice as appropriate (for example, a
              banner on our website or an email where we have your contact
              details).
            </p>
          </LegalSection>

          <LegalSection title="16. Contact">
            <p>
              For privacy-related questions or requests, email{" "}
              <a
                href="mailto:logicandpixels@gmail.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                logicandpixels@gmail.com
              </a>{" "}
              or{" "}
              <a
                href="mailto:info-dev@logicandpixels.dev"
                className="font-medium text-primary underline-offset-4 hover:underline break-all"
              >
                info-dev@logicandpixels.dev
              </a>
              . Related documents:{" "}
              <Link
                href="/terms"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
              </Link>
              ,{" "}
              <Link
                href="/cookies"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </LegalSection>
        </article>
      </main>
      <footer className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Logic &amp; Pixels. All rights reserved.
      </footer>
    </div>
  );
}
