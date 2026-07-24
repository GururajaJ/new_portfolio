# Portfolio

A modern, responsive developer portfolio built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS. It ships with light/dark mode, smooth scroll-reveal animations, and a single content file so you can make it yours without touching component code.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Making it yours

All editable content lives in **one file**: [`src/config/portfolio.ts`](src/config/portfolio.ts).

Update it with your own details:

- `name`, `role`, `tagline`, `about`, `location`, `email`
- `socials` — your GitHub / LinkedIn / etc. links
- `skills` — grouped by category
- `projects` — title, description, tags, and optional `liveUrl` / `repoUrl`
- `experience` — roles, companies, and dates (leave the array empty to hide the section)
- `resumeUrl` — path to a PDF in `public/` (or a URL); leave `""` to hide the download button
- `stats`, `education`, `certifications`, `achievements` — extra content sections

The rest of the site updates automatically. No other files need to change for typical customization.

## Sections

`Hero → About → Skills → Projects → Experience → Education → Certifications & Achievements → Contact → Footer`, each defined as a component in `src/components/`.

## Résumé download

The hero, navbar, and About card all expose a **Download résumé** button that
serves the file at `resumeUrl` (a PDF placed in `public/`).

## Contact form & email notifications

The Contact section has a form that POSTs to the `/api/contact` route handler
(`src/app/api/contact/route.ts`), which emails the submission to you via SMTP
using [nodemailer](https://nodemailer.com).

Configure SMTP by copying `.env.example` to `.env.local` (locally) or setting the
same variables in your host (e.g. Vercel → Settings → Environment Variables):

```
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM
```

For Gmail, enable 2FA and create an **App Password**, then use it as `SMTP_PASS`.
Without these set, the form degrades gracefully to a "email isn't configured"
message and the `mailto:` link still works.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Deploy

The easiest way to deploy is [Vercel](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for other options.
