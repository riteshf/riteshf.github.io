import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";
import IconLocation from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/location.tsx";
import IconBuildingSkyscraper from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/building-skyscraper.tsx";
import IconGlobe from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/globe.tsx";
import IconPhoneCall from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/phone-call.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/mail.tsx";

import Section from "@/layout/Section.tsx";
import { VNode } from "preact";

type SocialInfoCardProps = {
  name: string;
  github: string;
  location?: string;
  company?: string;
  linkedin?: string;
  website?: string;
  phone?: string;
  email?: string;
};

type Row = {
  label: string;
  icon: VNode;
  value: string;
  link?: string;
};

const Item = ({ label, icon, value, link }: Row) => {
  const content = (
    <div class="flex items-center gap-3 py-2.5 group">
      <span class="w-8 h-8 flex items-center justify-center rounded-md bg-ink-50 text-ink-500 group-hover:bg-accent-50 group-hover:text-accent-600 transition-colors">
        {icon}
      </span>
      <div class="flex-1 min-w-0">
        <div class="text-xs uppercase tracking-wider text-ink-400">{label}</div>
        <div class="text-sm text-ink-800 truncate">{value}</div>
      </div>
    </div>
  );
  return link
    ? (
      <a href={link} target="_blank" rel="noreferrer" class="block">
        {content}
      </a>
    )
    : content;
};

const SocialInfoCard = (props: SocialInfoCardProps) => {
  const rows: Row[] = [
    {
      label: "GitHub",
      icon: <IconBrandGithub class="w-4 h-4" />,
      value: props.github,
      link: `https://github.com/${props.github}`,
    },
  ];
  if (props.location) {
    rows.push({
      label: "Based in",
      icon: <IconLocation class="w-4 h-4" />,
      value: props.location,
    });
  }
  if (props.company) {
    rows.push({
      label: "Company",
      icon: <IconBuildingSkyscraper class="w-4 h-4" />,
      value: props.company,
    });
  }
  if (props.linkedin) {
    rows.push({
      label: "LinkedIn",
      icon: <IconBrandLinkedin class="w-4 h-4" />,
      value: props.linkedin,
      link: `https://www.linkedin.com/in/${props.linkedin}`,
    });
  }
  if (props.website) {
    rows.push({
      label: "Website",
      icon: <IconGlobe class="w-4 h-4" />,
      value: props.website.replace(/^https?:\/\//, "").replace(/\/$/, ""),
      link: props.website,
    });
  }
  if (props.phone) {
    rows.push({
      label: "Phone",
      icon: <IconPhoneCall class="w-4 h-4" />,
      value: props.phone,
      link: `tel:${props.phone}`,
    });
  }
  if (props.email) {
    rows.push({
      label: "Email",
      icon: <IconMail class="w-4 h-4" />,
      value: props.email,
      link: `mailto:${props.email}`,
    });
  }

  return (
    <Section title="Get in touch">
      <div class="-my-2.5">
        {rows.map((r, i) => <Item key={i} {...r} />)}
      </div>
    </Section>
  );
};

export default SocialInfoCard;
