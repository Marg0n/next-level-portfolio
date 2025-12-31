import DashboardSidebar from "./DashboardSidebar";
// import ResponsiveSidebar from './ResponsiveSidebar';


const DashboardMainframe = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <main className="">{children}</main>
      </main>
    </div>
  );
};

export default DashboardMainframe;
