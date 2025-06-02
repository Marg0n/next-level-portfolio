
"use client";

import { useAOS } from "@/hooks/useAOS";
import Hero from "@/components/modules/home/Hero";
import About from "@/components/modules/home/About";
import { LabelDivider } from "@/components/shared/divider/Divider";

const LandingPageContent = () => {
  useAOS();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 overflow-x-hidden ">
      {/* components */}
      <Hero />
      <LabelDivider label="About Me" data-aos="fade-down"/>
      <About />
    </div>
  );
};

export default LandingPageContent;
