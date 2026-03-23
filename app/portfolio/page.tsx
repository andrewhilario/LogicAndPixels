/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { useProjects } from "@/lib/queries";
import { PortfolioItem } from "@/components/portfolio-item";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ProjectGridSkeleton } from "@/components/project-skeleton";
import { ErrorState } from "@/components/error-state";

const PROJECT_TYPES = ["all", "web", "mobile", "api", "ml", "desktop"];

export default function PortfolioPage() {
  const [selectedType, setSelectedType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Always use the main projects endpoint and filter client-side
  const {
    data: allProjects,
    isLoading,
    error,
    refetch
  } = useProjects({
    page: currentPage,
    limit: itemsPerPage
  });

  // Get all projects from the response
  const allProjectsList = allProjects?.results || [];

  // Filter projects by selected type and search term
  const filteredProjects = allProjectsList.filter((project: any) => {
    // Filter by type
    const typeMatch =
      selectedType === "all" || project.project_type === selectedType;

    // Filter by search term
    const searchMatch =
      !searchTerm ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies?.some((tech: string) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return typeMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Discover our latest projects and see how we transform ideas into
              digital solutions.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              {isLoading
                ? "Loading..."
                : `${filteredProjects.length} project${
                    filteredProjects.length !== 1 ? "s" : ""
                  } found`}
            </div>
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSelectedType(type);
                  setCurrentPage(1);
                }}
                className="capitalize"
              >
                {type === "all" ? "All Projects" : type.replace("-", " ")}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}

        <div className="text-center py-12">
          <p className="text-xl font-semibold mb-2">No Projects Available</p>
          <p className="text-muted-foreground">
            We're currently working on exciting new projects. Check back soon!
          </p>
        </div>
        {/* {isLoading ? (
          <ProjectGridSkeleton count={9} />
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-xl font-semibold mb-2">No Projects Available</p>
            <p className="text-muted-foreground">
              We're currently working on exciting new projects. Check back soon!
            </p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              {searchTerm
                ? `No projects found matching "${searchTerm}"`
                : "No projects found for the selected category"}
            </p>
            {searchTerm && (
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Clear Search
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: any) => (
                <PortfolioItem
                  key={project.id}
                  project={project}
                  showActions={true}
                />
              ))}
            </div>

            {allProjects && allProjects.total_pages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Button>

                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {allProjects.total_pages}
                </span>

                <Button
                  variant="outline"
                  disabled={currentPage === allProjects.total_pages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )} */}
      </main>
    </div>
  );
}
