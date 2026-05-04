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
    </Section>
  );
};

export default Experience;
