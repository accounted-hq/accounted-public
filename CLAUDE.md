# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Accounted, an open-source multi-tenant accounting platform. It's built as a Next.js application using the App Router with TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework**: Next.js 15.4.7 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **UI Components**: shadcn/ui with lucide-react icons
- **Utilities**: clsx + tailwind-merge for conditional classes
- **Font**: Geist Sans & Mono from Google Fonts
- **Package Manager**: npm (has package-lock.json)

## Development Commands

```bash
# Start development server with turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage (currently Next.js default)
│   └── globals.css         # Global Tailwind styles
└── lib/
    └── utils.ts            # Utility functions (cn helper)
```

## Architecture Notes

### Marketing Site Architecture (from REQUIREMENTS.md)

The site is designed to follow this structure:
- **Route Groups**: Marketing pages under `(marketing)` group
- **Content Strategy**: Mix of static pages and MDX for blog/changelog
- **External Links**: App CTA links to `https://my.accounted.app`
- **Design System**: Uses semantic color tokens, no hardcoded colors

### Planned Information Architecture
```
/                    # Home with hero, features, trust signals
/features           # Detailed feature breakdown
/open-source        # Self-host vs hosted comparison
/pricing            # Plans and feature matrix
/api                # API documentation
/security           # Security posture
/changelog          # MDX releases
/blog               # MDX articles
/terms, /privacy    # Legal pages
```

## Key Configuration Files

- **shadcn/ui**: Configured with "new-york" style, slate base color, CSS variables enabled
- **TypeScript**: Uses `@/*` path mapping to `./src/*`
- **ESLint**: Extended from Next.js core-web-vitals and TypeScript configs
- **Next.js**: Default configuration (turbopack enabled for dev)

## Development Guidelines

### Component Structure (from REQUIREMENTS.md)
- **Atoms**: Button variants (primary, ghost, outline), Badge, Input, etc.
- **Molecules**: NavBar, Hero, FeatureCard, CodeSnippet, PricingTable, etc.
- **Design Tokens**: Use semantic tokens (`primary`, `success`, `background`, `foreground`, `muted`, `border`, `ring`)
- **Icons**: lucide-react for feature icons (Shield, Layers, Lock, Coins, etc.)

### Content Requirements
- **Hero Section**: "Enterprise accounting for modern teams"
- **Features**: Multi-tenancy, immutable journals, period controls, multi-currency, audit logging, API
- **CTAs**: "Launch app" (primary), "Deploy self-hosted" (secondary)
- **Site Config**: Centralized in `lib/site-config.ts`

### Performance & Accessibility
- Static export or ISR for marketing routes
- Keyboard accessibility for all interactive elements
- Color contrast verification in light/dark modes
- Focus outlines enabled

## Brand & Messaging

**One-liner**: Open-source, multi-tenant accounting for teams that need security, auditability, and performance.

**Value Pillars**:
- Security by design (tenant isolation, encryption, audit trails)
- Audit and compliance (immutable journals, retention, recovery)
- Financial rigor (period controls, multi-currency, tax handling)
- API-first (public API with idempotency)
- Open source (transparent code, self-hosting option)

## External Dependencies

The project currently has a minimal setup but is designed to scale with:
- Framer Motion for animations
- MDX for content management
- Site configuration system
- OG image generation via @vercel/og