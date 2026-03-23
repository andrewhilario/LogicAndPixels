"use client";

import { useFeaturedProjects, useStats } from "@/lib/queries";
import { PortfolioItem } from "./portfolio-item";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectGridSkeleton } from "./project-skeleton";
import { ErrorState } from "./error-state";

export function PortfolioGrid() {
  const {
    data: featuredProjects,
    isLoading: isLoadingProjects,
    error: projectsError,
    refetch: refetchProjects
  } = useFeaturedProjects();

  const { data: stats } = useStats();

  if (isLoadingProjects) {
    return <ProjectGridSkeleton count={6} />;
  }

  // if (projectsError) {
  //   return (
  //     <div className="mt-12">
  //       <ErrorState
  //         title="Failed to load projects"
  //         message="We couldn't load the featured projects. Please try again."
  //         onRetry={() => refetchProjects()}
  //       />
  //     </div>
  //   );
  // }

  if (!featuredProjects || featuredProjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">
          No featured projects available at the moment.
        </p>
        <Link href="/portfolio">
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {featuredProjects.map((project) => (
          <PortfolioItem
            key={project.id}
            project={project}
            showActions={true}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/portfolio">
          <Button variant="outline" className="rounded-full group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {stats && (
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Showing {featuredProjects.length} featured project
            {featuredProjects.length !== 1 ? "s" : ""} of{" "}
            {stats.total_projects || 0} total projects
          </p>
        </div>
      )}
    </>
  );
}
