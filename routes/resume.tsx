import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";

type ResumePageData = {
  markdown: string;
};

const PRINT_CSS = `
  .markdown-body {
    color: #0f172a;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, system-ui, sans-serif;
    line-height: 1.55;
    background: transparent;
  }
  .markdown-body h2 { font-size: 1.65rem; margin-top: 0; margin-bottom: 0.25rem; font-weight: 700; letter-spacing: -0.01em; color: #0f172a; }
  .markdown-body h3 { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-top: 1.5rem; margin-bottom: 0.75rem; padding-bottom: 0.4rem; border-bottom: 1px solid #e2e8f0; font-weight: 600; }
  .markdown-body h4 { font-size: 0.95rem; margin-top: 1.1rem; margin-bottom: 0.2rem; color: #0f172a; }
  .markdown-body p, .markdown-body li { font-size: 0.92rem; color: #334155; }
  .markdown-body strong { color: #0f172a; }
  .markdown-body em { color: #64748b; font-style: normal; font-family: ui-monospace, SFMono-Regular, monospace; font-size: 0.85em; }
  .markdown-body a { color: #047857; text-decoration: none; }
  .markdown-body a:hover { text-decoration: underline; }
  .markdown-body ul { margin-top: 0.4rem; padding-left: 1.1rem; }
  .markdown-body li { margin-bottom: 0.15rem; }
  .markdown-body hr { border: 0; border-top: 1px solid #e2e8f0; margin: 1.5rem 0; }

  @media print {
    .no-print { display: none !important; }
    body { background: white !important; }
    .resume-paper { box-shadow: none !important; border: 0 !important; padding: 0 !important; max-width: none !important; }
    .markdown-body h3 { break-after: avoid; }
    .markdown-body h4 { break-after: avoid; }
    .markdown-body li, .markdown-body p { break-inside: avoid; }
    @page { margin: 0.6in; }
  }
`;

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
        <title>Résumé · Ritesh Firodiya</title>
        <meta
          name="description"
          content="Resume of Ritesh Firodiya — Engineering Lead, Full-Stack Engineer, AI / Agent tooling."
        />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      </Head>
      <main class="min-h-screen bg-ink-50 text-ink-900">
        {/* Toolbar — hidden when printing */}
        <div class="no-print sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-ink-200">
          <div class="max-w-3xl mx-auto px-4 lg:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
            <a
              href="/"
              class="text-sm text-ink-600 hover:text-ink-900 inline-flex items-center gap-1"
            >
              <span aria-hidden="true">←</span> Back
            </a>
            <div class="flex items-center gap-2">
              <a
                href="javascript:window.print()"
                class="text-sm font-medium px-3 py-1.5 rounded-md border border-ink-200 text-ink-700 hover:bg-ink-50"
              >
                Print / Save as PDF
              </a>
              <a
                href="/resume.pdf"
                download
                class="text-sm font-medium px-3 py-1.5 rounded-md border border-ink-200 text-ink-700 hover:bg-ink-50"
              >
                PDF
              </a>
              <a
                href="/resume.md"
                download
                class="text-sm font-medium px-3 py-1.5 rounded-md text-ink-500 hover:text-ink-900 hover:bg-ink-50"
              >
                .md
              </a>
            </div>
          </div>
        </div>

        {/* Letter-paper container */}
        <div class="py-8 lg:py-12 px-4">
          <article class="resume-paper max-w-3xl mx-auto bg-white border border-ink-200 rounded-xl shadow-sm px-8 py-10 lg:px-12 lg:py-14">
            <div
              class="markdown-body"
              dangerouslySetInnerHTML={{ __html: render(data.markdown) }}
            />
          </article>
        </div>
      </main>
    </>
  );
}
