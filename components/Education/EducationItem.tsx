type EducationItemProps = {
  institution: string;
  degree: string;
  time: string;
};

const EducationItem = ({ time, degree, institution }: EducationItemProps) => {
  return (
    <li class="relative pl-6 pb-4 last:pb-0">
      <span class="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-ink-400" />
      <span class="absolute left-1 top-3 bottom-0 w-px bg-ink-200 last:hidden" />
      <div class="text-xs font-mono text-ink-500">{time}</div>
      <div class="mt-0.5 text-sm font-semibold text-ink-900">{degree}</div>
      <div class="mt-0.5 text-sm text-ink-700">{institution}</div>
    </li>
  );
};

export default EducationItem;
