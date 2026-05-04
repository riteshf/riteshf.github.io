import { IEducation } from "@/utils/Education.ts";
import Section from "@/layout/Section.tsx";
import EducationItem from "./EducationItem.tsx";

type EducationProps = {
  education: IEducation[];
};

const Education = ({ education }: EducationProps) => {
  if (!education?.length) return null;
  return (
    <Section title="Education">
      <ol class="relative">
        {education.map((item, i) => (
          <EducationItem
            key={i}
            time={`${item.from} – ${item.to}`}
            degree={item.degree}
            institution={item.institution}
          />
        ))}
      </ol>
    </Section>
  );
};

export default Education;
