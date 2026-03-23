import type { Metadata } from "next";
import Link from "next/link";
import { LegalSiteHeader } from "@/components/legal-site-header";
import { LegalSection } from "@/components/legal-section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of the Logic & Pixels website and engagement of our professional services."
};

const EFFECTIVE = "March 23, 2026";

export default function TermsOfServicePage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Effective date: {EFFECTIVE}. Last updated: {EFFECTIVE}.
            </p>
          </div>
        </div>
        <article className="container max-w-3xl space-y-10 px-4 py-10 md:px-6 md:py-14">
          <LegalSection title="1. Agreement to terms">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) constitute a binding
              agreement between you (&quot;you&quot; or &quot;Client&quot;) and
              Logic &amp; Pixels (&quot;Logic &amp; Pixels,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) regarding your access to and use
              of our website located at our published domains (collectively, the
              &quot;Site&quot;) and, where applicable, the procurement of
              professional services described in a separate statement of work,
              proposal, or contract (&quot;Services Agreement&quot;).
            </p>
            <p>
              If you are entering into these Terms on behalf of an organization,
              you represent that you have authority to bind that organization. If
              you do not agree, do not use the Site or our services.
            </p>
          </LegalSection>

          <LegalSection title="2. Our services">
            <p>
              Logic &amp; Pixels provides custom information technology services,
              which may include software development, web applications, thesis or
              capstone systems, business websites, integrations, consulting, and
              related deliverables. The scope, timeline, fees, acceptance
              criteria, intellectual property terms, warranties, and support for
              any paid engagement are defined exclusively in a Services Agreement.
              In the event of conflict between these Terms and a signed Services
              Agreement, the Services Agreement prevails for that engagement.
            </p>
          </LegalSection>

          <LegalSection title="3. Eligibility and acceptable use">
            <p>You agree that you will not:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Use the Site or our services for any unlawful purpose or in
                violation of applicable regulations.
              </li>
              <li>
                Attempt to gain unauthorized access to our systems, other
                users&apos; data, or third-party infrastructure.
              </li>
              <li>
                Introduce malware, conduct denial-of-service attacks, scrape the
                Site in a manner that impairs performance, or circumvent security or
                access controls.
              </li>
              <li>
                Use our services to build or deploy products that infringe
                intellectual property rights, promote illegal activity, or violate
                the rights of others.
              </li>
              <li>
                Misrepresent your identity, affiliation, or authority when
                contacting us or signing agreements.
              </li>
            </ul>
            <p>
              We may suspend or terminate access if we reasonably believe you have
              violated this section or pose a risk to our operations or other
              clients.
            </p>
          </LegalSection>

          <LegalSection title="4. Accounts and communications">
            <p>
              If we provide you with credentials or use collaboration tools, you
              are responsible for safeguarding access credentials and for all
              activity under your account. You agree that we may send operational,
              security, and contractual notices to the contact details you
              provide.
            </p>
          </LegalSection>

          <LegalSection title="5. Intellectual property">
            <p className="font-medium text-foreground">5.1 Our materials</p>
            <p>
              The Site, our branding, templates, documentation, pre-existing
              tools, and proprietary methodologies remain the exclusive property of
              Logic &amp; Pixels or our licensors. Except for rights expressly
              granted in a Services Agreement, no license is granted to you.
            </p>
            <p className="font-medium text-foreground">5.2 Client materials</p>
            <p>
              You retain ownership of materials you supply to us. You grant Logic
              &amp; Pixels a non-exclusive license to use those materials as
              reasonably necessary to perform the services you request.
            </p>
            <p className="font-medium text-foreground">5.3 Deliverables</p>
            <p>
              Ownership and license rights in deliverables produced under a paid
              engagement are set forth in the applicable Services Agreement. Until
              full payment and any acceptance conditions are satisfied, we may
              withhold delivery or reserve certain usage rights as specified in
              that agreement.
            </p>
          </LegalSection>

          <LegalSection title="6. Fees, expenses, and taxes">
            <p>
              Fees, invoicing schedules, currencies, late payment interest, and
              expense policies are specified in your Services Agreement or written
              quotation. Unless stated otherwise, fees are exclusive of applicable
              taxes, duties, and government charges, which you are responsible for
              paying where required by law.
            </p>
          </LegalSection>

          <LegalSection title="7. Confidentiality">
            <p>
              Each party may receive confidential information from the other in
              connection with an engagement. The receiving party will use
              reasonable care to protect such information and will not disclose
              it except as permitted by law or as required to perform the
              services. Additional confidentiality terms may appear in a
              non-disclosure or Services Agreement.
            </p>
          </LegalSection>

          <LegalSection title="8. Warranties and disclaimer">
            <p>
              The Site is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. To the fullest extent permitted by law, we
              disclaim all implied warranties, including merchantability, fitness
              for a particular purpose, and non-infringement, regarding the Site
              and any general information published on it.
            </p>
            <p>
              For custom deliverables, express warranties—if any—are limited to
              those stated in your Services Agreement. We do not warrant that
              software will be error-free or uninterrupted or that it will meet
              every future regulatory requirement without further modification.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of liability">
            <p>
              To the maximum extent permitted by applicable law, neither Logic
              &amp; Pixels nor its directors, employees, or contractors will be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or for loss of profits, revenue, data, or goodwill,
              arising from your use of the Site or services, even if advised of
              the possibility of such damages.
            </p>
            <p>
              Our aggregate liability arising out of or relating to the Site
              (excluding paid services governed by a Services Agreement) shall
              not exceed the greater of one hundred U.S. dollars (USD 100) or the
              amount you paid us in the twelve months preceding the claim solely
              for Site-related offerings, if any. For paid engagements, liability
              caps and exclusions are as set forth in the Services Agreement.
            </p>
            <p>
              Some jurisdictions do not allow certain limitations; in those
              jurisdictions, our liability is limited to the fullest extent
              permitted by law.
            </p>
          </LegalSection>

          <LegalSection title="10. Indemnification">
            <p>
              You will defend, indemnify, and hold harmless Logic &amp; Pixels
              from claims, damages, losses, and expenses (including reasonable
              attorneys&apos; fees) arising from your breach of these Terms, your
              misuse of the Site, your content or materials supplied to us, or
              your violation of law or third-party rights—except to the extent
              caused by our willful misconduct.
            </p>
          </LegalSection>

          <LegalSection title="11. Third-party services">
            <p>
              Our deliverables or the Site may interoperate with third-party
              platforms (for example, hosting providers, payment processors, or
              analytics tools). Your use of those services is subject to the
              third party&apos;s terms and privacy policy. We are not responsible
              for third-party acts or omissions.
            </p>
          </LegalSection>

          <LegalSection title="12. Suspension and termination">
            <p>
              We may suspend or terminate your access to the Site at any time for
              operational, security, or legal reasons, or if you breach these Terms.
              Provisions that by their nature should survive—including intellectual
              property, confidentiality, disclaimers, limitation of liability,
              indemnification, and dispute resolution—will survive termination.
            </p>
          </LegalSection>

          <LegalSection title="13. Governing law and disputes">
            <p>
              These Terms are governed by the laws of the Republic of the
              Philippines, without regard to conflict-of-law principles, except
              where mandatory consumer protection laws of your country provide
              otherwise. You agree that the courts located in the Philippines shall
              have exclusive jurisdiction over disputes arising from these Terms
              related to the Site, subject to any mandatory venue rules that
              apply to you as a consumer.
            </p>
            <p>
              For enterprise Services Agreements, governing law and dispute
              resolution may be specified separately in those contracts.
            </p>
          </LegalSection>

          <LegalSection title="14. Changes">
            <p>
              We may modify these Terms by posting an updated version on the Site
              and revising the effective date. Material changes may be
              highlighted through additional notice where appropriate. Continued
              use after the effective date constitutes acceptance of the revised
              Terms.
            </p>
          </LegalSection>

          <LegalSection title="15. Miscellaneous">
            <p>
              These Terms constitute the entire agreement between you and Logic
              &amp; Pixels regarding the Site, superseding prior understandings on
              that subject. If any provision is held unenforceable, the remaining
              provisions remain in effect. Our failure to enforce a provision is
              not a waiver. You may not assign these Terms without our consent; we
              may assign them in connection with a merger, acquisition, or sale of
              assets.
            </p>
          </LegalSection>

          <LegalSection title="16. Contact">
            <p>
              Questions about these Terms:{" "}
              <a
                href="mailto:logicandpixels@gmail.com"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                logicandpixels@gmail.com
              </a>
              ,{" "}
              <a
                href="mailto:info-dev@logicandpixels.dev"
                className="font-medium text-primary underline-offset-4 hover:underline break-all"
              >
                info-dev@logicandpixels.dev
              </a>
              . See also our{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
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
