# Yoruba TOEFL-style Test Platform

Next.js 15 + Payload CMS 3 (deploys on Vercel). No-code admin, fully Yoruba-language
test-taking frontend. No applicant login yet — anyone with the link can take an active test.

## Structure

- `src/collections/` — the entire content model, editable via the admin GUI at `/admin`:
  - **Tests** — a named exam, has an `active` toggle to control what's publicly visible.
  - **Sections** — Reading / Listening / Speaking / Writing, each belongs to a Test, with
    Yoruba instructions, order, and a time limit.
  - **Items** — the questions. One schema covers both:
    - `multiple_choice` — for Reading/Listening: passage or audio + question + options.
    - `prompt` — for Speaking/Writing: a prompt + response time limit.
  - **Media** — audio file uploads for Listening items.
  - **Users** — admin accounts (not applicant accounts).
- `src/app/(payload)/` — Payload's admin panel and API routes. Boilerplate, don't edit
  unless you're customizing Payload itself.
- `src/app/(frontend)/` — the public, all-Yoruba test-taking site:
  - `/` — lists active tests.
  - `/idanwo/[testId]` — takes the test (sections load server-side, `TestRunner`
    client component handles timers/navigation/answers in the browser).
- `src/components/TestRunner.tsx` — all the test-taking UI logic and Yoruba strings.

## Local setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in:
   - `DATABASE_URL` — a Postgres connection string (Vercel Postgres, Neon, or Supabase all work)
   - `PAYLOAD_SECRET` — any long random string
3. Run `npx payload migrate` once to create the database tables (this repo ships with
   `src/migrations/` already generated from the collections in `src/collections/` — you
   don't need to write these by hand).
4. `npm run dev`
5. Go to `http://localhost:3000/admin` and create your first admin user (Payload prompts
   for this automatically on first run).
6. In the admin, create a **Test**, then a few **Sections** under it (Reading, Listening,
   Speaking, Writing), then **Items** under each section. Flip the Test's `active` checkbox
   on when ready.
7. Visit `http://localhost:3000` to see it live in Yoruba.

## If you add or change a field later

Whenever you change a collection's fields in `src/collections/`, generate a new migration
so the database schema stays in sync:

```bash
npx payload migrate:create
```

Commit the new file(s) it creates under `src/migrations/`, then push — the build step
below applies them automatically on deploy.

## Deploying to Vercel

1. Push this repo to GitHub and import it into Vercel.
2. Add a Postgres database (Vercel Postgres or Neon integration) and copy its connection
   string into the `DATABASE_URL` environment variable in Vercel's project settings (the
   app also accepts `DATABASE_URI` if that's the name your provider uses instead).
3. Add `PAYLOAD_SECRET` as an environment variable too.
4. `npm run build` runs `payload migrate` before `next build`, so your database tables get
   created/updated automatically on every deploy — no manual migration step needed.
5. For audio uploads to survive (Vercel's filesystem is read-only/ephemeral in production):
   - Add a Vercel Blob store, set `BLOB_READ_WRITE_TOKEN`.
   - Uncomment the `vercelBlobStorage` plugin block in `src/payload.config.ts`.
6. Deploy. First visit to `/admin` lets you create the admin user in production too.

## What's intentionally not built yet

- Applicant login/accounts (you said to skip this for now).
- Persisting/scoring Writing and Speaking responses (currently shown as a "someone needs
  to grade this by hand" note — the `rubricNotes` field on prompt Items is there for that).
- Audio recording in the browser for Speaking (placeholder currently).

These are natural next steps once the core admin/content flow feels right.
