/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";

//? Forces the route to run in the Node.js runtime instead of the Edge runtime
export const runtime = "nodejs";

//* Github token
const token = process.env.GITHUB_TOKEN;

//* Route Protection (Secret Key)
const syncSecret = process.env.SYNC_SECRET;

//* Creating a GET API endpoint
export async function GET(req: Request) {
  try {
    //? Protect route with secret
    const providedSecret = req.headers.get("x-sync-secret");

    if (!syncSecret || providedSecret !== syncSecret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    //? Token Validation
    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 500 });
    }

    //? Connect to Database
    await connectDB();

    //? GitHub Request Headers
    const headers = {
      Authorization: `token ${token}`,
      "User-Agent": "Portfolio-App",
      Accept: "application/vnd.github+json", //? Specifies API version format
    };

    //? Handle pagination
    let page = 1;
    const perPage = 100;
    let allRepos: any[] = [];
    let hasMore = true;

    //? Fetch Repositories from GitHub
    while (hasMore) {
      const res = await fetch(
        `https://api.github.com/user/repos?per_page=${perPage}&page=${page}`,
        { headers },
      );

      //? Handle GitHub API Errors
      if (!res.ok) {
        throw new Error("GitHub fetch failed");
      }

      //? Parse GitHub Response
      const repos = await res.json();
      allRepos = [...allRepos, ...repos];

      hasMore = repos.length === perPage;
      page++;
    }

    //? Prepare bulk operations
    const bulkOps = allRepos.map((repo: any) => ({
      updateOne: {
        filter: { githubId: repo.id },
        update: {
          $set: {
            githubId: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            description: repo.description,
            homepage: repo.homepage,
            htmlUrl: repo.html_url,
            stargazersCount: repo.stargazers_count,
            forksCount: repo.forks_count,
            language: repo.language,
          },
        },
        upsert: true,
      },
    }));

    if (bulkOps.length > 0) {
      await Project.bulkWrite(bulkOps);
    }

    //? Delete removed repos
    const githubIds = allRepos.map((repo: any) => repo.id);

    await Project.deleteMany({
      githubId: { $nin: githubIds },
    });

    return NextResponse.json({
      message: "GitHub synced successfully",
      totalSynced: allRepos.length,
    });

} catch (err: any) {
    return NextResponse.json(
        { error: err.message || "Internal Server Error" },
        { status: 500 },
    );
}
}

/*
//? Fetch Repositories from GitHub
const reposRes = await fetch(
  "https://api.github.com/user/repos?per_page=100",
  { headers },
);

//? Handle GitHub API Errors
if (!reposRes.ok) {
  return NextResponse.json(
    { error: "GitHub fetch failed" },
    { status: 500 },
  );
}

//? Parse GitHub Response
const repos = await reposRes.json();

//? Sync Each Repo to MongoDB
for (const repo of repos) {
    await Project.findOneAndUpdate(
        { githubId: repo.id }, //? Find project with same GitHub ID
        {
            githubId: repo.id,
            name: repo.name,
            fullName: repo.full_name,
            description: repo.description,
            homepage: repo.homepage,
            htmlUrl: repo.html_url,
            stargazersCount: repo.stargazers_count,
            forksCount: repo.forks_count,
            language: repo.language,
        },//? Data to Save
        { upsert: true, new: true }, //? Return updated document
    );
}

//? Success Response
return NextResponse.json({ message: "GitHub synced successfully" });
*/