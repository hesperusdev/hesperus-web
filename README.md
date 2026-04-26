# Hesperus Web

Standalone Next.js marketing site for Hesperus at `gethesperus.com`.

## Product Doc

- [Hesperus One-Pager v2.0 (Production)](docs/hesperus-one-pager-v2-production.md)

## Analytics

Set these public environment variables in Netlify or your local `.env.local` file to enable tracking:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` for Google Analytics 4
- `NEXT_PUBLIC_GTM_ID` for Google Tag Manager

If either variable is unset, that integration is skipped.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`

## Deploy

This repo is configured for Netlify with the Next.js plugin via `netlify.toml`.
