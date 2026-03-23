import { api } from "./api";
import type {
  Project,
  Stats,
  CreateProjectData,
  UpdateProjectData,
  PaginatedResponse,
  ApiResponse
} from "./types";

export const projectsApi = {
  // Get all projects
  getProjects: async (params?: {
    page?: number;
    limit?: number;
    project_type?: string;
    is_featured?: boolean;
  }): Promise<PaginatedResponse<Project>> => {
    const response = await api.get("/projects/", { params });
    return response.data;
  },

  // Get single project by slug
  getProject: async (slug: string): Promise<Project> => {
    const response = await api.get(`/projects/${slug}/`);
    return response.data;
  },

  // Create new project
  createProject: async (data: CreateProjectData): Promise<Project> => {
    const response = await api.post("/projects/", data);
    return response.data;
  },

  // Update project
  updateProject: async (
    slug: string,
    data: UpdateProjectData
  ): Promise<Project> => {
    const response = await api.put(`/projects/${slug}/update/`, data);
    return response.data;
  },

  // Partially update project
  patchProject: async (
    slug: string,
    data: Partial<UpdateProjectData>
  ): Promise<Project> => {
    const response = await api.patch(`/projects/${slug}/update/`, data);
    return response.data;
  },

  // Delete project
  deleteProject: async (slug: string): Promise<void> => {
    await api.delete(`/projects/${slug}/delete/`);
  },

  // Get featured projects (filter from main projects endpoint)
  getFeaturedProjects: async (): Promise<Project[]> => {
    try {
      console.log("Fetching featured projects...");

      // Try to get featured projects using the is_featured parameter
      const response = await api.get("/projects/", {
        params: { is_featured: true }
      });

      console.log("Featured projects response:", response.data);

      // Handle the paginated response structure
      if (response.data && response.data.results) {
        return response.data.results;
      }

      // Fallback: get all projects and filter for featured ones
      console.log("No featured parameter support, fetching all projects...");
      const allResponse = await api.get("/projects/");
      console.log("All projects response:", allResponse.data);

      if (allResponse.data && allResponse.data.results) {
        const featuredProjects = allResponse.data.results.filter(
          (project: Project) => project.is_featured === true
        );
        console.log("Filtered featured projects:", featuredProjects);
        return featuredProjects;
      }

      return [];
    } catch (error) {
      console.error("Error fetching featured projects:", error);
      // Final fallback: get all projects and filter for featured ones
      try {
        const response = await api.get("/projects/");
        if (response.data && response.data.results) {
          return response.data.results.filter(
            (project: Project) => project.is_featured === true
          );
        }
        return [];
      } catch (fallbackError) {
        console.error("Fallback also failed:", fallbackError);
        throw fallbackError;
      }
    }
  },

  // Get projects by type
  getProjectsByType: async (projectType: string): Promise<Project[]> => {
    const response = await api.get(`/projects/type/${projectType}/`);
    return response.data;
  },

  // Get stats
  getStats: async (): Promise<Stats> => {
    const response = await api.get("/stats/");
    return response.data;
  }
};
