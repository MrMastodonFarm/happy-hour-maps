/* ============================================================
   happy-hour-maps — shared renderer (Leaflet mode)
   Reads a global `DATA` object (see any maps/<city>/data.js) and
   builds the masthead, an interactive Leaflet map with numbered
   pins, and the nearest-first findings list — with live
   "pouring right now" detection in the map's local time zone.
   ============================================================ */
(function () {
  "use strict";
  var DATA = window.DATA;
  if (!DATA) { console.error("happy-hour-maps: window.DATA is missing"); return; }
  var meta = DATA.meta || {};
  var spots = (DATA.spots || []).slice();

  /* ---- masthead + appendix ---- */
  function setHTML(id, html) { var el = document.getElementById(id); if (el && html != null) el.innerHTML = html; }
  document.title = meta.pageTitle || stripTags(meta.title) || "Happy Hour Map";
  setHTML("docno", meta.docno || "");
  var eyebrow = document.getElementById("eyebrow-extra");
  if (eyebrow && meta.eyebrow) {
    eyebrow.innerHTML = meta.eyebrow.map(function (s) { return "<span>" + s + "</span>"; }).join("");
  }
  setHTML("mast-title", meta.title || "");
  setHTML("mast-dek", meta.dek || "");
  if (meta.appendix) setHTML("appendix", meta.appendix);
  else { var ap = document.getElementById("appendix"); if (ap) ap.remove(); }
  if (meta.keyLabel) setHTML("key-label", meta.keyLabel);
  setHTML("map-foot-note", meta.footNote || "map data © OpenStreetMap contributors, © CARTO");

  /* ---- local-time "now" + open-now test ---- */
  function localNow(tz) {
    try {
      var p = new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "short", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date());
      var g = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      var days = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      return { d: days[g("weekday")], h: (parseInt(g("hour"), 10) % 24) + parseInt(g("minute"), 10) / 60 };
    } catch (e) { return null; }
  }
  var now = localNow(meta.tz || "America/New_York");
  var isOn = function (s) {
    return !!(now && s.win && s.win.some(function (w) { return w.d.indexOf(now.d) > -1 && now.h >= w.s && now.h < w.e; }));
  };

  /* ---- distances / walk estimate / nearest-first ---- */
  var anchor = meta.anchor || null;
  function haversineM(a, b, c, d) {
    var R = 6371000, toR = Math.PI / 180;
    var dLat = (c - a) * toR, dLng = (d - b) * toR;
    var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(a * toR) * Math.cos(c * toR) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    return 2 * R * Math.asin(Math.sqrt(s));
  }
  spots.forEach(function (s) {
    if (anchor && s.lat != null && s.lng != null) {
      s._distM = haversineM(anchor.lat, anchor.lng, s.lat, s.lng);
      if (s.walk == null) s.walk = Math.max(1, Math.round(s._distM / 80)); // ~80 m/min walking
    }
  });
  if (meta.sort !== "none") {
    spots.sort(function (a, b) { return (a.walk || 0) - (b.walk || 0) || (a._distM || 0) - (b._distM || 0); });
  }

  /* ---- Leaflet map ---- */
  var tileSets = {
    light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
  };
  var attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';
  function prefersDark() {
    var root = document.documentElement.getAttribute("data-theme");
    if (root === "dark") return true;
    if (root === "light") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  var map = L.map("map", { scrollWheelZoom: false, zoomControl: true });
  var tileLayer = L.tileLayer(prefersDark() ? tileSets.dark : tileSets.light, {
    maxZoom: 19, attribution: attribution
  }).addTo(map);
  map.on("click", function () { clearActive(); });

  /* anchor marker (the report's origin, e.g. GAO) */
  if (anchor && anchor.lat != null) {
    L.marker([anchor.lat, anchor.lng], {
      icon: L.divIcon({ className: "hh-pin hh-anchor", html: '<div class="hh-dot">' + (anchor.label || "◆") + "</div>", iconSize: [32, 32], iconAnchor: [16, 16] }),
      interactive: true, keyboard: false, zIndexOffset: 1000
    }).addTo(map).bindPopup("<b>" + (anchor.name || "Origin") + "</b><br>" + (anchor.addr || ""));
  }
  /* optional walk-radius ring */
  if (anchor && anchor.lat != null && meta.radiusMin) {
    L.circle([anchor.lat, anchor.lng], {
      radius: meta.radiusMin * 80, color: getVar("--amber"), weight: 2, dashArray: "7 8", opacity: .55, fill: false, interactive: false
    }).addTo(map);
  }

  /* ---- list + pins ---- */
  var listEl = document.getElementById("spots");
  var markers = [], cards = [], bounds = [], anyNow = false;

  spots.forEach(function (s, i) {
    var id = i + 1, on = isOn(s) && s.v;
    if (on) anyNow = true;

    /* list card */
    var li = document.createElement("li");
    li.className = "spot"; li.id = "spot-" + id;
    li.innerHTML =
      '<div class="spot-top"><span class="num">' + id + "</span>" +
      '<h3 tabindex="0">' + s.n + '</h3><span class="walk">~' + s.walk + " min walk</span>" +
      '<span class="badges">' + (on ? '<span class="badge now">now</span>' : "") +
      (s.v ? '<span class="badge v">verified</span>' : '<span class="badge u">check ahead</span>') + "</span></div>" +
      '<p class="when">' + s.when + "</p>" +
      '<p class="deals">' + s.deals + "</p>" +
      (s.vibe ? '<p class="vibe">' + s.vibe + "</p>" : "") +
      (s.note ? '<p class="caveat">⚠ ' + s.note + "</p>" : "") +
      '<p class="meta">' + s.addr + (s.url ? ' · <a href="' + s.url + '" target="_blank" rel="noopener">' + (s.link || "website") + "</a>" : "") + "</p>";
    listEl.appendChild(li);
    cards.push(li);

    /* map pin */
    var marker = null;
    if (s.lat != null && s.lng != null) {
      marker = L.marker([s.lat, s.lng], {
        icon: L.divIcon({ className: "hh-pin" + (on ? " now" : ""), html: '<div class="hh-dot">' + id + "</div>", iconSize: [28, 28], iconAnchor: [14, 14] }),
        keyboard: true, title: s.n
      }).addTo(map);
      marker.bindPopup("<b>" + s.n + "</b><br>" + s.addr + "<br>" + s.when);
      marker.on("click", function () { activate(id, true); });
      bounds.push([s.lat, s.lng]);
    }
    markers.push(marker);

    /* card interactions */
    li.querySelector("h3").addEventListener("click", function () { activate(id, false); });
    li.addEventListener("mouseenter", function () { setPinActive(id, true); });
    li.addEventListener("mouseleave", function () { if (!li.classList.contains("active")) setPinActive(id, false); });
  });

  function setPinActive(id, on) {
    var m = markers[id - 1]; if (!m) return;
    var el = m.getElement(); if (el) el.classList.toggle("active", on);
  }
  function clearActive() {
    cards.forEach(function (c) { c.classList.remove("active"); });
    markers.forEach(function (m) { if (m && m.getElement()) m.getElement().classList.remove("active"); });
  }
  function activate(id, fromMap) {
    clearActive();
    var li = cards[id - 1], m = markers[id - 1];
    if (li) { li.classList.add("active"); if (fromMap) li.scrollIntoView({ block: "nearest" }); }
    if (m && m.getElement()) m.getElement().classList.add("active");
    if (m && fromMap) m.openPopup();
  }

  /* frame the map */
  if (bounds.length) {
    if (anchor && anchor.lat != null) bounds.push([anchor.lat, anchor.lng]);
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: meta.zoom || 16 });
  } else if (anchor && anchor.lat != null) {
    map.setView([anchor.lat, anchor.lng], meta.zoom || 15);
  }

  if (anyNow) { var nn = document.getElementById("nowNote"); if (nn) nn.hidden = false; }

  /* react to light/dark toggle from the host */
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var swap = function () { tileLayer.setUrl(prefersDark() ? tileSets.dark : tileSets.light); };
    if (mq.addEventListener) mq.addEventListener("change", swap);
    new MutationObserver(swap).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }

  /* helpers */
  function getVar(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "#a8700f"; }
  function stripTags(h) { return h ? h.replace(/<[^>]*>/g, "") : ""; }
})();
