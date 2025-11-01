// app/api/githubProjects/route.ts
import { NextResponse } from 'next/server';

export async function GetGitID(request: Request) {
  // const token = request.url.split('?token=')[1];  //? Get token from query params
  
  //* Use URL to easily extract query parameters
  const url = new URL(request.url);
  const token = url.searchParams.get('token');  //? Extract token from query params

  console.log('GitHub Token:', token); //? Log token for debugging

  if (!token) {
    return NextResponse.json({ error: 'Token is required' }, { status: 400 });
  }

  try {
    //* Fetch public repos using the fetch API
    const reposResponse = await fetch('https://api.github.com/users/Marg0n/repos', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repos');
    }

    const repos = await reposResponse.json();
    console.log('Repositories:', repos);

    //* Fetch user info (name, email) using fetch API
    const userResponse = await fetch('https://api.github.com/users/Marg0n', {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const user = await userResponse.json();

    //* Return user and repo info as JSON response
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
