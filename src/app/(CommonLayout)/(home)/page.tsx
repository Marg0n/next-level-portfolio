import Hero from "@/components/modules/home/Hero";
import React from "react";

// meta tags
export const metadata = {
  title: "Portfolio Of Margon",
  description: "Portfolio of Sokhorio Margon D' Costa",
};

const LandingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center space-y-6 overflow-x-hidden ">
      {/* components */}
      <Hero />
    </div>
  );
};

export default LandingPage;
