import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm";
import profile from "@/profile.json" assert { type: "json" };
import GithubBioCard from "@/components/GithubBioCard.tsx";
import GitIntroduction from "../components/GitIntroduction.tsx";
import { getGithubUser, getIntroduction, Github } from "../utils/github.ts";
import SocialInfoCard from "@/components/SocialInfoCard.tsx";
import Experiences from "../components/Experiences/Experiences.tsx";
import Education from "../components/Education/Education.tsx";

interface HomePage extends Github {
  introduction: string;
}

export const handler: Handlers<HomePage> = {
  async GET(_req, ctx) {
    const user = await getGithubUser(profile.github);
    const intro = await getIntroduction(profile.github);
    return ctx.render({
      ...user,
      introduction: intro,
    });
  },
};

export default function Page({ data }: PageProps<HomePage>) {
  if (!data) {
    return <h1>User: {profile.github} not found</h1>;
  }

  return (
    <>
      <Head>
        <title>Ritesh Portfolio</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main className="p-4 lg:p-10 min-h-full bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
          <div className="col-span-2">
            <div className="grid grid-cols-1 gap-6">
              <GitIntroduction intro={data.introduction} />
            </div>
          </div>
          <div className="lg:col-span-1 col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <GithubBioCard {...data} />
              <Experiences experiences={profile.experiences} />
              <Education education={profile.education} />
              <SocialInfoCard {...data} {...profile} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
