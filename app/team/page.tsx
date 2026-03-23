/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, ArrowLeft, Users, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Team - About Us",
  description:
    "Meet the founders and team behind Logic & Pixels. A team of long-time friends turned industry professionals."
};

export default function TeamPage() {
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero_image_about_us.jpg"
              alt="Logic & Pixels team working together"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
          </div>

          {/* Content */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/90 text-primary hover:bg-white">
                About Us
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Meet the Team Behind <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Logic & Pixels
                </span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-[700px]">
                Long-time friends turned industry professionals, building custom
                IT solutions for modern businesses.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Logic and Pixels is a team of long-time friends turned
                  industry professionals: Archie, Drew, and Zaki. What started
                  as college-day conversations about "one day building our own
                  tech company" eventually became the foundation of what we are
                  today — a growing provider of custom IT solutions built for
                  modern businesses.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  We believe technology should be accessible, practical, and
                  tailored to the people who use it. That's why we focus on
                  creating solutions that help companies operate smarter, grow
                  faster, and adapt to an ever-changing digital world.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Beyond helping businesses, we're committed to opening doors
                  for the next generation of IT professionals. We actively
                  support and mentor aspiring and pre-graduating students,
                  giving them early exposure to real-world projects, industry
                  workflows, and the career paths they're stepping into.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Each member of our team brings deep experience in their
                  respective fields, and together, we decided to build something
                  greater than just a workplace. Logic and Pixels is our shared
                  vision: not just three employees in tech, but a rising Tech
                  Company built on collaboration, integrity, and opportunity.
                </p>

                <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    At Logic and Pixels, we don't just create IT solutions.
                    <br />
                    We build pathways, empower people, and design technology
                    that moves businesses forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                The Founders
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Founders
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The visionaries who turned friendship into innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Archie */}
              <Card className="overflow-hidden service-card-hover">
                <div className="relative h-80 w-full bg-gradient-to-br from-blue-100 to-blue-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-16 w-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">Archie</h3>
                  <p className="text-primary font-medium mb-4">
                    Founder & Operations Manager
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leads operations and ensures seamless project delivery,
                    bringing strategic vision and organizational excellence to
                    every initiative.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="mailto:logicandpixels@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Drew */}
              <Card className="overflow-hidden service-card-hover">
                <div className="relative h-80 w-full bg-gradient-to-br from-purple-100 to-purple-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-16 w-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">Drew</h3>
                  <p className="text-primary font-medium mb-4">
                    Founder & Software Engineer
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Specializes in building robust, scalable solutions with a
                    focus on clean code and innovative problem-solving
                    approaches.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="mailto:logicandpixels@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Zaki */}
              <Card className="overflow-hidden service-card-hover">
                <div className="relative h-80 w-full bg-gradient-to-br from-green-100 to-green-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <Code className="h-16 w-16 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Photo coming soon
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">Zaki</h3>
                  <p className="text-primary font-medium mb-4">
                    Founder & Software Engineer
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expert in software architecture and development, dedicated
                    to crafting efficient and maintainable solutions for complex
                    challenges.
                  </p>
                  <div className="flex gap-3 mt-4">
                    <Link
                      href="mailto:logicandpixels@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Let's discuss how we can help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/#contact">
                  <Button size="lg" className="rounded-full">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/#services">
                  <Button variant="outline" size="lg" className="rounded-full">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
