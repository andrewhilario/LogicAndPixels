"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";
import { ArrowLeft, Check, Upload, Layout, Eye } from "lucide-react";
import { WebsiteBuilder } from "@/components/website-builder";

export default function BuilderPage() {
  const [showBuilder, setShowBuilder] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Choose Your Template",
      description:
        "Select from our pre-designed website layouts that best fit your business needs.",
      icon: Layout
    },
    {
      number: 2,
      title: "Upload Your Images",
      description:
        "Upload your business photos, logos, and other visual assets to personalize your site.",
      icon: Upload
    },
    {
      number: 3,
      title: "Preview Your Website",
      description:
        "See how your website looks with your own images in real-time. Experience your site before committing.",
      icon: Eye
    }
  ];

  if (showBuilder) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-6">
          <Button
            variant="ghost"
            onClick={() => setShowBuilder(false)}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Guide
          </Button>
          <WebsiteBuilder />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Badge variant="secondary">Preview Mode</Badge>
        </div>
      </header>

      {/* Main Content */}
      <div className="container py-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Try Our Website Builder
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Visualize Your Dream Website
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how your business website will look with your own images
            and content. This is a preview-only tool to help you envision the
            possibilities.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-12 border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Experience Mode - What You Can Do
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                <strong>Upload & Preview:</strong> Upload your business images
                and see them in a professional website layout
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                <strong>Real-Time Experience:</strong> Experience how your
                website will look with different templates and your assets
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm">
                <strong>No Download:</strong> This is a visualization tool only.
                To get your actual website, book a consultation with us!
              </p>
            </div>
            <div className="mt-4 p-3 bg-background rounded-md border">
              <p className="text-sm font-medium">
                💡 <strong>Want to turn this into reality?</strong> Contact us
                to build your professional website with all features, hosting,
                and support.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Steps Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            How It Works - 3 Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">
            What Makes Our Builder Special
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Easy Image Upload</CardTitle>
                <CardDescription>
                  Simply drag and drop your images or click to upload. Support
                  for JPG, PNG, and WebP formats.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multiple Templates</CardTitle>
                <CardDescription>
                  Choose from modern, professional templates designed for
                  different business types.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-Time Preview</CardTitle>
                <CardDescription>
                  See your changes instantly as you upload images and customize
                  your site.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mobile Responsive</CardTitle>
                <CardDescription>
                  Preview how your website will look on desktop, tablet, and
                  mobile devices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <Button
            size="lg"
            onClick={() => setShowBuilder(true)}
            className="text-lg px-8"
          >
            Start Building Your Preview
          </Button>
          <p className="text-sm text-muted-foreground">
            No account needed • Pure experience mode • Contact us to make it
            real
          </p>
          <div className="pt-6">
            <Link href="/#contact">
              <Button variant="outline" size="lg">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="container py-12 border-t">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">Ready to Build For Real?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This builder gives you a taste of what&apos;s possible. When
            you&apos;re ready to create your professional website with full
            functionality, hosting, SEO optimization, and ongoing support, get
            in touch with Logic & Pixels.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Link href="/#contact">
              <Button>Contact Us</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline">View Our Work</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
