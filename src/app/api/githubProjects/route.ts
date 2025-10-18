// app/api/githubProjects/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const token = request.url.split('?token=')[1];  //? Get token from query params

  try {
    //* Fetch public repos using the fetch API
    const reposResponse = await fetch('https://api.github.com/users/Marg0n/repos', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const repos = await reposResponse.json();

    //* Fetch user info (name, email) using fetch API
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const user = await userResponse.json();

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
        avatar_url: user.avatar_url, //? Optional: You could show the user's avatar as well
      },
      repos,
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json({ error: 'Error fetching GitHub data' }, { status: 500 });
  }
}
