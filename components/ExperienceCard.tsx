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
  const headline = (
    <span class="text-slate-lightest">
      {position} <span class="text-accent">·</span>{" "}
      {companyLink
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
        : <span>{company}</span>}
    </span>
  );

  return (
    <div class="group relative grid grid-cols-12 gap-3 py-4 px-2 -mx-2 rounded-md transition-colors hover:bg-navy-light/30">
      <div class="col-span-12 sm:col-span-4 text-xs font-mono uppercase tracking-wider text-slate-dark pt-1">
        {from} — {to}
      </div>
      <div class="col-span-12 sm:col-span-8">
        <h3 class="text-base font-semibold leading-snug">{headline}</h3>
        {description && (
          <p class="mt-2 text-sm text-slate leading-relaxed">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <ul class="mt-3 flex flex-wrap gap-1.5">
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
    </div>
  );
};

export default ExperienceCard;
