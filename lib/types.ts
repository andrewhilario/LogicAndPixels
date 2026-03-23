// API Types for Portfolio Logic API
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  short_description?: string;
  thumbnail?: string | null;
  images?: string[];
  project_type: string;
  technologies?: string[];
  github_url?: string;
  live_url?: string | null;
  is_featured: boolean;
  status: "draft" | "published" | "archived" | "in_progress" | "completed";
  created_at: string;
  updated_at?: string;
  category?: string;
  client?: string;
  completion_date?: string;
}

export interface ProjectType {
  id: string;
  name: string;
  description?: string;
}

export interface Stats {
  total_projects: number;
  featured_projects: number;
  project_types: {
    [key: string]: number;
  };
  recent_projects: number;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: "success" | "error";
}

export interface PaginatedResponse<T> {
  count: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: T[];
}

export interface CreateProjectData {
  title: string;
  description: string;
  short_description?: string;
  project_type: string;
  technologies?: string[];
  github_url?: string;
  live_url?: string;
  is_featured?: boolean;
  status?: "draft" | "published" | "archived" | "in_progress" | "completed";
  category?: string;
  client?: string;
  completion_date?: string;
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  slug?: string;
}
