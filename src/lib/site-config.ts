export const site = {
  name: "Accounted",
  baseUrl: "https://accounted.app",
  appUrl: "https://my.accounted.app",
    repoUrl: "https://github.com/accounted-hq/accounted-app",
  contactEmail: "contact@accounted.app",
  description: "Open-source, multi-tenant accounting for teams that need security, auditability, and performance.",
  tagline: "Enterprise accounting for modern teams"
};

export const navigation = {
  main: [
    { name: "Features", href: "/features" },
    { name: "Open Source", href: "/open-source" },
    { name: "Pricing", href: "/pricing" },
    { name: "API", href: "/api" },
    { name: "Security", href: "/security" },
    { name: "Blog", href: "/blog" }
  ],
  footer: {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Changelog", href: "/changelog" },
      { name: "Blog", href: "/blog" }
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Imprint", href: "/imprint" }
    ],
    legal: [
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" }
    ],
    resources: [
      { name: "API", href: "/api" },
      { name: "Documentation", href: "/docs" },
      { name: "GitHub", href: site.repoUrl }
    ]
  }
};

export const features = [
  {
    id: "multi-tenant",
    title: "Multi-tenant isolation",
    description: "Strong isolation across customers with role-based access.",
    icon: "Shield"
  },
  {
    id: "immutable-journals",
    title: "Immutable journal with hash chaining",
    description: "Post once. Reverse via linked entries. Integrity by hash chain.",
    icon: "Layers"
  },
  {
    id: "period-controls",
    title: "Period-based posting restrictions",
    description: "Post only in open periods. Automate closing and openings.",
    icon: "Lock"
  },
  {
    id: "multi-currency",
    title: "Multi-currency with automated revaluation",
    description: "Store original and booking currency and rates. Monthly revaluation.",
    icon: "Coins"
  },
  {
    id: "audit-logging",
    title: "Comprehensive audit logging",
    description: "Every change is recorded and retained.",
    icon: "Receipt"
  },
  {
    id: "idempotent-api",
    title: "Idempotent API",
    description: "Safe retries with consistent results.",
    icon: "Plug"
  }
];

export const badges = [
  "Open source",
  "Self-host or hosted", 
  "API-first"
];

export const metrics = [
  { label: "Uptime", value: "99.9%" },
  { label: "P95 Latency", value: "< 100ms" },
  { label: "Recovery Time", value: "< 1h" }
];