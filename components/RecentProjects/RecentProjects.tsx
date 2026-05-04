import Section from "@/layout/Section.tsx";
import Project from "./Project.tsx";
import { IProject } from "@/utils/github.ts";

type RecentProjectsProps = {
  username: string;
  total: number;
  projects: IProject[];
};

const RecentProjects = (
  { projects, username, total }: RecentProjectsProps,
) => {
  return (
    <Section
      title="Recent public repositories"
      meta={`${total} total`}
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((p, i) => <Project key={i} {...p} />)}
      </div>
      <div class="mt-4 text-right">
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          class="text-sm text-ink-500 hover:text-accent-700"
        >
          View all on GitHub →
        </a>
      </div>
    </Section>
  );
};

export default RecentProjects;
