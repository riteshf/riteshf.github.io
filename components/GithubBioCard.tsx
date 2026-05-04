import Card from "@/layout/Card.tsx";

type GithubBioCardProps = {
  avatar_url: string;
  name: string;
  bio: string;
  tagline?: string;
};

const GithubBioCard = (
  { avatar_url, name, bio, tagline }: GithubBioCardProps,
) => {
  return (
    <Card>
      <div class="grid place-items-center py-6 px-4">
        <div class="avatar opacity-95">
          <div class="mb-6 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              class="rounded-full"
              src={avatar_url}
              alt={name}
              loading="eager"
            />
          </div>
        </div>

        <div class="text-center mx-auto">
          <h1 class="font-bold text-2xl text-gray-900">{name}</h1>
          {tagline && (
            <div class="mt-2 text-sm text-gray-700 font-medium">{tagline}</div>
          )}
          {bio && (
            <div class="mt-3 text-gray-600 font-mono text-sm">{bio}</div>
          )}
        </div>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
          <a
            href="/resume"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            View résumé
          </a>
          <a
            href="/resume.pdf"
            download
            class="focus:outline-none text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Download PDF
          </a>
          <a
            href="/resume.md"
            download
            class="focus:outline-none text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2"
          >
            Markdown
          </a>
        </div>
      </div>
    </Card>
  );
};

export default GithubBioCard;
