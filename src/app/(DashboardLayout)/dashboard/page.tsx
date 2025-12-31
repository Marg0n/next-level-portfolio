import DashboardMainframe from '@/components/modules/dashboard/DashboardMainframe';
import React from 'react';

// meta tags
export const metadata = {
  title: "Portfolio Dashboard | Sokhorio Margon D' Costa",
  description: "Portfolio Dashboard of Sokhorio Margon D' Costa",
};

const dashboard = () => {
    return (
        <div>
            <DashboardMainframe/>
        </div>
    );
};

export default dashboard;