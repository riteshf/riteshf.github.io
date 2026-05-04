import { ComponentChildren } from "preact";

type CardProps = {
  children: ComponentChildren;
  class?: string;
};

const Card = ({ children, class: extra = "" }: CardProps) => {
  return (
    <div
      class={`bg-white border border-ink-200 rounded-xl shadow-sm ${extra}`}
    >
      {children}
    </div>
  );
};

export default Card;
