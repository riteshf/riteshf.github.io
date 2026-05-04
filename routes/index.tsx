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

  const pageTitle = `${data.name || profile.title} — ${profile.tagline}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={profile.summary} />
        <meta name="author" content={data.name || profile.title} />
        <link rel="canonical" href={profile.website} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={profile.summary} />
        <meta property="og:image" content={data.avatar_url} />
        <meta property="og:url" content={profile.website} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={profile.summary} />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <meta
          name="google-site-verification"
          content="BBtnEWW-NzqBZtR7EfTb1C5aw41RsghkZR2yeYFtT2I"
        />
      </Head>
      <main class="min-h-screen bg-ink-50 text-ink-900">
        <div class="max-w-6xl mx-auto px-4 lg:px-8 py-8 lg:py-12 flex flex-col gap-6">
          {/* Hero row: bio + social info */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
              <GithubBioCard
                {...data}
                tagline={profile.tagline}
                summary={profile.summary}
              />
            </div>
            <SocialInfoCard {...data} {...profile} />
          </div>

          {/* Tech stack — full width */}
          <Skills skills={profile.skills} />

          {/* Selected projects */}
          <Projects projects={profile.projects} />

          {/* Experience + education */}
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
              <Experiences experiences={profile.experiences} />
            </div>
            <Education education={profile.education} />
          </div>

          {/* Public GitHub repos — supplementary */}
          <RecentProjects
            username={profile.github}
            total={data.projects.total_count}
            projects={data.projects.items}
          />

          <footer class="mt-4 pt-6 border-t border-ink-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-500">
            <span>© {new Date().getFullYear()} {data.name || profile.title}</span>
            <span>
              Built with Deno Fresh ·{" "}
              <a
                href={`https://github.com/${profile.github}/riteshf.github.io`}
                class="hover:text-accent-700 underline"
                target="_blank"
                rel="noreferrer"
              >
                source
              </a>
            </span>
          </footer>
        </div>
      </main>
    </>
  );
}
