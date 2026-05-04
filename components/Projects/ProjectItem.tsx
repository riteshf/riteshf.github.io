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
  if (!status) return "bg-gray-200 text-gray-700";
  const s = status.toLowerCase();
  if (s.includes("closed testing") || s.includes("validation")) {
    return "bg-yellow-100 text-yellow-800";
  }
  if (s.includes("live") || s.includes("production")) {
    return "bg-green-100 text-green-800";
  }
  return "bg-blue-100 text-blue-800";
};

const ProjectItem = (
  { name, tagline, description, stack, status, link, private: isPrivate }:
    IProjectItem,
) => {
  const inner = (
    <div class="border border-gray-200 rounded-lg p-4 h-full flex flex-col hover:shadow-md transition-shadow bg-white">
      <div class="flex items-start justify-between gap-2 mb-1">
        <h3 class="font-semibold text-gray-900">{name}</h3>
        <div class="flex items-center gap-1 flex-shrink-0">
          {status && (
            <span
              class={`text-xs uppercase tracking-wide px-2 py-0.5 rounded ${
                statusClasses(status)
              }`}
            >
              {status}
            </span>
          )}
          {isPrivate && (
            <span class="text-xs uppercase tracking-wide px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              private
            </span>
          )}
        </div>
      </div>
      <div class="text-sm text-gray-700 mb-2 font-medium">{tagline}</div>
      <p class="text-sm text-gray-600 mb-3 flex-grow">{description}</p>
      <div class="flex flex-wrap gap-1">
        {stack.map((s, i) => (
          <span
            key={i}
            class="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700"
          >
            {s}
          </span>
        ))}
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
  return <div class="h-full">{inner}</div>;
};

export default ProjectItem;
