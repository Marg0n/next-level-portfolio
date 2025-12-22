"use client";

import { useAOS } from "@/hooks/useAOS";
import bestDeals from "@/assets/images/bestdeals.png";
import mediHouse from "@/assets/images/mediHouse.png";
import mediMart from "@/assets/images/mediMart.png";
import portfolio from "@/assets/images/portfolio.png";
import bicycle from "@/assets/images/bicycle.png";

// import bicycle from "https://raw.githubusercontent.com/Marg0n/Bicycle/refs/heads/development/src/assets/images/img/bicycle.jpg"
// import StarfieldWarp from "@/components/shared/motion/StarfieldWarp";

import { GitHubProjects } from "./github/page";
import { useState } from "react";
import { StaticImageData } from "next/image";

type ProjectType = {
  id: number;
  name: string;
  image: string | StaticImageData | null;
};

const ProjectLandingPage = () => {
  useAOS();

  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || "";
  // console.log("Token", token);

  //* Filtered data for git project
  const [fullStackProjects, GetFullStackProjects] = useState<ProjectType[]>([
    { id: 1, name: "best-deals", image: bestDeals },
    {
      id: 2,
      name: "Bicycle",
      image: bicycle,
    },
    { id: 3, name: "MediMartNight", image: mediMart },
    { id: 4, name: "MediHouse_Client", image: mediHouse },
  ]);
  const [runningProjects, GetRunningProjects] = useState<ProjectType[]>([
    { id: 1, name: "next-level-portfolio", image: portfolio },
    { id: 2, name: "CourierAndParcelManagementSystem", image: "" },
  ]);
  const [upcomingProjects, GetUpcomingProjects] = useState<ProjectType[]>([
    { id: 1, name: "kenakata", image: "" },
    { id: 2, name: "Lenden", image: "" },
  ]);

  //* getting the image from the array object
  const imageMap: Record<string, StaticImageData | string | null> =
    Object.fromEntries(fullStackProjects.map((p) => [p.name, p.image]));

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center space-y-6 overflow-x-hidden ">
      {/* components */}
      {/* <StarfieldWarp> */}
      <h2 className="mt-4 font-bold text-4xl tracking-tight">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Some of My project Lists
        </span>
      </h2>

      <GitHubProjects
        token={token}
        label="FullStack Projects"
        array={fullStackProjects.map((p) => p.name)}
        image={imageMap}
      />
      <GitHubProjects
        token={token}
        label="Running Projects"
        array={runningProjects.map((p) => p.name)}
      />
      <GitHubProjects
        token={token}
        label="Upcoming Projects"
        array={upcomingProjects.map((p) => p.name)}
      />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        <AnimatedCardZoomInWithDesc />
        <AnimatedCardHoverButtonWithPic />
        <AnimatedCardForPerson />
        <AnimatedCardFlip />
        <AnimatedCardWithImageTilt />
        <AnimatedCardOnlyDetailsWithZoomIn />
      </div> */}

      {/* </StarfieldWarp> */}
    </div>
  );
};

export default ProjectLandingPage;
