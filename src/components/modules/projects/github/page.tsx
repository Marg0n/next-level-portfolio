/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"; //? Ensure this is a client-side component

import {
  AnimatedCardFlip,
  AnimatedCardHoverButtonWithPic,
  AnimatedCardOnlyDetailsWithZoomIn,
} from "@/components/shared/cards/HoverAnimatedCards";
import { LabelDivider } from "@/components/shared/divider/Dividers";
import EmptyPage from "@/components/shared/empty/EmptyPage";
import Processing from "@/components/shared/loader/Processing";
import { useGitHubData } from "@/hooks/useGitHubData";
import { StaticImageData } from "next/image";


export const GitHubProjects = ({
  token,
  array,
  label,
  image,
}: {
  token: string;
  array: string[];
  label: string;
  image?: Record<string, string | StaticImageData | null>;
}) => {
  
  const { data, loading, error } = useGitHubData(token);
 
  if (loading) {
    return (
      <div>
        <Processing />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-6 mb-6">
        <EmptyPage title={`Facing problem fetching ${label}`} />
      </div>
    );
    // return <div>No data available</div>;
  }

  //! for debugging
  console.log(data.repos?.map((repo) => repo.name));
  // console.log(array);
  // console.log("image", image);

  return (
    <>
      {/* label */}
      <LabelDivider label={label} data-aos="fade-down" />

      {/* github data */}
      <div className="space-y-6 mb-6">
        {/* <h1 className="text-center font-semibold text-lg">
          {data.user.name}&apos;s GitHub {label}
        </h1> */}
        {/* {data.user.email && <p className="italic">Email: {data.user.email}</p>} */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.repos
            ?.filter((repoName) => array.includes(repoName.name))
            ?.map((repo) => {
              //? image by reponame from props
              const repoImage = image?.[repo.name] ?? null;
              return (
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
                      image={repoImage}
                      buttonText="GitHub Repo"
                      className=""
                    />
                  ) : label === "Running Projects" ? (
                    <AnimatedCardHoverButtonWithPic
                      title={repo.name}
                      description={repo.description}
                      link={repo.html_url}
                      image={repoImage}
                      buttonText="GitHub Repo"
                      className=""
                    />
                  ) : (
                    label === "Upcoming Projects" && (
                      <AnimatedCardOnlyDetailsWithZoomIn
                        title={repo.name}
                        description={repo.description}
                        image={repoImage}
                        // link={repo.html_url}
                        buttonText="GitHub Repo"
                        className=""
                      />
                    )
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
