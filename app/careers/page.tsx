/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Code, ArrowLeft, Briefcase } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Careers",
  description: "Join our team and help transform ideas into digital reality."
};

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <div className="absolute inset-0 bg-primary rounded-md flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold">Logic & Pixels</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 animate-fade-in">
              <Briefcase className="h-12 w-12 text-primary" />
            </div>

            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Careers Coming Soon
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                We're building something exciting! Career opportunities at Logic
                & Pixels will be available soon. Join us in transforming ideas
                into digital reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link href="/#contact">
                <Button size="lg" className="rounded-full">
                  Express Interest
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" size="lg" className="rounded-full">
                  Learn About Us
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              Want to join our team?{" "}
              <Link href="/#contact" className="text-primary hover:underline">
                Send us your resume
              </Link>{" "}
              and we'll keep you updated.
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 bg-muted/30">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Logic & Pixel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
