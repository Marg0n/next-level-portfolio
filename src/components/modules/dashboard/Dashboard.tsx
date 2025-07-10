import DashboardSidebar from "./DashboardSidebar";
// import ResponsiveSidebar from './ResponsiveSidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen  bg-red-500">
      <div>
        {/* <ResponsiveSidebar/> */}
        <DashboardSidebar />
      </div>
      <div>This is a dashboard</div>
    </div>
  );
};

export default Dashboard;
