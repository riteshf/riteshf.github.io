# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

Public personal portfolio for Ritesh Firodiya, deployed to **Deno Deploy** at
https://riteshf.deno.dev/ via GitHub Actions on every push to `main`.

Stack: **Deno Fresh 1.1.2 + Preact + Twind**. No Node, no npm, no package.json.
Resume content (`data/resume.md`) is also rendered by the site at `/resume`.

## Commands

```bash
deno task start          # dev server with watch on routes/ and static/
deno fmt                 # format
deno check **/*.ts **/*.tsx  # type check (no dedicated task wired)
```

There is **no test suite, no lint task, no build script**. Deployment uploads
source directly via `denoland/deployctl@v1` (see
`.github/workflows/deploy.yml`).

## How the site is wired

- `main.ts` → boots Fresh with the Twind plugin
- `dev.ts` → watch-mode wrapper; **regenerates `fresh.gen.ts`** by scanning
  `routes/` and `islands/`
- `fresh.gen.ts` → **the route manifest. MUST be committed.** Adding a file
  under `routes/` does nothing in production until `deno task start` is run
  locally to regenerate this file.
- `routes/index.tsx` → home; fetches GitHub user + recent repos at request time
- `routes/resume.tsx` → reads `data/resume.md` and renders via `$gfm`
- `static/*` → served as-is at `/` (so `static/resume.md` is downloadable at
  `/resume.md`, `static/resume.pdf` at `/resume.pdf`)

## Data model (single source of truth)

`profile.json` drives everything that isn't a GitHub API response:

- `skills[]` — flat tag list shown in the Tech Stack card
- `experiences[]` — work history (Experience component)
- `education[]` — degrees (Education component)
- `projects[]` _(if added)_ — curated personal projects (most of mine are
  private)

Two legacy/unused fields exist in the codebase and should not be expanded:

- `skills.json` (root) — old technology catalog referenced only by the unused
  `experiences[5].projects.technologies` ID arrays inside `profile.json`. Keep
  flat `skills[]` instead.
- `components/GitIntroduction.tsx` — not imported by any route.

## Resume content rules

There are (historically) 3 copies of the resume markdown floating around. Treat
**`data/resume.md` as the single source of truth**. `static/resume.md` exists
only because the home-page download button links to `/resume.md` — keep them in
sync (or replace with a route handler later). The PDF lives at
`static/resume.pdf` and is served at `/resume.pdf`.

Do not re-introduce a copy at the repo root.

## Personal projects on a public site

Most projects under `../` (DwarSeva, Scrvio, Learning Platform, Codestar,
Aakalan, Charades-Bollywood, Chitragupt, Tic-Tac-Toe) are **private repos**.
Policy:

- OK to list them with stack + one-line outcome (they're already in
  `data/resume.md`).
- Do **not** link to source — link to the public artifact instead (Play Store,
  deno.dev, etc.) when one exists, otherwise no link.
- Do **not** paste excerpts of private code, infra config, secrets, or
  internal-only product details from `../` into this repo.

## Common gotchas

- Adding a route → must run `deno task start` once locally to regenerate
  `fresh.gen.ts`, then commit it. CI does **not** regenerate it.
- The home page hits the unauthenticated GitHub API — rate limit is 60/hr per
  IP. Don't add more API calls without caching.
- Twind config is currently empty (`twind.config.ts`). Many existing class names
  look like DaisyUI (`card`, `card-body`, `bg-base-100`) — they only render
  correctly because Twind happens to compile some of them as utilities. Prefer
  plain Tailwind utilities for new components.
- Imports use either `@/...` or relative paths inconsistently. `@/` is wired in
  `import_map.json` and is preferred for new code.

## Deploy

Push to `main` → `denoland/deployctl@v1` uploads to Deno Deploy project
`riteshf`. No staging environment.
