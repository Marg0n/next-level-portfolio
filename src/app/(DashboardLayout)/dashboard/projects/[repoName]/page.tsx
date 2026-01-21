import ProjectDetails from '@/components/modules/dashboard/ProjectDetails';
import React from 'react';

// meta tags
export const metadata = {
  title: "Projects Details | Sokhorio Margon D' Costa",
  description: "Projects Lists of Sokhorio Margon D' Costa",
};

const projects = () => {
    return (
        <div>
            <ProjectDetails/>
        </div>
    );
};

export default projects;