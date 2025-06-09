
"use client";

import { useAOS } from "@/hooks/useAOS";
import StarfieldWarp from "@/components/shared/motion/StarfieldWarp";
import Hero from "../home/Hero";

const ProjectLandingPage = () => {
  useAOS();

  return (
    <div className="min-h-max w-full flex flex-col items-center justify-center space-y-6 overflow-x-hidden ">
      {/* components */}
      <StarfieldWarp>
        this is the project page
        <Hero/>
      </StarfieldWarp>
    </div>
  );
};

export default ProjectLandingPage;
