import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Remove the "**" wildcard if possible, as it bypasses security checks.
      // If you need it for a specific reason, keep it, but specific hosts are safer.
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placekitten.com",
        pathname: "/**",
      },
    ],
  },
  // 1. Server Actions are stable in v16. Move out of 'experimental'
  experimental:{
    serverActions:{
      bodySizeLimit:'5mb',
    },
  },
  // 2. Remove the 'webpack' block entirely. 
  // Next.js 16 uses Turbopack, and it automatically handles the "@" 
  // alias from your tsconfig.json. Manual aliasing here can break builds
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
  // 3. Environment variables are handled automatically if prefixed with NEXT_PUBLIC_.
  // You only need this 'env' block for variables NOT prefixed with NEXT_PUBLIC_.
  env: {
    GITHUB_TOKEN: process.env.NEXT_PUBLIC_GITHUB_TOKEN, //! Make sure this is here
  },
};

export default nextConfig;