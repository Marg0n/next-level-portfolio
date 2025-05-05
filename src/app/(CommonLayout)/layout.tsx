import { Footer } from "@/components/shared/footer/Footer";
import GlassNavbar from "@/components/shared/GlassNavbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlassNavbar />
      <main className="min-h-screen">{children}</main>
      <Footer/>
    </>
  );
};

export default CommonLayout;
