#!/usr/bin/env python3
"""Geocode street addresses to lat/lng via OpenStreetMap Nominatim.

Usage:
    python3 scripts/geocode.py "Washington, DC" < addresses.txt

stdin: one venue per line, "Name | 123 Some St"  (the part after "|" is geocoded)
       lines without "|" are geocoded whole.
Second arg is a region suffix appended to every query to disambiguate
(e.g. "Washington, DC" or "Boston, MA"). Optional but strongly recommended.

Prints TSV: name<TAB>address<TAB>lat<TAB>lng  (lat/lng = "NA" if not found)
so you can paste coordinates straight into a map's data.js.

Respects Nominatim's usage policy: <=1 request/sec, descriptive User-Agent.
Nominatim is fine for building static maps; do not hammer it in a loop at runtime.
"""
import sys, time, json, urllib.parse, urllib.request

REGION = sys.argv[1] if len(sys.argv) > 1 else ""
UA = "happy-hour-maps/1.0 (static map builder)"

def geocode(query):
    q = urllib.parse.quote(query)
    url = f"https://nominatim.openstreetmap.org/search?q={q}&format=json&limit=1&countrycodes=us"
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        d = json.load(r)
    return (d[0]["lat"], d[0]["lon"]) if d else ("NA", "NA")

for line in sys.stdin:
    line = line.strip()
    if not line:
        continue
    if "|" in line:
        name, addr = [p.strip() for p in line.split("|", 1)]
    else:
        name = addr = line
    query = f"{addr}, {REGION}" if REGION else addr
    try:
        lat, lng = geocode(query)
    except Exception as e:
        lat, lng = "NA", "NA"
        print(f"# error geocoding {addr!r}: {e}", file=sys.stderr)
    print(f"{name}\t{addr}\t{lat}\t{lng}")
    sys.stdout.flush()
    time.sleep(1.1)  # be polite to Nominatim
