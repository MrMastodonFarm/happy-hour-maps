# Building a new happy-hour map

The repeatable process for turning "happy hours near `<address>`" into a published
map that looks like the GAO one. Two things vary per map: the **content** (a
`data.js`) and, optionally, the **look**. Everything else is shared in `template/`.

## What a map is

```
maps/<city>/
  index.html   ← thin shell (copied from template/starter/, paths unchanged)
  data.js      ← all the content: masthead + venues (this is the real work)
```

`index.html` loads (in order): vendored Leaflet, `data.js`, then `template/app.js`,
which reads the global `window.DATA` and renders the masthead, the interactive map
with numbered pins, and the nearest-first findings list. Pins highlight their list
card and vice-versa; whatever is open **right now** (in `meta.tz`) gets a "now" badge.

## Steps

### 1. Research the venues (the part that needs judgment)
For the target address, find happy hours within ~10 minutes' walk. For each one,
open a **live source** — the venue's own site/menu is "verified"; an aggregator or
conflicting info is "check ahead" (`v: false`). Capture: name, street address, days
+ times, the actual deals (prices), a one-line vibe, URL, and any caveat. Note
places that **closed** or dropped happy hour for the appendix — it's what makes the
report trustworthy. Convert each time window to 24h decimal hours (4:30 PM → `16.5`)
and weekday numbers (Sun=0 … Sat=6).

### 2. Geocode the addresses
Put one venue per line as `Name | 123 Some St` in a file, then:

```bash
python3 scripts/geocode.py "Washington, DC" < addresses.txt
```

Prints `name<TAB>address<TAB>lat<TAB>lng`. Also geocode the anchor (origin) address.
Spot-check a couple against a real map — Nominatim is accurate to the address, not
the exact door, and occasionally picks the wrong match for a vague address.

### 3. Fill in `data.js`
```bash
cp -r template/starter maps/<city>
mv maps/<city>/data.example.js maps/<city>/data.js
```
Edit `data.js`: set `meta` (docno, title, dek, `tz`, `anchor` with its lat/lng,
optional `radiusMin` ring, optional `appendix` HTML) and one `spots` entry per venue
with its geocoded `lat`/`lng`. `walk` is optional — omit it and it's estimated from
straight-line distance to the anchor; keep hand-checked walk times when you have them.

### 4. Preview locally
```bash
python3 -m http.server 8791 --bind 0.0.0.0    # from the repo root
# open http://<box-ip>:8791/maps/<city>/
```
Check: pins land on the right blocks, the anchor is correct, times/deals read right,
dark mode looks OK (toggle your OS theme). `scripts/shoot.py <url> <out.png>` grabs a
headless screenshot if you want a quick visual check.

### 5. Add it to the landing page
Add a card to the root `index.html` grid pointing at `maps/<city>/`.

### 6. Publish
Commit and push to the `happy-hour-maps` repo (GitHub Pages serves `main` at root).
Live URL: `https://mrmastodonfarm.github.io/happy-hour-maps/maps/<city>/`. Pages
builds take a minute or two — load the URL and confirm before sharing.

## Updating an existing map
Edit that map's `data.js` (change deals, add/remove a venue, flip `v`), bump the
`Field-verified` date in `meta.eyebrow`, commit, push. No rebuild step.

## Notes
- **Tiles** are CARTO light/dark (keyless, muted to match the paper look). The tile
  layer swaps automatically with light/dark theme. To restyle a single map, override
  CSS variables in that map's `index.html` `<head>`.
- **Leaflet is vendored** in `template/vendor/leaflet/` (v1.9.4) — no CDN dependency.
- **The GAO hero map** (`maps/gao/`) is a hand-drawn schematic SVG, not Leaflet — it's
  a self-contained one-off kept as the flagship. New maps use the Leaflet template.
