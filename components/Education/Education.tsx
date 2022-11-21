import { IEducation } from "@/utils/Education.ts";
import Card from "@/layout/Card.tsx";
import EducationItem from "./EducationItem.tsx";

type EducationProps = {
  education: IEducation[];
};

const Education = ({ education }: EducationProps) => {
  return (
    <>
      {education?.length !== 0 && (
        <Card>
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                <span className="text-base-content opacity-70">
                  Education
                </span>
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {education.map((item, index) => (
                  <EducationItem
                    key={index}
                    time={`${item.from} - ${item.to}`}
                    degree={item.degree}
                    institution={item.institution}
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

export default Education;
