"use client";

import { useParams } from "next/navigation";
import { useGitHubData } from "@/hooks/useGitHubData";

const ProjectDetails = () => {
  const { repoName } = useParams<{ repoName: string }>();

  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
  const { data, loading, error } = useGitHubData(token);

  if (loading) return <p>Loading project...</p>;
  if (error) return <p>Error loading project</p>;

  const project = data?.repos?.find(
    (repo) => repo.name === repoName
  );

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>

      <p className="text-gray-600 mb-4">
        {project.description || "No description provided."}
      </p>

      <div className="flex gap-4 text-sm text-gray-500">
        <span>⭐ Stars: {project.stargazers_count}</span>
        <span>🍴 Forks: {project.forks_count}</span>
        <span>🧑‍💻 Language: {project.language ?? "N/A"}</span>
      </div>

      <a
        href={project.html_url}
        target="_blank"
        className="inline-block mt-4 text-indigo-600 underline"
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default ProjectDetails;