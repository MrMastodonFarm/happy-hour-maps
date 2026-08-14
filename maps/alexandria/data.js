/* Happy hours within a 27-minute walk of 106 E Walnut St, Alexandria VA
   (Rosemont / north Old Town / Braddock / Del Ray / upper King St).
   Compiled 2026-07-17; re-verified 2026-08-14; radius extended 2026-08-14.

   THE RADIUS: the cutoff used to be 20 minutes. It is now 27, set by the
   furthest place we'd actually walk to — Cheesetique at the top of Del Ray
   (27 min). Everything at least as close is in scope. That line is clean:
   the next venue out (Lost Boy Cider) is 28 and the waterfront is 34+.

   Coordinates geocoded via OSM Nominatim; walk times are REAL walking-route
   estimates from home via OSRM foot routing (accounts for the rail-line and
   highway detours), x1.10 to align with Google. "verified" = confirmed on the
   venue's OWN site/menu; "check ahead" = aggregator-only, conflicting sources,
   or times/prices not posted.

   ---------------------------------------------------------------------------
   INTERNAL — NOT PUBLISHED ON THE PAGE.
   Closed, but still haunting old guides and aggregator listings. Kept here so
   a future sweep doesn't "rediscover" them as live happy hours:
     - The Sushi Bar (Del Ray) — closed
     - Live Oak — closed
     - Society Fair — closed
     - Pizzeria Paradiso (Old Town, 124 King St) — closed fall 2020 after ten
       years. It ran a POP-UP inside Hank's Oyster Bar (818 N Saint Asaph St)
       from March 13, 2025, but that ended: Paradiso's own site now says
       "Thank you for your support in Old Town! Our popup hosted by Hank's Old
       Town has ended," and Hank's Pasta Bar (takeout/delivery only) took the
       space on Aug 20, 2025. Verified 2026-08-14 at eatyourpizza.com/popup.
       There is NO Paradiso in Alexandria today.
     - Charlie's on the Avenue — now Matt & Tony's
     - Kaizen Tavern / Zuki Moon — now Pak Soii
     - Whiskey & Oyster (Carlyle) — closed Feb 2026
   --------------------------------------------------------------------------- */
window.DATA = {
  meta: {
    docno: "ALX-26-HH03",
    eyebrow: ["A Neighborhood Field Guide", "Field-verified August 14, 2026"],
    title: 'Happy Hours <em>Close to Home</em>',
    dek: 'Every spot below is an easy walk from home in north Old Town — the Braddock corner, up Mount ' +
         'Vernon Ave through <strong>Del Ray</strong>, across Parker-Gray, and out along <strong>King ' +
         'Street</strong>. This edition widens the net to the top of the Avenue and the 700–900 blocks of ' +
         'King, adding <strong>nine</strong> spots: Del Ray Public House, Pork Barrel BBQ and Cheesetique up ' +
         'in Del Ray; The Majestic, The Light Horse, Murphy’s, Don Taco and The People’s Drug on King St; ' +
         'and <strong>Rustico</strong> out on Slaters Lane. Most spots were confirmed on the venue’s own ' +
         'menu; the rest are real but rest on aggregator listings or unposted hours, so they’re flagged ' +
         '<strong>“check ahead.”</strong> Sorted nearest-first; pin numbers match the list.',
    tz: "America/New_York",
    zoom: 16,
    radiusMin: null,
    keyLabel: "home",
    anchor: { name: "Home", label: "★", addr: "Rosemont · north Old Town", lat: 38.8125607, lng: -77.0579384 },
    appendix:
      '<h2>Appendix</h2>' +
      '<h3>Farther afield</h3>' +
      '<p>Past the point where you’d rather drive. <strong>Lost Boy Cider</strong> (317 Hooffs Run Dr) sits just ' +
      'beyond the rest. <strong>Floriana</strong> (277 S Washington St) is the Northern Italian raw-bar opening ' +
      'targeted for late August/early September, with happy-hour specials planned. <strong>Bilbo Baggins</strong> ' +
      '(208 Queen St) and <strong>King &amp; Rye</strong> (480 King St) are a little past that. The classic ' +
      '<strong>lower King St &amp; waterfront</strong> scene is a solid half-hour-plus on foot: The Warehouse, ' +
      'Sonoma Cellar, Il Porto, Landini Brothers, Fish Market, Bugsy’s, Mia’s Italian, Blackwall Hitch, ' +
      'Vola’s Dockside (Mon–Fri 3–7, $2 oysters), Virtue Feed &amp; Grain, Union Street Public House, Chadwicks, ' +
      'Ada’s on the River and Barca Pier. The <strong>far north end of Del Ray</strong> is a similar hike: ' +
      'Ruthie’s All-Day, Hops N Shine and Northside 10.</p>' +
      '<h3>Close by, but no happy hour</h3>' +
      '<p>Easy walks that don’t have one, so you don’t go looking. <strong>The Garden</strong> ' +
      '(1503 Mt Vernon Ave) — still a fine beer garden, closed Mondays, but the only happy-hour ' +
      'announcement on their site is an Instagram post from May 2022. <strong>Hard Times Cafe</strong> ' +
      '(1404 King St) posts no happy hour, but does run all-day food specials: Wed grilled wings $12.99, ' +
      'Thu chili macs $12.49, Fri big fish sandwich $11.99, Sat onion rings $8.99, Sun $3 off all dinners 3–6. ' +
      '<strong>Del Ray Cafe</strong> (205 E Howell Ave) and <strong>Taqueria el Poblano</strong> ' +
      '(2400 Mt Vernon Ave) have nothing posted on their own sites and nothing on the aggregators either.</p>' +
      '<h3>Worth knowing</h3>' +
      '<p><strong>Bastille</strong> still runs all-night happy hour Wednesdays and Sundays (now posted as 4–9 PM) — ' +
      'the best deal on the map — though it no longer publishes itemized prices. <strong>Cheesetique</strong> is ' +
      'the only spot here running <em>seven days a week</em>, and <strong>Murphy’s</strong> the only other one that ' +
      'includes weekends. <strong>The Majestic</strong> reopened in April 2026 under chef Santiago Lopez, so its ' +
      '“Majestic Hour” is new — the window is posted, the prices aren’t. <strong>Rustico</strong>’s happy-hour PDF ' +
      'is priced but no longer names the days. <strong>Hank’s</strong>, <strong>T.J. Stone’s</strong> and ' +
      '<strong>Cheesetique</strong> are bar/lounge only, and T.J. Stone’s happy-hour price menu is currently broken ' +
      'on their site — the window holds, but re-check prices on arrival. <strong>Vermilion</strong> stopped ' +
      'publishing its happy-hour days and times (the priced menu is still posted). <strong>Mason Social</strong>’s ' +
      'Instagram claims happy hour seven days a week, but no venue-posted times or prices exist anywhere — a quick ' +
      'call locks it down. Upstairs at <strong>Del Ray Public House</strong>, the Chicago-style hot-dog and ' +
      'Italian-beef counter <strong>Cubbies</strong> opened July 18, 2026 and runs weekends only (Fri 5–10, ' +
      'Sat 2–10, Sun 12–8) — it sold out on day one.</p>' +
      '<h3>Methodology</h3>' +
      '<p>Compiled July 17, 2026 from three neighborhood sweeps (Del Ray, upper Old Town / King St, and the ' +
      'Braddock corner); every venue re-verified August 14, 2026, plus a fresh sweep for openings and closures. ' +
      'The same day the net was widened to the top of Del Ray — everything at least as close as Cheesetique, ' +
      'measured by real walking routes rather than distance on a map — and every venue that came into scope was ' +
      'researched from scratch. “Verified” means the venue’s own website, menu page, or menu PDF was opened and confirmed current. ' +
      '“Check ahead” means the venue is open and offers a happy hour, but the details come from an aggregator, ' +
      'sources conflict, or hours/prices aren’t posted — call before counting on it. Coordinates are geocoded from ' +
      'street addresses (accurate to the address, not the exact door); walk times are real walking-route estimates ' +
      'from home via OpenStreetMap routing. Most happy hours are <strong>bar/lounge only</strong> — assume that unless noted.'
  },
  spots: [
    { n: "Lena's Wood-Fired Pizza & Tap", lat: 38.8134020, lng: -77.0561120, walk: 4, addr: "401 E Braddock Rd",
      when: "Mon–Tue 4–9 PM · Wed–Fri 4–7 PM",
      deals: "Wines $7, draft beers $6 (excludes Guinness), snacks & small plates from $4.50. “Wine Down Wednesdays”: 50% off all wine bottles.",
      vibe: "Casual family pizzeria and bar, the closest spot to home.",
      note: "Finally posted! A dedicated happy-hour page appeared since July (their old domain lenasva.com is dead — now lenaswoodfire.com).",
      v: true, url: "https://lenaswoodfire.com/page/happy-hour", link: "lenaswoodfire.com",
      win: [{ d: [1,2], s: 16, e: 21 }, { d: [3,4,5], s: 16, e: 19 }] },
    { n: "Dos Amigos", lat: 38.8124890, lng: -77.0536670, walk: 7, addr: "535 E Braddock Rd",
      when: "Mon–Fri 3–7 PM",
      deals: "$5 drafts, $5 seltzers, $6 bottles, $6 wine, $7 house margaritas, $7 rail drinks.",
      vibe: "Casual neighborhood Tex-Mex with a patio, steps from Braddock Metro.",
      note: "Their own site now confirms the 3–7 window; prices are still aggregator-sourced (two agree).",
      v: true, url: "https://www.dosamigosalexandria.com/", link: "dosamigosalexandria.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Bastille Brasserie & Bar", lat: 38.8115998, lng: -77.0513738, walk: 12, addr: "606 N Fayette St",
      when: "Tue–Sat 4–6:30 PM · plus ALL NIGHT Wed & Sun 4–9 PM · bar & café only",
      deals: "House martinis $9 every day, plus “specially priced” beer, wine & cocktails (itemized prices no longer posted). Tue 30% off wine bottles; Thu buy the Burger Classique, get a glass of House Bordeaux for $7.",
      vibe: "Award-winning chef-owned French brasserie with a garden patio.",
      note: "Days/times re-verified Aug 14; the priced menu ($5 drafts, $22 half-dozen oysters in July) is no longer published.",
      v: true, url: "https://www.bastillerestaurant.com/menus-events/weeklyevents", link: "bastillerestaurant.com",
      win: [{ d: [2,3,4,5,6], s: 16, e: 18.5 }, { d: [3], s: 16, e: 21 }, { d: [0], s: 16, e: 21 }] },
    { n: "Mason Social", lat: 38.8134818, lng: -77.0499501, walk: 14, addr: "728 N Henry St",
      when: "“Happy hour 7 days a week” per their Instagram — times & prices not posted",
      deals: "No venue-posted details anywhere; aggregators conflict (Mon–Fri ~3–7 with $5 specials is the most common claim). Their site has dropped its happy-hour mention since July — call 703-548-8800.",
      vibe: "Chef-driven New American neighborhood spot with a buzzy patio; one of the closest to home.",
      v: false, url: "http://www.mason-social.com/menus/", link: "mason-social.com",
      win: [] },
    { n: "Matt & Tony's All Day Kitchen + Bar", lat: 38.8198205, lng: -77.0571766, walk: 14, addr: "1501 Mt Vernon Ave",
      when: "Mon–Fri 3–6 PM",
      deals: "$10 small plates (lil burgers, Baja fish tacos, Korean fried wings, rolled chicken tacos, bulgogi bao), $10 cocktails, $10 wines, $5 jello shot; Glass Castle Pilsner $5, Big Tomorrow IPA $6.",
      vibe: "Lively all-day scratch kitchen + bar at the mouth of Del Ray.",
      v: true, url: "https://www.mattandtonysva.com/menu", link: "mattandtonysva.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Little Birdie", lat: 38.8200887, lng: -77.0577217, walk: 15, addr: "1504B Mt Vernon Ave",
      when: "“Birdie Happy Hour” · Mon–Fri 3–6 PM · debuts Mon Aug 17",
      deals: "$10 apps (bucket o’ wings, animal-style bulgogi fries, salt & pepper shrimp, summer corn), $14 mini lobster roll, $10 “Birdtails” cocktails, $8 wines, $5 craft beer (Gaffel Kölsch, hefeweizen, razz sour).",
      vibe: "Del Ray’s newest — opened June 2026 by the Matt & Tony’s team, directly across the street; full bar and oysters.",
      note: "Happy hour launches Monday, August 17, 2026 (menu posted on their site, stamped with the date).",
      v: true, url: "https://www.littlebirdieva.com/menu", link: "littlebirdieva.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Chop Shop Taco", lat: 38.8133735, lng: -77.0491268, walk: 15, addr: "1008 Madison St",
      when: "Mon–Fri 3–7 PM",
      deals: "Tacos, margaritas, cocktails & beer — the 3–7 window is on their own site, but deals aren’t itemized; call 571-970-6438 for specifics.",
      vibe: "Garage-chic taco & margarita bar in Parker-Gray, from the Mason Social team.",
      note: "A miss from the July edition — it’s been here since 2023 with one of the longest windows on the map.",
      v: true, url: "https://www.chopshoptaco.com/", link: "chopshoptaco.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Pak Soii Izakaya & Bar", lat: 38.8235581, lng: -77.0580104, walk: 20, addr: "1909 Mt Vernon Ave",
      when: "Mon–Fri 3–6 PM (excludes holidays)",
      deals: "Happy-hour menu of skewers, sushi, and small plates at this new Del Ray izakaya (opened Oct 2025 in the old Zuki Moon space). Own site confirms the window but doesn’t post prices — check on arrival.",
      vibe: "New Japanese izakaya counter — sushi, robata skewers, small plates.",
      v: true, url: "https://www.paksoiiizakaya.com/", link: "paksoiiizakaya.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Vermilion", lat: 38.8054973, lng: -77.0522910, walk: 21, addr: "1120 King St",
      when: "Days/times no longer published — was Tue–Fri 4–6, Sat–Sun 3–5 · bar & lounge · closed Mon",
      deals: "Priced HH menu still posted: food $6–10 (Philly arancini $6, steak fries $6, fried pickles $6, pimento dip $8, chicken sliders $10), beer/cider $6, VA wines $7, House Old Fashioned $10, 50/50 Martini $8, HH Highball $8.",
      vibe: "Upscale farm-to-table New American with a spacious bar and lounge.",
      note: "Prices verified on their own menu PDF Aug 14, but the site stopped publishing the days/times — call to confirm the window.",
      v: false, url: "https://www.vermilionrestaurant.com/", link: "vermilionrestaurant.com",
      win: [{ d: [2,3,4,5], s: 16, e: 18 }, { d: [0,6], s: 15, e: 17 }] },
    { n: "Evening Star Cafe", lat: 38.8240260, lng: -77.0584490, walk: 21, addr: "2000 Mt Vernon Ave",
      when: "Mon–Fri 4:30–7 PM",
      deals: "Wells $5, PBR cans $2, Bluejacket & Crisp drafts $5, house wine $7, daily “dealer’s choice” cocktail $7. Smoked pimento cheese $7, marinated olives $5, $5 tacos card.",
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
      note: "Window re-verified Aug 14; their HH price menu is currently broken on the site, so the July prices are unconfirmed — verify on arrival.",
      v: true, url: "https://www.tjstones.com/tap-room", link: "tjstones.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Hank's Oyster Bar", lat: 38.8138410, lng: -77.0442766, walk: 22, addr: "818 N Saint Asaph St",
      when: "Tue–Fri 4–6 PM · at the bars only",
      deals: "House spirits $9, select beers $6 (Narragansett, Flying Dog), house wines $7. Oysters $2.50 each, sliders $7–9, deviled eggs $7, fried pickles $5.",
      vibe: "Lively New England-style oyster and raw bar.",
      v: true, url: "https://hanksoysterbar.com/old-town/menus/", link: "hanksoysterbar.com",
      win: [{ d: [2,3,4,5], s: 16, e: 18 }] },
    { n: "Tequila & Taco", lat: 38.8016660, lng: -77.0616950, walk: 22, addr: "540 John Carlyle St",
      when: "Mon–Fri 3–6 PM · bar & dining room",
      deals: "Street corn $5, elote loco $5, nachos $8, T&T dip sampler $10, empanada $4, trio tacos $12. All beer $5, margarita flight $12 (frozen $10), $1 off fresh-squeezed rocks margaritas.",
      vibe: "Contemporary margarita & taco bar in Carlyle Square.",
      v: true, url: "https://www.alexandriataco.com/events/happy-hour", link: "alexandriataco.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "The Majestic", lat: 38.8056311, lng: -77.0495570, walk: 25, addr: "911 King St",
      when: "“Majestic Hour” · Mon–Fri 3–7 PM · at the bar",
      deals: "A dedicated bar-bites menu plus the iconic Majestic Burger at a happy-hour price. The window is posted on their own site; prices are not — call 703-837-9117.",
      vibe: "Old Town landmark (the 1932 neon sign) reopened April 2026 under chef Santiago Lopez — New American with a Mediterranean lean.",
      note: "New this edition. Reopened to the public April 10, 2026 under new ownership, so every pre-2026 listing for this address is out of date.",
      v: true, url: "https://www.themajesticva.com/", link: "themajesticva.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "The People's Drug", lat: 38.8057579, lng: -77.0486695, walk: 25, addr: "103 N Alfred St",
      when: "Aggregators say Mon–Fri 3–7 PM — not posted by the venue",
      deals: "No happy-hour menu on their own site; it publishes only “cocktail hours are 4pm–midnight Monday–Friday and all day Saturday & Sunday.” Aggregators claim a 3–7 bar happy hour. Call 571-257-8851.",
      vibe: "Lunch-counter revival in a 1905 drugstore space — serious cocktail bar attached to a sandwich shop.",
      v: false, url: "https://thepeoplesdrug.com/", link: "thepeoplesdrug.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Del Ray Public House", lat: 38.8260297, lng: -77.0587719, walk: 25, addr: "2218 Mt Vernon Ave",
      when: "Mon–Fri 4–6 PM",
      deals: "$2 off all draft beers, glasses of wine, DRP cocktails, and select food items.",
      vibe: "The old Del Ray Pizzeria, rebranded spring 2026 into a proper public house in a rambling old Del Ray house.",
      note: "New this edition. Cubbies — Chicago-style hot dogs and Italian beef — opened upstairs July 18, 2026, weekends only.",
      v: true, url: "https://www.delraypublichouse.com/", link: "delraypublichouse.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Pork Barrel BBQ", lat: 38.8266821, lng: -77.0589169, walk: 26, addr: "2312 Mt Vernon Ave",
      when: "Weekdays 4–6 PM",
      deals: "The window is listed as a recurring event on their own site; prices aren’t published — call 703-822-5699. Live music every Friday at 8:30, music bingo some Wednesdays.",
      vibe: "Del Ray’s oak-and-hickory smokehouse, a neighborhood institution with a patio.",
      note: "New this edition.",
      v: true, url: "https://www.bbqdelray.com/events", link: "bbqdelray.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Don Taco", lat: 38.8050947, lng: -77.0484934, walk: 26, addr: "808 King St",
      when: "Aggregators say Mon–Fri 3–7 PM — not posted by the venue",
      deals: "Widely listed as $4 tacos plus drink specials, but their own site posts no happy-hour menu (the drink menu is image-only, dated Oct 2025). Call 703-518-5001.",
      vibe: "Loud, colorful “Flex-Mex” taco and tequila bar — 60+ tequilas and a wall of margaritas.",
      v: false, url: "https://www.dontacova.com/", link: "dontacova.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "The Light Horse", lat: 38.8053736, lng: -77.0475599, walk: 27, addr: "715 King St",
      when: "Mon–Fri 3–6 PM",
      deals: "$5 main draft-line beers, $5.50 Tito’s, $5 house wine, $10 seasonal cocktails, plus happy-hour bites — wings, dips, burgers.",
      vibe: "Three-level King St bar and grill; the upstairs is the neighborhood’s default big-group room.",
      note: "New this edition.",
      v: true, url: "https://thelighthorserestaurant.com/", link: "thelighthorserestaurant.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Cheesetique", lat: 38.8273152, lng: -77.0585775, walk: 27, addr: "2411 Mt Vernon Ave",
      when: "3–6 PM EVERY DAY · bar & lounge only",
      deals: "$9 across the board: Oink Fashioned (bourbon, maple, bacon topper), Alexandria Belle, Virginia Sour, Del Ray Buzz, Apple Martini, Graham Beck Brut Rosé, Sauvignon Blanc, red Bordeaux, plus zero-proof. $5 snacks: fried cheese curds, warm olives & manchego, crispy cheese roll, spinachoke dip, wagyu slider. Cheese Lady Sampler $16.",
      vibe: "Cheese shop out front, dim little wine bar in back — the Del Ray classic.",
      note: "New this edition — the furthest spot on the map, and the only one pouring seven days a week.",
      v: true, url: "https://www.cheesetique.com/menu/happy-hour/", link: "cheesetique.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 18 }] },
    { n: "Murphy's Grand Irish Pub", lat: 38.8053420, lng: -77.0474738, walk: 27, addr: "713 King St",
      when: "Every day 3–7 PM",
      deals: "$2.25 off Irish & craft beers, $1.25 off domestics, $3.25 off Jameson, $5 select apps. Weekly: Mon ale burgers 11–3, Tue ½-price burgers 4–9 + trivia at 8, Wed wing night, Thu steak night 5–9.",
      vibe: "Two-floor Irish pub with nightly live music and no cover — the King St standby.",
      note: "New this edition. Seven days a week, and the longest daily window on the map.",
      v: true, url: "https://murphyspub.com/weekly-specials/", link: "murphyspub.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 19 }] },
    { n: "Rustico", lat: 38.8215706, lng: -77.0465284, walk: 27, addr: "827 Slaters Ln",
      when: "4–6 PM · days no longer published (was Mon–Fri)",
      deals: "From their own HH menu: $5 drafts (Notch Kölsch, Lawson’s Little Sip, Sojourn Pink Lady, Drekker POG), $6 wines (sauvignon blanc, pinot noir), $7 cocktails (martini, old fashioned, negroni, manhattan). $5 snacks: meatball sliders, fried chicken sliders, risotto tots, thick-cut fries. $10: wings, pesto flatbread, 10-inch margherita.",
      vibe: "Beer temple — hundreds of bottles, hearth-fired pizza, a long bar out on Slaters Lane.",
      note: "New this edition. Prices verified on their own happy-hour PDF, but the PDF gives only “4PM–6PM” with no days — confirm before you go (703-224-5051).",
      v: false, url: "https://www.rusticorestaurant.com/", link: "rusticorestaurant.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] }
  ]
};
