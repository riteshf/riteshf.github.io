export interface ExperienceProps {
  time: string;
  position: string;
  company: string;
  companyLink: string;
}

const Experience = (
  { time, position, company, companyLink }: ExperienceProps,
) => {
  const companyEl = companyLink
    ? (
      <a
        href={companyLink}
        target="_blank"
        rel="noreferrer"
        class="text-ink-700 hover:text-accent-700 hover:underline"
      >
        {company}
      </a>
    )
    : <span class="text-ink-700">{company}</span>;

  return (
    <li class="relative pl-6 pb-5 last:pb-0">
      <span class="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-accent-500" />
      <span class="absolute left-1 top-3 bottom-0 w-px bg-ink-200 last:hidden" />
      <div class="text-xs font-mono text-ink-500">{time}</div>
      <div class="mt-0.5 text-sm font-semibold text-ink-900">{position}</div>
      <div class="mt-0.5 text-sm">{companyEl}</div>
    </li>
  );
};

export default Experience;
