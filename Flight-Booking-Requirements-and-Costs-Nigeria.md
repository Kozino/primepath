# Flight Booking & Ticketing Website — Requirements, Legal Implications & Costs
### Prime Path Travels & Tours Limited (Nigeria)
**Prepared: August 2026** · Companion document to `index.html` (the website, already built)

> **Your situation:** Company registered with CAC ✅ · No travel-industry accreditation yet ⬜ · Goal: a website with **live flight search, online payment and e-ticket issuance**.

---

## 1. Executive Summary — The 3-Layer Reality

A "book-and-issue-tickets" website is not just software. It sits on **three layers**, and each layer has its own requirements and costs:

| Layer | What it is | Who controls it | Can it be skipped? |
|---|---|---|---|
| **1. Licence layer** | Right to *sell and issue* airline tickets in Nigeria | NCAA (federal regulator) + IATA/BSP | ❌ Never — this is the legal core |
| **2. Technology layer** | The website + flight-data API + payment gateway | You + your vendors | Partially (start manual) |
| **3. Ongoing compliance layer** | Taxes, 5% ticket sales charge, data protection, consumer law | You, continuously | ❌ Never |

**Bottom line (detail in §6):**

| Path | Time to live ticketing | First-year cash cost (indicative) |
|---|---|---|
| **A. Lean path** — NCAA licence + issue through an IATA-accredited host/consolidator + this website with payments | **2–5 months** | **≈ ₦3.5m – ₦9m** (incl. web build-out) |
| **B. Full IATA path** — your own IATA code & BSP ticketing | **12–24 months** (IATA wants trading history & financials) | Path A **+ $31k–$52k** tied up in bond/fees |

**Recommendation: Do A now, B in year 2.** Almost every successful Nigerian agency starts on the host-agency model.

---

## 2. LAYER 1 — Legal & Licensing Requirements (Nigeria)

### 2.1 The law you must comply with

- **Civil Aviation Act 2022** empowers the **Nigerian Civil Aviation Authority (NCAA)** to regulate travel agencies.
- **Nigeria Civil Aviation Regulations (Nig. CARs), Part 18.9.4** states:
  - *18.9.4.1* — travel agencies **must register with NCAA before commencing operations**; and
  - *18.9.4.2* — agencies must **join and trade on IATA's BSP platform only after NCAA registration**.
- NCAA has been **cracking down on unregistered online travel sellers** — operating without registration invites sanctions, fines and closure.

### 2.2 NCAA Travel Agency Registration — official requirements

Application is made in writing to the **Director-General Civil Aviation, NCAA, Nnamdi Azikiwe International Airport, Abuja**, with:

| # | Requirement | Your status / Cost |
|---|---|---|
| 1 | Duly completed form **NCAA/TA.001** | Obtain from NCAA Travel Agency Unit |
| 2 | **Non-refundable registration fee: ₦100,000** | Pay at NCAA |
| 3 | Certificate of Incorporation + **MEM&A with minimum paid-up share capital of ₦2,000,000** | ⚠️ Check your CAC documents — if share capital < ₦2m or your objects don't cover travel agency business, you must **amend at CAC** first |
| 4 | Profile of the Directors | Prepare |
| 5 | Corporate profile of aviation-related services | Prepare |
| 6 | Current **tax clearance certificate** of the company **and each director** | Requires FIRS + State IRS filings |
| 7 | **At least 2 full-time qualified staff** who completed an **Airline Ticketing & Reservation course** at a recognised aviation training institution | ⚠️ Budget for training (see 2.4) |
| 8 | Copy of IATA accreditation *(if available — not needed at application)* | Later |
| 9 | Evidence of **NANTA membership** (expected in practice) | See 2.3 |

*Annual renewal: per the NCAA Fees Schedule — confirm current figures with the Travel Agency Unit when applying.*

### 2.3 NANTA (National Association of Nigeria Travel Agencies)

Trade-association membership is routinely expected as part of the NCAA file and gives suppliers, airlines and the regulator confidence that you are a serious agency. Fees are modest; contact NANTA for the current schedule (budget an indicative **₦100k–₦300k**). It also opens consolidator/partner relationships you will need in Phase 1.

### 2.4 Staff qualification (the hidden requirement)

You need **two trained ticketing staff**. Options:

| Option | Indicative cost | Duration |
|---|---|---|
| Local aviation training schools (Lagos/Abuja) ticketing & reservation certificates | ₦150k–₦400k per person | 4–12 weeks |
| IATA Training (e.g., Foundation in Travel & Tourism, GDS fares & ticketing) | ≈ $400–$1,200 per person | 3–6 months (self-paced available) |

⚠️ The same trained staff will later operate your GDS (Amadeus/Sabre) — train them on the GDS you plan to use.

### 2.5 IATA / BSP accreditation — what it takes to ISSUE tickets directly

This is the end-game that lets you print e-tickets **under your own IATA numeric code** and settle with all airlines through one channel (BSP — Billing and Settlement Plan):

- **Prerequisite:** NCAA Certificate of Registration — IATA verifies it directly with NCAA; accreditation is legally impossible in Nigeria without it.
- **One-time accreditation fee:** CHF 250–2,500 (≈ **$320–$3,220**) depending on tier.
- **Annual fee:** CHF 48–500 (≈ **$60–$650**), scaled to BSP sales.
- **Financial security (bond/bank guarantee):** typically **$30,000–$50,000**, held for at least the first 2 years of agency life.
- **Financial scrutiny:** audited/verified finances; IATA can place you on a trial period if financials are weak.
- **Premises & professionalism:** inspectable office, qualified manager, BSPlink capability, GDS access, PCI-DSS awareness.
- **Working capital reality:** BSP **debits your account for every ticket issued** on fixed cycles (weekly/fortnightly) regardless of whether your client has paid you. Mature agencies keep credit lines/client-deposit floats for this.
- **Alternative — TIDS (Travel Industry Designator Service):** a *free* IATA registration that gives you an industry ID **without** ticketing rights. Fine for a non-ticketing intermediary; useless for issuing.

### 2.6 The shortcut that makes business legal NOW: host agency / consolidator model

While you qualify for IATA, you issue tickets **through an already-accredited partner**:

- You sell and take payment on your website → you book through the consolidator/host's IATA code → they issue the e-ticket → you earn markup/service fee.
- No IATA fees, no $30–50k bond, no BSP cash-flow risk while small.
- Nigerian agencies commonly plug into consolidator **B2B portals/APIs** (many will also white-label a booking engine for you — ask for their "B2B agent" desk).
- Your NCAA registration is still required — the model changes *who prints the ticket*, not *whether you must be registered*.

### 2.7 Tax & statutory registration

| Item | Notes |
|---|---|
| FIRS **TIN** | Already needed for NCAA (tax clearance) and payment gateways |
| **VAT (7.5%)** | Charge on your service fees/markup |
| Company Income Tax | Due according to your turnover band (small-company relief may apply below ₦25m turnover — confirm with your accountant) |
| State levies, business premises permit | As applicable in your State |

---

## 3. LAYER 2 — The Website & Booking Engine (Technology)

### 3.1 What you already have

`index.html` is a complete, self-contained client-facing website: services showcase, flight search, results, passenger capture, payment selection, confirmation flow, enquiry form, privacy/terms/refund drafts. It runs in **demo mode** — the screens are real, the data is sample data.

### 3.2 What must be added to go live

| Component | What it does | Options & indicative cost |
|---|---|---|
| **Flight content API** | Real-time search, fares, PNR creation, ticketing | **Amadeus Self-Service** (pay-as-you-go, free test tier); **Sabre**; **Travelport**; **Duffel** (simple modern API); **Kiwi.com B2B**; or your **consolidator's API/white-label** (often cheapest for Nigeria) |
| **Payment gateway** | Collect card/transfer/USSD payments | See 3.3 |
| **Backend & database** | Holds bookings, passengers, triggers ticketing | Dev cost in 3.4; hosting in 3.5 |
| **e-Ticket issuance** | On payment success → issue via API (your IATA code or host's) | Included in integration work |

### 3.3 Payment gateways (Nigeria, 2026 indicative)

| | **Paystack** | **Flutterwave** |
|---|---|---|
| Local NGN fee | 1.5% + ₦100 (capped ₦2,000) | ≈ 1.4%–2.0% (capped ₦2,000) |
| International cards | ≈ 3.9% + ₦100 | ≈ 3.8%–4.8% |
| Settlement | T+1 | T+1 (instant option) |
| Onboarding needs | CAC certificate, TIN, matching bank account, website with T&C/Privacy/Refund pages | Same |
| Notes | Excellent docs/plugins | Strong multi-currency |

Your site already has the policy pages gateways require. **PCI-DSS: never touch raw card data** — use the gateway's hosted checkout and you inherit their PCI-DSS Level 1 certification (already how the site is structured).

### 3.4 Build-out cost scenarios

| Scenario | What you pay for | Indicative cost |
|---|---|---|
| **A. Consolidator white-label** | Their engine, your brand + this site as marketing/SEO front | ₦300k–₦1m setup, then per-booking fees |
| **B. Wire this site to APIs** (recommended) | Dev connects flight API + Paystack/Flutterwave + email/SMS tickets to your existing front-end | ₦1.2m–₦4m one-time |
| **C. Fully custom OTA platform** | Bespoke engine, admin dashboard, agent sub-accounts, reports | ₦3m–₦8m+ |

### 3.5 Hosting, domain, misc (annual)

| Item | Indicative annual cost |
|---|---|
| Domain (.com / .com.ng) | ₦8k–₦20k |
| Hosting (VPS/cloud able to run a booking engine) | ₦150k–₦800k |
| SSL certificate | Free (Let's Encrypt) |
| Business email (Google/MS 365 or Zoho) | ₦0–₦120k |
| SMS/e-ticket notifications | ₦50k–₦200k |
| Maintenance/retainer (dev) | ₦300k–₦1m |

---

## 4. LAYER 3 — Ongoing Compliance

### 4.1 The 5% Ticket Sales Charge (TSC)

NCAA collects **5% of every ticket originating from Nigeria** (shared with NAMA, NiMET, NCAT, AIB). In practice this is **collected through IATA BSP** — the price of your ticket already includes it; the system remits it. If you operate via a consolidator, it is handled inside their ticketing. Just know it exists — and that *advertising fares that exclude it* is a compliance/PR mistake.

### 4.2 Nigeria Data Protection Act 2023 (NDPA) — your website collects passports!

A booking site processes **names, passport numbers, dates of birth, payment data** — squarely personal data.

- You need: privacy policy (drafted ✅), lawful basis, data-subject rights handling, breach process, and secure storage.
- **NDPC registration** is mandatory once you are a "data controller/processor of major importance" — the trigger includes processing data of **more than 1,000 data subjects within 6 months**. A growing OTA will cross that; the registration fee is **₦250,000** (UHL category).
- **Annual Compliance Audit Returns (CAR)** due **31 March each year** once registered.
- Penalties under NDPA 2023 are significant (up to ₦10m or 2% of turnover for some breaches).

### 4.3 Consumer protection (FCCPA 2018 / FCCPC)

- Advertised prices must be honest and total (no bait fares).
- Refunds must follow your published refund policy (drafted ✅) and airline fare rules.
- The FCCPC actively fines businesses for failed-refund practices — this is the #1 complaint area for travel sellers.

### 4.4 Legal implications of getting it wrong (risk table)

| If you… | Consequence |
|---|---|
| Sell/advertise tickets **without NCAA registration** | NCAA sanctions/fines, business closure, criminal exposure under the Civil Aviation Act 2022 |
| Issue tickets without IATA accreditation (or misuse another agency's numeric code) | BSP fraud liability, airline delisting, civil/criminal liability |
| Default on BSP remittances (once accredited) | Bond called, accreditation revoked, blacklist |
| Breach NDPA (passport data) | NDPC fines (₦m scale), civil claims, reputational damage |
| Fail/delay refunds | FCCPC sanctions, chargeback waves, bank/gateway account termination |
| Take card payments outside a PCI-DSS gateway | PCI liability for fraud, gateway termination |

**Good news:** every risk above is neutralised by the roadmap in §5.

---

## 5. Recommended Roadmap (Phased)

### Phase 0 — NOW (week 0–2) · cost ≈ ₦150k–₦250k
- ✅ Website built (this file set).
- Buy domain + hosting, publish site in **enquiry/booking-request mode** (fully legal — you're taking requests, not issuing tickets).
- Send me your real phone/WhatsApp/email/address + logo to replace placeholders.

### Phase 1 — LICENCE & OPERATIONS (month 1–4) · cost ≈ ₦1.2m–₦3m
1. Confirm/raise share capital to ≥ ₦2m and amend MEM&A objects at CAC (if needed).
2. Get company + directors' tax clearance.
3. Enrol 2 staff in ticketing/GDS training.
4. Join NANTA.
5. File NCAA application (form NCAA/TA.001 + ₦100,000 + documents).
6. Sign up with an IATA-accredited **host/consolidator** — you can now legally sell and issue (through them) **manually** while the engine is built.

### Phase 2 — GO LIVE ONLINE (month 4–8) · cost ≈ ₦1.5m–₦4.5m + running costs
1. Dev wires the site to the flight API (consolidator feed, Amadeus, Duffel, etc.).
2. Integrate Paystack/Flutterwave hosted checkout (needs CAC + TIN + bank + your policy pages — ready ✅).
3. Test end-to-end: search → pay → PNR → e-ticket → email/SMS.
4. Publish full Privacy/Terms/Refund pages; start NDPA compliance workbook; diarise NDPC registration as volume approaches 1,000 data subjects.

### Phase 3 — OWN TICKETING POWER (month 12–24) · cost ≈ $31k–$52k + working capital
1. Apply for **IATA accreditation** (needs NCAA certificate ✅, 2 trained staff ✅, financials, premises).
2. Provide the **$30k–$50k bond/bank guarantee**.
3. Migrate issuance from consolidator to your own IATA code/BSP.
4. Arrange working-capital/credit line for BSP settlement cycles.

---

## 6. Total Cost Summary (indicative, Aug 2026 — verify before committing)

### One-time / setup

| Item | Lean path (A) | Full IATA (B) |
|---|---|---|
| CAC amendments (if needed) | ₦20k–₦100k | same |
| NCAA registration fee | ₦100,000 | ₦100,000 |
| NANTA membership | ~₦100k–₦300k | same |
| Staff training ×2 | ₦300k–₦1.6m | same |
| Website build-out + API/payment integration | ₦1.2m–₦4m | same |
| IATA accreditation fee | — | ≈ $320–$3,220 |
| IATA bond / bank guarantee | — | **$30,000–$50,000** (held, not spent) |
| **Setup total** | **≈ ₦2m–₦6m** | **+ ≈ $31k–$53k** |

### Recurring / annual

| Item | Indicative |
|---|---|
| Hosting, domain, email, SSL | ₦160k–₦940k |
| Dev maintenance retainer | ₦300k–₦1m |
| NCAA renewal / NANTA dues | per current schedules |
| IATA annual fee (path B) | ≈ $60–$650 |
| NDPC registration (when triggered) | ₦250,000 |
| Payment gateway | no fixed fee — 1.4%–2% local per transaction |
| Accounting/audit, insurance | ₦300k–₦1m |

**Working capital note (path B):** BSP debits weekly-ish; keep a float/credit line sized to your monthly ticket volume.

---

## 7. Master Checklist

- [ ] Replace all placeholder contacts (phone, WhatsApp, email, address, RC number) on the website
- [ ] Buy domain + hosting; publish Phase-0 site
- [ ] Verify share capital ≥ ₦2m & MEM&A objects cover travel agency (amend at CAC if not)
- [ ] Company + directors' tax clearance certificates
- [ ] Enrol 2 staff — ticketing & reservation course (GDS-aligned)
- [ ] NANTA membership
- [ ] NCAA form NCAA/TA.001 + ₦100,000 + full file → **Certificate of Registration**
- [ ] Host/consolidator agreement (Phase-1 issuance)
- [ ] Flight API contract + Paystack/Flutterwave live keys
- [ ] End-to-end test booking; refund drill; chargeback drill
- [ ] Publish final Privacy / Terms / Refund policies (have a Nigerian lawyer sign off)
- [ ] NDPA compliance: records, DPO contact, breach procedure; NDPC registration when >1,000 data subjects/6 months
- [ ] (Year 2) IATA accreditation → own BSP ticketing

---

## 8. Sources

- NCAA — Guidelines & Requirements for Registration of Travel Agency: ncaa.gov.ng/services/air-transport/guidelines-and-requirements-for-registration-of-travel-agency-grant
- NCAA — Commercial & Statistics (5% Ticket Sales Charge / BSP unit): ncaa.gov.ng/directorates/air-transport-regulation/commercial-and-statistics
- Eko Solicitors — IATA Accreditation in Nigeria (Civil Aviation Act 2022; Nig. CARs Part 18.9.4): ekosolicitors.com/iata-accreditation-in-nigeria-the-ultimate-thing-to-note
- AltexSoft — IATA BSP explained (fees, bond $30k–$50k, settlement cycles): altexsoft.com/blog/iata-bsp
- AltexSoft — IATA accreditation guide (CHF fee tiers, $50k bond for new agents): altexsoft.com/blog/iata-accreditation
- PHPTravels — IATA accreditation costs 2026 & TIDS (free): phptravels.com/blog/how-to-certify-as-an-iata-travel-agency
- Brands.ng / Money.ng / PlanetWeb — Paystack vs Flutterwave fee comparison (2026)
- Andersen Nigeria / NDPC GAID — NDPA 2023 s.44 registration, thresholds, ₦250,000 fee, CAR filings: ng.andersen.com · ndpc.gov.ng

> **Disclaimer:** This document is a planning guide, not legal advice. Fees and rules change — confirm current figures directly with NCAA, IATA, NANTA, NDPC, FIRS and your payment gateway, and engage a Nigerian lawyer for your final contracts and policies.
