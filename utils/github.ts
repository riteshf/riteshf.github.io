export interface Github {
  id: number;
  login: string;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: null;
  hireable: true;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

// Get Github user.
export async function getGithubUser(username: string): Promise<Github> {
  const resp = await fetch(`https://api.github.com/users/${username}`);
  const user: Github = await resp.json();
  return user;
}

export const getIntroduction = async (username: string): Promise<string> => {
  const resp = await fetch(
    `https://raw.githubusercontent.com/${username}/${username}/main/README.md`,
  );
  const intro: string = await resp.text();
  return intro;
};
