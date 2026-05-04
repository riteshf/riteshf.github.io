import { IExperience } from "@/utils/experience.ts";
import Section from "@/layout/Section.tsx";
import Experience from "./Experience.tsx";

interface ExperiencesProps {
  experiences: IExperience[];
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  if (!experiences?.length) return null;
  return (
    <Section title="Experience">
      <ol class="relative">
        {experiences.map((e, i) => (
          <Experience
            key={i}
            time={`${e.from} – ${e.to}`}
            position={e.position}
            company={e.company}
            companyLink={e.companyLink || ""}
          />
        ))}
      </ol>
    </Section>
  );
};

export default Experiences;
