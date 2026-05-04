import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/mail.tsx";

type SidebarProps = {
  name: string;
  headline: string;
  tagline: string;
  github: string;
  linkedin: string;
  email: string;
  location?: string;
};

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const Sidebar = (
  { name, headline, tagline, github, linkedin, email, location }: SidebarProps,
) => {
  return (
    <aside class="lg:sticky lg:top-0 lg:max-h-screen lg:h-screen lg:py-24 lg:w-1/2 py-12 flex flex-col justify-between">
      <div>
        <h1 class="text-4xl sm:text-5xl font-bold tracking-tight text-slate-lightest leading-tight">
          {name}
        </h1>
        <p class="mt-3 text-xl sm:text-2xl font-medium text-slate-light leading-tight">
          {headline}
        </p>
        <p class="mt-4 max-w-md text-base text-slate leading-relaxed">
          {tagline}
        </p>
        {location && (
          <p class="mt-3 text-sm text-slate-dark font-mono">{location}</p>
        )}

        {/* Primary CTAs */}
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="/resume"
            class="group inline-flex items-center gap-1.5 px-4 py-2 border border-accent text-accent font-mono text-sm rounded hover:bg-accent-dim transition-colors"
          >
            View résumé
            <span aria-hidden="true" class="group-hover:translate-x-0.5 inline-block transition-transform">→</span>
          </a>
          <a
            href="/resume.pdf"
            download
            class="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-slate-light hover:text-accent transition-colors"
          >
            Download PDF
          </a>
        </div>

        {/* Nav — desktop only */}
        <nav class="hidden lg:block mt-16" aria-label="Section navigation">
          <ul class="space-y-3">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  class="group inline-flex items-center text-xs font-mono uppercase tracking-widest text-slate hover:text-slate-lightest transition-colors"
                >
                  <span class="inline-block h-px w-8 mr-4 bg-slate-dark group-hover:w-16 group-hover:bg-slate-lightest transition-all" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Get in touch — anchored to sidebar bottom */}
      <div class="mt-10 lg:mt-0">
        <h2 class="text-xs font-mono uppercase tracking-widest text-slate-lightest mb-2">
          Get in touch
        </h2>
        <p class="text-sm text-slate leading-relaxed max-w-md">
          Open to senior / staff IC and tech-lead roles, and to consulting on
          ambitious product builds. Email is fastest.
        </p>
        <a
          href={`mailto:${email}`}
          class="mt-3 inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline"
        >
          {email} <span aria-hidden="true">→</span>
        </a>

        <div class="mt-5 flex items-center gap-5">
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            class="text-slate hover:text-accent transition-colors"
          >
            <IconBrandGithub class="w-5 h-5" />
          </a>
          <a
            href={`https://www.linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            class="text-slate hover:text-accent transition-colors"
          >
            <IconBrandLinkedin class="w-5 h-5" />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            class="text-slate hover:text-accent transition-colors"
          >
            <IconMail class="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
