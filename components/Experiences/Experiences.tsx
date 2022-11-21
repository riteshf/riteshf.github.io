import { IExperience } from "@/utils/experience.ts";
import Card from "../../layout/Card.tsx";
import Experience from "./Experience.tsx";

interface ExperiencesProps {
  experiences: IExperience[];
}
const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <>
      {experiences?.length !== 0 && (
        <Card>
          <div class="card-body">
            <div class="mx-3">
              <h5 class="card-title">
                <span class="text-base-content opacity-70">
                  Experience
                </span>
              </h5>
            </div>
            <div class="text-base-content text-opacity-60">
              <ol class="relative border-l border-base-600  my-2 mx-4">
                {experiences.map((experience, index) => (
                  <Experience
                    key={index}
                    time={`${experience.from} - ${experience.to}`}
                    position={experience.position}
                    company={experience.company}
                    companyLink={experience.companyLink
                      ? experience.companyLink
                      : ""}
                  />
                ))}
              </ol>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Experiences;
