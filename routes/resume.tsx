import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";
import Card from "@/layout/Card.tsx";

type ResumePageData = {
  markdown: string;
};

export const handler: Handlers<ResumePageData> = {
  async GET(_req, ctx) {
    const markdown = await Deno.readTextFile("./data/resume.md");
    return ctx.render({ markdown });
  },
};

export default function ResumePage({ data }: PageProps<ResumePageData>) {
  return (
    <>
      <Head>
        <title>Resume · Ritesh Firodiya</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <main className="p-4 lg:p-10 bg-black-300">
        <div className="max-w-4xl mx-auto">
          <Card>
            <div
              class="p-6 markdown-body"
              dangerouslySetInnerHTML={{ __html: render(data.markdown) }}
            />
          </Card>
        </div>
      </main>
    </>
  );
}
