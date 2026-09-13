# civic-compass — RETIRED / REDIRECT ONLY

This repo no longer hosts the app. It exists only to forward the old shared
link to the current home:

  https://motbuchanan.github.io/empower-compass/

- `index.html` — meta-refresh + JS redirect to empower-compass, with a manual
  "Open" button as fallback.
- `sw.js` — self-unregistering worker that clears the old cache and any
  previously-installed service worker, so people who installed the old version
  get moved over instead of being stuck on a cached copy.

Do NOT deploy app changes here. The real app lives in the `empower-compass`
repo. If you ever want to fully retire this, leave the redirect in place as
long as the old link might still be circulating.
