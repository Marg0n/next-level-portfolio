import { Footer } from "@/components/shared/footer/Footer";
import GlassNavbar from "@/components/shared/GlassNavbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="space-y-6">
      <GlassNavbar />
      <main className="">{children}</main>
      <Footer/>
    </section>
  );
};

export default CommonLayout;
