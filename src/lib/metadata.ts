import type { Metadata } from "next";
import { site } from "@/lib/site-config";

export interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  section?: string;
}

export function generateMetadata({ title, description, path = "", section }: PageMetadataOptions): Metadata {
  const fullTitle = title === site.name ? title : `${title} | ${site.name}`;
  const url = `${site.baseUrl}${path}`;
  
  // Generate OG image URL with custom parameters
  const ogImageParams = new URLSearchParams({
    title: title === site.name ? title : title,
    description: description,
    ...(section && { page: section }),
  });
  const ogImageUrl = `/api/og?${ogImageParams.toString()}`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: site.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

// Common page metadata configurations
export const pageMetadata = {
  home: {
    title: "Accounted - Enterprise accounting for modern teams",
    description: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance. Use our hosted cloud or self-host.",
    path: "",
  },
  features: {
    title: "Features",
    description: "Deep dive into Accounted's enterprise accounting features: multi-tenancy, immutable journals, period controls, and more.",
    path: "/features",
    section: "Features",
  },
  pricing: {
    title: "Pricing",
    description: "Start on a simple plan. Scale to enterprise with SSO and custom SLAs. Or self-host for full control.",
    path: "/pricing",
    section: "Pricing",
  },
  api: {
    title: "API Documentation",
    description: "Complete API reference for Accounted's accounting platform. OAuth authentication, idempotent operations, and comprehensive examples.",
    path: "/api",
    section: "API",
  },
  security: {
    title: "Security",
    description: "Built with security-first architecture. Multi-tenant isolation, encrypted data, audit trails, and compliance-ready features.",
    path: "/security",
    section: "Security",
  },
  openSource: {
    title: "Open Source",
    description: "Deploy Accounted on your infrastructure. Docker Compose setup, migration tools, and complete feature parity with hosted plans.",
    path: "/open-source",
    section: "Open Source",
  },
  blog: {
    title: "Blog",
    description: "Latest updates, insights, and best practices for enterprise accounting, security, and compliance.",
    path: "/blog",
    section: "Blog",
  },
  changelog: {
    title: "Changelog",
    description: "Track new features, improvements, and bug fixes in Accounted's accounting platform.",
    path: "/changelog",
    section: "Changelog",
  },
  about: {
    title: "About",
    description: "Learn about Accounted's mission to provide secure, auditable accounting software for modern teams.",
    path: "/about",
    section: "About",
  },
  docs: {
    title: "Documentation",
    description: "Complete guides for setting up, configuring, and using Accounted's enterprise accounting features.",
    path: "/docs",
    section: "Docs",
  },
  terms: {
    title: "Terms of Service",
    description: "Terms of Service for Accounted's accounting platform. Usage policies, payment terms, and legal requirements.",
    path: "/terms",
    section: "Legal",
  },
};
