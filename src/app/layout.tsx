import type { Metadata } from "next";
import { site } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Accounted - Enterprise accounting for modern teams",
    template: "%s | Accounted"
  },
  description: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance. Use our hosted cloud or self-host.",
  keywords: ["accounting", "open source", "multi-tenant", "API", "enterprise"],
  authors: [{ name: "Accounted Team" }],
  creator: "Accounted",
  metadataBase: new URL("https://accounted.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://accounted.app",
    title: "Accounted - Enterprise accounting for modern teams",
    description: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance.",
    siteName: "Accounted",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Accounted - Enterprise accounting for modern teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounted - Enterprise accounting for modern teams",
    description: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance.",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": site.name,
    "url": site.baseUrl,
    "logo": `${site.baseUrl}/logo.png`,
    "description": site.description,
    "sameAs": [
      site.repoUrl,
      site.appUrl
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": site.contactEmail,
      "contactType": "customer service"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": site.name,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": site.description,
    "url": site.baseUrl,
    "applicationSubCategory": "Accounting Software",
    "softwareVersion": "1.0",
    "publisher": {
      "@type": "Organization",
      "name": site.name,
      "url": site.baseUrl
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "description": "Open-source accounting software with hosted and self-hosted options"
    },
    "softwareHelp": {
      "@type": "CreativeWork",
      "url": `${site.baseUrl}/api`
    }
  };

  // Sanitize JSON-LD to prevent XSS as recommended by Vercel docs
  const jsonLd = JSON.stringify([organizationSchema, softwareApplicationSchema])
    .replace(/</g, '\u003c');

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://my.accounted.app" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd
          }}
        />
        {children}
      </body>
    </html>
  );
}
