"use client";

import { useEffect, useState } from "react";
import { GitHubData } from "@/types/types";

//8 API endpoint for fetching data from github
const endpoint = "/api/githubProjects";

export const useGitHubData = (token?: string) => {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      setError(null);

      try {
        //? Make the fetch request to the API route with the token as a query parameter
        const response = await fetch(endpoint);

        // console.log("response:", response);

        //? Check if the response is valid (status OK)
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        //? Parse the JSON response
        const result: GitHubData = await response.json();

        //! Expose it to the client
        // console.log("Rate limit:", result.rateLimit);

        //? Store the response data in state
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
