import Section from "./Section.tsx";
import ProjectCard, { IProjectEntry } from "./ProjectCard.tsx";

type ProjectsProps = {
  projects: IProjectEntry[];
  contactEmail: string;
};

const Projects = ({ projects, contactEmail }: ProjectsProps) => {
  if (!projects?.length) return null;
  return (
    <Section id="projects" title="Projects">
      <ol class="-mt-4">
        {projects.map((p, i) => (
          <li key={i}>
            <ProjectCard {...p} contactEmail={contactEmail} />
          </li>
        ))}
      </ol>
      <p class="mt-6 text-xs text-slate-dark italic">
        Most repositories are private. Tap{" "}
        <span class="font-mono">Contribute / learn more</span>{" "}
        on any project to start a conversation.
      </p>
    </Section>
  );
};

export default Projects;
