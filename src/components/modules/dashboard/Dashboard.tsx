import React from 'react';
import DashboardSidbar from './DashboardSidbar';
// import ResponsiveSidebar from './ResponsiveSidebar';

const Dashboard = () => {
    return (
        <div className="flex h-screen  bg-red-500">
            <div>
                {/* <ResponsiveSidebar/> */}
                <DashboardSidbar/>
            </div>
            <div>
                This is a dashboard
            </div>
        </div>
    );
};

export default Dashboard;