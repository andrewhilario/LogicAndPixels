import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LegalSiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden">
            <Image
              src="/icon.svg"
              alt="Logic & Pixels"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold">Logic &amp; Pixels</span>
        </Link>
        <Link href="/">
          <Button variant="outline" size="sm" className="rounded-full">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </header>
  );
}
