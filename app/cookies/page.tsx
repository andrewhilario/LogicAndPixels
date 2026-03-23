import type { Metadata } from "next";
import Link from "next/link";
import { LegalSiteHeader } from "@/components/legal-site-header";
import { LegalSection } from "@/components/legal-section";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Logic & Pixels uses cookies and similar technologies, and how you can manage your preferences."
};

const EFFECTIVE = "March 23, 2026";

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Effective date: {EFFECTIVE}. Last updated: {EFFECTIVE}.
            </p>
          </div>
        </div>
        <article className="container max-w-3xl space-y-10 px-4 py-10 md:px-6 md:py-14">
          <LegalSection title="1. Introduction">
            <p>
              This Cookie Policy explains how Logic &amp; Pixels
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies,
              local storage, pixels, tags, and similar technologies
              (&quot;cookies&quot;) when you visit our website and related online
              properties (collectively, the &quot;Site&quot;). It should be read
              together with our{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </LegalSection>

          <LegalSection title="2. What are cookies?">
            <p>
              Cookies are small text files or pieces of data stored on your
              device when you visit a website. They allow the site to recognize
              your browser or device, remember preferences, keep you signed in
              where applicable, measure performance, and support security. Similar
              technologies include local storage, session storage, scripts that
              store identifiers, and transparent pixels used in analytics or email
              tracking.
            </p>
          </LegalSection>

          <LegalSection title="3. Who sets cookies?">
            <p className="font-medium text-foreground">3.1 First-party cookies</p>
            <p>
              We set first-party cookies directly when you use our Site—for
              example, to remember your cookie consent choice or to maintain
              security and session integrity for features we host.
            </p>
            <p className="font-medium text-foreground">3.2 Third-party cookies</p>
            <p>
              Third-party services integrated into our Site (such as analytics,
              embedded media, or social widgets) may set their own cookies subject
              to their respective policies. We strive to use reputable providers
              and to configure integrations to minimize unnecessary tracking.
            </p>
          </LegalSection>

          <LegalSection title="4. Categories of cookies we use">
            <p className="font-medium text-foreground">
              4.1 Strictly necessary cookies
            </p>
            <p>
              These cookies are essential for the Site to function and cannot be
              switched off in our systems. They are usually set only in response
              to actions you take, such as setting privacy preferences, logging in,
              or filling forms. Examples include security tokens, load balancing
              cookies, and storage of your cookie consent state so we do not
              repeatedly prompt you.
            </p>
            <p className="font-medium text-foreground">
              4.2 Functional cookies
            </p>
            <p>
              Functional cookies enable enhanced features such as remembering
              language preferences, theme selections, or form field values. If you
              disable these, some convenience features may not work as intended.
            </p>
            <p className="font-medium text-foreground">
              4.3 Performance and analytics cookies
            </p>
            <p>
              These cookies help us understand how visitors interact with the
              Site—for example, which pages are viewed most often, how users
              navigate, and whether errors occur. Information may be aggregated
              and pseudonymous. We only activate non-essential analytics where
              permitted by law and, where required, after you provide consent
              through our cookie banner or settings.
            </p>
            <p className="font-medium text-foreground">
              4.4 Marketing and social cookies
            </p>
            <p>
              Where used, marketing cookies may track visitors across websites to
              display relevant advertisements or measure campaign effectiveness.
              Social cookies may enable sharing features or embedded content from
              platforms such as Facebook, LinkedIn, or X (formerly Twitter). We
              will not deploy marketing cookies solely from browsing our Site
              unless you have accepted them where consent is required.
            </p>
          </LegalSection>

          <LegalSection title="5. Specific technologies (illustrative)">
            <p>
              The exact list of cookies may change as we update the Site. Typical
              examples include:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <span className="font-medium text-foreground">Consent storage:</span>{" "}
                a browser storage key (for example,{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  lp_cookie_consent_v1
                </code>
                ) recording whether you accepted all cookies or essential cookies
                only.
              </li>
              <li>
                <span className="font-medium text-foreground">Session and security:</span>{" "}
                identifiers used by our hosting or framework to deliver pages
                securely and resist abuse.
              </li>
              <li>
                <span className="font-medium text-foreground">Analytics (optional):</span>{" "}
                tools such as privacy-conscious analytics providers may set
                cookies or use fingerprint-resistant methods if you opt in.
              </li>
            </ul>
            <p>
              For an up-to-date inventory, contact us using the details in Section
              10; we can provide the current table of names, providers, purposes,
              and durations we maintain internally.
            </p>
          </LegalSection>

          <LegalSection title="6. Retention">
            <p>
              Session cookies expire when you close your browser. Persistent
              cookies remain for a defined period or until you delete them.
              Consent records may be retained long enough to demonstrate
              compliance with privacy requirements. Analytics retention periods
              follow the settings of the underlying tools and are configured to
              the minimum necessary for legitimate analysis.
            </p>
          </LegalSection>

          <LegalSection title="7. Your choices">
            <p>
              When you first visit our Site, you may see a cookie consent modal
              allowing you to accept all cookies or limit use to essential
              cookies only. You can also control cookies through your browser
              settings—most browsers let you block third-party cookies, delete
              existing cookies, or alert you before cookies are set. Blocking all
              cookies may affect Site functionality.
            </p>
            <p>
              Industry opt-out tools (for example, the Network Advertising
              Initiative or Digital Advertising Alliance, where available in your
              region) may provide additional control over interest-based
              advertising.
            </p>
          </LegalSection>

          <LegalSection title="8. Do Not Track and global privacy signals">
            <p>
              There is no uniform legal standard for &quot;Do Not Track&quot;
              signals. We will honor applicable global privacy control signals where
              required by law (for example, certain browser-based opt-out
              mechanisms). Where not legally mandated, we treat such signals as
              one input alongside our consent tools.
            </p>
          </LegalSection>

          <LegalSection title="9. Changes to this Cookie Policy">
            <p>
              We may update this Cookie Policy to reflect changes in technology,
              regulation, or our practices. We will revise the effective date at
              the top and, where appropriate, provide additional notice on the
              Site or seek renewed consent for material changes to non-essential
              cookies.
            </p>
          </LegalSection>

          <LegalSection title="10. Contact">
            <p>
              For questions about cookies or this policy, contact us at{" "}
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
              . Related:{" "}
              <Link
                href="/privacy"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Privacy Policy
              </Link>
              ,{" "}
              <Link
                href="/terms"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Terms &amp; Conditions
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
