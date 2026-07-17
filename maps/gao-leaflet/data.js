/* GAO happy hours — Leaflet edition.
   Same field-verified content as the hero (schematic) map at ../gao/,
   with real coordinates geocoded from each street address via OSM Nominatim.
   Compiled / verified 2026-07-17. */
window.DATA = {
  meta: {
    docno: "GAO-26-HH02",
    eyebrow: ["Report to the Thirsty", "Field-verified July 17, 2026", "Map edition"],
    title: 'Happy Hour Accountability Review: <em>441 G St NW</em> and Surrounding Blocks',
    dek: 'All <strong>20 establishments</strong> below sit within about a <strong>10-minute walk</strong> of the GAO ' +
         'building, spanning Judiciary Square, Capitol Crossing, Gallery Place, and Penn Quarter. Every entry was ' +
         'checked against a live source this week; the handful we couldn’t fully confirm are flagged ' +
         '<strong>“check ahead.”</strong> Sorted nearest-first — pin numbers match the list.',
    tz: "America/New_York",
    zoom: 16,
    radiusMin: 10,
    keyLabel: "GAO",
    anchor: { name: "U.S. Government Accountability Office", label: "GAO", addr: "441 G St NW", lat: 38.8992298, lng: -77.0172546 },
    appendix:
      '<h2>Appendix</h2>' +
      '<h3>Worth knowing</h3>' +
      '<p><strong>PubKey</strong> (410 7th St NW, the old Hill Country space) has no formal happy hour but runs standing deals: ' +
      '21% off everything paid in Bitcoin, $9 Chicago dogs, cheap beer, Monday trivia and karaoke rooms. ' +
      '<strong>Daikaya’s izakaya</strong> (705 6th St, 2nd floor) cut back to Wed–Sat evenings only and its old ' +
      '5–7 PM happy hour no longer appears anywhere current. <strong>Dirty Habit</strong>’s happy hour rotates ' +
      'between its bar, lounge, and courtyard — ask the host where it’s running that day.</p>' +
      '<h3>Closed — still haunting old happy hour guides</h3>' +
      '<ul class="closed-grid">' +
      '<li><s>Hill Country BBQ</s> — closed Mar 2025 (now PubKey)</li>' +
      '<li><s>District Chophouse</s> — closed Mar 2024</li>' +
      '<li><s>Fadó Irish Pub</s> — closed Mar 2020</li>' +
      '<li><s>Bar Deco</s> — closed Nov 2023</li>' +
      '<li><s>701 Restaurant</s> — closed</li>' +
      '<li><s>Fig &amp; Olive</s> — closed Apr 2025 (bankruptcy)</li>' +
      '<li><s>Capitol City Brewing</s> — closed Aug 2025</li>' +
      '<li><s>Cranes</s> — apparently closed Feb 2026</li>' +
      '<li><s>Rosa Mexicano</s> — closed (now Mi Vida)</li>' +
      '</ul>' +
      '<h3>Methodology</h3>' +
      '<p>Compiled July 17, 2026. “Verified” means the venue’s own website, menu page, or menu PDF was opened and ' +
      'confirmed current. “Check ahead” means the venue is confirmed open but happy hour details rest on an aggregator ' +
      'listing or conflicting sources — call before counting on it. Walk times are estimates from 441 G St NW at a ' +
      'normal pace. Coordinates geocoded from street addresses via OpenStreetMap Nominatim; pins are accurate to the ' +
      'address, not the exact door. Most happy hours are <strong>bar/lounge area only</strong>; assume that unless noted.</p>'
  },
  spots: [
    { n: "Free State", lat: 38.8984619, lng: -77.0191292, walk: 2, addr: "501B G St NW",
      when: "Mon–Fri 4–6 PM · Mondays: $10 martinis all night",
      deals: "$6 select wine, beer, and rail drinks. Mid-Atlantic craft beer focus. No kitchen — carry-out food welcome.",
      vibe: "Family-run basement bar + patio; the closest option to GAO, one block west.",
      v: true, url: "https://www.freestatebar.com/", link: "freestatebar.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }, { d: [1], s: 18, e: 23 }] },
    { n: "L'Ardente", lat: 38.8989595, lng: -77.0140433, walk: 4, addr: "200 Massachusetts Ave NW (Capitol Crossing)",
      when: "Mon–Fri 4–6 PM · bar only",
      deals: "Happy hour at the bar of the 40-layer-lasagna glam Italian; prices not published — expect upscale.",
      vibe: "Dress-up scene; one of DC's toughest tables, but the bar HH is walk-in.",
      v: true, url: "https://www.lardente.com/", link: "lardente.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Hiya Izakaya — Love, Makoto", lat: 38.8988400, lng: -77.0138800, walk: 4, addr: "200 Massachusetts Ave NW, Ste 150",
      when: "Mon 4–10 PM (all night!) · Tue–Sun 4–6 PM · walk-in only",
      deals: "Whisky highballs and robata skewers at the Japanese bar inside the Love, Makoto food hall.",
      vibe: "Lively izakaya counter; Beloved BBQ and Dear Sushi share the hall.",
      v: true, url: "https://www.lovemakoto.com/", link: "lovemakoto.com",
      win: [{ d: [1], s: 16, e: 22 }, { d: [0,2,3,4,5,6], s: 16, e: 18 }] },
    { n: "Denson Liquor Bar", lat: 38.8971899, lng: -77.0201557, walk: 4, addr: "600 F St NW (basement; enter on 6th)",
      when: "Tue–Sat from 4:30 open to ~6:30 PM · closed Sun–Mon",
      deals: "Spring 2026 happy hour card: $15 craft cocktails, $10–12 bites (grilled cheese, deviled eggs, piquillo peppers).",
      vibe: "Moody subterranean cocktail den — the quality-cocktail pick near GAO.",
      note: "Closed for summer break Aug 24–31, 2026.",
      v: true, url: "https://www.densondc.com/", link: "densondc.com",
      win: [{ d: [2,3,4,5,6], s: 16.5, e: 18.5 }] },
    { n: "Clyde's of Gallery Place", lat: 38.8989551, lng: -77.0216867, walk: 6, addr: "707 7th St NW",
      when: "Oysters daily 3–5 PM &amp; 10 PM–close · drink deals late-night only",
      deals: "$15.99 half-dozen / $28.99 dozen oysters. Late night (Sun–Thu 10 PM+, Fri–Sat 11 PM+): $6 drafts, $9 wines, $3 off cocktails, starters &amp; burgers.",
      vibe: "Classic big saloon, pre-game staple.",
      note: "The afternoon window is oysters only — no afternoon drink discounts anymore.",
      v: true, url: "https://www.clydes.com/location/clydes-gallery-place/", link: "clydes.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 17 }, { d: [0,1,2,3,4], s: 22, e: 24 }, { d: [5,6], s: 23, e: 24 }] },
    { n: "Mi Vida", lat: 38.8968331, lng: -77.0209683, walk: 6, addr: "575 7th St NW",
      when: "Daily 12–7 PM · bar only",
      deals: "$5 beers, $7 wines, $8–9 cocktails, $39 margarita pitchers, discounted small plates.",
      vibe: "Big stylish modern-Mexican; the longest happy hour window in the radius.",
      v: true, url: "https://www.mividamexico.com/", link: "mividamexico.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 12, e: 19 }] },
    { n: "Penn Quarter Sports Tavern", lat: 38.8942389, lng: -77.0215529, walk: 7, addr: "639 Indiana Ave NW",
      when: "Listed Mon–Fri 4–7 PM — conflicting reports",
      deals: "$4–5 drafts (Miller Lite, Yuengling, Blue Moon), $5 rails/Tito's/Jack, $5 wine — if running.",
      vibe: "No-frills neighborhood sports bar with a rooftop deck.",
      note: "One June-2026 listing says the happy hour was dropped. Call 202-347-6666 before counting on it.",
      v: false, url: "https://www.dmvhappyhours.com/happyhours/penn-quarter-sports-tavern", link: "dmvhappyhours.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 19 }] },
    { n: "Dirty Habit", lat: 38.8969962, lng: -77.0224996, walk: 7, addr: "555 8th St NW (Hotel Monaco)",
      when: "Mon–Fri 3–7 PM",
      deals: "~$9 wines, $13 margaritas, ~$10 seasonal cocktails (frosé and friends).",
      vibe: "Swanky hotel courtyard scene; location rotates — ask the host.",
      v: true, url: "https://dirtyhabitdc.com/events", link: "dirtyhabitdc.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Zaytinya", lat: 38.8991821, lng: -77.0236791, walk: 7, addr: "701 9th St NW",
      when: "Mon–Fri 4–6 PM (per June 2026 listing)",
      deals: "$7 beer, $8 all wines, $10–16 cocktails, $6 flatbreads at the bar.",
      vibe: "Airy José Andrés Mediterranean mezze; polished after-work crowd.",
      note: "Own site doesn't publish HH details — confirm on arrival.",
      v: false, url: "https://dchappyhours.com/place/zaytinya", link: "dchappyhours.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Jaleo", lat: 38.8959243, lng: -77.0221617, walk: 8, addr: "480 7th St NW",
      when: "Mon–Fri 3–6:30 PM · bar area · “Sangría Hour”",
      deals: "$8 sangría, select wines, priced-down tapas ($8 patatas bravas, gambas al ajillo).",
      vibe: "José Andrés' flagship Spanish tapas institution, festive at the bar.",
      v: true, url: "https://www.jaleo.com/event/sangria-hour/", link: "jaleo.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18.5 }] },
    { n: "Carmine's", lat: 38.8956085, lng: -77.0217130, walk: 8, addr: "425 7th St NW",
      when: "Sun–Fri 3–7 PM · bar only",
      deals: "2-for-$6 meatball sliders, $9 apps, $10 cheese &amp; charcuterie, $6 Peroni/Miller Lite, $8 house wine, $10 Aperol fizz &amp; frozen cosmos.",
      vibe: "Big boisterous family-style Italian bar; generous 4-hour window.",
      v: true, url: "https://carminesnyc.com/menus/washington-dc-happy-hour", link: "carminesnyc.com",
      win: [{ d: [0,1,2,3,4,5], s: 15, e: 19 }] },
    { n: "Cuba Libre", lat: 38.9003410, lng: -77.0237003, walk: 8, addr: "801 9th St NW",
      when: "Mon–Fri 2–7:30 PM · bar &amp; bar tables",
      deals: "$8 mojitos/caipirinhas/sangría, $6 beer, $10 craft cocktail or Churrasco burger, $7–8 empanadas, tostones, croquetas, wings.",
      vibe: "Colorful Cuban rum bar; a 5½-hour window.",
      v: true, url: "https://www.cubalibrerestaurant.com/assets/pdfs/en/cuba-libre-washington-happy-hour-menu.pdf", link: "cubalibrerestaurant.com (menu PDF)",
      win: [{ d: [1,2,3,4,5], s: 14, e: 19.5 }] },
    { n: "The Smith", lat: 38.8977709, lng: -77.0243503, walk: 8, addr: "901 F St NW",
      when: "Mon–Fri 3–6 PM · plus Fri–Sat from 10 PM · “Martini Hour”",
      deals: "$12 martinis with hand-cut fries; $20 martini + three oysters.",
      vibe: "Bustling brasserie in a landmark bank building.",
      v: true, url: "https://thesmithrestaurant.com/location/penn-quarter/", link: "thesmithrestaurant.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }, { d: [5,6], s: 22, e: 24 }] },
    { n: "The Capital Grille", lat: 38.8932991, lng: -77.0205014, walk: 8, addr: "601 Pennsylvania Ave NW",
      when: "Mon–Fri 3–6 PM · lounge · “Capital Hours”",
      deals: "$12 cocktails, $9 wines, $18 sliced dry-aged NY strip, $12 truffle arancini.",
      vibe: "Clubby power-steakhouse lounge — peak DC.",
      note: "Times from a June 2026 listing; their site blocks robots. Confirm prices on arrival.",
      v: false, url: "https://www.capitalgrille.com/", link: "capitalgrille.com",
      win: [{ d: [1,2,3,4,5], s: 15, e: 18 }] },
    { n: "Boqueria", lat: 38.8994820, lng: -77.0237050, walk: 8, addr: "777 9th St NW",
      when: "Mon–Sat 3–7 PM",
      deals: "$8 mini martinis, $6 Spanish beer, sangría, $2–12 tapas ($2 pan con tomate, $6 croquetas).",
      vibe: "Barcelona-style tapas bar; venue brags on this HH itself, 4-hour window.",
      v: true, url: "https://boqueriarestaurant.com/location/dc/penn-quarter/", link: "boqueriarestaurant.com",
      win: [{ d: [1,2,3,4,5,6], s: 15, e: 19 }] },
    { n: "China Chilcano", lat: 38.8953808, lng: -77.0221400, walk: 9, addr: "418 7th St NW",
      when: "Mon–Fri 4–6 PM · bar &amp; patio · “Pisco Hour”",
      deals: "Discounted pisco sours &amp; chilcanos, wines by the glass, dim sum bites (prices unpublished).",
      vibe: "José Andrés' Peruvian-Chinese-Japanese mashup, quirky-cool.",
      v: true, url: "https://www.chinachilcano.com/event/pisco-hour-is-back/", link: "chinachilcano.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Oyamel", lat: 38.8949420, lng: -77.0216670, walk: 9, addr: "401 7th St NW",
      when: "Mon–Fri 4–6 PM · “Hora Feliz”",
      deals: "Specially priced margaritas and antojitos (grasshopper tacos for the brave).",
      vibe: "Festive upscale Mexican, killer margaritas.",
      v: true, url: "https://www.oyamel.com/", link: "oyamel.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "City Tap Penn Quarter", lat: 38.9010301, lng: -77.0237868, walk: 9, addr: "901 9th St NW",
      when: "Mon–Fri 4–6 PM (some listings say from 3)",
      deals: "$5 draft/can beers, $6 wines, $7 mixed drinks, $8 bites — ~40 taps.",
      vibe: "Big craft-beer gastropub; easy group default.",
      v: true, url: "https://www.citytap.com/menu/happy-hour-1/", link: "citytap.com",
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] },
    { n: "Ella's Wood Fired Pizza", lat: 38.8976680, lng: -77.0241800, walk: 10, addr: "610 9th St NW",
      when: "Mon–Fri 3:30–5:30 PM · bar only",
      deals: "$10–13 happy hour pizzas, $2 off all drafts, $8 sangría, $11 cocktails, $5 garlic fries.",
      vibe: "Casual wood-fired pizza bar (relocated from F St — alive and well).",
      v: true, url: "https://ellasdc.com/washington-dc-ella-s-wood-fired-pizza-happy-hour-menu", link: "ellasdc.com",
      win: [{ d: [1,2,3,4,5], s: 15.5, e: 17.5 }] },
    { n: "RPM Italian", lat: 38.9022647, lng: -77.0212717, walk: 10, addr: "650 K St NW",
      when: "Daily 3–6 PM · “Aperitivo Hour”",
      deals: "Select wines &amp; beers from $3, $8 signature cocktails, all cicchetti $8 (pizzettes, grilled oysters).",
      vibe: "Glossy see-and-be-seen Italian; best-value upscale HH around.",
      v: true, url: "https://www.rpmrestaurants.com/blogs/rpm-happy-hour/", link: "rpmrestaurants.com",
      win: [{ d: [0,1,2,3,4,5,6], s: 15, e: 18 }] }
  ]
};
