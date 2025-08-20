import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounted - Enterprise accounting for modern teams",
    description: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${nunitoSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
