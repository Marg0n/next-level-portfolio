import About from "@/components/modules/home/About";
import Hero from "@/components/modules/home/Hero";
import { LabelDivider } from "@/components/shared/divider/Divider";

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
      <LabelDivider label="About Me" />
      <About />
    </div>
  );
};

export default LandingPage;
