PRIME PATH TRAVELS & TOURS LIMITED — WEBSITE
============================================

WHAT'S IN THIS FOLDER
---------------------
index.html          Home page (hero, demo flight booking engine, services, destinations,
                    packages, testimonials, trip planner, inquiry form)
destinations.html   Destinations gallery with live search & region filter (12 destinations)
packages.html       Holiday packages with category filters (9 packages)
services.html       All 10 service specializations + consultation process
about.html          Company story, mission/vision/values, team
contact.html        Contact channels, inquiry form, trip planner, FAQ

assets/logo.svg     Brand logo (vector — scalable to any size)
css/tailwind.css    Compiled Tailwind stylesheet (kept for reference/rebuilds;
                    all pages already have CSS inlined and are self-contained)
build/              Tailwind source files for rebuilding the CSS if you edit designs
docs/               Business planning documents (licensing/costs for Nigeria,
                    host-agency model explainer)

HOW TO PUBLISH
--------------
The 6 HTML files are fully self-contained (CSS inlined, no CDN needed except
Google Fonts which degrades gracefully offline). To publish:

  1. Upload the 6 HTML files + assets/ folder to any static host
     (cPanel file manager, Netlify, Vercel, GitHub Pages, Hostinger, etc.)
  2. Set index.html as the home page (automatic on most hosts)
  3. Point your domain (e.g. primepathtravels.com) at the host

BEFORE YOU GO LIVE — REPLACE THESE PLACEHOLDERS
-----------------------------------------------
  - Phone number:          +234 (0) 800 000 0000
  - WhatsApp number:       2348000000000  (appears in all wa.me links)
  - Email:                 info@primepathtravels.com (if different)
  - Office address:        [Office Address], Lagos, Nigeria
  - RC number:             RC [Number]
  - Team members on about.html (names/roles are illustrative placeholders)
  - Statistics (2,500+ visas, 1,200+ trips, etc.) — set to your real numbers
  - Package prices and inclusions — confirm with your suppliers

A quick search for "800 000 0000", "2348000000000", "[Office Address]" and
"[Number]" across the files finds every placeholder.

DEMO BOOKING ENGINE
-------------------
The flight search on index.html runs in DEMO MODE with sample fares.
At launch it is meant to be connected to a real flight API (consolidator
feed, Amadeus, Duffel, etc.) plus a payment gateway (Paystack/Flutterwave).
See docs/Flight-Booking-Requirements-and-Costs-Nigeria.md for the roadmap,
licensing requirements and costs.

REBUILDING TAILWIND AFTER EDITS
-------------------------------
If you change any Tailwind classes in the HTML:

  cd build
  npm install
  npx tailwindcss -c tailwind.config.js -i input.css -o ../css/tailwind.css --minify
  python3 inject.py        # re-inlines the CSS into every page

(Requires Node.js 16+ and Python 3.)

© Prime Path Travels & Tours Limited. All original code and artwork.
