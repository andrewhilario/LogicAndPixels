"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface UploadedImage {
  id: string;
  preview: string;
  slot: string;
}

interface WebsiteContent {
  businessName: string;
  tagline: string;
  aboutText: string;
  service1Title: string;
  service1Description: string;
  service2Title: string;
  service2Description: string;
  service3Title: string;
  service3Description: string;
}

export default function PreviewPage() {
  const [template, setTemplate] = useState("modern");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [content, setContent] = useState<WebsiteContent>({
    businessName: "",
    tagline: "",
    aboutText: "",
    service1Title: "",
    service1Description: "",
    service2Title: "",
    service2Description: "",
    service3Title: "",
    service3Description: ""
  });

  useEffect(() => {
    // Load preview data from localStorage
    const previewData = localStorage.getItem("websitePreview");
    if (previewData) {
      const data = JSON.parse(previewData);
      setTemplate(data.template || "modern");
      setImages(data.images || []);
      setContent(
        data.content || {
          businessName: "",
          tagline: "",
          aboutText: "",
          service1Title: "",
          service1Description: "",
          service2Title: "",
          service2Description: "",
          service3Title: "",
          service3Description: ""
        }
      );
    }
  }, []);

  const getImageForSlot = (slot: string) => {
    const image = images.find((img) => img.slot === slot);
    return image?.preview;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Logic & Pixels Watermark */}
      <div className="fixed top-4 right-4 z-50">
        <Badge variant="secondary" className="shadow-lg">
          Built with Logic & Pixels
        </Badge>
      </div>

      {/* Render selected template */}
      {template === "modern" && (
        <ModernTemplate getImageForSlot={getImageForSlot} content={content} />
      )}
      {template === "business" && (
        <BusinessTemplate getImageForSlot={getImageForSlot} content={content} />
      )}
      {template === "portfolio" && (
        <PortfolioTemplate
          getImageForSlot={getImageForSlot}
          content={content}
        />
      )}

      {/* Footer Watermark */}
      <div className="border-t bg-background/95 backdrop-blur">
        <div className="container py-6 text-center">
          <p className="text-sm text-muted-foreground">
            This is a preview created with{" "}
            <a
              href="/"
              target="_blank"
              className="font-semibold text-primary hover:underline"
            >
              Logic & Pixels
            </a>{" "}
            - Professional Web Design & Development
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Want your own professional website? Contact us today!
          </p>
        </div>
      </div>
    </div>
  );
}

// Modern Template Component
function ModernTemplate({
  getImageForSlot,
  content
}: {
  getImageForSlot: (slot: string) => string | undefined;
  content: WebsiteContent;
}) {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary/20 to-primary/5">
        {getImageForSlot("hero") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImageForSlot("hero")}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4 p-8">
              <h1 className="text-4xl font-bold">
                {content.businessName || "Your Business Name"}
              </h1>
              <p className="text-xl text-muted-foreground">
                {content.tagline || "Your tagline goes here"}
              </p>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["feature1", "feature2", "feature3"].map((slot, index) => (
            <div key={slot} className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                {getImageForSlot(slot) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={getImageForSlot(slot)}
                    alt={`Feature ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    Service {index + 1}
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-xl">Service {index + 1}</h3>
              <p className="text-muted-foreground">
                Description of your feature or service goes here. Explain the
                value you provide.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-muted/50 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                {content.businessName
                  ? `About ${content.businessName}`
                  : "About Your Business"}
              </h2>
              <p className="text-muted-foreground text-lg">
                {content.aboutText ||
                  "Tell your story here. This section will showcase what makes your business unique and why customers should choose you."}
              </p>
              <Button size="lg">Learn More</Button>
            </div>
            <div className="aspect-video bg-background rounded-lg overflow-hidden">
              {getImageForSlot("about") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getImageForSlot("about")}
                  alt="About"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  About Image
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Business Template Component
function BusinessTemplate({
  getImageForSlot,
  content
}: {
  getImageForSlot: (slot: string) => string | undefined;
  content: WebsiteContent;
}) {
  return (
    <div className="bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            {content.businessName || "Your Company"}
          </div>
          <nav className="flex gap-6 text-sm">
            <span className="cursor-pointer hover:text-primary">Home</span>
            <span className="cursor-pointer hover:text-primary">Services</span>
            <span className="cursor-pointer hover:text-primary">About</span>
            <span className="cursor-pointer hover:text-primary">Contact</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge>Professional Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              {content.tagline || "Grow Your Business Today"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {content.aboutText ||
                "Professional solutions tailored to your business needs. Let us help you succeed."}
            </p>
            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            {getImageForSlot("hero") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getImageForSlot("hero")}
                alt="Hero"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                Hero Image
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-muted/50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {["feature1", "feature2"].map((slot, index) => (
              <Card key={slot}>
                <CardContent className="p-6">
                  <div className="aspect-video bg-background rounded-lg overflow-hidden mb-4">
                    {getImageForSlot(slot) ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={getImageForSlot(slot)}
                        alt={`Service ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        Service {index + 1}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">
                    Service {index + 1}
                  </h3>
                  <p className="text-muted-foreground">
                    Description of your professional service and how it benefits
                    your clients.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Portfolio Template Component
function PortfolioTemplate({
  getImageForSlot,
  content
}: {
  getImageForSlot: (slot: string) => string | undefined;
  content: WebsiteContent;
}) {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="container py-16 text-center border-b">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {content.businessName || "Your Portfolio"}
        </h1>
        <p className="text-xl text-muted-foreground">
          {content.tagline || "Creative Professional"}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["hero", "feature1", "feature2", "feature3", "about"].map(
            (slot, index) => (
              <div
                key={slot}
                className="aspect-square bg-muted rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                {getImageForSlot(slot) ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={getImageForSlot(slot)}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-4xl font-bold">
                    {index + 1}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* About */}
      <div className="bg-muted/50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            {content.businessName
              ? `About ${content.businessName}`
              : "About Me"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            {content.aboutText ||
              "Your story and expertise goes here. Showcase your skills, experience, and what makes your work unique."}
          </p>
          <Button size="lg">Get In Touch</Button>
        </div>
      </div>
    </div>
  );
}
