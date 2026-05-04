import Card from "@/layout/Card.tsx";
import ProjectItem, { IProjectItem } from "./ProjectItem.tsx";

type ProjectsProps = {
  projects: IProjectItem[];
};

const Projects = ({ projects }: ProjectsProps) => {
  if (!projects?.length) return null;

  return (
    <Card>
      <div class="card-body">
        <div class="mx-3 flex items-baseline justify-between mb-2">
          <h2 class="card-title">
            <span class="text-base-content opacity-70">Selected Projects</span>
          </h2>
          <span class="text-xs text-gray-500">
            · most repos private
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
          {projects.map((p, i) => <ProjectItem key={i} {...p} />)}
        </div>
      </div>
    </Card>
  );
};

export default Projects;
