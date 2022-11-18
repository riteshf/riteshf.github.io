import { VNode } from "preact";

type ListItemProps = {
  title: string;
  value: string;
  icon: VNode;
  link?: string;
};
const ListItem = ({ icon, title, value, link }: ListItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="flex justify-start py-2 px-1 items-center"
    >
      <span className="w-2 m-2">{icon}</span>
      <div className="flex-grow font-medium px-2">{title}</div>
      <div
        className={`text-sm font-normal text-right mr-2 ml-3 ${
          link ? "truncate" : ""
        }`}
      >
        <div
          style={{
            wordBreak: "break-word",
          }}
        >
          {value}
        </div>
      </div>
    </a>
  );
};

export default ListItem;
