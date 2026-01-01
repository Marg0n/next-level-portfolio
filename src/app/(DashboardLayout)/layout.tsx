import DashboardSidebar from "@/components/modules/dashboard/DashboardSidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      {/* Sidebar */}
      <DashboardSidebar />
      <section className="flex-1 p-6 overflow-auto">
        <main className="">{children}</main>
      </section>
    </div>
  );
};

export default DashboardLayout;
