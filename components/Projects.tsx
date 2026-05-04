import Section from "./Section.tsx";
import ProjectCard, { IProjectEntry } from "./ProjectCard.tsx";

type ProjectsProps = {
  projects: IProjectEntry[];
};

const Projects = ({ projects }: ProjectsProps) => {
  if (!projects?.length) return null;
  return (
    <Section id="projects" title="Projects">
      <ol class="-mt-4">
        {projects.map((p, i) => (
          <li key={i}>
            <ProjectCard {...p} />
          </li>
        ))}
      </ol>
      <p class="mt-6 text-xs text-slate-dark italic">
        Most repositories are private. Happy to walk through any of these on a call.
      </p>
    </Section>
  );
};

export default Projects;
