import Section from "./Section.tsx";

type AboutProps = {
  paragraphs: string[];
  currently?: string;
};

const About = ({ paragraphs, currently }: AboutProps) => {
  return (
    <Section id="about" title="About">
      <div class="space-y-4 text-slate leading-relaxed">
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        {currently && (
          <p class="text-slate-light pt-2 border-l-2 border-accent pl-4">
            {currently}
          </p>
        )}
      </div>
    </Section>
  );
};

export default About;
