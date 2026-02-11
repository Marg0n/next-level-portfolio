/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/githubProjects/route.ts
import { NextResponse } from "next/server";

//* Force Node.js runtime
export const runtime = "nodejs";

const token = process.env.GITHUB_TOKEN;

export async function GET() {

  //? Check if token
  if (!token) {
    console.error("❌ GITHUB_TOKEN is undefined");
    return NextResponse.json(
      { error: "Server misconfiguration: GitHub token missing" },
      { status: 500 }
    );
  }

  console.log("GitHub token loaded:", token.slice(0, 6) + "...");

  try {
    // const [userRes, reposRes] = await Promise.all([
    //   fetch("https://api.github.com/users/Marg0n", {
    //      headers: { Authorization: `token ${token}` },
    //    }),
    //   fetch("https://api.github.com/users/Marg0n/repos", {
    //      headers: { Authorization: `token ${token}` },
    //    }),
    // ]);

    //? Headers for fetch requests
    const headers = {
      Authorization: `token ${token}`,
      "User-Agent": "NextJS-App",
      Accept: "application/vnd.github+json",
    };

    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/user", {
        headers,
      }),
      fetch("https://api.github.com/user/repos?per_page=100", {
        headers,
      }),
    ]);

    //? For debugging
    console.log("User status:", userRes.status);
    console.log("Repos status:", reposRes.status);

    console.log(
      "Rate limit remaining (user):",
      userRes.headers.get("x-ratelimit-remaining")
    );

    console.log(
      "Rate limit remaining (repos):",
      reposRes.headers.get("x-ratelimit-remaining")
    );

    
    if (!userRes.ok) {
      const text = await userRes.text();
      console.error("User API error:", userRes.status, text);
    }

    if (!reposRes.ok) {
      const text = await reposRes.text();
      console.error("Repos API error:", reposRes.status, text);
    }

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: "GitHub API request failed" },
        { status: 500 }
      );
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    //? Expose it to the client for testing
    // return NextResponse.json({
    //   user,
    //   repos,
    //   rateLimit: {
    //     remaining: userRes.headers.get("x-ratelimit-remaining"),
    //     reset: userRes.headers.get("x-ratelimit-reset"),
    //   },
    // });

    return NextResponse.json({ user, repos });
  } catch (err: any) {
    console.error("Error fetching GitHub data:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * ?sort=updated
 * ?sort=created
 * ?sort=pushed
 */

/*
//! it is for the pagination – ALL repos
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const token = process.env.GITHUB_TOKEN;

export async function GET() {
  if (!token) {
    return NextResponse.json(
      { error: "GitHub token missing" },
      { status: 500 }
    );
  }

  const headers = {
    Authorization: `token ${token}`,
    "User-Agent": "NextJS-App",
    Accept: "application/vnd.github+json",
  };

  try {
    // 1️⃣ Fetch user info
    const userRes = await fetch("https://api.github.com/user", { headers });

    if (!userRes.ok) {
      console.error("User API error:", await userRes.text());
      return NextResponse.json(
        { error: "Failed to fetch user" },
        { status: 500 }
      );
    }

    const user = await userRes.json();

    // 2️⃣ Fetch ALL repos (pagination)
    let page = 1;
    let allRepos: any[] = [];

    while (true) {
      const res = await fetch(
        `https://api.github.com/user/repos?per_page=100&page=${page}`,
        { headers }
      );

      if (!res.ok) {
        console.error("Repos API error:", await res.text());
        break;
      }

      const repos = await res.json();

      if (!repos.length) break;

      allRepos.push(...repos);
      page++;
    }

    return NextResponse.json({
      user,
      repos: allRepos,
    });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

*/