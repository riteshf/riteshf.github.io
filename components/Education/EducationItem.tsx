type EducationItemProps = {
  institution: string;
  degree: string;
  time: string;
};

const EducationItem = ({ time, degree, institution }: EducationItemProps) => {
  return (
    <li className="mb-5 ml-4">
      <div
        className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
        style={{ left: "-4.5px" }}
      >
      </div>
      <div className="my-0.5 text-xs">{time}</div>
      <h3 className="font-semibold">{degree}</h3>
      <div className="mb-4 font-normal">{institution}</div>
    </li>
  );
};

export default EducationItem;
