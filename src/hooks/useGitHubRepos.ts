import { useEffect, useState } from "react";
import type { GitHubRepo, AsyncState } from "../types/github";
import { fetchGitHubRepo } from "../services/githubApi";

export function useGitHubRepos(username: string): AsyncState<GitHubRepo[]> {
  const [state, setState] = useState<AsyncState<GitHubRepo[]>>({
    status: "idle",
  });

  useEffect(() => {
    async function load() {
      if (!username) {
        setState({ status: "idle" });
        return;
      }

      setState({ status: "loading" });
      const result = await fetchGitHubRepo(username);
      setState(result);
    }

    load();
  }, [username]);

  return state;
}
