# happy-hour-maps

Field-verified happy-hour maps within a short walk of a given spot, in a shared
"accountability report" style. One template, one workflow, one map per location.

**Live:** https://mrmastodonfarm.github.io/happy-hour-maps/

## Layout
```
index.html            landing page listing every map
template/
  styles.css          shared editorial styles (light/dark, tokenized)
  app.js              renderer: reads window.DATA → masthead + Leaflet map + list
  vendor/leaflet/     vendored Leaflet 1.9.4 (no CDN dependency)
  starter/            copy this to start a new map (index.html + data.example.js)
maps/
  gao/                DC · GAO — the flagship, hand-drawn schematic SVG (one-off)
  gao-leaflet/        DC · GAO on a real street map — the Leaflet template in action
  alexandria/         VA · 20-minute walk from home (routed walk times, no ring)
scripts/
  geocode.py          addresses → lat/lng via OSM Nominatim
  walktimes.mjs       real routed walking minutes from the anchor (OSRM foot)
  shoot.py            headless-Firefox screenshot of a served map (local QA)
BUILD.md              how to build / update / publish a map
```

## Make a new map
See **[BUILD.md](BUILD.md)**. Short version: research verified venues near an
address, geocode them (`scripts/geocode.py`), copy `template/starter/` to
`maps/<city>/`, fill in `data.js`, add a card to `index.html`, push.

## Credits
Map tiles © OpenStreetMap contributors, © CARTO. Built with
[Leaflet](https://leafletjs.com/).
