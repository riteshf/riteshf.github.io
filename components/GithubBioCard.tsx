import { asset } from "$fresh/runtime.ts";
import Card from "../layout/Card.tsx";

type GithubBioCardProps = {
  avatar_url: string;
  name: string;
  bio: string;
};
const GithubBioCard = (
  { avatar_url, name, bio }: GithubBioCardProps,
) => {
  return (
    <Card>
      <div className="grid place-items-center py-8">
        <div className="avatar opacity-90">
          <div
            className={"mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2"}
          >
            <img className="rounded-full" src={avatar_url} alt={name} />
          </div>
        </div>

        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            <span className="text-base-content opacity-70">
              {name}
            </span>
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono">
            {bio}
          </div>
        </div>
        <a
          href={"/resume.pdf"}
          target="_blank"
          className="btn btn-outline btn-sm text-xs mt-6 opacity-70"
          download
          rel="noreferrer"
        >
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            DOWNLOAD RESUME
          </button>
        </a>
      </div>
    </Card>
  );
};

export default GithubBioCard;
