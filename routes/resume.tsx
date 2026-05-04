import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { CSS, render } from "$gfm";

import profile from "@/profile.json" with { type: "json" };

type ResumePageData = {
  markdown: string;
};

const PRINT_CSS = `
  .resume-body {
    color: #0f172a;
    font-family: "Inter", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, system-ui, sans-serif;
    line-height: 1.45;
    background: transparent;
  }
  .resume-body h2 { font-size: 1.4rem; margin-top: 0; margin-bottom: 0.15rem; font-weight: 700; letter-spacing: -0.01em; color: #0f172a; }
  .resume-body h3 { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; margin-top: 1rem; margin-bottom: 0.4rem; padding-bottom: 0.25rem; border-bottom: 1px solid #e2e8f0; font-weight: 600; }
  .resume-body h4 { font-size: 0.875rem; margin-top: 0.7rem; margin-bottom: 0.1rem; color: #0f172a; }
  .resume-body p, .resume-body li { font-size: 0.825rem; color: #334155; margin: 0; }
  .resume-body p { margin-bottom: 0.3rem; }
  .resume-body strong { color: #0f172a; }
  .resume-body em { color: #64748b; font-style: normal; font-family: ui-monospace, SFMono-Regular, monospace; font-size: 0.85em; }
  .resume-body a { color: #047857; text-decoration: none; }
  .resume-body a:hover { text-decoration: underline; }
  .resume-body ul { margin-top: 0.2rem; margin-bottom: 0.3rem; padding-left: 1rem; }
  .resume-body li { margin-bottom: 0.1rem; }
  .resume-body hr { border: 0; border-top: 1px solid #e2e8f0; margin: 1rem 0; }

  @media print {
    .no-print { display: none !important; }
    body { background: white !important; }
    .resume-paper { box-shadow: none !important; border: 0 !important; padding: 0 !important; max-width: none !important; }
    .resume-body { line-height: 1.4; }
    .resume-body p, .resume-body li { font-size: 0.78rem; }
    .resume-body h2 { font-size: 1.25rem; }
    .resume-body h3 { font-size: 0.7rem; margin-top: 0.7rem; }
    .resume-body h4 { font-size: 0.82rem; margin-top: 0.45rem; }
    .resume-body h3, .resume-body h4 { break-after: avoid; }
    .resume-body li, .resume-body p { break-inside: avoid; }
    @page { margin: 0.45in; }
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
        <title>Résumé · {profile.name}</title>
        <meta
          name="description"
          content={`Resume of ${profile.name} — ${profile.headline} ${profile.tagline}`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: PRINT_CSS }} />
      </Head>
      <main class="min-h-screen bg-navy text-slate-light">
        {/* Toolbar — hidden when printing */}
        <div class="no-print sticky top-0 z-10 bg-navy/85 backdrop-blur border-b border-navy-lightest">
          <div class="max-w-3xl mx-auto px-4 lg:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
            <a
              href="/"
              class="text-sm text-slate-light hover:text-accent inline-flex items-center gap-1.5 transition-colors"
            >
              <span aria-hidden="true">←</span> Back
            </a>
            <div class="flex items-center gap-2">
              <a
                href="javascript:window.print()"
                class="text-sm font-medium px-3 py-1.5 rounded border border-navy-lightest text-slate-light hover:border-accent hover:text-accent transition-colors"
              >
                Print / Save as PDF
              </a>
              <a
                href="/resume.pdf"
                download
                class="text-sm font-medium px-3 py-1.5 rounded bg-accent text-navy hover:bg-accent/90 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Letter-paper container */}
        <div class="py-8 lg:py-12 px-3">
          <article class="resume-paper max-w-3xl mx-auto bg-white rounded-lg shadow-2xl px-6 py-6 lg:px-12 lg:py-10">
            <div
              class="resume-body"
              dangerouslySetInnerHTML={{ __html: render(data.markdown) }}
            />
          </article>
        </div>
      </main>
    </>
  );
}
