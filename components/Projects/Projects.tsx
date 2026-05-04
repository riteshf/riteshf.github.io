import Section from "@/layout/Section.tsx";
import ProjectItem, { IProjectItem } from "./ProjectItem.tsx";

type ProjectsProps = {
  projects: IProjectItem[];
};

const Projects = ({ projects }: ProjectsProps) => {
  if (!projects?.length) return null;

  return (
    <Section title="Selected projects" meta="most repos private">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => <ProjectItem key={i} {...p} />)}
      </div>
    </Section>
  );
};

export default Projects;
