
import React from "react";

interface Post {
  id: string;
  url: string;
  title: string;
}

interface Props {
  posts: Post[];
}

const LinkedInPosts: React.FC<Props> = ({ posts }) => {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border rounded hover:bg-gray-50"
        >
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-blue-600">{post.url}</p>
        </a>
      ))}
    </div>
  );
};

export default LinkedInPosts;