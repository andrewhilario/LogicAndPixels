import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github, Code } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface PortfolioItemProps {
  project: Project;
  showActions?: boolean;
}

export function PortfolioItem({
  project,
  showActions = false
}: PortfolioItemProps) {
  const {
    title,
    short_description,
    description,
    thumbnail,
    project_type,
    technologies = [],
    github_url,
    live_url,
    slug,
    is_featured
  } = project;

  return (
    <Card className="overflow-hidden service-card-hover border-none shadow-custom-light group">
      <div className="relative h-48 w-full bg-muted">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <p className="text-sm font-medium text-primary">{project_type}</p>
            </div>
          </div>
        )}
        {is_featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-yellow-500 text-white">Featured</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold line-clamp-1">{title}</h3>
          <Badge
            variant="secondary"
            className="bg-secondary/10 text-secondary hover:bg-secondary/20 ml-2 shrink-0"
          >
            {project_type}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {short_description || description}
        </p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs px-2 py-0"
              >
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Link
          href={`/projects/${slug}`}
          className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 group"
        >
          View Details
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>

        {showActions && (
          <div className="flex gap-2">
            {github_url && (
              <Link
                href={github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-full transition-colors"
                title="View on GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
            )}
            {live_url && (
              <Link
                href={live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-full transition-colors"
                title="View Live Site"
              >
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
