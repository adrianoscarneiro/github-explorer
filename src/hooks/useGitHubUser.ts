import { useEffect, useState } from "react";
import { fetchGitHubUser } from "../services/githubApi";
import type { GitHubUser, AsyncState } from "../types/github";

export function useGitHubUser(username: string): AsyncState<GitHubUser> {
  const [state, setState] = useState<AsyncState<GitHubUser>>({
    status: "idle",
  });

  useEffect(() => {
    async function load() {
      if (!username) {
        setState({ status: "idle" });
        return;
      }

      setState({ status: "loading" });
      const result = await fetchGitHubUser(username);
      setState(result);
    }

    load();
  }, [username]);
  return state;
}
