# Updating Empower Compass — city officials & data

You do not need to know how to code. Everything you'd change lives in one
labeled block near the top of `index.html`, and updating is: edit the text,
save, re-upload the file to GitHub. That's it.

## The flags you'll see in the app
Cards with a gold dashed border and a "⚠ Check this before launch" or
"⚠ Name needed" banner are the ones we could not fully confirm from public
sources. They are your fastest path to launch — fill or confirm each one.

If your group already keeps an officials roster (a spreadsheet, a Google
Doc, the county party's list), most of these are copy-paste.

## What each flag means
- **"⚠ Check this before launch"** — we found a name but want your team to
  confirm it's current, or the framing needs your call (e.g. Brunswick's
  council is officially nonpartisan).
- **"⚠ Name needed" / "Phone needed"** — that specific field is blank.
  We left the office in place so you know the seat exists.

## Two ways to update

### 1. In the app (quick, per phone — good for personal notes)
Tap the pencil on any card, type, Save. NOTE: this only changes the app on
THAT phone. Use it for your own talking points. To change what everyone sees,
use method 2.

### 2. In the file (the real update — changes it for everyone)
1. Open `index.html` in the `empower-compass` repo on GitHub, click the
   pencil (Edit).
2. Find the block that starts with `var CITIES = {` near the top.
3. Each official looks like this:
   `{id:'m-w4', name:'', office:'Council · Ward 4', phone:'', email:'', web:'...', notes:'...', need:'name'},`
   - Put the name between the `name:''` quotes.
   - Add phone/email the same way.
   - **Delete** the `need:'name'` part (and the comma before it) to clear the flag.
   - For a "Check this" card, delete `verify:true,` once confirmed.
4. Scroll up and change the version line (`var VERSION = 'EM 1.1 ...'`) — bump
   the number so phones know to refresh (e.g. `EM 1.2`).
5. Also bump `CACHE` in `sw.js` to match (e.g. `empower-compass-em1.2`).
6. Commit. Live in a minute.

## After the November 2026 election
Update `KEY_DATES`, `ELECTION_DAY`, and `DATA_VERIFIED` (all near the top) for
the next election, and confirm officials in `CITIES` and `SHARED_SECTIONS`.

## Who maintains what
- **Your team** owns the content: officials, links, scripts, event dates.
- **Mot** stands behind the build: if something breaks or misbehaves, that's
  his to fix. Content that's simply out of date is a quick edit on your side
  using the steps above.

Questions on any of this: motbuchanan.com
