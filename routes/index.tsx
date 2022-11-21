import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm";

import GithubBioCard from "@/components/GithubBioCard.tsx";
import GitIntroduction from "@/components/GitIntroduction.tsx";
import SocialInfoCard from "@/components/SocialInfoCard.tsx";
import Experiences from "../components/Experiences/Experiences.tsx";
import Education from "../components/Education/Education.tsx";
import Skills from "../components/Skills.tsx";
import RecentProjects from "../components/RecentProjects/RecentProjects.tsx";

import {
  getGithubUser,
  getIntroduction,
  getRecentProjects,
  Github,
  ProjectResponse,
} from "../utils/github.ts";
import profile from "@/profile.json" assert { type: "json" };

interface HomePage extends Github {
  introduction: string;
  projects: ProjectResponse;
}

export const handler: Handlers<HomePage> = {
  async GET(_req, ctx) {
    const user = await getGithubUser(profile.github);
    const intro = await getIntroduction(profile.github);
    const projects = await getRecentProjects(profile.github);

    return ctx.render({
      ...user,
      introduction: intro,
      projects: projects,
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
        <title>{profile.title}</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main className="p-4 lg:p-10 min-h-full bg-gray-300">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-box">
          <div className="col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <GithubBioCard {...data} />
              <Skills skills={profile.skills} />
              <Experiences experiences={profile.experiences} />
              <SocialInfoCard {...data} {...profile} />
              <Education education={profile.education} />
            </div>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <GitIntroduction intro={data.introduction} />
              <RecentProjects
                username={profile.github}
                total={data.projects.total_count}
                projects={data.projects.items}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
