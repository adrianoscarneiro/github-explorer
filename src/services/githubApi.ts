import type { GitHubUser, AsyncState, GitHubRepo } from "../types/github";

export async function fetchGitHubUser(
  username: string,
): Promise<AsyncState<GitHubUser>> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    if (!res.ok) {
      return { status: "error", message: data.message };
    }

    return { status: "success", data: data };
  } catch {
    return { status: "error", message: "Network error" };
  }
}

export async function fetchGitHubRepo(
  username: string,
): Promise<AsyncState<GitHubRepo[]>> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
    );
    const data = await response.json();

    if (!response.ok) {
      return { status: "error", message: data.message };
    }

    return { status: "success", data: data };
  } catch {
    return { status: "error", message: "Network Error" };
  }
}
