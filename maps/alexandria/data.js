/* Happy hours within ~20 minutes' walk of 106 E Walnut St, Alexandria VA
   (Rosemont / north Old Town / Braddock). Compiled & verified 2026-07-17.
   Coordinates geocoded via OSM Nominatim; walk times are REAL walking-route
   estimates from home via OSRM foot routing (accounts for the rail-line and
   highway detours). "verified" = confirmed on the venue's OWN site/menu;
   "check ahead" = aggregator-only, conflicting sources, or times/prices not posted. */
window.DATA = {
  meta: {
    docno: "ALX-26-HH01",
    eyebrow: ["A Neighborhood Field Guide", "Field-verified July 17, 2026"],
    title: 'Happy Hour Within a <em>20-Minute Walk</em> of Home',
    dek: 'Every spot below is within about a <strong>20-minute walk</strong> of home in north Old Town — ' +
         'the Braddock corner, up Mount Vernon Ave into lower <strong>Del Ray</strong>, and the top of ' +
         '<strong>King Street</strong>. Walk times are real routed estimates (not straight-line), so they account ' +
         'for the detour around the rail tracks. Most were confirmed on the venue’s own menu; the rest are real but ' +
         'rest on aggregator listings or unposted hours, so they’re flagged <strong>“check ahead.”</strong> ' +
         'The upper-King and waterfront scene is a bit farther — see the appendix. Sorted nearest-first; pin numbers match the list.',
    tz: "America/New_York",
    zoom: 16,
    radiusMin: null,
    keyLabel: "home",
    anchor: { name: "Home", label: "★", addr: "Rosemont · north Old Town", lat: 38.8125607, lng: -77.0579384 },
    appendix:
      '<h2>Appendix</h2>' +
      '<h3>Just past the 20-minute line</h3>' +
      '<p>A little too far to make the cut, but close. Down King St (~25–27 min): <strong>The People’s Drug</strong> ' +
      '(103 N Alfred), <strong>Don Taco</strong> (808 King, Mon–Fri 3–7, $4 tacos), and <strong>The Light Horse</strong> ' +
      '(715 King, Mon–Fri 3–6). <strong>Rustico</strong> (827 Slaters Ln, Mon–Fri 4–6, $5 drafts / $7 cocktails) is ' +
      '~27 min thanks to the rail crossing. Farther still, the classic <strong>lower King St &amp; waterfront</strong> ' +
      'scene (~30+ min toward the Potomac): The Warehouse, Sonoma Cellar, Mia’s Italian, Vola’s Dockside (Mon–Fri 3–7, ' +
      '$2 oysters), Union Street Public House, Ada’s on the River, and Barca Pier. Up the north end of Del Ray (~24+ min): ' +
      '<strong>Del Ray Public House</strong> ($2 off drafts/wine/cocktails), <strong>Pork Barrel BBQ</strong>, and ' +
      '<strong>Cheesetique</strong> ($2 off wines &amp; beers).</p>' +
      '<h3>Worth knowing</h3>' +
      '<p><strong>Bastille</strong> adds all-night happy hour on Wednesdays and Sundays — the best deal in the radius. ' +
      '<strong>Hank’s</strong> and <strong>T.J. Stone’s</strong> are bar-only. Several of the closest spots ' +
      '(<strong>Mason Social</strong>, <strong>The Garden</strong>, <strong>Lena’s</strong>) clearly run a happy hour ' +
      'but don’t post current hours or prices anywhere reliable — a quick phone call locks them down.</p>' +
      '<h3>Closed — still haunting old guides</h3>' +
      '<ul class="closed-grid">' +
      '<li><s>The Sushi Bar</s> (Del Ray) — closed</li>' +
      '<li><s>Live Oak</s> — closed</li>' +
      '<li><s>Society Fair</s> — closed</li>' +
      '<li><s>Pizzeria Paradiso</s> (Old Town) — closed; now a pop-up inside Hank’s</li>' +
      '<li><s>Charlie’s on the Avenue</s> — now Matt &amp; Tony’s</li>' +
      '<li><s>Kaizen Tavern / Zuki Moon</s> — now Pak Soii</li>' +
      '</ul>' +
      '<h3>Methodology</h3>' +
      '<p>Compiled July 17, 2026 from three neighborhood sweeps (Del Ray, upper Old Town / King St, and the ' +
      'Braddock corner). “Verified” means the venue’s own website, menu page, or menu PDF was opened and confirmed ' +
      'current. “Check ahead” means the venue is open and offers a happy hour, but the details come from an aggregator, ' +
      'sources conflict, or hours/prices aren’t posted — call before counting on it. Coordinates are geocoded from ' +
      'street addresses (accurate to the address, not the exact door); walk times are real walking-route estimates ' +
      'from home via OpenStreetMap routing. Most happy hours are <strong>bar/lounge only</strong> — assume that unless noted.'
  },
  spots: [
    { n: "Lena's Wood-Fired Pizza & Tap", lat: 38.8134020, lng: -77.0561120, walk: 4, addr: "401 E Braddock Rd",
      when: "Happy hour offered — days/times not posted",
      deals: "Neighborhood wood-fired pizza & tap room with a happy hour; current hours and prices aren’t published anywhere reliable. Call (703-518-5386) to confirm.",
      vibe: "Casual family pizzeria and bar, the closest spot to home.",
      v: false, url: "https://www.lenasva.com/", link: "lenasva.com",
      win: [] },
    { n: "Dos Amigos", lat: 38.8124890, lng: -77.0536670, walk: 7, addr: "535 E Braddock Rd",
      when: "Mon–Fri 3–7 PM",
      deals: "$5 drafts, $5 seltzers, $6 bottles, $6 wine, $7 house margaritas, $7 rail drinks.",
      vibe: "Casual neighborhood Tex-Mex with a patio, steps from Braddock Metro.",
      note: "Times/prices from an aggregator, not the venue’s own site.",
      v: false, url: "https://www.dosamigosalexandria.com/", link: "dosamigosalexandria.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Bastille Brasserie & Bar", lat: 38.8115998, lng: -77.0513738, walk: 12, addr: "606 N Fayette St",
      when: "“L’Apéro” · Tue–Sat 4–6:30 PM · plus all night Wed & Sun from 4 · bar & café",
      deals: "House Martini $9, Spirit & Soda $8, Saint Poire $8, draft $5, Kölsch can $5, wines $6–7. Food: ½-dozen oysters $22, wings $14, frites $8, roasted olives $7. Tue 30% off bottles; Thu $7 Bordeaux with a burger.",
      vibe: "Award-winning chef-owned French brasserie with a garden patio.",
      v: true, url: "https://www.bastillerestaurant.com/menus-events/weeklyevents", link: "bastillerestaurant.com",
      win: [{ d: [2,3,4,5,6], s: 16, e: 18.5 }, { d: [3], s: 16, e: 23 }, { d: [0], s: 16, e: 23 }] },
    { n: "Mason Social", lat: 38.8134818, lng: -77.0499501, walk: 14, addr: "728 N Henry St",
      when: "Reported Mon–Fri ~3–7 PM (bar) — hours conflict across sources",
      deals: "$5 drink specials plus discounted appetizers (per aggregators). Their own site names a happy hour but posts no times or prices — call 703-548-8800.",
      vibe: "Chef-driven New American neighborhood spot with a buzzy patio; one of the closest to home.",
      v: false, url: "http://www.mason-social.com/menus/", link: "mason-social.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Matt & Tony's All Day Kitchen + Bar", lat: 38.8198205, lng: -77.0571766, walk: 14, addr: "1501 Mt Vernon Ave",
      when: "Mon–Fri 3–6 PM",
      deals: "$10 small plates (lil burgers, Baja fish tacos, Korean fried wings, bulgogi bao), $10 cocktails, $10 wines; Glass Castle Pilsner $5, Big Tomorrow IPA $6.",
      vibe: "Lively all-day scratch kitchen + bar at the mouth of Del Ray.",
      v: true, url: "https://www.mattandtonysva.com/menu", link: "mattandtonysva.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "The Garden", lat: 38.8199454, lng: -77.0572314, walk: 14, addr: "1503 Mt Vernon Ave",
      when: "Happy hour offered — times not posted",
      deals: "Outdoor beer garden — 16 drafts, wine, cocktails, food by Chef Justus Frank, cornhole, dog- & kid-friendly. A happy hour is advertised but no times or prices are posted; call (571-970-2791).",
      vibe: "Open-air Del Ray beer garden next to Matt & Tony’s.",
      v: false, url: "https://www.thegardendelray.com/", link: "thegardendelray.com",
      win: [] },
    { n: "Pak Soii Izakaya & Bar", lat: 38.8235581, lng: -77.0580104, walk: 20, addr: "1909 Mt Vernon Ave",
      when: "Mon–Fri 3–6 PM (excludes holidays)",
      deals: "Happy-hour menu of skewers, sushi, and small plates at this new Del Ray izakaya (opened Oct 2025 in the old Zuki Moon space). Own site confirms the window but doesn’t post prices — check on arrival.",
      vibe: "New Japanese izakaya counter — sushi, robata skewers, small plates.",
      v: true, url: "https://www.paksoiiizakaya.com/", link: "paksoiiizakaya.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Vermilion", lat: 38.8054973, lng: -77.0522910, walk: 21, addr: "1120 King St",
      when: "Tue–Fri 4–6 PM · Sat–Sun 3–5 PM · bar & lounge",
      deals: "Food $6–10 (Philly arancini $6, steak fries $6, pimento dip $8, chicken sliders $10). Beer/wine $6–7. House Old Fashioned $10, 50/50 Martini $8, HH Highball $8.",
      vibe: "Upscale farm-to-table New American with a spacious bar and lounge.",
      note: "Deals confirmed on their own HH menu; confirm exact days/times.",
      v: true, url: "https://www.vermilionrestaurant.com/", link: "vermilionrestaurant.com",
      win: [{ d: [2,3,4,5], s: 16, e: 18 }, { d: [0,6], s: 15, e: 17 }] },
    { n: "Evening Star Cafe", lat: 38.8240260, lng: -77.0584490, walk: 21, addr: "2000 Mt Vernon Ave",
      when: "Mon–Fri 4:30–7 PM",
      deals: "Wells $5, PBR cans $2, Bluejacket & Crisp drafts $5, house wine $7, daily “dealer’s choice” cocktail $7. Smoked pimento cheese $7, marinated olives $5.",
      vibe: "Beloved Del Ray New-American institution (since 1997) with a rooftop-garden program.",
      v: true, url: "https://www.eveningstarcafe.net/", link: "eveningstarcafe.net",
      win: [{ d: [1,2,3,4,5], s: 16.5, e: 19 }] },
    { n: "Augie's Mussel House & Beer Garden", lat: 38.8055227, lng: -77.0518148, walk: 22, addr: "1106 King St",
      when: "Mon–Thu 3–6 PM (no Friday HH)",
      deals: "70+ beers and Belgian-style mussels; wings ~$8 for 6 (aggregator). Own site confirms the window but doesn’t post HH prices — check on arrival.",
      vibe: "Belgian mussels + open-air beer garden, dog-friendly patio.",
      v: true, url: "https://www.eataugies.com/augies-alexandria", link: "eataugies.com",
      win: [{ d: [1,2,3,4], s: 15, e: 18 }] },
    { n: "T.J. Stone's Grill House & Tap Room", lat: 38.8139623, lng: -77.0443686, walk: 22, addr: "608 Montgomery St",
      when: "Mon–Fri 4–7 PM · Tap Room / bar only",
      deals: "~$3.50 rail drinks, house wine, and select drafts (Yuengling, PBR, Blue Moon); $5 pub-snack menu. Nightly deals from 5: Mon ½-price burgers, Tue tacos, Thu wings.",
      vibe: "Two-level tavern near Braddock Metro — 200+ beers, fireplace, patio.",
      note: "Own site confirms the window; prices are aggregator-sourced — verify on arrival.",
      v: true, url: "https://www.tjstones.com/tap-room", link: "tjstones.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Hank's Oyster Bar", lat: 38.8138410, lng: -77.0442766, walk: 22, addr: "818 N Saint Asaph St",
      when: "Tue–Fri 4–6 PM · at the bars only",
      deals: "House spirits $9, Punch of the Day $9, select beers $6, house wines $7. Oysters $2.50 each, sliders $7–9, deviled eggs $7, fried pickles $5.",
      vibe: "Lively New England-style oyster and raw bar.",
      v: true, url: "https://hanksoysterbar.com/old-town/menus/", link: "hanksoysterbar.com",
      win: [{ d: [2,3,4,5], s: 16, e: 18 }] },
    { n: "Tequila & Taco", lat: 38.8016660, lng: -77.0616950, walk: 22, addr: "540 John Carlyle St",
      when: "Mon–Fri 3–6 PM · bar & dining room",
      deals: "Street corn $5, elote loco $5, nachos $8, empanada $4, trio tacos $12. All beer $5, margarita flight $12 (frozen $10), $1 off fresh-squeezed rocks margaritas.",
      vibe: "Contemporary margarita & taco bar in Carlyle Square.",
      v: true, url: "https://www.alexandriataco.com/events/happy-hour", link: "alexandriataco.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] }
  ]
};
