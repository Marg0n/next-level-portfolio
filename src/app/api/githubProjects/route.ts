/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/githubProjects/route.ts
import { NextResponse } from "next/server";

// export async function GET() {
// // export async function GET(request: Request) {
//   // const token = request.url.split('?token=')[1];  //? Get token from query params

//   //* Use URL to easily extract query parameters
//   // const url = new URL(request.url);
//   // const token = await url.searchParams.get("token"); //? Extract token from query params

//   const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

//   console.log("GitHub Token:", token); //? Log token for debugging

//   if (!token) {
//     return NextResponse.json({ error: "Token is required" }, { status: 400 });
//   }

//   try {
//     //* Fetch public repos using the fetch API
//     const reposResponse = await fetch(
//       // "https://api.github.com/users/Marg0n/repos",
//       "https://api.github.com/user/repos",
//       {
//         headers: {
//           Authorization: `token ${token}`,
//         },
//       },
//     );

//     if (!reposResponse.ok) {
//       // Log the body of the response in case of failure for better debugging
//       const errorBody = await reposResponse.text();
//       console.error("Failed to fetch repos. Response body:", errorBody);
//       throw new Error(`Failed to fetch repos. Status: ${reposResponse.status}`);
//     }

//     const repos = await reposResponse.json();
//     console.log("Repositories:", repos);

//     //* Fetch user info (name, email) using fetch API
//     // const userResponse = await fetch("https://api.github.com/users/Marg0n", {
//     const userResponse = await fetch("https://api.github.com/user", {
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     });

//     if (!userResponse.ok) {
//       throw new Error("Failed to fetch user data");
//     }

//     const user = await userResponse.json();

//     //* Return user and repo info as JSON response
//     return NextResponse.json({
//       user: {
//         name: user?.name || "NO Username Found",
//         email: user?.email || "NO Email Found",
//         avatar_url: user?.avatar_url, //? Optional: You could show the user's avatar as well
//       },
//       repos,
//       userResponse,
//     });
//   } catch (error: any) {
//     console.error("Error fetching GitHub data:", error.message || error);
//     return NextResponse.json(
//       { error: error.message || "Error fetching GitHub data" },
//       { status: 500 },
//     );
//   }
// }




// export async function GET() {
//   const token = process.env.GITHUB_TOKEN;

//   if (!token) {
//     return NextResponse.json({ error: "GitHub token not found" }, { status: 500 });
//   }

//   try {
//     const [userRes, reposRes] = await Promise.all([
//       fetch("https://api.github.com/user", {
//         headers: { Authorization: `token ${token}` },
//       }),
//       fetch("https://api.github.com/user/repos", {
//         headers: { Authorization: `token ${token}` },
//       }),
//     ]);

//     if (!userRes.ok || !reposRes.ok) {
//       const errUser = await userRes.text();
//       const errRepos = await reposRes.text();
//       console.error("GitHub API error:", errUser, errRepos);
//       throw new Error("GitHub API request failed");
//     }

//     const user = await userRes.json();
//     const repos = await reposRes.json();

//     return NextResponse.json({ user, repos });
//   } catch (err: any) {
//     console.error("Error fetching GitHub data:", err.message);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }




export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/Marg0n"),
      fetch("https://api.github.com/users/Marg0n/repos"),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    return NextResponse.json({ user, repos });
  } catch (err: any) {
    console.error("Error fetching GitHub data:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
