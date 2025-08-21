# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the marketing website for Accounted, an open-source multi-tenant accounting platform. Built as a Next.js application using the App Router with TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 15.4.7 with App Router
- **Language**: TypeScript 5  
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **UI Components**: shadcn/ui with lucide-react icons
- **Animations**: Framer Motion
- **Content**: MDX for blog and changelog pages
- **Utilities**: clsx + tailwind-merge for conditional classes
- **Fonts**: Nunito & Nunito Sans from Google Fonts
- **Package Manager**: npm (has package-lock.json)

## Development Commands

```bash
# Start development server on port 8000 with turbopack
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture & Structure

### Route Organization
- **Marketing Routes**: All under `(marketing)` route group
- **Content Management**: MDX files for blog and changelog content
- **Configuration**: Centralized site configuration in `lib/site-config.ts`

### Key Directories
```
src/
├── app/
│   ├── (marketing)/        # Marketing site routes
│   │   ├── page.tsx        # Homepage
│   │   ├── features/       # Feature pages
│   │   ├── pricing/        # Pricing page
│   │   ├── api/            # API documentation
│   │   ├── blog/           # Blog with MDX
│   │   └── changelog/      # Changelog with MDX
│   ├── layout.tsx          # Root layout with fonts
│   └── globals.css         # Global Tailwind styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── site/               # Custom site components
│       ├── hero.tsx
│       ├── navbar.tsx
│       ├── footer.tsx
│       ├── feature-grid.tsx
│       ├── pricing-table.tsx
│       └── ...
└── lib/
    ├── site-config.ts      # Central site configuration
    ├── utils.ts            # Utility functions (cn helper)
    └── mdx.ts              # MDX configuration
```

### Configuration Architecture

**Site Configuration (`lib/site-config.ts`)**:
- Central configuration for URLs, navigation, features, and messaging
- Contains structured data for features, navigation links, and metrics
- Single source of truth for site-wide content

**Design System**:
- Uses semantic Tailwind tokens (`primary`, `muted`, `background`, etc.)
- No hardcoded hex colors - enforced design system approach
- shadcn/ui components with "new-york" style and slate base color
- CSS variables enabled for theming

### Content Strategy

**Marketing Content Architecture**:
- Homepage with hero, feature grid, code samples, and CTAs
- Feature pages with detailed breakdowns and anchors
- Pricing with hosted vs self-hosted comparison
- API documentation with code examples
- Blog and changelog powered by MDX

**External Integration**:
- App CTAs link to `https://my.accounted.app`
- Repository links to `https://github.com/accounted-hq/accounted-app`
- Designed for hosted cloud + self-hosted deployment options

## Development Patterns

### Component Architecture
- **Atoms**: Button variants, Badge, Input, etc. from shadcn/ui
- **Molecules**: NavBar, Hero, FeatureCard, CodeSnippet, PricingTable
- **Design Tokens**: Semantic tokens only - no hardcoded colors
- **Icons**: lucide-react icons for features (Shield, Layers, Lock, Coins, etc.)

### Key Features Implementation
- **Multi-tenant isolation**: Security-focused messaging
- **Immutable journals**: Audit trail and hash chaining emphasis  
- **Period controls**: Financial compliance features
- **Multi-currency**: International business support
- **API-first**: Developer-focused with code examples
- **Open source**: Self-hosting vs hosted cloud options

### Performance & Accessibility Requirements
- Static export or ISR for marketing routes
- Keyboard accessibility for all interactive elements
- Color contrast verification in light/dark modes
- Focus outlines enabled
- Mobile-responsive design with navigation drawer

## Brand & Messaging

**Positioning**: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance"

**Value Pillars**:
- Security by design (tenant isolation, encryption, audit trails)
- Audit and compliance (immutable journals, retention, recovery) 
- Financial rigor (period controls, multi-currency, tax handling)
- API-first (public API with idempotency)
- Open source (transparent code, self-hosting option)

**Primary CTAs**:
- "Launch app" → `https://my.accounted.app`
- "Deploy self-hosted" → GitHub repository
- "View API" → `/api`

## Content Management

- **Site Config**: All messaging, navigation, and feature content centralized in `site-config.ts`
- **MDX Content**: Blog posts and changelog entries as MDX files
- **Feature Content**: Structured feature data with icons and descriptions
- **Navigation**: Single source of truth for main nav and footer links

## Key Implementation Notes

- Uses Next.js App Router with TypeScript path mapping (`@/*` → `./src/*`)
- Turbopack enabled for development speed
- MDX integration configured with @next/mdx
- Framer Motion for animations (keep durations short, no parallax)
- Font optimization with Nunito family from Google Fonts
- Responsive design with 12-column grid and max content width ~1200-1280px

## External Dependencies & Integration

- **Hosting**: Designed for Vercel deployment
- **Analytics**: Prepared for provider integration with DNT respect
- **Status**: Optional external status page integration
- **Social**: OpenGraph and Twitter card metadata configured
- **SEO**: Sitemap generation and metadata optimization
