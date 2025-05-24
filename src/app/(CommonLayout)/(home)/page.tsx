import Hero from "@/components/modules/home/Hero";
import SectionDivider from "@/components/shared/SectionDivider";
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
      <Hero />
    </div>
  );
};

export default LandingPage;
