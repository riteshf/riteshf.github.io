import IconLock from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/lock.tsx";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/external-link.tsx";

export type IProjectEntry = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status?: string;
  link?: string;
  private?: boolean;
};

const statusBadge = (status?: string) => {
  if (!status) return null;
  const s = status.toLowerCase();
  let cls = "bg-slate-dark/30 text-slate-light";
  if (s.includes("closed testing") || s.includes("validation")) {
    cls = "bg-amber-400/10 text-amber-300";
  } else if (s.includes("live") || s.includes("production")) {
    cls = "bg-accent-dim text-accent";
  }
  return (
    <span
      class={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${cls}`}
    >
      {status}
    </span>
  );
};

const ProjectCard = (
  { name, tagline, description, stack, status, link, private: isPrivate }:
    IProjectEntry,
) => {
  const titleEl = link
    ? (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
      >
        {name}
        <IconExternalLink class="w-4 h-4 opacity-70" />
      </a>
    )
    : <span>{name}</span>;

  return (
    <article class="group relative grid grid-cols-12 gap-3 py-5 px-2 -mx-2 rounded-md transition-colors hover:bg-navy-light/30">
      <div class="col-span-12 sm:col-span-4 pt-1">
        <div class="flex items-center gap-2 flex-wrap">
          {statusBadge(status)}
          {isPrivate && (
            <span
              title="Private repository"
              class="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-dark/30 text-slate"
            >
              <IconLock class="w-3 h-3" /> private
            </span>
          )}
        </div>
      </div>
      <div class="col-span-12 sm:col-span-8">
        <h3 class="text-base font-semibold text-slate-lightest leading-snug">
          {titleEl}
        </h3>
        <p class="mt-1 text-sm font-medium text-slate-light">{tagline}</p>
        <p class="mt-2 text-sm text-slate leading-relaxed">{description}</p>
        <ul class="mt-3 flex flex-wrap gap-1.5">
          {stack.map((s, i) => (
            <li
              key={i}
              class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent-dim text-accent"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;
