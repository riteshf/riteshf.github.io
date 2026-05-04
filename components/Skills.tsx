import Section from "@/layout/Section.tsx";

type SkillsMap = Record<string, string[]>;

type SkillsProps = {
  skills: SkillsMap | string[];
};

const toGroups = (skills: SkillsMap | string[]): SkillsMap => {
  if (Array.isArray(skills)) return { Skills: skills };
  return skills;
};

const Skills = ({ skills }: SkillsProps) => {
  const groups = toGroups(skills);
  if (!Object.keys(groups).length) return null;

  return (
    <Section title="Tech stack">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
        {Object.entries(groups).map(([group, items]) => (
          <div key={group}>
            <div class="text-xs font-semibold uppercase tracking-wider text-ink-500 mb-2">
              {group}
            </div>
            <div class="flex flex-wrap gap-1.5">
              {items.map((item, i) => (
                <span
                  key={i}
                  class="text-xs font-mono px-2 py-1 rounded-md bg-ink-50 border border-ink-100 text-ink-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
