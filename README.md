# Civic Compass · Wadsworth, Ohio

A single-file civic companion app: election dates and deadlines, representative
cards with tap-to-call, a personal events list with recurrence, and a civic
action log with monthly tallies. All data lives on the device (localStorage);
backup/restore is built in under More.

## Files
- `index.html` — the entire app (v1.3)
- `sw.js` — offline cache. **CACHE name must match the app version on every deploy.**
- `manifest.json`, `icon-192.png`, `icon-512.png` — PWA install (Android install prompt; iOS uses the apple-touch-icon)

## Deploy
1. Create a public repo (e.g. `civiccompass`), upload all five files to the root.
2. Settings → Pages → deploy from `main` / root.
3. Open `https://motbuchanan.github.io/civiccompass/` on the phone. Android
   Chrome will offer install; iOS Safari: Share → Add to Home Screen.

## Update ritual (every change)
1. Bump `VERSION` in `index.html` (badge is the load-confirmation).
2. Bump `CACHE` in `sw.js` to the same version — installed phones never update otherwise.
3. Commit both together.

## Data refresh checklist (after Nov 3, 2026)
- `KEY_DATES` + `ELECTION_DAY` + `DATA_VERIFIED` in `index.html` (next: May 2027 primary or Nov 2027 general)
- Officials in `defaultReps()` if seats changed (note: user edits override defaults
  on her device — defaults only affect fresh installs / resets)
- The app shows "ask Mot for a date refresh" automatically once Election Day passes.
