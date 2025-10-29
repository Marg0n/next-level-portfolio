
'use client';  //? Ensure this is a client-side component

import { GetGitID } from '@/app/api/githubProjects/route';
import { useEffect, useState } from 'react';

type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

type UserInfo = {
  name: string;
  email: string | null;
  avatar_url: string;
};

export const GitHubProjects = ({ token }: { token: string }) => {
  const [data, setData] = useState<{ user: UserInfo; repos: GitHubRepo[] } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/githubProjects?token=${token}`);
        const result = await response.json();
        setData(result);

        //! for debugging
        const r = await GetGitID(`/api/githubProjects?token=${token}` as unknown as Request);
        console.log(r)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  //! for debugging
  console.log(data)

  return (
    <div>
      <h1>{data.user.name}&apos;s GitHub Projects</h1>
      {data.user.email && <p>Email: {data.user.email}</p>}
      {/* <div>
        {data.repos.map((repo) => (
          <div key={repo.id} className="card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View Repository
            </a>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default function Home() {
  const token = process.env.GITHUB_TOKEN || ''; // Get token from environment variables

  return (
    <div>
      <GitHubProjects token={token} />
    </div>
  );
}


/**
 * Explanation:

TypeScript types: We define GitHubRepo and UserInfo types to represent the structure of the data we get back from GitHub (repos and user info).

State and effect handling: useState and useEffect are used to manage the loading state and the GitHub data after the API request completes.

Token: The GitHub token is passed into the component as a prop. You can get it from environment variables or however you'd like to handle token management.

'use client': This directive is required for client-side components in the App Directory.
 */