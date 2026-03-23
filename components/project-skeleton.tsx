import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ProjectSkeleton() {
  return (
    <Card className="overflow-hidden border-none shadow-custom-light">
      <div className="relative h-48 w-full bg-muted animate-pulse" />
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="h-6 bg-muted rounded w-3/4 animate-pulse" />
          <div className="h-5 bg-muted rounded w-16 animate-pulse ml-2" />
        </div>
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-muted rounded w-full animate-pulse" />
          <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
        </div>
        <div className="flex gap-1">
          <div className="h-5 bg-muted rounded w-12 animate-pulse" />
          <div className="h-5 bg-muted rounded w-16 animate-pulse" />
          <div className="h-5 bg-muted rounded w-14 animate-pulse" />
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="h-4 bg-muted rounded w-20 animate-pulse" />
      </CardFooter>
    </Card>
  );
}

export function ProjectGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectSkeleton key={i} />
      ))}
    </div>
  );
}
