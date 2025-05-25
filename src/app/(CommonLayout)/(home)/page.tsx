import Hero from "@/components/modules/home/Hero";
import { DashedDivider, GradientDivider, IconDivider, LabelDivider, SectionDivider } from "@/components/shared/divider/Divider";
import React from "react";

// meta tags
export const metadata = {
  title: "Portfolio | Sokhorio Margon D' Costa",
  description: "Portfolio of Sokhorio Margon D' Costa",
};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 overflow-x-hidden ">
      {/* components */}
      <Hero />
      <SectionDivider />
      <GradientDivider />
      <DashedDivider />
      <LabelDivider label="About Me" />
      <IconDivider icon="★" />
      <Hero />
    </div>
  );
};

export default LandingPage;
