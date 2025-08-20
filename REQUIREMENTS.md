# Marketing Website Specification — Accounted

**Site base**: `https://accounted.app`

**App base**: `https://my.accounted.app`

**Tech**: Next.js App Router, React, TypeScript, Tailwind, shadcn/ui, lucide-react, Framer Motion, MDX (for static content like blog and changelog).

**Design tokens**: use semantic tokens (`primary`, `success`, `background`, `foreground`, `muted`, `muted-foreground`, `border`, `ring`). Do not hardcode hex values.

---

## 1) Positioning and Messaging

**One-liner**: Open-source, multi-tenant accounting for teams that need security, auditability, and performance. Use our hosted cloud or self-host.

**Value pillars**
- **Security by design**: Tenant isolation, least-privilege, encryption, and verifiable audit trails.
- **Audit and compliance**: Immutable journals, full audit logs, retention, and recovery.
- **Financial rigor**: Period controls, multi-currency with revaluation, and tax handling.
- **API-first**: Public API with idempotency and integrations.
- **Open source**: Transparent code, self-hosting path, commercial hosting available.

**Primary CTAs**
- Hosted: **“Launch app”** → `https://my.accounted.app`
- Self-host: **“Deploy self-hosted”** → GitHub repo (configurable)
- Secondary: **“View API”** → `/api`

---

## 2) Information Architecture

```
/
  hero, feature highlights, trust, CTA
/features
  deep feature sections with anchors
/open-source
  self-host vs hosted, parity table, architecture highlights
/pricing
  hosted plans + self-host option, FAQ
/api
  overview, auth, example requests, rate limits, errors
/security
  security posture, roles, encryption, audits, backups
/changelog
  MDX list of releases
/blog
  MDX articles
/terms, /privacy, /imprint
/sitemap.xml, /robots.txt
```

Global elements: Top navigation, Footer, Mobile drawer, Cookie banner, System status pill (optional link to external status page), Language switcher (placeholder if not shipping multi-language now).

---

## 3) Page Specifications

### 3.1 Home `/`
**Hero**
- Eyebrow: “Open source + Cloud”
- H1: “Enterprise accounting for modern teams”
- Subcopy: “Multi-tenant, API-first accounting with strict period controls, immutable journals, audit logging, and multi-currency revaluation.”
- CTAs: `Launch app` (primary), `Deploy self-hosted` (ghost), `View API` (link)
- Badge row: “Open source”, “Self-host or hosted”, “API-first”

**Feature cards (grid of 6)**
- Multi-tenant isolation
- Immutable journal with hash chaining
- Period-based posting restrictions
- Multi-currency with automated revaluation
- Comprehensive audit logging
- Idempotent API

**Code sample** (Tabs: JavaScript, cURL): create journal with Idempotency-Key; show a 3–6 line snippet.

**Metrics** (static placeholders, editable): uptime, p95 latency, recovery objectives.

**Logos / social proof**: placeholder list; hide if empty.

**CTA band**
- Copy: “Start now. Host yourself or use our cloud.”
- Buttons: `Launch app` (primary), `Deploy self-hosted` (outline)

### 3.2 Features `/features`
Sections with anchors and detail bullets. Each section uses a leading icon and a compact diagram or code block.
- **Multi-tenancy & RBAC**: tenant isolation, role examples.
- **Immutable Journals**: reversals only, hash chain integrity.
- **Period Controls**: open/closing/closed; automatic opening balances.
- **Multi-currency**: original vs booking currency, stored FX, monthly revaluation.
- **Tax & Reporting**: explicit tax lines, country-specific exports.
- **Bank Import & Dedupe**: ext uid/hash, safe re-imports.
- **Audit & Observability**: signed logs, retention, alerting.
- **Backups & Recovery**: PITR, RTO/RPO commitments.
- **Public API & Idempotency**: OAuth, stable error schema.

Each section ends with a compact “What you get” checklist.

### 3.3 Open Source `/open-source`
- **Intro**: Philosophy and benefits.
- **Run it your way**: Side-by-side cards
  - Hosted Cloud: account, SLAs, support, add-ons.
  - Self-hosted: docker compose, migration scripts, community support.
- **Feature parity table**: rows for core features, columns Hosted / Self-host.
- **Architecture overview**: short text + simple diagram image (static SVG) showing app ↔ DB with RLS, API, and audit log storage.
- **Contributing**: link to repo, issues, and community channels.

### 3.4 Pricing `/pricing`
- Tiers (example content; make copy-driven toggles possible):
  - **Starter**: for small teams getting started.
  - **Pro**: for growing companies.
  - **Enterprise**: SSO, custom SLAs, dedicated support.
- Feature matrix: multi-tenancy, API, backups, support hours, data retention options.
- **Self-hosted**: “Free to self-host. Bring your own infrastructure.” Include CTA to repository.
- FAQ accordion.

### 3.5 API `/api`
- **Auth**: OAuth client credentials; include token request example.
- **Idempotency**: explain `Idempotency-Key` header and conflict behavior.
- **Endpoints (excerpt)** with request/response shapes and example errors:
  - `POST /api/journals`
  - `GET /api/journals/:id`
  - `POST /api/journals/:id/reverse`
  - `POST /api/import/bank`
  - `GET /api/reports/trial-balance`
- **Error schema**: `{ code, message }` examples.

### 3.6 Security `/security`
- Roles overview and least-privilege stance.
- Tenant isolation and RLS.
- Data encryption at rest and in transit.
- Audit logging and retention policy.
- Backups, RTO/RPO, and routine restore tests.
- Responsible disclosure contact.

### 3.7 Changelog `/changelog`
- MDX posts keyed by date. Provide RSS.

### 3.8 Blog `/blog`
- MDX posts. Category and tag support.

### 3.9 Legal `/terms`, `/privacy`, `/imprint`
- Static MDX pages. Link in footer.

---

## 4) Component Library (shadcn/ui)

Use shadcn/ui primitives. Wrap in project-specific components.

**Atoms**
- `Button` variants: `primary`, `ghost`, `outline`, `link`.
- `Badge` variants: `default`, `secondary`, `success` (maps to `success`).
- `Input`, `Select`, `Checkbox`, `Switch`, `Tooltip`, `Separator`.

**Molecules**
- `NavBar` with desktop nav and mobile `Sheet`.
- `Hero` with eyebrow, H1, subcopy, CTAs, and badges.
- `FeatureCard` with icon, title, bullets.
- `CodeSnippet` with tabbed languages; copy-to-clipboard.
- `MetricsRow` with cards.
- `PricingTable` with plan cards and feature matrix.
- `FAQAccordion` using `Accordion`.
- `CTASection` with title, short copy, two buttons.
- `Footer` with columns and social icons.

**Icons**: lucide-react icons per feature (e.g., `Shield`, `Layers`, `Lock`, `Coins`, `Receipt`, `Archive`, `Database`, `Globe`, `Plug`).

**Motion**: Framer Motion for enter/hover effects. Keep durations short. No parallax.

---

## 5) Visual Style

- **Colors**: Use semantic tokens. Primary actions and links use `primary`. Positive status uses `success`. Muted backgrounds use `muted`.
- **Spacing**: 4px base scale. Generous whitespace on hero and section paddings.
- **Typography**: System or project font. Use clear hierarchy (eyebrow, H1, H2, body, small).
- **Elevation**: Subtle card shadows. 2xl radii on interactive elements.
- **Grid**: 12-column responsive grid. Max content width ~1200–1280px.
- **Dark mode**: Support via Tailwind `dark:` classes. Ensure contrast.

---

## 6) Copy Blocks (ready to paste)

**Hero**
- Eyebrow: “Open source + Cloud”
- H1: “Enterprise accounting for modern teams”
- Subcopy: “Multi-tenant accounting with strict period controls, immutable journals, audit logging, multi-currency revaluation, and a stable public API.”
- Primary CTA: “Launch app”
- Secondary CTA: “Deploy self-hosted”
- Tertiary Link: “View API”

**Feature blurbs**
- **Tenant isolation**: Strong isolation across customers with role-based access.
- **Immutable journals**: Post once. Reverse via linked entries. Integrity by hash chain.
- **Period controls**: Post only in open periods. Automate closing and openings.
- **Multi-currency**: Store original and booking currency and rates. Monthly revaluation.
- **Audit logging**: Every change is recorded and retained.
- **Idempotent API**: Safe retries with consistent results.

**Open Source**
- “Run it your way. Use our hosted cloud or deploy on your own stack. Same core. Same rigor.”

**Security**
- “Defense-in-depth with tenant isolation, least privilege, encryption, signed audits, and tested recovery.”

**Pricing**
- “Start on a simple plan. Scale to enterprise with SSO and custom SLAs. Or self-host for full control.”

**CTA band**
- Title: “Start now”
- Copy: “Launch the app or deploy it yourself.”
- Buttons: “Launch app”, “Deploy self-hosted”

---

## 7) Next.js Implementation Notes

**Project structure**
```
app/
  (marketing)/
    layout.tsx
    page.tsx                 // home
    features/page.tsx
    open-source/page.tsx
    pricing/page.tsx
    api/page.mdx             // or .tsx with MDX content
    security/page.tsx
    changelog/page.tsx
    blog/
      page.tsx
      [slug]/page.mdx
    terms/page.mdx
    privacy/page.mdx
    imprint/page.mdx
  api/og/route.ts            // dynamic OG images for social cards
components/
  ui/ ...                    // shadcn
  site/
    navbar.tsx
    mobile-nav.tsx
    hero.tsx
    feature-card.tsx
    code-snippet.tsx
    metrics-row.tsx
    pricing-table.tsx
    faq-accordion.tsx
    cta-section.tsx
    footer.tsx
lib/
  site-config.ts
  analytics.ts
  mdx.ts
content/
  blog/*.mdx
  changelog/*.mdx
public/
  favicons/*
  og/*
```

**Routing**
- Keep marketing pages under `(marketing)` group.
- App CTA points to `https://my.accounted.app`.

**Metadata and SEO**
- Use Next.js `metadata` for title, description, and Open Graph.
- Provide `robots.txt` and `sitemap.xml` with canonical `https://accounted.app`.
- Generate OG images via `@vercel/og` route.
- JSON-LD: `Organization` and `SoftwareApplication` on `/`.

**Site config** (`lib/site-config.ts`)
```ts
export const site = {
  name: "Accounted",
  baseUrl: "https://accounted.app",
  appUrl: "https://my.accounted.app",
  repoUrl: "https://github.com/yourorg/accountanted",
  contactEmail: "contact@accounted.app",
};
```

**Example Snippet (cURL)** for Idempotency-Key on `/api/journals`
```bash
curl -X POST "https://accounted.app/api/journals" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -H "Idempotency-Key: 6b4a2f3c-7f2e-4a3d-9d1e-1f27b9c2b9a1" \
  -d '{
    "reference": "INV-1001",
    "lines": [
      { "account": "4000", "debit": 0, "credit": 100, "currency": "EUR" },
      { "account": "2000", "debit": 100, "credit": 0, "currency": "EUR" }
    ]
  }'
```

**Analytics**
- Hook for your provider. Defer script, respect DNT.

**Performance**
- Static export or ISR for marketing routes.
- Optimize LCP: inline critical hero text, lazy-load non-critical images.
- Preconnect for app domain.

**Accessibility**
- All interactive elements keyboard accessible.
- Color contrast verified in light/dark.
- Focus outlines enabled.

**Internationalization (optional)**
- Plan route group per locale if needed later.

---

## 8) Feature-to-Copy Traceability

Map marketing claims to product capabilities for accuracy.
- Multi-tenancy and RBAC → Home, Features, Security copy
- Immutable journals and reversals → Home, Features copy
- Period-based posting restrictions → Home, Features copy
- Multi-currency and revaluation → Home, Features copy
- Tax exports → Features copy
- Bank import and dedupe → Features copy
- Audit logging and retention → Home, Features, Security copy
- Backup & recovery with RTO/RPO → Security copy
- Public API, OAuth, idempotency, error schema → API page copy

---

## 9) Content Checklist

- [ ] Replace repo URL in `site-config.ts`.
- [ ] Finalize plan names and pricing.
- [ ] Add legal content and company info.
- [ ] Provide status page URL if available.
- [ ] Add logos/testimonials or hide section.
- [ ] Verify API examples and token acquisition copy.

---

## 10) Acceptance Criteria

- All listed routes render and are reachable from the navbar and footer.
- No hardcoded color values; only semantic tokens are used.
- CTAs link correctly to `https://my.accounted.app` and the repository.
- Lighthouse scores ≥ 95 for Performance, Accessibility, Best Practices, SEO on `/`.
- Mobile navigation works on small screens.
- Dark mode supported across all pages.
- Copy present for every section, editable via MDX or constants.

---

## 11) Parity Table (Hosted vs Self-hosted) — Example Rows

| Capability | Hosted | Self-hosted |
|---|---|---|
| Core accounting (journals, periods) | Yes | Yes |
| Multi-tenancy & RBAC | Yes | Yes |
| Audit logging | Yes | Yes |
| Backups managed | Yes | Self-managed |
| SLA & support | Available | Community |
| One-click upgrades | Yes | Manual |

---

## 12) Footer Links

- Product: Features, Pricing, Changelog, Blog
- Company: About, Careers (optional), Imprint
- Legal: Terms, Privacy
- Resources: API, Docs, GitHub

---

## 13) Risks and Mitigations

- **Content drift**: Keep “Feature-to-Copy Traceability” updated when capabilities change.
- **Over-claiming**: Only market capabilities that exist. Use neutral phrasing when a feature is in progress.
- **Color misuse**: Enforce semantic tokens in code review.

---

## 14) Handoff Notes

- Provide the coding assistant this document and the `site-config.ts` constants.
- Prepare a single navigation source of truth to hydrate both navbar and footer.
- Confirm domains resolve before enabling cross-domain preconnect.

