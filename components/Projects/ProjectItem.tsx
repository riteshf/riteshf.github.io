export type IProjectItem = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status?: string;
  link?: string;
  private?: boolean;
};

const statusClasses = (status?: string) => {
  if (!status) return "bg-ink-100 text-ink-600";
  const s = status.toLowerCase();
  if (s.includes("closed testing") || s.includes("validation")) {
    return "bg-amber-50 text-amber-700 border border-amber-200";
  }
  if (s.includes("live") || s.includes("production")) {
    return "bg-accent-50 text-accent-700 border border-accent-200";
  }
  return "bg-ink-50 text-ink-600 border border-ink-200";
};

const ProjectItem = (
  { name, tagline, description, stack, status, link, private: isPrivate }:
    IProjectItem,
) => {
  const inner = (
    <div class="group h-full flex flex-col p-5 rounded-lg border border-ink-200 bg-white hover:border-ink-300 hover:shadow-md transition-all">
      <div class="flex items-start justify-between gap-3 mb-1">
        <h3 class="font-semibold text-ink-900 group-hover:text-accent-700 transition-colors">
          {name}
        </h3>
        {isPrivate && (
          <span
            title="Private repository"
            class="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded text-ink-400 border border-ink-200"
          >
            private
          </span>
        )}
      </div>
      <div class="text-sm font-medium text-ink-700 mb-2">{tagline}</div>
      <p class="text-sm text-ink-500 mb-4 flex-grow leading-relaxed">
        {description}
      </p>
      <div class="flex items-center justify-between gap-2">
        <div class="flex flex-wrap gap-1">
          {stack.slice(0, 6).map((s, i) => (
            <span
              key={i}
              class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-ink-50 text-ink-600"
            >
              {s}
            </span>
          ))}
        </div>
        {status && (
          <span
            class={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded flex-shrink-0 ${
              statusClasses(status)
            }`}
          >
            {status}
          </span>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer" class="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
};

export default ProjectItem;
