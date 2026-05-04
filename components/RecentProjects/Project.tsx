import IconStar from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/star.tsx";
import IconFork from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/git-fork.tsx";

import { IProject } from "@/utils/github.ts";
import { languageColor } from "@/utils/colors.ts";

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
      href={html_url}
      target="_blank"
      rel="noreferrer"
      class="group block p-4 rounded-lg border border-ink-200 bg-white hover:border-ink-300 hover:shadow-sm transition-all"
    >
      <div class="flex flex-col h-full gap-3">
        <div>
          <h3 class="font-semibold text-sm text-ink-900 group-hover:text-accent-700 transition-colors">
            {name}
          </h3>
          {description && (
            <p class="mt-1 text-xs text-ink-500 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div class="flex items-center justify-between text-xs text-ink-500 mt-auto pt-2 border-t border-ink-100">
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1">
              <IconStar class="w-3 h-3" /> {stargazers_count}
            </span>
            <span class="flex items-center gap-1">
              <IconFork class="w-3 h-3" /> {forks_count}
            </span>
          </div>
          {language && (
            <span class="flex items-center gap-1.5">
              <span
                class="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: languageColor(language) }}
              />
              {language}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default Project;
