import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { projectsApi } from "./api-client";
import type { Project, CreateProjectData, UpdateProjectData } from "./types";

// Query keys for better cache management
export const queryKeys = {
  projects: ["projects"] as const,
  project: (slug: string) => ["projects", slug] as const,
  featuredProjects: ["projects", "featured"] as const,
  projectsByType: (type: string) => ["projects", "type", type] as const,
  stats: ["stats"] as const
};

// Get all projects
export const useProjects = (params?: {
  page?: number;
  limit?: number;
  project_type?: string;
  is_featured?: boolean;
}) => {
  return useQuery({
    queryKey: [...queryKeys.projects, params],
    queryFn: () => projectsApi.getProjects(params),
    staleTime: 5 * 60 * 1000 // 5 minutes
  });
};

// Get single project
export const useProject = (slug: string, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.project(slug),
    queryFn: () => projectsApi.getProject(slug),
    enabled: enabled && !!slug,
    staleTime: 10 * 60 * 1000 // 10 minutes
  });
};

// Get featured projects
export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: queryKeys.featuredProjects,
    queryFn: projectsApi.getFeaturedProjects,
    staleTime: 5 * 60 * 1000 // 5 minutes
  });
};

// Get projects by type
export const useProjectsByType = (projectType: string, enabled = true) => {
  return useQuery({
    queryKey: queryKeys.projectsByType(projectType),
    queryFn: () => projectsApi.getProjectsByType(projectType),
    enabled: enabled && !!projectType,
    staleTime: 5 * 60 * 1000 // 5 minutes
  });
};

// Get stats
export const useStats = () => {
  return useQuery({
    queryKey: queryKeys.stats,
    queryFn: projectsApi.getStats,
    staleTime: 15 * 60 * 1000 // 15 minutes
  });
};

// Create project mutation
export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateProjectData) => projectsApi.createProject(data),
    onSuccess: () => {
      // Invalidate and refetch projects
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      queryClient.invalidateQueries({ queryKey: queryKeys.featuredProjects });
      queryClient.invalidateQueries({ queryKey: queryKeys.stats });
    }
  });
};

// Update project mutation
export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: UpdateProjectData }) =>
      projectsApi.updateProject(slug, data),
    onSuccess: (_, { slug }) => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: queryKeys.project(slug) });
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      queryClient.invalidateQueries({ queryKey: queryKeys.featuredProjects });
    }
  });
};

// Patch project mutation
export const usePatchProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      slug,
      data
    }: {
      slug: string;
      data: Partial<UpdateProjectData>;
    }) => projectsApi.patchProject(slug, data),
    onSuccess: (_, { slug }) => {
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: queryKeys.project(slug) });
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      queryClient.invalidateQueries({ queryKey: queryKeys.featuredProjects });
    }
  });
};

// Delete project mutation
export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slug: string) => projectsApi.deleteProject(slug),
    onSuccess: () => {
      // Invalidate all project-related queries
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      queryClient.invalidateQueries({ queryKey: queryKeys.featuredProjects });
      queryClient.invalidateQueries({ queryKey: queryKeys.stats });
    }
  });
};
