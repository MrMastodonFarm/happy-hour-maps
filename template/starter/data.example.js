/* Starter data file for a new happy-hour map.
   Copy template/starter/ to maps/<city>/, then fill this in.
   Every `spot` needs lat/lng — geocode addresses with scripts/geocode.py.
   Times in `win` use 24h decimal local hours: 4:30 PM = 16.5.
   d = weekday numbers, Sun=0 … Sat=6. */
window.DATA = {
  meta: {
    docno: "HH-01",
    eyebrow: ["Report to the Thirsty", "Field-verified MONTH DAY, YEAR"],
    title: 'Happy Hour Within a Short Walk of <em>SOME PLACE</em>',
    dek: 'A quick, field-checked list of happy hours near <strong>ADDRESS</strong>. ' +
         'Entries we couldn’t fully confirm are flagged <strong>“check ahead.”</strong> ' +
         'Sorted nearest-first — pin numbers match the list.',
    tz: "America/New_York",     // IANA zone for the city (drives "pouring now")
    zoom: 16,                    // max zoom when framing the pins
    radiusMin: 10,               // optional dashed walk-radius ring, in minutes (omit to hide)
    keyLabel: "origin",          // label under the navy anchor pin in the map key
    anchor: { name: "Origin name", label: "◆", addr: "123 Main St", lat: 0, lng: 0 },
    // Optional appendix HTML (methodology, closed venues, etc.). Omit to hide the section.
    appendix:
      '<h2>Appendix</h2>' +
      '<h3>Methodology</h3>' +
      '<p>How and when this was compiled; what “verified” vs. “check ahead” mean.</p>'
  },
  spots: [
    { n: "Venue Name", lat: 0, lng: 0, addr: "123 Main St",
      // walk is optional — omit and it's estimated from distance to the anchor
      when: "Mon–Fri 4–6 PM · bar only",
      deals: "The actual deals: $ prices, what's discounted.",
      vibe: "One-line character sketch.",
      v: true,                                   // true = verified, false = "check ahead"
      url: "https://example.com/", link: "example.com",
      note: "Optional caveat shown with a ⚠.",   // omit if none
      win: [{ d: [1,2,3,4,5], s: 16, e: 18 }] }  // Mon–Fri 4–6 PM
    // …more spots
  ]
};
