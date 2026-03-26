export interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  html_url: string;
  location: string | null;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string | null;
  description: string | null;
  stars: number;
  visibility: string;
  stargazers_count: number;
  language: string | null;
  html_url: string;
}

export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

export type GitHubUserPreview = Pick<
  GitHubUser,
  "login" | "avatar_url" | "html_url" | "bio" | "followers" | "location"
>;

export type GitHubUpdate = Partial<GitHubUser>;

export type GitHubPublic = Omit<GitHubUser, "following" | "created_at">;

export type GitHubCache = Record<string, GitHubUserPreview>;

export type GitHubReposPreview = Pick<
  GitHubRepo,
  "language" | "name" | "description" | "stars" | "html_url"
>;
