# Harikrushn Gajjar — Portfolio

React + TypeScript site. Same visual design as before. Edit copy in one file.

## Edit the site

Change text, jobs, projects, skills, and contact in:

`src/data/site.ts`

Logos and the resume PDF live in `public/assets/`.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Publish on GitHub Pages

1. Push this repo to GitHub.
2. Settings → Pages → **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` builds and deploys on every push to `main`.

If the repo is `yourusername.github.io`, the site is `https://yourusername.github.io`.
If the repo is `Portfolio`, the site is `https://yourusername.github.io/Portfolio`.
