import GlassNavbar from "@/components/shared/GlassNavbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GlassNavbar />
      <main className="min-h-screen">{children}</main>
    </>
  );
};

export default CommonLayout;
