
"use client";

import { useAOS } from "@/hooks/useAOS";
import StarfieldWarp from "@/components/shared/motion/StarfieldWarp";
import { AnimatedCardFlip, AnimatedCardForPerson, AnimatedCardHoverButtonWithPic, AnimatedCardWithImageTilt, AnimatedCardZoomInWithDesc } from '@/components/shared/cards/HoverAnimatedCards';

const ProjectLandingPage = () => {
  useAOS();

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center space-y-6 overflow-x-hidden ">
      {/* components */}
      {/* <StarfieldWarp> */}
        <h2 className="mt-4 font-bold text-4xl tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Some of My project Lists
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <AnimatedCardZoomInWithDesc/>
          <AnimatedCardHoverButtonWithPic/>
          <AnimatedCardForPerson/>
          <AnimatedCardFlip/>
          <AnimatedCardWithImageTilt />
        </div>
      {/* </StarfieldWarp> */}
    </div>
  );
};

export default ProjectLandingPage;
