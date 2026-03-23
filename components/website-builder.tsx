"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import {
  Monitor,
  Smartphone,
  Tablet,
  Download,
  RotateCcw,
  ExternalLink
} from "lucide-react";
import { TemplateSelector } from "./template-selector";
import { ImageUploader } from "./image-uploader";

interface UploadedImage {
  id: string;
  file: File;
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

export function WebsiteBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern");
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [viewMode, setViewMode] = useState<"desktop" | "tablet" | "mobile">(
    "desktop"
  );
  const [websiteContent, setWebsiteContent] = useState<WebsiteContent>({
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

  const handleImagesUploaded = (images: UploadedImage[]) => {
    setUploadedImages(images);
  };

  const handleReset = () => {
    setUploadedImages([]);
    setWebsiteContent({
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
  };

  const handleContentChange = (field: keyof WebsiteContent, value: string) => {
    setWebsiteContent((prev) => ({ ...prev, [field]: value }));
  };

  const getImageForSlot = (slot: string) => {
    const image = uploadedImages.find((img) => img.slot === slot);
    return image?.preview;
  };

  const viewModeClasses = {
    desktop: "w-full",
    tablet: "max-w-2xl mx-auto",
    mobile: "max-w-sm mx-auto"
  };

  const handleExport = () => {
    alert(
      "🎉 Love what you see?\n\nTo export and get your actual website:\n• Book a consultation with Logic & Pixels\n• We'll build your professional site with all features\n• Includes hosting, SEO, and ongoing support\n\nContact us from the home page to get started!"
    );
  };

  const handleViewAsWebsite = () => {
    // Save preview data to localStorage with images
    const previewData = {
      template: selectedTemplate,
      images: uploadedImages.map((img) => ({
        id: img.id,
        preview: img.preview,
        slot: img.slot
      })),
      content: websiteContent
    };

    if (typeof window !== "undefined") {
      try {
        // Clear old data first
        localStorage.removeItem("websitePreview");
        localStorage.setItem("websitePreview", JSON.stringify(previewData));
        // Open preview in new tab
        window.open("/preview", "_blank");
      } catch (error) {
        alert(
          "⚠️ Images too large for preview!\n\nPlease try:\n• Upload smaller/fewer images (max 2-3MB total)\n• Reduce image resolution before uploading\n• Use JPG instead of PNG for photos\n\nYour design is visible in the preview section below."
        );
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Control Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Website Builder</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Upload your images and see them in a professional website
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Template Selector */}
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />

          {/* Website Content Form */}
          <div className="space-y-4">
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-4">Customize Your Content</h3>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    placeholder="Your Company Name"
                    value={websiteContent.businessName}
                    onChange={(e) =>
                      handleContentChange("businessName", e.target.value)
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="tagline">Tagline / Headline</Label>
                  <Input
                    id="tagline"
                    placeholder="Your catchy tagline or main headline"
                    value={websiteContent.tagline}
                    onChange={(e) =>
                      handleContentChange("tagline", e.target.value)
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="aboutText">About Your Business</Label>
                  <Textarea
                    id="aboutText"
                    placeholder="Tell your story. What makes your business unique?"
                    value={websiteContent.aboutText}
                    onChange={(e) =>
                      handleContentChange("aboutText", e.target.value)
                    }
                    rows={3}
                  />
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">Services / Features</h4>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="grid gap-2">
                        <Label htmlFor="service1Title">Service 1 Title</Label>
                        <Input
                          id="service1Title"
                          placeholder="e.g., Web Design"
                          value={websiteContent.service1Title}
                          onChange={(e) =>
                            handleContentChange("service1Title", e.target.value)
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="service1Description">Description</Label>
                        <Input
                          id="service1Description"
                          placeholder="Brief description"
                          value={websiteContent.service1Description}
                          onChange={(e) =>
                            handleContentChange(
                              "service1Description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="grid gap-2">
                        <Label htmlFor="service2Title">Service 2 Title</Label>
                        <Input
                          id="service2Title"
                          placeholder="e.g., SEO Optimization"
                          value={websiteContent.service2Title}
                          onChange={(e) =>
                            handleContentChange("service2Title", e.target.value)
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="service2Description">Description</Label>
                        <Input
                          id="service2Description"
                          placeholder="Brief description"
                          value={websiteContent.service2Description}
                          onChange={(e) =>
                            handleContentChange(
                              "service2Description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2">
                      <div className="grid gap-2">
                        <Label htmlFor="service3Title">Service 3 Title</Label>
                        <Input
                          id="service3Title"
                          placeholder="e.g., Hosting & Support"
                          value={websiteContent.service3Title}
                          onChange={(e) =>
                            handleContentChange("service3Title", e.target.value)
                          }
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="service3Description">Description</Label>
                        <Input
                          id="service3Description"
                          placeholder="Brief description"
                          value={websiteContent.service3Description}
                          onChange={(e) =>
                            handleContentChange(
                              "service3Description",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Uploader */}
          <ImageUploader
            onImagesUploaded={handleImagesUploaded}
            uploadedImages={uploadedImages}
          />
        </CardContent>
      </Card>

      {/* Preview Controls */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant={viewMode === "desktop" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="h-4 w-4 mr-2" />
                Desktop
              </Button>
              <Button
                variant={viewMode === "tablet" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("tablet")}
              >
                <Tablet className="h-4 w-4 mr-2" />
                Tablet
              </Button>
              <Button
                variant={viewMode === "mobile" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Mobile
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="default" size="sm" onClick={handleViewAsWebsite}>
                <ExternalLink className="h-4 w-4 mr-2" />
                View as Website
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport}>
                <Download className="h-4 w-4 mr-2" />
                Export (Contact Us)
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview Area */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Live Preview</CardTitle>
            <Badge variant="secondary">Preview Mode</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className={`transition-all duration-300 ${viewModeClasses[viewMode]}`}
          >
            {selectedTemplate === "modern" && (
              <ModernTemplate
                getImageForSlot={getImageForSlot}
                content={websiteContent}
              />
            )}
            {selectedTemplate === "business" && (
              <BusinessTemplate
                getImageForSlot={getImageForSlot}
                content={websiteContent}
              />
            )}
            {selectedTemplate === "portfolio" && (
              <PortfolioTemplate
                getImageForSlot={getImageForSlot}
                content={websiteContent}
              />
            )}
          </div>
        </CardContent>
      </Card>

      {/* Info Banner */}
      <Card className="border-primary/50 bg-primary/5">
        <CardContent className="pt-6">
          <p className="text-center text-sm">
            <strong>Preview Only:</strong> This is a visualization of your
            website. To get your actual website with full functionality,
            hosting, and support,
            <a href="/#contact" className="text-primary hover:underline ml-1">
              contact Logic & Pixels today
            </a>
            .
          </p>
        </CardContent>
      </Card>
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
  const services = [
    {
      title: content.service1Title,
      description: content.service1Description,
      slot: "feature1"
    },
    {
      title: content.service2Title,
      description: content.service2Description,
      slot: "feature2"
    },
    {
      title: content.service3Title,
      description: content.service3Description,
      slot: "feature3"
    }
  ];

  return (
    <div className="border rounded-lg overflow-hidden bg-background">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 overflow-hidden group">
        {getImageForSlot("hero") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImageForSlot("hero")}
            alt="Hero"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-4 p-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                {content.businessName || "Your Business Name"}
              </h1>
              <p className="text-xl text-muted-foreground">
                {content.tagline || "Upload a hero image to see it here"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="p-8 grid md:grid-cols-3 gap-6 bg-gradient-to-b from-background to-primary/5">
        {services.map((service, index) => (
          <div
            key={service.slot}
            className="space-y-4 group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
              {getImageForSlot(service.slot) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getImageForSlot(service.slot)}
                  alt={service.title || `Feature ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  {service.title || `Feature ${index + 1}`}
                </div>
              )}
            </div>
            <h3 className="font-semibold group-hover:text-primary transition-colors">
              {service.title || `Feature Title ${index + 1}`}
            </h3>
            <p className="text-sm text-muted-foreground">
              {service.description ||
                "Description of your feature or service goes here."}
            </p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="p-8 bg-gradient-to-br from-muted/50 to-primary/10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              {content.businessName
                ? `About ${content.businessName}`
                : "About Your Business"}
            </h2>
            <p className="text-muted-foreground">
              {content.aboutText ||
                "Tell your story here. This section will showcase what makes your business unique and why customers should choose you."}
            </p>
            <Button className="hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
          <div className="aspect-video bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
            {getImageForSlot("about") ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getImageForSlot("about")}
                alt="About"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
  const services = [
    {
      title: content.service1Title,
      description: content.service1Description,
      slot: "feature1"
    },
    {
      title: content.service2Title,
      description: content.service2Description,
      slot: "feature2"
    },
    {
      title: content.service3Title,
      description: content.service3Description,
      slot: "feature3"
    }
  ];

  return (
    <div className="border rounded-lg overflow-hidden bg-background">
      {/* Header */}
      <div className="border-b p-4 flex items-center justify-between bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="font-bold text-xl text-primary">
          {content.businessName || "Your Company"}
        </div>
        <div className="flex gap-4 text-sm">
          <a
            href="#home"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </a>
          <a
            href="#about"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hero */}
      <div
        id="home"
        className="grid md:grid-cols-2 gap-8 p-8 items-center bg-gradient-to-br from-background to-primary/5"
      >
        <div className="space-y-4">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
            Professional Services
          </Badge>
          <h1 className="text-4xl font-bold">
            {content.tagline || "Grow Your Business Today"}
          </h1>
          <p className="text-muted-foreground">
            {content.aboutText ||
              "Professional solutions tailored to your business needs."}
          </p>
          <div className="flex gap-4">
            <Button className="hover:scale-105 transition-transform">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
          {getImageForSlot("hero") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getImageForSlot("hero")}
              alt="Hero"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Hero Image
            </div>
          )}
        </div>
      </div>

      {/* Services */}
      <div id="services" className="p-8 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.slot}
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-primary/20"
            >
              <CardContent className="p-6">
                <div className="aspect-video bg-background rounded-lg overflow-hidden mb-4">
                  {getImageForSlot(service.slot) ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getImageForSlot(service.slot)}
                      alt={service.title || `Service ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      {service.title || `Service ${index + 1}`}
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {service.title || `Service ${index + 1}`}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description ||
                    "Description of your professional service."}
                </p>
              </CardContent>
            </Card>
          ))}
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
    <div className="border rounded-lg overflow-hidden bg-background">
      {/* Header */}
      <div className="p-8 text-center border-b bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          {content.businessName || "Your Portfolio"}
        </h1>
        <p className="text-muted-foreground">
          {content.tagline || "Creative Professional"}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-4 bg-gradient-to-b from-background to-primary/5">
        {["hero", "feature1", "feature2", "feature3", "about"].map(
          (slot, index) => (
            <div
              key={slot}
              className="aspect-square bg-muted rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {getImageForSlot(slot) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getImageForSlot(slot)}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  {index + 1}
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* About */}
      <div className="p-8 bg-gradient-to-br from-muted/50 to-primary/10 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {content.businessName ? `About ${content.businessName}` : "About Me"}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {content.aboutText ||
            "Your story and expertise goes here. Showcase your skills and experience."}
        </p>
        <Button className="mt-6 hover:scale-105 transition-transform">
          Get In Touch
        </Button>
      </div>
    </div>
  );
}
