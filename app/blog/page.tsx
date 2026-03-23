/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Code, ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Stay tuned for insights, tutorials, and updates from Logic & Pixel."
};

export default function BlogPage() {
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
              <BookOpen className="h-12 w-12 text-primary" />
            </div>

            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Blog Coming Soon
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                We're working on bringing you valuable insights, tutorials, and
                updates about web development, IT solutions, and technology
                trends.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Link href="/#contact">
                <Button size="lg" className="rounded-full">
                  Get Notified
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="rounded-full">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-sm text-muted-foreground">
              In the meantime, feel free to{" "}
              <Link href="/#contact" className="text-primary hover:underline">
                contact us
              </Link>{" "}
              for any inquiries.
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
