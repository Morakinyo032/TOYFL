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
