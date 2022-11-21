import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-linkedin.tsx";
import IconLocation from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/location.tsx";
import IconBuildingSkyscraper from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/building-skyscraper.tsx";
import IconGlobe from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/globe.tsx";
import IconPhoneCall from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/phone-call.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/mail.tsx";

import ListItem from "./ListItem.tsx";
import Card from "../layout/Card.tsx";

type GithubInfoCardProps = {
  name: string;
  location?: string;
  company?: string;
  linkedin?: string;
  website?: string;
  phone?: string;
  email?: string;
};
const GithubInfoCard = (props: GithubInfoCardProps) => {
  const data: any = [
    {
      title: "Github",
      icon: <IconBrandGithub className="mr-2" />,
      value: props.name,
      link: `https://github.com/${props.name}`,
    },
  ];

  if (props.location) {
    data.push({
      title: "Based in",
      icon: <IconLocation className="mr-2" />,
      value: props.location,
    });
  }
  if (props.company) {
    data.push({
      title: "Company",
      icon: <IconBuildingSkyscraper className="mr-2" />,
      value: props.company,
    });
  }
  if (props.linkedin) {
    data.push({
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="mr-2" />,
      value: props.linkedin,
      link: `https://www.linkedin.com/in/${props.linkedin}`,
    });
  }
  if (props.website) {
    data.push({
      title: "Website",
      icon: <IconGlobe className="mr-2" />,
      value: props.website,
      link: props.website,
    });
  }
  if (props.phone) {
    data.push({
      title: "Phone",
      icon: <IconPhoneCall className="mr-2" />,
      value: props.phone,
      link: `tel:${props.phone}`,
    });
  }
  if (props.email) {
    data.push({
      title: "Email",
      icon: <IconMail className="mr-2" />,
      value: props.email,
      link: `mailto:${props.email}`,
    });
  }

  return (
    <Card>
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {data.map((row: any) => <ListItem {...row} />)}
        </div>
      </div>
    </Card>
  );
};

export default GithubInfoCard;
