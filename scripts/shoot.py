#!/usr/bin/env python3
import base64, json, subprocess, sys, time, urllib.request, os, signal

PORT = 4499
URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8791/maps/gao-leaflet/"
OUT = sys.argv[2] if len(sys.argv) > 2 else "/tmp/claude-1000/-home-bob92-claude-code-happy-hour/94b530a2-7efb-4741-b00f-edc34b598a7b/scratchpad/shot.png"
BASE = f"http://127.0.0.1:{PORT}"

def req(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    r = urllib.request.Request(BASE + path, data=data, method=method,
                               headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(r, timeout=60) as resp:
        return json.loads(resp.read().decode())

gd = subprocess.Popen(["/snap/bin/geckodriver", "--port", str(PORT)],
                      stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
sid = None
try:
    # wait for geckodriver
    for _ in range(30):
        try:
            urllib.request.urlopen(BASE + "/status", timeout=2); break
        except Exception:
            time.sleep(0.3)
    caps = {"capabilities": {"alwaysMatch": {
        "moz:firefoxOptions": {"args": ["-headless", "--width=1400", "--height=1600"]}}}}
    sess = req("POST", "/session", caps)
    sid = sess["value"]["sessionId"]
    req("POST", f"/session/{sid}/window/rect", {"width": 1400, "height": 1600, "x": 0, "y": 0})
    req("POST", f"/session/{sid}/url", {"url": URL})
    # let Leaflet init + tiles load
    time.sleep(6)
    diag = req("POST", f"/session/{sid}/execute/sync", {
        "script": (
            "return JSON.stringify({"
            "pins: document.querySelectorAll('.hh-pin .hh-dot').length,"
            "spots: document.querySelectorAll('.spot').length,"
            "tiles: document.querySelectorAll('.leaflet-tile-loaded').length,"
            "title: document.title,"
            "h1: (document.querySelector('h1')||{}).textContent||'',"
            "mapH: (document.getElementById('map')||{}).clientHeight||0,"
            "err: window.__err||null"
            "});"),
        "args": []})
    print("DIAG:", diag["value"])
    time.sleep(2)
    shot = req("GET", f"/session/{sid}/screenshot")
    with open(OUT, "wb") as f:
        f.write(base64.b64decode(shot["value"]))
    print("WROTE", OUT, os.path.getsize(OUT), "bytes")
finally:
    try:
        if sid: req("DELETE", f"/session/{sid}")
    except Exception as e:
        print("session delete err", e)
    gd.terminate()
    try: gd.wait(timeout=5)
    except Exception: gd.kill()
