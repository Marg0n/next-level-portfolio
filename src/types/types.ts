//* Define types for repository and user data
export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
};

export type UserInfo = {
  name: string;
  email: string | null;
  avatar_url: string;
};
