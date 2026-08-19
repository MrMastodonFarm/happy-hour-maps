/* Happy hours in Clarendon & Courthouse — Arlington, VA.
   The Wilson Blvd / Clarendon Blvd corridor between the Court House and
   Clarendon Metro stations. Compiled 2026-08-19.

   Coordinates geocoded via OSM Nominatim; walk times are routed walking
   minutes from the Clarendon Metro entrance via OSRM foot routing. The
   Courthouse cluster (Ireland's Four Courts, Verre, Courthaus Social, Delhi
   Dhaba, Ragtime, Fire Works, Guajillo) is itself 1–6 minutes from Court House
   Metro. "verified" = confirmed on the venue's OWN site/menu today;
   "check ahead" = aggregator-only, conflicting sources, or times/prices not
   posted.

   ---------------------------------------------------------------------------
   INTERNAL — NOT PUBLISHED ON THE PAGE.
   Closed/renamed, but still haunting aggregator listings. Kept here so a
   future sweep doesn't "rediscover" them as live happy hours:
     - Wilson Hardware (2915 Wilson) — closed late 2025/early 2026; space is
       now The Boulevard + Solset rooftop. Still in 2025 roundups — stale.
     - Whitlow's on Wilson (2854 Wilson) — left Arlington June 2021 (now in DC:
       Shaw + the Wharf). Space is Nettie's Tavern + BOE.
     - Rhodeside Grill (1836 Wilson) — closed Feb 21, 2026 after ~30 years.
     - Il Radicchio (1801 Clarendon) — closed June 1, 2026 after 32 years.
     - Summers Restaurant (1520 N Courthouse Rd) — closed 2020, demolished.
     - 2424 Wilson rooftop trap: Arlington Rooftop Bar & Grill (closed 3/2024)
       → Rooftop Recess (closed 12/2025) → The Willow (private events only).
     - 3033 Wilson trap: Bar Ivy (2023) → Layli + Chicken & Whiskey (2025) —
       building awaiting demolition. Nothing at this address.
     - The Lot / Arlington Beer Garden (3217 10th St N) + Clarendon 54
       (3200 Wilson) — closed Mar 2026 for Bingham Center redevelopment.
     - The Board Room (925 N Garfield) — closed May 1, 2026.
     - Seamore's (2815 Clarendon) — evicted Nov 2025; Santa Rosa Taqueria
       announced for the space.
     - Pamplona (3100 Clarendon) — long closed; The Renegade has the space.
     - TTT / Tacos Tortas y Tequila (2900 Wilson) — folded into Buena Vida 2022.
     - Mister Days' OLD address (3100 Clarendon Blvd) — moved Nov 2024 to
       1101 N Highland St (ex-Pinemoor). Aggregators still list the old spot.
     - The Pinemoor — closed July 2023 (Mister Days has the space now).
     - Faccia Luna → Alto Fumo (2909 Wilson) — Alto Fumo closed by mid-2026.
     - Bayou Bakery — open but closes 5 PM daily now; its old 5–9 HH listings
       are defunct.
   --------------------------------------------------------------------------- */
window.DATA = {
  meta: {
    docno: "ARL-26-HH01",
    eyebrow: ["A Neighborhood Field Guide", "Field-verified August 19, 2026"],
    title: 'Happy Hours in <em>Clarendon &amp; Courthouse</em>',
    dek: 'Every bar and restaurant pouring a happy hour along the <strong>Wilson–Clarendon corridor</strong> ' +
         'in Arlington, from the Court House Metro up to the heart of Clarendon. The neighborhood turned ' +
         'over hard in 2025–26 — Wilson Hardware is now <strong>The Boulevard + Solset</strong>, the old ' +
         'Whitlow’s is <strong>Nettie’s Tavern + BOE</strong>, and Rhodeside Grill and Il Radicchio are gone — ' +
         'so every spot below was checked against live sources this week. Twenty were confirmed on the ' +
         'venue’s own menu; the rest are real but rest on aggregator listings or unposted details, flagged ' +
         '<strong>“check ahead.”</strong> Walk times are from Clarendon Metro; the Courthouse cluster is ' +
         'steps from Court House Metro. Pin numbers match the list.',
    tz: "America/New_York",
    zoom: 16,
    radiusMin: null,
    keyLabel: "Clarendon Metro",
    anchor: { name: "Clarendon Metro", label: "Ⓜ", addr: "Wilson Blvd & N Highland St", lat: 38.8871653, lng: -77.0951468 },
    appendix:
      '<h2>Appendix</h2>' +
      '<h3>Worth knowing</h3>' +
      '<p><strong>The Liberty Tavern</strong> and <strong>Buena Vida</strong> start at 2 PM, and <strong>Ambar</strong> ' +
      'at noon — the earliest pours on the map. Six spots run <em>seven days a week</em>: Liberty Tavern, Lyon Hall, ' +
      'Oasis, Colada Shop, Northside Social and Verre. <strong>BOE</strong> runs latest (till 9 PM Tue–Fri, with $3 ' +
      'mechanical-bull rides), and <strong>Colada Shop</strong> goes to 8 every day. Aggregator listings for this ' +
      'corridor are unusually wrong right now: Ambar is noon–6 (not 4–6), Buena Vida starts at 2 (not 4), Solset’s ' +
      '“Golden Hour” is Mon–Thu 4–6 (not daily 4–7), Oasis is every day (not Mon–Fri) — when in doubt, trust the ' +
      'venue’s own menu.</p>' +
      '<h3>Open nearby, but no happy hour</h3>' +
      '<p>So you don’t go looking: <strong>The Boulevard</strong> (under Solset) skips a standing happy hour for ' +
      'weekly deals — Wed $29 steak frites + half-off wine bottles, Thu $3 off sushi rolls + half-off sake bottles, ' +
      'Sun $3 off appetizers. <strong>Green Pig Bistro</strong> (relocated into the Buena Vida building), ' +
      '<strong>Cielo</strong> (the new heaven-and-hell Latin supper club), <strong>Mexicali Blues</strong> and ' +
      '<strong>Sawatdee Thai</strong> post no happy hour. <strong>Bayou Bakery</strong> is daytime-only now ' +
      '(closes 5 PM), so its old happy-hour listings are dead. <strong>Maman</strong> is a daytime café.</p>' +
      '<h3>Gone, but still on the aggregators</h3>' +
      '<p>The corridor’s 2025–26 churn, so stale listings don’t fool you: <strong>Wilson Hardware</strong> closed — ' +
      'the space is now The Boulevard + Solset. <strong>Rhodeside Grill</strong> closed Feb 2026 after ~30 years; ' +
      '<strong>Il Radicchio</strong> followed in June after 32. <strong>Seamore’s</strong> was evicted Nov 2025. ' +
      '<strong>The Board Room</strong> poured its last May 2026. <strong>Arlington Beer Garden</strong> (the old ' +
      'Lot) and <strong>Clarendon 54</strong> closed Mar 2026 for redevelopment. The 2424 Wilson rooftop — ' +
      'Arlington Rooftop Bar &amp; Grill, then Rooftop Recess — is now <strong>The Willow</strong>, private events ' +
      'only. <strong>Whitlow’s</strong> left for DC in 2021 (Nettie’s + BOE have the space). <strong>Mister ' +
      'Days</strong> moved — it’s at 1101 N Highland St now, not 3100 Clarendon Blvd.</p>' +
      '<h3>Coming attractions</h3>' +
      '<p><strong>Three Notch’d Brewing</strong> (~350-seat taproom, The Crossing, fall 2026), <strong>Saki</strong> ' +
      '(2055 15th St N — sushi plus an upstairs speakeasy behind a fake vending machine, happy hour planned; ' +
      'delayed), <strong>Rocoto’s</strong> (2111 Wilson, Latin with a 19-seat margarita bar; delayed), ' +
      '<strong>Buffalo &amp; Bergen</strong> (1028 N Garfield — deli with boozy egg creams), and <strong>Santa Rosa ' +
      'Taqueria</strong> (2815 Clarendon, ex-Seamore’s).</p>' +
      '<h3>Methodology</h3>' +
      '<p>Compiled August 19, 2026 from three sweeps: Clarendon venues, Courthouse venues, and the local press ' +
      '(ARLnow, Arlington Magazine, Northern Virginia Magazine, StayArlington) for openings, closures and rebrands. ' +
      '“Verified” means the venue’s own website, menu page, or menu PDF was opened that day and the happy hour ' +
      'confirmed on it. “Check ahead” means the venue is open and a happy hour is claimed, but the details come ' +
      'from an aggregator, sources conflict, or the venue posts no specifics — call before counting on it. ' +
      'Coordinates are geocoded from street addresses (accurate to the address, not the exact door); walk times ' +
      'are real walking-route estimates from the Clarendon Metro entrance via OpenStreetMap routing. Several spots ' +
      'share the 3100 Clarendon Blvd complex, so those pins sit close together. Most happy hours are ' +
      '<strong>bar-area only</strong> — assume that unless noted.</p>'
  },
  spots: [
    { n: "The Liberty Tavern", lat: 38.8863769, lng: -77.0968622, walk: 3, addr: "3195 Wilson Blvd",
      when: "EVERY DAY 2–6 PM",
      deals: "$10 10-inch pizzas (7 kinds), $5 sliders (mini LT burger, pesto chicken, beer-battered cod), half-order pastas $8–12, $7 LT fries, $8 wines incl. sparkling, $7 select taps, $8 cocktails (Tavern Margarita, Ranch Water) & spritzes. Late-night bar menu too (Sun–Thu 9–11, Fri–Sat 10–12).",
      vibe: "The Clarendon institution — wood-fired New American in a landmark building steps from the Metro.",
      note: "Daily 2–6 makes it the longest-running window in the neighborhood.",
      v: true, url: "https://www.thelibertytavern.com/", link: "thelibertytavern.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 14, e: 18 }] },
    { n: "Clarendon Ballroom — The Deck", lat: 38.8864932, lng: -77.0967666, walk: 3, addr: "3185 Wilson Blvd",
      when: "Rooftop happy hour Thu & Fri 5–7 PM",
      deals: "Tiki-leaning rooftop cocktails (Hurricane, frozens), Hawaiian pizza, luau tacos — happy-hour prices aren’t posted. The Deck runs Wed–Sun; the main-floor club opens late.",
      vibe: "The rooftop deck over Clarendon’s big event venue — the after-work scene when the weather cooperates.",
      v: true, url: "https://www.clarendonballroomva.com/rooftop/", link: "clarendonballroomva.com",
      win: [{ d: [4,5], s: 17, e: 19 }] },
    { n: "Spider Kelly's", lat: 38.8866350, lng: -77.0966338, walk: 2, addr: "3181 Wilson Blvd",
      when: "Aggregators say Mon–Fri 4–7 PM — not posted by the venue",
      deals: "Claimed: $4 beers, $5 wine & rail drinks, $12 domestic buckets, $6 appetizers. Their own site posts no happy-hour info (and its menus are years old) — call 703-312-8888.",
      vibe: "8,000 sq ft sports bar / rec room — 31 TVs, pool, shuffleboard, darts.",
      v: false, url: "http://www.spiderkellys.com/", link: "spiderkellys.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Don Tito", lat: 38.8867020, lng: -77.0964167, walk: 2, addr: "3165 Wilson Blvd",
      when: "3–6 PM per aggregators — closed Mondays, so effectively Tue–Sun",
      deals: "From their own happy-hour page: $2 tacos (chicken, ground beef, carnitas), $2 chips & salsa, $5 soups & apps (street corn, mac n’ cheese bites, taquitos, queso), $7 apps (chorizo sliders, wings), $9 house margaritas, $7 rails, $7 house wines, $2 off drafts.",
      vibe: "Three floors plus a rooftop tequila cantina — peak Clarendon party bar.",
      note: "The deals are venue-posted but the page prints no start/end time; the 3–6 window is aggregator consensus. Closed Mondays.",
      v: false, url: "https://dontitova.com/happy-hour", link: "dontitova.com",
      win: [{ d: [0,2,3,4,5,6], s: 15, e: 18 }] },
    { n: "Mister Days", lat: 38.8864071, lng: -77.0946046, walk: 2, addr: "1101 N Highland St",
      when: "Aggregators say Tue–Fri 4–7 PM — closed Mondays",
      deals: "Claimed: $4 draft beers, $4 house wines and rails, $4 select apps. Their website is dead (the old domain now redirects elsewhere) — call (703) 986-3335.",
      vibe: "The octogenarian-owned Clarendon sports-bar legend, reopened Nov 2024 in the old Pinemoor space.",
      note: "It MOVED — aggregators still list 3100 Clarendon Blvd; the real address is 1101 N Highland St.",
      v: false, url: "tel:+17039863335", link: "(703) 986-3335",
      win: [{ d: [2,3,4,5], s: 16, e: 19 }] },
    { n: "Big Tony's Pizza & Dive Bar", lat: 38.8864256, lng: -77.0952568, walk: 1, addr: "3100 Clarendon Blvd #5",
      when: "Happy hour advertised — current standing lineup not posted",
      deals: "Their specials page is headlined “Daily Deals & Happy Hour Specials” but currently shows only one-off events (Patrón cocktail hour Aug 21, Don Julio HH Aug 28). The old posted lineup (Mon–Fri 4–8: $6 house wines, $7 rails, $7 pint+slice, $10 smashburger) has been deleted — call (703) 570-2700.",
      vibe: "Retro ’80s/’90s dive with NY-style pizza, open till 2–3 AM, hookah after 6.",
      v: false, url: "https://bigtonyspizzabar.com/specials", link: "bigtonyspizzabar.com",
      win: [] },
    { n: "The Renegade", lat: 38.8863300, lng: -77.0953500, walk: 2, addr: "3100 Clarendon Blvd",
      when: "Aggregators say 4–7 PM — closed Sun & Mon, so Tue–Fri at best",
      deals: "Claimed: $4–5 beers, $6 wine, $4 rails. Their own site mentions happy hour only as event marketing, with no details — call (703) 468-4652.",
      vibe: "Rock-and-roll bar and live-music venue in the former Pamplona space.",
      v: false, url: "https://renegadeva.com/", link: "renegadeva.com",
      win: [{ d: [2,3,4,5], s: 16, e: 19 }] },
    { n: "Bar Bao", lat: 38.8865200, lng: -77.0951500, walk: 1, addr: "3100 Clarendon Blvd",
      when: "Aggregators say Mon–Fri 4–7 PM — not posted by the venue",
      deals: "Claimed (stale listing): $5 rail drinks, $5 drafts, $5 wines by the glass, $5 house sake. Nothing on their own site — call 703-600-0500.",
      vibe: "Moody Asian-fusion bao-and-cocktails lounge.",
      v: false, url: "https://barbao-va.com/", link: "barbao-va.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Lyon Hall", lat: 38.8854984, lng: -77.0949120, walk: 3, addr: "3100 N Washington Blvd",
      when: "Mon–Thu 4–6 PM · Fri–Sun 3–6 PM (except holidays)",
      deals: "Oysters $9/half-dozen ($18/dozen), jumbo shrimp 4 for $18, $7 beers, $8 wines/sparkling/sangria/cocktails (Aperol Spritz, Dark & Stormy, Ranch Water). Brisket dumplings $8, bar burger $11, sticky Asian ribs $11, french dip $12, mussels $16, charcuterie $20.",
      vibe: "French-German brasserie with a marble bar — the grown-up corner of Clarendon, seven days a week.",
      v: true, url: "https://www.lyonhallarlington.com/menu/happy-hour/", link: "lyonhallarlington.com",
      win: [{ d: [1,2,3,4], s: 16, e: 18 }, { d: [5,6,0], s: 15, e: 18 }] },
    { n: "Northside Social", lat: 38.8854228, lng: -77.0978755, walk: 5, addr: "3211 Wilson Blvd",
      when: "EVERY DAY 3–7 PM",
      deals: "Their site posts the daily 3–7 window but no prices (an old listing said $5 select wines at the bar) — check the board.",
      vibe: "Two-story coffeehouse by day, wine bar by night; the upstairs wine bar runs Fri–Sun.",
      v: true, url: "https://www.northsidesocialva.com/location/arlington/", link: "northsidesocialva.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 19 }] },
    { n: "Screwtop Wine Bar", lat: 38.8856691, lng: -77.0926034, walk: 6, addr: "1025 N Fillmore St",
      when: "Mon–Fri 3–6 PM",
      deals: "Happy-hour wine & bites at the bar (item prices are in an embedded menu — ask). Weekly: Taco Tuesday $3 off tacos + $10 off select flights; Wino Wednesday $10 off any flight 11–5, $5 off 5–9; Sunday half-off all bottles under $100.",
      vibe: "Cozy wine bar + cheese shop with a patio; free garage parking underneath.",
      v: true, url: "https://www.screwtopwinebar.com/", link: "screwtopwinebar.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Ambar Clarendon", lat: 38.8887448, lng: -77.0934243, walk: 4, addr: "2901 Wilson Blvd",
      when: "Mon–Fri NOON–6 PM",
      deals: "The 6-hour window is on their own site; the priced menu isn’t currently downloadable. Press (July 2026) lists a $7 Kiwi Smash (basil-gin) and $5 apps: Balkan salad, veal soup, cauliflower with spinach tahini.",
      vibe: "Balkan spread-and-rakia house, better known for its bottomless brunch.",
      note: "Noon–6, not the 4–6 the aggregators claim — the longest weekday window on the map.",
      v: true, url: "https://www.ambarrestaurant.com/clarendon/", link: "ambarrestaurant.com",
      win: [{ d: [1,2,3,4,5], s: 12, e: 18 }] },
    { n: "Buena Vida Gastrolounge", lat: 38.8883680, lng: -77.0933310, walk: 3, addr: "2900 Wilson Blvd",
      when: "Mon–Fri 2–6 PM",
      deals: "From their Aug 2026 menu PDF: classic margarita $8.50, strawberry/mango margs $9.50, red sangria $8.50, spritz $9.50, wines $8. Tacos $8–10 (grilled chicken, pork belly, baja fish), quesadilla $10, nachos $8, corn ribs $8, mussels a la diabla $12.",
      vibe: "Mexican gastrolounge with a rooftop and weekend DJs.",
      note: "Starts at 2 PM — earlier than any aggregator says. The old “$2 off drafts” claim is no longer on the menu.",
      v: true, url: "https://www.buenavidagastrolounge.com/menus", link: "buenavidagastrolounge.com",
      win: [{ d: [1,2,3,4,5], s: 14, e: 18 }] },
    { n: "Maison Cheryl", lat: 38.8882600, lng: -77.0934300, walk: 4, addr: "2900 Wilson Blvd, Suite 104",
      when: "Mon–Fri 4–6 PM at the bar · drink deals till 7",
      deals: "$3 off drinks & starters: house wines $8, house beer $5, $10 cocktails (Pear Necessities, Just Peachy, and the classics). Carbonara mac $12, fried-chicken deviled eggs $8, mini truffle cheesesteak $12, Maison Burger + beer or wine $21.",
      vibe: "Chic modern-French neighborhood bistro.",
      v: true, url: "https://www.maisoncheryl.com/happyhour", link: "maisoncheryl.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Solset", lat: 38.8886196, lng: -77.0938392, walk: 3, addr: "2915 Wilson Blvd (enter at 1421 N Garfield St)",
      when: "“Golden Hour” Mon–Thu 4–6 PM · 21+, walk-ins only",
      deals: "$10 frozen margaritas, $10 espresso martinis, $8 wines by the glass, $2 off beer, $2 off sushi rolls & nigiri plate, $5 off edamame.",
      vibe: "Mykonos-meets-Tulum rooftop (retractable awning) atop The Boulevard, in the old Wilson Hardware building; cocktails by Glendon Hartley.",
      note: "Opened May 2026. The launch-press “daily 4–7” is superseded — it’s Mon–Thu 4–6 now. Downstairs, The Boulevard runs weekly deals instead (see appendix).",
      v: true, url: "https://solsetbar.com/menu/", link: "solsetbar.com",
      win: [{ d: [1,2,3,4], s: 16, e: 18 }] },
    { n: "Nettie's Tavern", lat: 38.8885986, lng: -77.0929038, walk: 4, addr: "2854 Wilson Blvd",
      when: "Advertised on their site — press says daily 3–6 PM",
      deals: "Per Arlington Magazine (Aug 2025): $5 beer, $5 wine, $5 whiskey, $5 WV pepperoni rolls; plus $5 burgers Wed 11–2, $3 mug night Thu 6–9. Their own menus don’t post the happy hour — call (571) 576-6260.",
      vibe: "Italian-Appalachian scratch tavern in the old Whitlow’s space, opened Aug 2025.",
      v: false, url: "https://nettiestavern.com", link: "nettiestavern.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 18 }] },
    { n: "BOE", lat: 38.8887100, lng: -77.0928200, walk: 4, addr: "2854 Wilson Blvd, Suite B",
      when: "Tue–Fri 5–9 PM · main floor + rooftop tiki bar when open",
      deals: "$3 domestic beers (PBR, Coors Light, Miller Lite…), $5 rails, $5 select cocktails & shots, $5 wine. $7 food: hot-honey butter chicken bites, steak or chicken egg rolls, loaded tots, quesadillas. $3 mechanical-bull rides.",
      vibe: "Nashville-style country bar with the only mechanical bull for 40 miles, plus a 3,800 sq ft covered rooftop tiki deck.",
      note: "Opened Sept 2025 in the other half of the old Whitlow’s. Latest-running happy hour on the map.",
      v: true, url: "https://www.boeclarendon.com/happy-hour-menu", link: "boeclarendon.com",
      win: [{ d: [2,3,4,5], s: 17, e: 21 }] },
    { n: "Oasis: The Listening Bar", lat: 38.8874730, lng: -77.0936080, walk: 3, addr: "2940 Clarendon Blvd",
      when: "EVERY DAY 3–6 PM",
      deals: "$6 all Joy Boy drafts (Vienna lager, wheat, stout, cider), $8 house wines, $12 cocktail of the day, $15 sake. $8 maki rolls (spicy tuna, salmon-avocado, eel-avocado, Philadelphia…), gyoza/takoyaki/tori karaage $8, edamame $6, lump crab avocado $11.",
      vibe: "Japanese hi-fi listening bar — sushi, vinyl and DJs in the old Cava space; Hawaii-meets-Tokyo calm.",
      note: "Every day, not the Mon–Fri the aggregators claim.",
      v: true, url: "https://www.oasisthelisteningbar.com/menu?location=Clarendon+Boulevard&menu=happy-hour", link: "oasisthelisteningbar.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 18 }] },
    { n: "CIRCA at Clarendon", lat: 38.8870062, lng: -77.0943215, walk: 2, addr: "3010 Clarendon Blvd",
      when: "Mon–Fri 4–7 PM · bar area only",
      deals: "$5 draft beers, $8 house wines, $8 house cocktails & well spirits, $2 off small plates & flatbreads.",
      vibe: "Polished New American bistro with a big corner patio across from the Metro.",
      v: true, url: "https://www.circabistros.com/menu/happy-hour-clarendon/", link: "circabistros.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Colada Shop", lat: 38.8883809, lng: -77.0919907, walk: 5, addr: "2811 Clarendon Blvd",
      when: "“¡Hora Feliz!” EVERY DAY 4–8 PM",
      deals: "$8 cocktails: rum spritzers (guava-lime, passionfruit-orange, mint limeade, coco piña), mojito, piña colada, espresso martini, wines & beers. $8 bites: sofrito chicken tostones, shrimp ceviche tostones, guava BBQ pork sliders, goat-cheese croquetas; platanachos $12. Zero-proof options too.",
      vibe: "Bright Cuban café-bar with a big patio — sit anywhere.",
      note: "The claimed Wednesday half-off wine bottles is not on the current menu — check ahead for that one.",
      v: true, url: "https://www.coladashop.com/menu", link: "coladashop.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 16, e: 20 }] },
    { n: "Westville", lat: 38.8874556, lng: -77.0920337, walk: 7, addr: "2800 Clarendon Blvd",
      when: "Mon–Fri 4–6 PM",
      deals: "$8 cocktails, $6 wines, $5 beers “and more” — their site posts the window and headline prices, not a full list.",
      vibe: "NYC comfort-food transplant famous for its 24+ daily market vegetables; dog-friendly patio. Opened July 2025.",
      v: true, url: "https://westville.com/locations/westville-clarendon/", link: "westville.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Brass Rabbit Pub", lat: 38.8868780, lng: -77.0941120, walk: 3, addr: "1210 N Garfield St",
      when: "Mon–Fri 3–6 PM",
      deals: "Verified whiskey happy hour: $8 pours (Buffalo Trace, Eagle Rare 10yr, Weller Special Reserve, Woodford), +$2 as an Old Fashioned or Manhattan. Weekly: Mon half-price wings + $1 tacos 6–9, Tue half-price wine bottles, Wed half-price cocktails 6–9, Thu $5 burgers 6–9. The full HH food/drink list ($10 apps, $10 martinis, $5 drafts per aggregators) is an image menu — confirm on arrival.",
      vibe: "Swanky-casual pub from the Copperwood Tavern group.",
      v: true, url: "https://www.thebrassrabbitpub.com/menus", link: "thebrassrabbitpub.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Fire Works Pizza", lat: 38.8898790, lng: -77.0873160, walk: 12, addr: "2350 Clarendon Blvd",
      when: "Old listings say Mon–Fri 3–6:30 PM + Sun 11–8 — may have been dropped",
      deals: "Claimed (stale, 1yr+): $3 select beers, $4 sangria, $5 featured wines, $2 pork sliders, $3–6 small plates. Their own Arlington pages post no happy hour today, and the restaurant sold in Oct 2025 with a rename planned — call (703) 527-8700 before counting on it.",
      vibe: "Wood-fired pizza with a serious craft-beer list and a Clarendon Blvd patio.",
      v: false, url: "https://www.fireworkspizza.com/arlington", link: "fireworkspizza.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18.5 }, { d: [0], s: 11, e: 20 }] },
    { n: "Courthaus Social", lat: 38.8899819, lng: -77.0866761, walk: 13, addr: "2300 Clarendon Blvd",
      when: "Mon–Fri 3–6 PM",
      deals: "The window is on their own site; prices aren’t. Aggregators claim $2 off all draft beer, Haus cocktails and wine — confirm on arrival (703-243-4900).",
      vibe: "Beer garden / sports bar with a big dog-friendly patio and Virginia craft drafts.",
      v: true, url: "https://www.courthaussocial.com/", link: "courthaussocial.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Ragtime", lat: 38.8893720, lng: -77.0834740, walk: 18, addr: "1345 N Court House Rd",
      when: "Aggregators say Mon–Fri 11 AM–7 PM — not confirmable on their site",
      deals: "Claimed: $5 Miller Lite, $6 micro of the month, $6 house spirits, $7 house wines & sangria, $10 house mules, plus daily food specials. Their own specials page won’t render its content — call (703) 243-4003.",
      vibe: "New-Orleans-tinged neighborhood pub — one of Arlington’s only covered patios, 17 TVs, weekend Bourbon Street brunch.",
      v: false, url: "https://www.ragtimerestaurant.com/specials", link: "ragtimerestaurant.com",
      win: [{ d: [1,2,3,4,5], s: 11, e: 19 }] },
    { n: "Verre Wine Bar", lat: 38.8908097, lng: -77.0878253, walk: 11, addr: "2415 Wilson Blvd",
      when: "“Golden Hour” EVERY DAY 4–7 PM",
      deals: "Wines by the glass $9–11 (Vinho Verde, rosé, Côtes-du-Rhône, Malbec), Rosé Sangria Spritz $10, Red Wine Boulevardier $13; wine-club members pour select glasses for $3. Truffle fries $10, flatbreads $15, hummus $10, chicken sliders $13, chef’s cheese & charcuterie $25.",
      vibe: "Cozy upscale wine bar a block from Court House Metro.",
      note: "A 15% “fair wage fee” is added to dine-in orders.",
      v: true, url: "https://verrewinebar.com/pages/happy-hour-menu", link: "verrewinebar.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 16, e: 19 }] },
    { n: "Delhi Dhaba", lat: 38.8902774, lng: -77.0882412, walk: 11, addr: "2424 Wilson Blvd, Unit B",
      when: "Mon–Fri 4–6 PM",
      deals: "$3 off pizzas plus beer & wine deals (“ask your server” — prices not posted).",
      vibe: "No-frills Indian standby since 1991 with a small bar, under the old rooftop-bar building.",
      note: "Their specials page isn’t freshly maintained — confirm on arrival (703) 524-0008.",
      v: true, url: "https://delhidhaba.com/specials", link: "delhidhaba.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Ireland's Four Courts", lat: 38.8918992, lng: -77.0842156, walk: 17, addr: "2051 Wilson Blvd",
      when: "Mon–Fri 3–6 PM",
      deals: "Yuengling $6, Heineken $6, Barone Fini Pinot Grigio $8, Cannonball Merlot $8. Daily food specials after 5: Mon Four Courts Burger $12, Tue fish & chips $15, Wed 10 boneless wings $12, Thu bangers & mash $15, Fri chicken curry $15, Sun shepherd’s pie $15.",
      vibe: "The classic Courthouse Irish pub, fully rebuilt after the 2022 car-crash fire — “America’s Best Soccer Bar” per Men in Blazers. Pub quiz Tue, karaoke Wed, live music Fri–Sat.",
      note: "Aggregators claim “4–8, $6 apps” — the venue’s own menu says 3–6, drinks only.",
      v: true, url: "https://www.irelandsfourcourts.com/menus/", link: "irelandsfourcourts.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Guajillo", lat: 38.8941610, lng: -77.0790190, walk: 26, addr: "1727 Wilson Blvd",
      when: "Mon–Fri until 6:30 PM (start time not posted; they open at 4 most days)",
      deals: "Margarita and tequila specials plus shareable appetizers — prices not posted. La Cantina pours 8+ margarita variations, including the Margachela fishbowl.",
      vibe: "Family-run, long-standing authentic Mexican at the Rosslyn end of the corridor.",
      note: "The far-east edge of the map — closer to Rosslyn than to Court House Metro.",
      v: true, url: "https://www.guajillomexican.com/menu", link: "guajillomexican.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18.5 }] }
  ]
};
