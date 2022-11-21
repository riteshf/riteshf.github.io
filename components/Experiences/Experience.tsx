export interface ExperienceProps {
  time: string;
  position: string;
  company: string;
  companyLink: string;
}
const Experience = (
  { time, position, company, companyLink }: ExperienceProps,
) => {
  return (
    <li class="mb-5 ml-4">
      <div
        class="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
        style={{ left: "-4.5px" }}
      >
      </div>
      <div class="my-0.5 text-xs">{time}</div>
      <h3 class="font-semibold">{position}</h3>
      <div class="mb-4 font-normal">
        <a href={companyLink} target="_blank" rel="noreferrer">
          {company}
        </a>
      </div>
    </li>
  );
};

export default Experience;
