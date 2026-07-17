/* Real walking-route times from the anchor to every spot in a map's data.js,
   via OSRM's public foot router (the one openstreetmap.org uses). Much more
   accurate than straight-line distance where rail lines / highways force detours.

   Usage:  node scripts/walktimes.mjs maps/<city>/data.js
   Prints each spot's routed walk minutes (raw + a ~+10% calibration toward
   Google's slightly more conservative numbers), sorted nearest-first, so you can
   set each spot's `walk` and decide the cutoff. Be polite: one call per run. */
const path = process.argv[2];
if (!path) { console.error("usage: node scripts/walktimes.mjs maps/<city>/data.js"); process.exit(1); }
global.window = {};
await import("file://" + process.cwd() + "/" + path.replace(/^\.\//, ""));
const D = window.DATA, a = D.meta.anchor;
const pts = [[a.lng, a.lat], ...D.spots.map(s => [s.lng, s.lat])];
const url = `https://routing.openstreetmap.de/routed-foot/table/v1/foot/${pts.map(p => p.join(",")).join(";")}?sources=0&annotations=duration,distance`;
const r = await fetch(url, { headers: { "User-Agent": "happy-hour-maps/1.0 (map builder)" } });
const j = await r.json();
if (j.code !== "Ok") { console.error("OSRM error", j); process.exit(1); }
const rows = D.spots.map((s, i) => ({ n: s.n, v: s.v, min: j.durations[0][i + 1] / 60, m: j.distances[0][i + 1] }))
  .sort((x, y) => x.min - y.min);
console.log("cal osrm  netm  V  name");
for (const r of rows) {
  const cal = Math.round(r.min * 1.10);
  const flag = cal <= 20 ? "" : cal <= 22 ? " <edge>" : " DROP";
  console.log(`${String(cal).padStart(3)} ${r.min.toFixed(0).padStart(4)} ${String(Math.round(r.m)).padStart(5)}  ${r.v ? "V" : "."}  ${r.n}${flag}`);
}
