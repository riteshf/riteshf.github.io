import Section from "./Section.tsx";

type ContactProps = {
  email: string;
};

const Contact = ({ email }: ContactProps) => {
  return (
    <Section id="contact" title="Get in touch">
      <p class="text-slate leading-relaxed">
        I'm open to senior / staff IC and tech-lead roles, and to consulting on
        ambitious product builds. The fastest way to reach me is email.
      </p>
      <a
        href={`mailto:${email}`}
        class="mt-6 inline-flex items-center gap-2 px-5 py-3 border border-accent text-accent font-mono text-sm rounded hover:bg-accent-dim transition-colors"
      >
        Say hi → {email}
      </a>
    </Section>
  );
};

export default Contact;
