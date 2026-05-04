import Card from "@/layout/Card.tsx";

type GithubBioCardProps = {
  avatar_url: string;
  name: string;
  bio: string;
  tagline?: string;
  summary?: string;
  location?: string;
};

const GithubBioCard = (
  { avatar_url, name, bio, tagline, summary, location }: GithubBioCardProps,
) => {
  return (
    <Card class="overflow-hidden">
      <div class="relative">
        <div class="h-24 bg-gradient-to-br from-accent-500 via-accent-600 to-ink-800" />
        <div class="px-6 pb-6 -mt-12">
          <img
            src={avatar_url}
            alt={name}
            loading="eager"
            class="w-24 h-24 rounded-full border-4 border-white shadow-md"
          />

          <div class="mt-4">
            <h1 class="text-2xl font-bold text-ink-900 leading-tight">{name}</h1>
            {tagline && (
              <p class="mt-1 text-sm font-medium text-ink-700">{tagline}</p>
            )}
            {location && (
              <p class="mt-1 text-xs text-ink-500 font-mono">{location}</p>
            )}
            {(summary || bio) && (
              <p class="mt-4 text-sm text-ink-600 leading-relaxed">
                {summary || bio}
              </p>
            )}
          </div>

          <div class="mt-5 flex flex-wrap items-center gap-2">
            <a
              href="/resume"
              class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-ink-900 text-white hover:bg-ink-800 transition-colors"
            >
              View résumé
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="/resume.pdf"
              download
              class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-ink-200 text-ink-700 hover:bg-ink-50 transition-colors"
            >
              Download PDF
            </a>
            <a
              href="/resume.md"
              download
              class="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg text-ink-500 hover:text-ink-900 hover:bg-ink-50 transition-colors"
            >
              .md
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GithubBioCard;
