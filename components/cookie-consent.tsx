"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const COOKIE_CONSENT_STORAGE_KEY = "lp_cookie_consent_v1";

export type CookieConsentChoice = "all" | "essential";

const LEGAL_PATHS = new Set(["/privacy", "/terms", "/cookies"]);

export function CookieConsent() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
      if (!stored) setOpen(true);
    } catch {
      setOpen(true);
    }
    setHydrated(true);
  }, []);

  const saveChoice = (choice: CookieConsentChoice) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent<CookieConsentChoice>("lp-cookie-consent", {
          detail: choice
        })
      );
    }
  };

  if (!hydrated) return null;

  const hideWhileReadingLegal = pathname ? LEGAL_PATHS.has(pathname) : false;
  const dialogOpen = open && !hideWhileReadingLegal;

  return (
    <Dialog open={dialogOpen}>
      <DialogContent
        hideClose
        overlayClassName="z-[200] bg-black/35 backdrop-blur-[1px]"
        className="!fixed !inset-x-0 !bottom-0 !left-0 !right-0 !top-auto z-[201] !max-w-none !translate-x-0 !translate-y-0 gap-0 overflow-hidden rounded-none rounded-t-2xl border-x-0 border-b-0 p-0 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_rgba(0,0,0,0.12)] sm:rounded-t-3xl max-h-[min(85vh,32rem)] data-[state=open]:slide-in-from-bottom-full data-[state=closed]:slide-out-to-bottom-full data-[state=open]:zoom-in-100 data-[state=closed]:zoom-out-100"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="container flex max-h-[min(85vh,32rem)] flex-col gap-4 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-stretch md:gap-8 md:py-6">
          <div className="min-h-0 min-w-0 flex-1 overflow-y-auto pr-1 md:max-h-none">
            <DialogHeader className="space-y-3 text-left">
              <DialogTitle className="text-left text-lg sm:text-xl">
                Cookies &amp; your privacy
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-3 text-left text-sm leading-relaxed text-muted-foreground">
                  <p>
                    We use cookies and similar technologies to run our website,
                    remember your preferences, understand how visitors use our
                    services, and—where you agree—to support optional analytics
                    and marketing. You can change your mind at any time by
                    clearing site data for this domain or contacting us.
                  </p>
                  <ul className="list-disc space-y-1.5 pl-5">
                    <li>
                      <span className="font-medium text-foreground">
                        Strictly necessary
                      </span>{" "}
                      cookies keep the site secure and functional (for example,
                      load balancing and consent storage).
                    </li>
                    <li>
                      <span className="font-medium text-foreground">
                        Optional
                      </span>{" "}
                      cookies may help us measure traffic or improve relevance
                      of content when you choose to allow them.
                    </li>
                  </ul>
                  <p>
                    For full details on categories, retention, and your rights,
                    read our{" "}
                    <Link
                      href="/cookies"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Cookie Policy
                    </Link>
                    ,{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    , and{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-primary underline-offset-4 hover:underline"
                    >
                      Terms &amp; Conditions
                    </Link>
                    .
                  </p>
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
          <div
            className="flex w-full shrink-0 flex-col-reverse gap-2 border-t border-border bg-muted/25 pt-4 sm:flex-row sm:flex-nowrap sm:justify-end sm:gap-3 md:w-72 md:flex-col md:border-l md:border-t-0 md:pt-0 md:pl-6"
            role="group"
            aria-label="Cookie choices"
          >
            <Button
              type="button"
              className="w-full rounded-full sm:max-w-[11rem] md:max-w-none"
              onClick={() => saveChoice("all")}
            >
              Accept all cookies
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full rounded-full sm:max-w-[11rem] md:max-w-none"
              onClick={() => saveChoice("essential")}
            >
              Essential only
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full rounded-full text-muted-foreground sm:max-w-[11rem] md:max-w-none"
              asChild
            >
              <Link href="/cookies">Full Cookie Policy</Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
