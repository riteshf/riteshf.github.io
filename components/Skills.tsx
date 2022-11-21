type SkillsPros = {
  skills: string[];
};
const Skills = ({ skills }: SkillsPros) => {
  return (
    <>
      {skills?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                <span className="text-base-content opacity-70">
                  Tech Stack
                </span>
              </h5>
            </div>
            <div className="p-3 flow-root">
              <div className="-m-1 flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="m-1 text-xs inline-flex items-center font-bold leading-sm px-3 py-1 badge-primary bg-opacity-90 rounded-full"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
