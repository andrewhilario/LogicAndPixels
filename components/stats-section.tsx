"use client";

import { useStats } from "@/lib/queries";
import { Loader2 } from "lucide-react";

export function StatsSection() {
  const { data: stats, isLoading, error } = useStats();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !stats) {
    return null; // Don't show stats if there's an error
  }

  const statsData = [
    {
      value: stats.total_projects || 0,
      label: "Projects Completed"
    },
    {
      value: stats.featured_projects || 0,
      label: "Featured Projects"
    },
    {
      value: stats.project_types ? Object.keys(stats.project_types).length : 0,
      label: "Service Categories"
    },
    {
      value: stats.recent_projects || 0,
      label: "Recent Projects"
    }
  ];

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">{stat.value}+</h3>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
