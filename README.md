# Next.js Landing Template

A reusable landing page starter built with Next.js 14, the App Router, and Tailwind CSS. Swap in client-specific copy, CTAs, and pricing by editing one content file—no layout changes needed.

## Quick start

```bash
npm install
npm run dev
```

The app runs on [http://localhost:3000](http://localhost:3000). Update content in `lib/landing-config.ts` and the UI will refresh instantly.

## Customize in minutes

- **Brand & navigation:** Set the logo text, tagline, and navigation anchors at the top of `landing-config.ts`.
- **Hero module:** Update the headline, subcopy, CTAs, and highlight bullets.
- **Sections:** Features, testimonials, pricing, FAQs, and contact form all read from the same config file, so you can tailor velocity per client or wire up a CMS later.
- **Styling:** Tailwind classes power every section—extend utility classes or override them in `app/globals.css`.

## Included sections

- Responsive header with CTA
- Conversion-focused hero with stats card
- Feature grid and testimonial highlights
- Pricing cards with call-to-action buttons
- Expandable FAQ accordion
- Contact form and footer links

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS + PostCSS pipeline

Deploy wherever you prefer—Vercel, Netlify, or your own infrastructure. Add integrations (forms, analytics, CMS) by extending the server components or API routes in `app/`.
