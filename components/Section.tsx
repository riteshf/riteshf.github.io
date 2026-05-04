import { ComponentChildren } from "preact";

type SectionProps = {
  id: string;
  title: string;
  children: ComponentChildren;
};

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section id={id} class="mb-20 scroll-mt-12">
      <h2 class="sticky top-0 z-10 -mx-6 px-6 py-4 mb-6 backdrop-blur bg-navy/75 lg:hidden text-xs font-bold tracking-widest text-slate-lightest uppercase">
        {title}
      </h2>
      <h2 class="hidden lg:block text-xs font-bold tracking-widest text-slate-lightest uppercase mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
