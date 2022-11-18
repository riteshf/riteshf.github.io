import { Head } from "$fresh/runtime.ts";
import social from "@/social.json" assert { type: "json" };
import { Handlers, PageProps } from "$fresh/server.ts";
import GithubBioCard from "@/components/GithubBioCard.tsx";
import GithubInfoCard from "@/components/GithubInfoCard.tsx";

interface Github {
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

export const handler: Handlers<Github | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api.github.com/users/${social.github}`);

    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: Github = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<Github | null>) {
  if (!data) {
    return <h1>User: {social.github} not found</h1>;
  }

  return (
    <>
      <Head>
        <title>Ritesh Portfolio</title>
      </Head>
      <div className="p-4 lg:p-10 min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <GithubBioCard {...data} />
              <GithubInfoCard {...data} {...social} />
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <div className="grid grid-cols-1 gap-6">Right</div>
          </div>
        </div>
      </div>
    </>
  );
}
