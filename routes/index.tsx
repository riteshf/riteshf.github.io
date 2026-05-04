import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm";

import GithubBioCard from "@/components/GithubBioCard.tsx";
import SocialInfoCard from "@/components/SocialInfoCard.tsx";
import Experiences from "@/components/Experiences/Experiences.tsx";
import Education from "@/components/Education/Education.tsx";
import Skills from "@/components/Skills.tsx";
import Projects from "@/components/Projects/Projects.tsx";
import RecentProjects from "@/components/RecentProjects/RecentProjects.tsx";

import {
  getGithubUser,
  getRecentProjects,
  Github,
  ProjectResponse,
} from "@/utils/github.ts";
import profile from "@/profile.json" with { type: "json" };

interface HomePage extends Github {
  projects: ProjectResponse;
}

const TAGLINE = "Engineering Lead · Full-Stack · AI / Agent tooling";
const DESCRIPTION =
  "Ritesh Firodiya — full-stack engineer & lead. ~9 years shipping TypeScript products across React, Next.js, React Native, NestJS. Currently building AI-assisted developer tooling on Anthropic SDK + MCP.";

export const handler: Handlers<HomePage> = {
  async GET(_req, ctx) {
    const [user, projects] = await Promise.all([
      getGithubUser(profile.github),
      getRecentProjects(profile.github),
    ]);
    return ctx.render({ ...user, projects });
  },
};

export default function Page({ data }: PageProps<HomePage>) {
  if (!data) {
    return <h1>User: {profile.github} not found</h1>;
  }

  const pageTitle = `${data.name || profile.title} — ${TAGLINE}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="author" content={data.name || profile.title} />
        <link rel="canonical" href={profile.website} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={data.avatar_url} />
        <meta property="og:url" content={profile.website} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <meta
          name="google-site-verification"
          content="BBtnEWW-NzqBZtR7EfTb1C5aw41RsghkZR2yeYFtT2I"
        />
      </Head>
      <main class="min-h-screen p-4 lg:p-10 bg-gray-50">
        <div class="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Hero: bio (h1 + CTAs) | social info */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
              <GithubBioCard {...data} tagline={TAGLINE} />
            </div>
            <SocialInfoCard {...data} {...profile} />
          </div>

          {/* Tech stack — full width, scannable */}
          <Skills skills={profile.skills} />

          {/* projects — most repos private */}
          <Projects projects={profile.projects} />

          {/* Experience + education side-by-side */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
              <Experiences experiences={profile.experiences} />
            </div>
            <Education education={profile.education} />
          </div>

          {/* Public GitHub activity — supplementary, demoted to bottom */}
          <RecentProjects
            username={profile.github}
            total={data.projects.total_count}
            projects={data.projects.items}
          />

          <footer class="text-center text-sm text-gray-500 py-6">
            Built with Deno Fresh · source on{" "}
            <a
              href={`https://github.com/${profile.github}/riteshf.github.io`}
              class="underline hover:text-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}
