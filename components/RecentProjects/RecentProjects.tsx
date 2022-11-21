import Card from "@/layout/Card.tsx";
import Project from "./Project.tsx";
import { IProject } from "@/utils/github.ts";

type RecentProjects = {
  username: string;
  total: number;
  projects: IProject[];
};

const RecentProjects = ({ projects, username }: RecentProjects) => {
  return (
    <Card>
      <div className="p-4 card-body">
        <div className="mx-3 flex items-center justify-between mb-2">
          <h5 className="card-title">
            <span className="text-base-content opacity-70">
              Recent FOSS Projects
            </span>
          </h5>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="text-base-content opacity-50"
          >
            See All
          </a>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((item, index) => <Project key={index} {...item} />)}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RecentProjects;
