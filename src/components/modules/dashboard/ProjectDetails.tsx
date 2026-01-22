"use client";

import { useParams } from "next/navigation";
import { useGitHubData } from "@/hooks/useGitHubData";

// NEW: React Icons
import {
  FaStar,
  FaCodeBranch,
  FaEye,
  FaBug,
  FaGithub,
} from "react-icons/fa";

const options = { 
  day: '2-digit', 
  month: 'short', // 'long', 'short', 'numeric', '2-digit'
  year: 'numeric' 
};

const ProjectDetails = () => {
  const { repoName } = useParams<{ repoName: string }>();

  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
  const { data, loading, error } = useGitHubData(token);

  if (loading)
    return <p className="h-screen flex justify-center items-center text-gray-500">Loading project...</p>;

  if (error)
    return <p className="h-screen flex justify-center items-center text-red-500">Error loading project</p>;

  const project = data?.repos?.find(
    (repo) => repo.name === repoName
  );

  if (!project) {
    return <p className="text-center">Project not found</p>;
  }

  return (
    // UPDATED: Centered card layout
    <div className="min-w-3xl mx-auto p-6 h-screen flex justify-center items-center">
      <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6">

        {/* Project title */}
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.name}
        </h1>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {project.description || "No description provided."}
        </p>

        {/* UPDATED: Stats grid with icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-6">

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaStar className="text-yellow-500" />
            <span>{project.stargazers_count} Stars</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaCodeBranch className="text-indigo-500" />
            <span>{project.forks_count} Forks</span>
          </div>

          {/* NEW: Watchers */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaEye className="text-green-500" />
            <span>{project.watchers_count} Watchers</span>
          </div>

          {/* NEW: Open Issues */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <FaBug className="text-red-500" />
            <span>{project.open_issues_count} Issues</span>
          </div>
        </div>

        {/* UPDATED: Extra info row */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>
            🧑‍💻 Language:{" "}
            <strong className="text-gray-700 dark:text-gray-300">
              {project.language ?? "N/A"}
            </strong>
          </span>

          {/* NEW: Last updated */}
          <span>
            ⏱ Last updated:{" "}
            <strong className="text-gray-700 dark:text-gray-300">
              {new Date(project.updated_at as string).toLocaleDateString('en-GB', options )}
            </strong>
          </span>
        </div>

        {/* UPDATED: Modern button */}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition"
        >
          <FaGithub />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;