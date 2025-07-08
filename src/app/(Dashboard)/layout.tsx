import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="">
      
      <main className="">{children}</main>
      
    </section>
  );
};

export default DashboardLayout;