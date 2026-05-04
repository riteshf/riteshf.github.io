export type IExperienceEntry = {
  company: string;
  position: string;
  from: string;
  to: string;
  companyLink?: string;
  description?: string;
  tags?: string[];
};

const ExperienceCard = (
  { company, position, from, to, companyLink, description, tags }:
    IExperienceEntry,
) => {
  const companyEl = companyLink
    ? (
      <a
        href={companyLink}
        target="_blank"
        rel="noreferrer"
        class="hover:text-accent transition-colors"
      >
        {company}
      </a>
    )
    : <span>{company}</span>;

  return (
    <div class="group relative py-4 px-2 -mx-2 rounded-md transition-colors hover:bg-navy-light/30">
      <div class="flex items-baseline gap-3 flex-wrap">
        <h3 class="text-base font-semibold text-slate-lightest leading-snug flex-1 min-w-0">
          {position} <span class="text-accent">·</span> {companyEl}
        </h3>
        <span class="text-xs font-mono uppercase tracking-wider text-slate-dark whitespace-nowrap">
          {from} — {to}
        </span>
      </div>
      {description && (
        <p class="mt-2 text-sm text-slate leading-relaxed">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <ul class="mt-2 flex flex-wrap gap-1.5">
          {tags.map((t, i) => (
            <li
              key={i}
              class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-accent-dim text-accent"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceCard;
