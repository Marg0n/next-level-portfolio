//* Define types for repository and user data
export type GitHubRepo = {
  /** Core identifiers */
  id: number;
  node_id?: string; //? FUTURE: GraphQL / API cross-use
  name: string;
  full_name?: string;

  /** Descriptive info */
  description: string | null; //? FIXED: GitHub can return null
  homepage?: string | null;
  topics?: string[]; //? FUTURE: repo topics/tags

  /** URLs */
  html_url: string;
  clone_url?: string;
  ssh_url?: string;

  /** Stats */
  stargazers_count: number;
  watchers_count?: number; //? USED in UI
  forks_count: number;
  open_issues_count?: number;
  size?: number; //? repo size in KB

  /** Language & tech */
  language: string | null;
  languages_url?: string; //? FUTURE: language breakdown
  default_branch?: string;

  /** Activity */
  created_at?: string;
  updated_at?: string;
  pushed_at?: string;

  /** Licensing */
  license?: {
    key: string;
    name: string;
    spdx_id: string;
    url: string | null;
  } | null;

  /** Repo state */
  private?: boolean;
  archived?: boolean;
  disabled?: boolean;
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