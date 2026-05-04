import Section from "./Section.tsx";
import ExperienceCard, { IExperienceEntry } from "./ExperienceCard.tsx";

type ExperienceProps = {
  experiences: IExperienceEntry[];
};

const Experience = ({ experiences }: ExperienceProps) => {
  if (!experiences?.length) return null;
  return (
    <Section id="experience" title="Experience">
      <ol class="-mt-4">
        {experiences.map((e, i) => (
          <li key={i}>
            <ExperienceCard {...e} />
          </li>
        ))}
      </ol>
      <div class="mt-6">
        <a
          href="/resume"
          class="group inline-flex items-baseline gap-1 text-sm font-medium text-slate-lightest hover:text-accent transition-colors"
        >
          View full résumé
          <span aria-hidden="true" class="group-hover:translate-x-0.5 inline-block transition-transform">→</span>
        </a>
      </div>
    </Section>
  );
};

export default Experience;
