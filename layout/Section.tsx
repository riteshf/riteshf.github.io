import { ComponentChildren } from "preact";
import Card from "./Card.tsx";

type SectionProps = {
  title: string;
  meta?: string;
  children: ComponentChildren;
  class?: string;
};

const Section = ({ title, meta, children, class: extra = "" }: SectionProps) => {
  return (
    <Card class={extra}>
      <div class="px-6 pt-5 pb-2 flex items-baseline justify-between border-b border-ink-100">
        <h2 class="text-sm font-semibold uppercase tracking-wider text-ink-500">
          {title}
        </h2>
        {meta && <span class="text-xs text-ink-400">{meta}</span>}
      </div>
      <div class="px-6 py-5">{children}</div>
    </Card>
  );
};

export default Section;
