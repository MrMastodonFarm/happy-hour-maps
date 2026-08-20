# Napkin — happy-hour-maps

## Workflow (highest value)
- Refreshing a map = 3 parallel research agents (re-verify listed venues on OWN
  sites / chase check-aheads via IG+aggregators / sweep local press for
  openings+closures: ALXnow is the best Alexandria source), then rewrite that
  map's `data.js`, bump eyebrow date + docno, update landing-card count in root
  `index.html`, QA via `scripts/shoot.py`, push. Pages goes live in ~1–2 min —
  poll the raw `data.js` URL for the new date string.
- Quick routed walk time without editing data.js: curl the OSRM foot table
  endpoint (see walktimes.mjs for URL shape), ×1.10 calibration; ≤20 min is in,
  21–22 "edge", else appendix.
- Venue truth decays fast (~1 month): venues silently pull HH pages, drop
  prices, or change domains. `v:true` needs the venue's OWN page fetched today.
- Best local-press source per area: ALXnow (Alexandria), ARLnow (Arlington —
  its restaurant tracker catches openings/closures/rebrands aggregators miss).
- Two-hub area maps (e.g. Clarendon+Courthouse): anchor at the dominant Metro,
  `radiusMin: null`, explain the second hub in the dek; sort then reads as a
  walk down the corridor. Nudge stacked same-address pins by ~0.0001°.

- IG verification of check-aheads WORKS and flips ~1/3 to verified: use the
  user's logged-in Chrome (claude-in-chrome MCP) — ask them to log in first —
  and ONE sequential Sonnet subagent (user directive: subagents for legwork).
  Look at bios, story highlights ("Specials"/"Happy Hour"), and flyer-image
  posts (details are IN the image, not the caption). Handles rarely match the
  obvious guess — each map's data.js header records the swept handles.

## Gotchas
- Repo remote is https:// (not SSH) — first push may need `--set-upstream origin main`.
- alexandriataco.com is behind Cloudflare (curl/WebFetch 403) — needs headless
  Firefox to verify.
- Venues that share a block overlap pins (1501/1503/1504 Mt Vernon; Montgomery/
  St Asaph pair) — fine, but check the screenshot.
- shoot.py spawns its own geckodriver on port 4499; still sweep
  `pgrep -x firefox`/`geckodriver` after.
