# The Host Agency / Consolidator Model — Deep Dive
### How Prime Path Travels & Tours Ltd can legally sell & issue flight tickets BEFORE getting its own IATA accreditation
**Companion to `Flight-Booking-Requirements-and-Costs-Nigeria.md` · August 2026**

---

## 1. The core idea in one paragraph

Someone else already did the hard part. An established agency has already paid for IATA accreditation, posted the $30k–$50k bond, passed financial scrutiny, and holds a valid **IATA numeric code** connected to **BSP Nigeria**. Airlines recognise them as an authorised ticket seller. The **host/consolidator model** lets *you* ride on that infrastructure: they issue the actual e-ticket under **their** code, and you do everything else — find the client, set the price, take payment, deliver service — keeping the margin between your price and their net fare.

**Two flavours you'll hear (they overlap heavily in Nigeria):**

| | **Host agency** | **Consolidator (wholesaler)** |
|---|---|---|
| What they give you | Their accreditation umbrella, booking tools, back-office, training, sometimes a brand-able portal | Negotiated/bulk **net fares** (often below public prices) via a B2B portal or API |
| How they earn | Commission split on what you sell, or monthly/per-booking fees | They buy wholesale, sell to you at net; you mark up |
| Typical relationship | Closer — almost a parent company | Purely transactional — wallet top-up & book |
| In practice in Nigeria | Most large IATA agencies run **both**: a B2B "sub-agent desk" with wallet funding + net-fare markup | ← same thing |

---

## 2. How it works, step by step (the life of one ticket)

1. **You sign up** as a sub-agent. They ask for your CAC certificate, sometimes your NCAA certificate (good ones insist), ID of directors, and an initial **deposit/wallet funding**.
2. They give you a **B2B portal login** (or API keys, or a white-label site) showing live fares across 400+ airlines.
3. Your client books through **your** website, WhatsApp or office — your brand, your price.
4. You **fund your wallet** with the host (bank transfer) and issue the booking on their portal.
5. Within minutes the e-ticket is issued — under the **host's IATA numeric code** — and lands in your client's inbox. To the airline and the client, the ticket is 100% legitimate.
6. You charged your client *your* price (net fare + your markup + service fee). **Your margin is instant** — no waiting months for airline commission cheques.
7. Behind the scenes the **host settles with every airline through BSP** in one consolidated cycle, and NCAA's **5% Ticket Sales Charge** is remitted inside that system. None of that touches you directly.

**Money flow diagram:**

```
Client ──₦665,000──▶ PRIME PATH (you) ──₦620,000──▶ HOST/CONSOLIDATOR ──BSP──▶ Airlines
                        │
                        └── keeps ₦45,000 margin immediately
```

---

## 3. Why it's legal — and the two lines you must not cross

**✅ Legal, because:**
- The entity that physically issues the ticket (the host) is fully accredited — the airline has an authorised agent of record.
- You are an **intermediary/sub-agent** of that agency — a normal commercial arrangement, like a retailer buying from a wholesaler.
- The carriage contract is between passenger and airline either way; you're the distribution channel.

**⚠️ Line 1 — NCAA registration is still yours to get.**
Nig. CARs Part 18.9.4.1 requires travel agencies to register with NCAA **before commencing operations**. The host model changes *who prints the ticket*, not *whether you're operating a travel agency in Nigeria*. Some hosts will onboard you without asking (their risk view, not yours) — you stay exposed. Registered-and-hosted = fully clean.

**⚠️ Line 2 — never "borrow" an IATA code informally.**
Using another agency's IATA numeric code or GDS login **outside their official sub-agent arrangement** is code misuse — BSP treats it as fraud, and airlines void tickets issued that way. Always work through the host's proper portal/API under a signed agreement.

---

## 4. What it costs & what you can earn

### Typical commercial terms (Nigeria — indicative, vary by host)

| Item | Typical range |
|---|---|
| Joining/setup fee | ₦0 – ₦150,000 |
| Wallet deposit (pre-funded, refundable per contract) | ₦500,000 – ₦5,000,000 |
| Monthly fee | Usually ₦0 (transactional) |
| Your markup on net fares | You choose — commonly 5–15% + service fee |
| Credit line (issue now, pay later) | Sometimes offered after 6–12 months of trading history |

### Illustrative economics (numbers are examples, not quotes)

| | Amount |
|---|---|
| Host net fare, LOS → DXB return | ₦620,000 |
| You sell at | ₦665,000 |
| Service fee (visas/seat/baggage help etc.) | ₦5,000 |
| **Your margin per passenger** | **₦50,000** |
| 40 passengers/month | **₦2,000,000/month gross margin** |

Compare with waiting for the IATA route: that ₦2m/month can start flowing **within weeks**, while the IATA bond would tie up **$30k–$50k (≈ ₦45m–₦75m)** and take a year+.

### The margin reality check
Domestic Nigerian fares are thin-margin and price-transparent (clients cross-check apps) — expect 3–8%. International long-haul, group blocking, Hajj/Umrah and niche routes are where hosts' net fares give real room (10–20%). Hotels/transfers/insurance bought at net B2B rates often out-earn flights.

---

## 5. Pros and cons — honestly

### ✅ Pros
1. **Speed** — selling real tickets in 2–5 weeks, not 12–24 months.
2. **No bond, no BSP risk** — the $30k–$50k stays in your business; the host's settlement cycles and airline admin are their problem.
3. **Instant margin** vs 60–90-day commission waits.
4. **Better-than-public fares** — consolidator net fares on many international routes.
5. **Your brand stays front** — clients are yours; the host is invisible plumbing.
6. **Free education** — you learn fares, GDS logic, refunds, TIME LIMITs, voids on someone else's infrastructure, with a helpdesk to call.

### ⚠️ Cons / risks (and mitigations)
| Risk | Reality | Mitigation |
|---|---|---|
| **Host collapses / defaults on BSP** | Airlines can void tickets issued by a defaulting agency — your clients' tickets are exposed. This has happened in Nigeria. | Choose a long-standing host; run **two hosts** in parallel; keep wallet deposits lean; issue big bookings same-day |
| **Thin domestic margins** | Price transparency kills markup on LOS–ABV | Compete on service (visa help, airport transfer bundles), not price |
| **Deposit trapped** | Wallet sits with them | Negotiate withdrawal terms in writing; avoid oversized deposits |
| **Refund speed = host's speed** | Airline refunds host → host refunds you | Get refund turnaround SLA in the contract |
| **Your client data passes through their portal** | Privacy/competitive exposure | Data clause in contract; NDPA still applies to you as collector |
| **No airline recognition for you** | Overrides/incentives go to the host | Accept in Phase 1; that's exactly what IATA accreditation fixes in Phase 3 |

---

## 6. How to choose a host — due-diligence checklist

**Verify them:**
- [ ] Ask for their **IATA numeric code** — verify it's active (IATA's public "Check a Code" tool / ask NANTA)
- [ ] Years in BSP Nigeria; ask for 2–3 existing sub-agent references and actually call them
- [ ] Search their name + "refund", "scam", "ticket void" — Nigerian travel forums and X are candid
- [ ] Prefer hosts that **ask for your NCAA certificate** — picky hosts are healthy hosts

**Test them:**
- [ ] Compare their net fares on 4–5 routes you'll actually sell vs public prices — is there margin room?
- [ ] Do a real small booking end-to-end; time the e-ticket delivery; try a void/refund drill
- [ ] Check portal quality: live pricing, baggage info, instant issuance, invoices, reports

**Contract must say:**
- [ ] Wallet withdrawal/refund terms and notice period
- [ ] Refund turnaround SLA (e.g., within X working days of airline credit)
- [ ] What happens to issued tickets if either party terminates
- [ ] Markup freedom (you set your own selling price), data ownership, dispute resolution under Nigerian law

**Where to find them:**
1. **NANTA** — membership directory + secretariat referrals (best filter for serious, registered players)
2. Large Lagos/Abuja IATA agencies with a **"B2B desk" / "sub-agent programme"**
3. Global API aggregators that issue under their own accreditation (e.g. **Duffel**, **MystiFly**, **Kiwi B2B**) — fast API integration with the site we built, but check their Nigeria settlement/wallet terms
4. White-label providers (FlightsLogic, Travelopro, FlyBlaze etc.) if you want their whole engine branded as yours instead of wiring APIs into our site

---

## 7. And TIDS? The free ID that isn't a licence

| | **TIDS** (Travel Industry Designator Service) |
|---|---|
| Cost | **Free** (application & renewal) — processing ≈ 3–5 working days |
| What it gives | A recognised **industry ID number**; visibility to suppliers/partners; some GDS/industry recognition |
| What it does NOT give | ❌ No ticket issuance rights ❌ No BSP access ❌ No airline commissions ❌ Not a licence to operate |
| Use it for | Credibility with partners now; suppliers that ask "are you registered with IATA?" before giving you a trade login |

**Bottom line: TIDS = a name badge. Host/consolidator = the machine that prints tickets. NCAA = your legal permission to operate in Nigeria. You need the machine and the permission; the badge is a free bonus.**

---

## 8. Where this fits in your roadmap

```
PHASE 0 (done)      Website live — enquiries & booking requests
PHASE 1 (now)       NCAA ₦100k + NANTA + staff training → sign host agreement
                    → YOU ARE SELLING & ISSUING (via host) — manually + WhatsApp
PHASE 2             Host's API (or Duffel/consolidator feed) wired into this website
                    + Paystack/Flutterwave → fully automated online sales
PHASE 3 (yr 2)      Own IATA accreditation + bond → issue under YOUR code,
                    keep 100% of overrides, drop host dependency
```

Many Nigerian agencies deliberately **stay** in the hosted model forever — at Prime Path's scale, the deciding factor is volume: when your monthly BSP-through-host volume consistently justifies ₦45m+ parked in a bond plus admin overhead, go direct.

---

*Indicative figures only — confirm current terms directly with any host, NANTA, NCAA and IATA. Not legal advice.*
