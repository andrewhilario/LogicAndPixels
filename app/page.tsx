/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Globe,
  Laptop,
  Mail,
  MessageSquare,
  Phone,
  Server,
  ArrowRight,
  Users,
  Shield,
  Briefcase,
  Package
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { StatsSection } from "@/components/stats-section";
import { TestimonialCard } from "@/components/testimonial-card";
import { HeroIllustration } from "@/components/hero-illustration";

export default function Home() {
  const [activeProjectTab, setActiveProjectTab] = useState<"portfolio" | "products">("portfolio");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Banner */}
      <div className="w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient text-white py-2.5 text-center text-sm font-medium">
        ✨ Try our Builder, Embrace your Future Website. ✨
      </div>

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <Image src="/icon.svg" alt="Logic & Pixels Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold">Logic & Pixels</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/builder"
              className="text-sm font-bold gradient-text-animated hover:scale-105 transition-all"
            >
              Try Builder
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button className="rounded-full">Get in Touch</Button>
            </Link>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden rounded-full"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero_image.jpg"
              alt="Logic & Pixels team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
          </div>

          {/* Content */}
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-6 text-center">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-white/90 text-primary hover:bg-white mb-2">
                  Professional IT Solutions
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Transforming Ideas into{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital Reality
                  </span>
                </h1>
                <p className="max-w-[700px] text-white/90 md:text-xl mx-auto leading-relaxed">
                  Logic & Pixels specializes in developing custom IT solutions,
                  from thesis/capstone projects to business websites and
                  enterprise systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                  <Link href="/builder">
                    <Button
                      size="lg"
                      className="rounded-full group bg-white text-primary hover:bg-white/90"
                    >
                      Try our Builder
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full bg-transparent border-white text-white hover:bg-white/10"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        {/* <section className="w-full py-8 border-y">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                Trusted by innovative companies
              </p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 grayscale opacity-70">
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Company Logo"
                  width={120}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Company Logo"
                  width={120}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Company Logo"
                  width={120}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Company Logo"
                  width={120}
                  height={30}
                />
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Company Logo"
                  width={120}
                  height={30}
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Our Expertise
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comprehensive IT Solutions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We offer a wide range of IT solutions tailored to meet your
                  specific requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
              <ServiceCard
                icon={<Laptop className="h-10 w-10 text-primary" />}
                title="Thesis/Capstone IT Systems"
                description="Custom development of IT and Computer Science systems for academic requirements with comprehensive documentation."
              />
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Business Websites"
                description="Professional website development for small businesses with responsive design and SEO optimization."
              />
              <ServiceCard
                icon={<Server className="h-10 w-10 text-primary" />}
                title="Custom Enterprise Systems"
                description="Tailored enterprise solutions to streamline your business operations and improve efficiency."
              />
              <ServiceCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Software Development"
                description="Custom software solutions designed to address your specific business challenges."
              />
              {/* <ServiceCard
                icon={<Shield className="h-10 w-10 text-primary" />}
                title="IT Security Solutions"
                description="Comprehensive security measures to protect your digital assets and sensitive information."
              />
              <ServiceCard
                icon={<Users className="h-10 w-10 text-primary" />}
                title="IT Consulting"
                description="Expert advice on technology implementation, digital transformation, and IT strategy."
              /> */}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Our Process
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How We Work
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our streamlined process ensures efficient delivery of
                  high-quality solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  We analyze your requirements and define project scope.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Planning</h3>
                <p className="text-sm text-muted-foreground">
                  We create detailed specifications and project timeline.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-sm text-muted-foreground">
                  We build your solution with regular progress updates.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  We deploy your solution and provide ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="portfolio" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Our Work
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Projects
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Explore the work we've done for clients and the products we've built ourselves.
                </p>
              </div>
            </div>

            {/* Tab Toggle */}
            <div className="flex justify-center mt-8 mb-10">
              <div className="inline-flex items-center gap-1 rounded-full border bg-background p-1 shadow-sm">
                <button
                  onClick={() => setActiveProjectTab("portfolio")}
                  className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeProjectTab === "portfolio"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Briefcase className="h-4 w-4" />
                  Portfolio
                </button>
                <button
                  onClick={() => setActiveProjectTab("products")}
                  className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                    activeProjectTab === "products"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Package className="h-4 w-4" />
                  Products
                </button>
              </div>
            </div>

            {/* Portfolio Tab */}
            {activeProjectTab === "portfolio" && (
              <div className="mt-2 max-w-4xl mx-auto space-y-6">
                <Card className="overflow-hidden service-card-hover border-none shadow-custom-light group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/brotherwood-website.png"
                      alt="Brotherwood - A Movement. A Brotherhood."
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6 relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          Brotherwood
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow">
                          Website & Mobile Application
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-yellow-500 text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          A Movement. A Brotherhood.
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          A cycle where stronger men raise stronger boys.
                          Brotherwood is a growing community for men based in
                          Australia. We built an app where blokes can check in,
                          connect, vent, and grow. It{"'"}s a safe space where
                          mateship, honesty, and solid tools come together. No
                          promises, no pushing, just real support when you{"'"}re
                          ready.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">React Native</Badge>
                        <Badge variant="outline" className="text-xs">Mobile Development</Badge>
                        <Badge variant="outline" className="text-xs">Community Platform</Badge>
                        <Badge variant="outline" className="text-xs">Mental Health</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden service-card-hover border-none shadow-custom-light group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/wifivendo-website.png"
                      alt="Wireless Wifi Vendo - Fast Internet Access"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6 relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          Wireless Wifi Vendo
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow">
                          Internet Vending & Access Management System
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-blue-500 text-white">Live</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Fast Internet Access, Instantly.
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          A wireless internet vending solution that lets users purchase and access internet connectivity with just a few clicks. Built with secure firewall-based access control, 24-hour uptime, and instant registration — making it easy to deploy in communities, dormitories, and public spaces.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Next.js</Badge>
                        <Badge variant="outline" className="text-xs">MikroTik</Badge>
                        <Badge variant="outline" className="text-xs">Network Management</Badge>
                        <Badge variant="outline" className="text-xs">Hotspot System</Badge>
                        <Badge variant="outline" className="text-xs">ISP Solution</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Products Tab */}
            {activeProjectTab === "products" && (
              <div className="mt-2 max-w-4xl mx-auto space-y-6">
                <Card className="overflow-hidden service-card-hover border-none shadow-custom-light group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src="/images/tarabook-website.png"
                      alt="TaraBook - Smart Booking Platform"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-6 relative z-10">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          TaraBook
                        </h3>
                        <p className="text-white/90 text-sm font-medium drop-shadow">
                          Smart Booking Platform
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-green-500 text-white">Live</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Appointments, Simplified.
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          TaraBook is our smart booking and scheduling platform designed for small businesses. Manage appointments, staff availability, and client bookings all in one place — no spreadsheets, no confusion.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Next.js</Badge>
                        <Badge variant="outline" className="text-xs">SaaS</Badge>
                        <Badge variant="outline" className="text-xs">Booking System</Badge>
                        <Badge variant="outline" className="text-xs">Scheduling</Badge>
                      </div>
                      <Link href="https://tarabook.logicandpixels.dev/" target="_blank" rel="noopener noreferrer">
                        <Button className="rounded-full mt-2 group">
                          Visit TaraBook
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>


        {/* Stats Section */}
        {/* <StatsSection /> */}

        {/* Testimonials Section */}
        {/* <section
          id="testimonials"
          className="w-full py-12 md:py-24 bg-muted/30"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Client Feedback
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Don't just take our word for it. Here's what our clients have
                  to say about our services.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <TestimonialCard
                quote="Logic & Pixels delivered an exceptional inventory system that transformed our operations. Their attention to detail and understanding of our needs was impressive."
                author="Maria Santos"
                position="Operations Manager, RetailCo"
              />
              <TestimonialCard
                quote="Our thesis project was completed on time and exceeded our expectations. The documentation was comprehensive and the system works flawlessly."
                author="John Doe"
                position="Computer Science Graduate"
              />
              <TestimonialCard
                quote="The website they created for our business has significantly increased our online presence and customer engagement. Highly recommended!"
                author="Sarah Johnson"
                position="Owner, Artisan Bakery"
              />
              <TestimonialCard
                quote="Working with Logic & Pixels was a pleasure. They understood our complex requirements and delivered a solution that perfectly met our needs."
                author="Michael Chen"
                position="IT Director, HealthCare Solutions"
              />
              <TestimonialCard
                quote="Their technical expertise and professional approach made our digital transformation journey smooth and successful."
                author="David Wilson"
                position="CEO, Manufacturing Inc."
              />
              <TestimonialCard
                quote="The custom system they developed has streamlined our processes and saved us countless hours of manual work. Worth every penny!"
                author="Lisa Rodriguez"
                position="Manager, Logistics Company"
              />
            </div>
          </div>
        </section> */}

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Common Questions
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to common questions about our services and
                  process.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What is the typical timeline for a project?
                  </AccordionTrigger>
                  <AccordionContent>
                    Project timelines vary depending on complexity and
                    requirements. A simple business website might take 2-4
                    weeks, while a comprehensive enterprise system could take
                    3-6 months. During our initial consultation, we'll provide a
                    detailed timeline based on your specific needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How much does a typical project cost?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our pricing is based on the scope, complexity, and
                    requirements of each project. We provide detailed quotes
                    after understanding your specific needs. We offer
                    competitive rates and flexible payment options to
                    accommodate different budgets.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Do you provide ongoing support after project completion?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer various support and maintenance packages to
                    ensure your systems continue to run smoothly after launch.
                    These can include regular updates, technical support, and
                    system enhancements as needed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What technologies do you work with?
                  </AccordionTrigger>
                  <AccordionContent>
                    We work with a wide range of technologies including but not
                    limited to: React, Next.js, Node.js, Python, PHP, Laravel,
                    WordPress, MySQL, PostgreSQL, MongoDB, AWS, Azure, and more.
                    We select the most appropriate technology stack based on
                    your project requirements.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    How do you handle thesis/capstone projects?
                  </AccordionTrigger>
                  <AccordionContent>
                    For academic projects, we provide comprehensive development
                    services including system analysis, design, implementation,
                    testing, and documentation. We ensure that all academic
                    requirements are met while delivering a functional and
                    well-documented system.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Do you offer SEO services for websites?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all our websites are built with SEO best practices in
                    mind. We also offer additional SEO services including
                    keyword research, on-page optimization, content strategy,
                    and performance monitoring to help improve your online
                    visibility.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Ideas into Reality?
                </h2>
                <p className="text-primary-foreground/80 md:text-xl">
                  Let's discuss how we can help you achieve your technology
                  goals. Contact us today for a free consultation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Link href="#contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full bg-white text-primary hover:bg-white/90"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
                  Get In Touch
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Contact Us
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Have a project in mind? Contact us to discuss how we can
                    help bring your ideas to life.
                  </p>
                </div>
                <div className="space-y-4 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <div className="mt-1 flex flex-col gap-1">
                        <a
                          href="mailto:logicandpixels@gmail.com"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          logicandpixels@gmail.com
                        </a>
                        <a
                          href="mailto:info-dev@logicandpixels.dev"
                          className="font-medium hover:text-primary transition-colors"
                        >
                          info-dev@logicandpixels.dev
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-4">Send Us a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden">
                  <Image src="/icon.svg" alt="Logic & Pixels Logo" fill className="object-contain" />
                </div>
                <span className="text-lg font-semibold">Logic & Pixels</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming ideas into digital reality with custom IT solutions
                for businesses and academic projects.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="mailto:logicandpixels@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    logicandpixels@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="mailto:info-dev@logicandpixels.dev"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    info-dev@logicandpixels.dev
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://www.facebook.com/logicandpixels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="Logic & Pixels on Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Thesis/Capstone Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Business Websites
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Enterprise Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    IT Consulting
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/team"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Logic & Pixels. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed and developed with ❤️ by Logic & Pixels
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
