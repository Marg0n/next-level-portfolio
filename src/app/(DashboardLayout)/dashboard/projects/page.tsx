import Projects from '@/components/modules/dashboard/ProjectDetails';
import React from 'react';

// meta tags
export const metadata = {
  title: "Projects Lists | Sokhorio Margon D' Costa",
  description: "Projects Lists of Sokhorio Margon D' Costa",
};

const projects = () => {
    return (
        <div>
            <Projects/>
        </div>
    );
};

export default projects;