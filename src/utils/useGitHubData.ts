"use client";

import { useEffect, useState } from "react";
import { GitHubRepo, UserInfo } from "@/types/types";

type GitHubData = {
  user: UserInfo;
  repos: GitHubRepo[];
};

export const useGitHubData = (token?: string) => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/githubProjects");

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        const result: GitHubData = await response.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(err as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [token]);

  return { data, loading, error };
};
