import IconFolder from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/folder.tsx";
import IconStar from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/star.tsx";
import IconFork from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/git-fork.tsx";

import { IProject } from "@/utils/github.ts";
import { languageColor } from "../../utils/colors.ts";

const Project = ({
  html_url,
  name,
  description,
  stargazers_count,
  forks_count,
  language,
}: IProject) => {
  return (
    <a
      className="card shadow-lg compact bg-base-100 cursor-pointer"
      href={html_url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex justify-between flex-col p-8 h-full w-full">
        <div>
          <div className="flex items-center opacity-60">
            <IconFolder className="mr-0.5" />
            <span>
              <h5 className="card-title text-lg text-base-content">
                {name}
              </h5>
            </span>
          </div>
          <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
            {description}
          </p>
        </div>
        <div className="flex justify-between text-sm text-base-content text-opacity-60">
          <div className="flex flex-grow">
            <span className="mr-3 flex items-center">
              <IconStar className="mr-0.5" />
              <span>{stargazers_count}</span>
            </span>
            <span className="flex items-center">
              <IconFork className="mr-0.5" />
              <span>{forks_count}</span>
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-1 opacity-60"
                style={{ backgroundColor: languageColor(language) }}
              />
              <span>{language}</span>
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Project;
