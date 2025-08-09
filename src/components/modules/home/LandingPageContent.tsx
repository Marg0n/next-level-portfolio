"use client";

import About from "@/components/modules/home/About";
import Hero from "@/components/modules/home/Hero";
import { LabelDivider } from "@/components/shared/divider/Dividers";
import { useAOS } from "@/hooks/useAOS";
// import CircuitBoard from "@/components/shared/motion/CircuitBoard";
import Experience from "./Experience";
import Education from "./Education";

const LandingPageContent = () => {
  useAOS();

  return (
    <div className="min-h-max w-full flex flex-col items-center justify-center space-y-6 overflow-x-hidden overflow-y-hidden">
      {/* components */}
      {/* <CircuitBoard> */}
      <div className="mb-6">
        <Hero />
        <LabelDivider label="About Me" data-aos="fade-down" />
        <About />
        <LabelDivider label="Recent Work Experiences" data-aos="fade-down" />
        <Experience />
        <LabelDivider label="Education" data-aos="fade-down" />
        <Education/>
      </div>
      {/* </CircuitBoard> */}
    </div>
  );
};

export default LandingPageContent;
