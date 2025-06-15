
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
        this is the project page
        
        
        <AnimatedCardZoomInWithDesc/>
        <AnimatedCardHoverButtonWithPic/>
        <AnimatedCardForPerson/>
        <AnimatedCardFlip/>
        {/* <AnimatedCardWithImageTilt/> */}
      {/* </StarfieldWarp> */}
    </div>
  );
};

export default ProjectLandingPage;
