
import EmptyPage from '@/components/shared/empty/EmptyPage';
import React from 'react';

// meta tags
export const metadata = {
  title: "Blogs | Sokhorio Margon D' Costa",
  description: "Blogs of Sokhorio Margon D' Costa",
};

const Blogs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <EmptyPage/>
        </div>
    );
};

export default Blogs;