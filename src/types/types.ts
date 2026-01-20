//* Define types for repository and user data
export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
};

export type UserInfo = {
  name: string;
  email: string | null;
  avatar_url: string;
};


//* GitHub Data Type
export type GitHubData = {
  user: UserInfo;
  repos: GitHubRepo[];
};