"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface TemplateSelectorProps {
  selectedTemplate: string;
  onSelectTemplate: (template: string) => void;
}

export function TemplateSelector({
  selectedTemplate,
  onSelectTemplate
}: TemplateSelectorProps) {
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description:
        "Clean, contemporary design perfect for tech companies and startups",
      features: ["Hero banner", "Feature grid", "About section"],
      preview: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    },
    {
      id: "business",
      name: "Business",
      description:
        "Professional layout ideal for corporate and service-based businesses",
      features: ["Split hero", "Services showcase", "Professional header"],
      preview: "bg-gradient-to-br from-slate-500/20 to-zinc-500/20"
    },
    {
      id: "portfolio",
      name: "Portfolio",
      description: "Showcase your work with an elegant gallery-style layout",
      features: ["Image gallery", "Portfolio grid", "Minimal design"],
      preview: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Choose Your Template</h3>
        <p className="text-sm text-muted-foreground">
          Select a template that best represents your business style
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedTemplate === template.id
                ? "ring-2 ring-primary"
                : "hover:ring-1 hover:ring-primary/50"
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-base">{template.name}</CardTitle>
                {selectedTemplate === template.id && (
                  <Badge variant="default" className="flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Selected
                  </Badge>
                )}
              </div>
              <CardDescription className="text-xs">
                {template.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Template Preview */}
              <div
                className={`h-32 rounded-lg mb-3 ${template.preview} flex items-center justify-center`}
              >
                <div className="text-center space-y-2 p-4">
                  <div className="h-4 w-32 bg-foreground/20 rounded mx-auto" />
                  <div className="h-2 w-24 bg-foreground/10 rounded mx-auto" />
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-8 bg-foreground/10 rounded" />
                    <div className="h-8 bg-foreground/10 rounded" />
                    <div className="h-8 bg-foreground/10 rounded" />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1">
                {template.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <Check className="h-3 w-3 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
