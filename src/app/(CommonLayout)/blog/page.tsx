
import MyBlogs from '@/components/modules/blog/MyBlogs';
import React from 'react';

// meta tags
export const metadata = {
  title: "Blogs | Sokhorio Margon D' Costa",
  description: "Blogs of Sokhorio Margon D' Costa",
};

const Blogs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <MyBlogs/>
        </div>
    );
};

export default Blogs;