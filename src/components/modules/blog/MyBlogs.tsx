import EmptyPage from "@/components/shared/empty/EmptyPage";
import React from "react";
import LinkedInPosts from "./LinkedInPosts";

const MyBlogs = () => {
  const posts = [
    {
      id: "1",
      url: "https://www.linkedin.com/posts/yourusername_postid123",
      title: "How I built my Next.js app 🚀",
    },
    {
      id: "2",
      url: "https://www.linkedin.com/posts/yourusername_postid456",
      title: "Thoughts on frontend performance ⚡",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="mt-4 font-bold text-4xl tracking-tight">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My LinkedIn Posts
        </span>
      </h2>
      <LinkedInPosts posts={posts} />
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:1234567890123456789"
        height="500"
        width="100%"
        frameBorder="0"
        allowFullScreen
        title="LinkedIn Post"
      ></iframe>

      <EmptyPage />
    </div>
  );
};

export default MyBlogs;
