/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; //? Ensure this is a client-side component

import {
  AnimatedCardFlip,
  AnimatedCardHoverButtonWithPic,
  AnimatedCardOnlyDetailsWithZoomIn,
} from "@/components/shared/cards/HoverAnimatedCards";
import { LabelDivider } from "@/components/shared/divider/Dividers";
import EmptyPage from "@/components/shared/empty/EmptyPage";
import Loading from "@/components/shared/loader/Loading";
import { useEffect, useState } from "react";

//* Define types for repository and user data
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

export const GitHubProjects = ({
  token,
  array,
  label,
}: {
  token: string;
  array: string[];
  label: string;
}) => {
  const [data, setData] = useState<{
    user: UserInfo;
    repos: GitHubRepo[];
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        //? Make the fetch request to the API route with the token as a query parameter
        // const response = await fetch(`/api/githubProjects?token=${token}`);
        const response = await fetch("/api/githubProjects");

        // console.log("response:", response);

        //? Check if the response is valid (status OK)
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }

        //? Parse the JSON response
        const result = await response.json();

        //? Store the response data in state
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [token]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!data) {
    return (
      <>
        <EmptyPage />
      </>
    );
    // return <div>No data available</div>;
  }

  //! for debugging
  console.log(data.repos?.map((repo) => repo));
  console.log(array);

  return (
    <>
      {/* label */}
      <LabelDivider label={label} data-aos="fade-down" />

      {/* github data */}
      <div className="space-y-6 mb-6">
        {/* <h1 className="text-center font-semibold text-lg">
          {data.user.name}&apos;s GitHub {label}
        </h1> */}
        {data.user.email && <p className="italic">Email: {data.user.email}</p>}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.repos
            ?.filter((repoName) => array.includes(repoName.name))
            ?.map((repo) => (
              <div key={repo.id}>
                {/* <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View Repository
            </a> */}
                {label === "FullStack Projects" ? (
                  <AnimatedCardFlip
                    title={repo.name}
                    description={repo.description}
                    link={repo.html_url}
                    // image={'https://raw.githubusercontent.com/Marg0n/Bicycle/refs/heads/development/src/assets/images/img/bicycle.jpg'}
                    buttonText="GitHub Repo"
                    className=""
                  />
                ) : label === "Running Projects" ? (
                  <AnimatedCardHoverButtonWithPic
                    title={repo.name}
                    description={repo.description}
                    link={repo.html_url}
                    buttonText="GitHub Repo"
                    className=""
                  />
                ) : (
                  label === "Upcoming Projects" && (
                    <AnimatedCardOnlyDetailsWithZoomIn
                      title={repo.name}
                      description={repo.description}
                      // link={repo.html_url}
                      buttonText="GitHub Repo"
                      className=""
                    />
                  )
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
