import {Metadata} from "next"
import {FeatureDetail} from "@/components/site/feature-detail"

export const metadata: Metadata = {
  title: "Features",
  description: "Deep dive into Accounted's enterprise accounting features: multi-tenancy, immutable journals, period controls, and more."
}

const features = [
  {
    id: "multi-tenancy-rbac",
      icon: "Shield",
    title: "Multi-tenancy & RBAC",
    description: "Complete tenant isolation with role-based access control.",
    details: [
      "Strong isolation across customers with dedicated schemas",
      "Role-based access control with least-privilege principles",
      "Configurable permissions per tenant and user role",
      "Audit trail for all access and permission changes"
    ],
    whatYouGet: [
      "Zero data leakage between tenants",
      "Granular permission system",
      "Scalable multi-customer architecture",
      "Compliance-ready access controls"
    ]
  },
  {
    id: "immutable-journals",
      icon: "Layers",
    title: "Immutable Journals",
    description: "Post once, reverse only. Maintain integrity with hash chaining.",
    details: [
      "Immutable journal entries prevent tampering",
      "Reversals create new entries linked to originals", 
      "Hash chain integrity ensures data consistency",
      "Cryptographic verification of entry sequences"
    ],
    whatYouGet: [
      "Tamper-proof financial records",
      "Regulatory compliance assurance",
      "Complete audit trail integrity",
      "Forensic-level data verification"
    ]
  },
  {
    id: "period-controls",
      icon: "Lock",
    title: "Period Controls",
    description: "Strict period management with automatic opening balances.",
    details: [
      "Period status: Open, Closing, or Closed states",
      "Automatic opening balance calculations",
      "Prevents posting to closed periods",
      "Configurable period-end procedures"
    ],
    whatYouGet: [
      "Structured financial periods",
      "Automated month-end processes",
      "Error-free opening balances",
      "Compliance with accounting standards"
    ]
  },
  {
    id: "multi-currency",
      icon: "Coins",
    title: "Multi-currency Support",
    description: "Original and booking currency with automated revaluation.",
    details: [
      "Store transactions in original and booking currencies",
      "Historical exchange rate preservation",
      "Automated monthly revaluation processes",
      "Configurable currency conversion rules"
    ],
    whatYouGet: [
      "Global business support",
      "Accurate currency conversion",
      "Automated FX revaluation",
      "Multi-currency reporting"
    ]
  },
  {
    id: "tax-reporting",
      icon: "Receipt",
    title: "Tax & Reporting",
    description: "Explicit tax handling with country-specific exports.",
    details: [
      "Separate tax lines for transparency",
      "Country-specific tax calculation rules",
      "Automated tax reporting formats",
      "Integration with tax authority systems"
    ],
    whatYouGet: [
      "Simplified tax compliance",
      "Automated tax calculations",
      "Country-specific reporting",
      "Reduced compliance overhead"
    ]
  },
  {
    id: "bank-import",
      icon: "Database",
    title: "Bank Import & Dedupe",
    description: "Safe re-imports with external UID and hash matching.",
    details: [
      "External UID tracking for duplicate prevention",
      "Hash-based transaction matching",
      "Safe re-import of bank statements",
      "Automatic reconciliation suggestions"
    ],
    whatYouGet: [
      "Duplicate-free imports",
      "Automated bank reconciliation",
      "Time-saving data entry",
      "Error-free transaction matching"
    ]
  },
  {
    id: "audit-observability",
      icon: "Archive",
    title: "Audit & Observability",
    description: "Comprehensive logging with retention and alerting.",
    details: [
      "Signed audit logs for tamper detection",
      "Configurable retention policies",
      "Real-time monitoring and alerting",
      "Compliance dashboard and reports"
    ],
    whatYouGet: [
      "Complete audit trail",
      "Real-time monitoring",
      "Compliance reporting",
      "Proactive issue detection"
    ]
  },
  {
    id: "backups-recovery",
      icon: "Globe",
    title: "Backups & Recovery",
    description: "Point-in-time recovery with tested RTO/RPO commitments.",
    details: [
      "Point-in-time recovery capabilities",
      "Automated backup verification",
      "Documented RTO/RPO commitments",
      "Regular disaster recovery testing"
    ],
    whatYouGet: [
      "Data protection assurance",
      "Fast disaster recovery",
      "Business continuity planning",
      "Tested recovery procedures"
    ]
  },
  {
    id: "api-idempotency",
      icon: "Plug",
    title: "Public API & Idempotency",
    description: "OAuth-secured API with stable error handling.",
    details: [
      "OAuth 2.0 client credentials flow",
      "Idempotency keys for safe retries",
      "Stable error schema across versions",
      "Comprehensive API documentation"
    ],
    whatYouGet: [
      "Secure API access",
      "Reliable integrations",
      "Safe retry mechanisms",
      "Developer-friendly documentation"
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Built for enterprise accounting
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature designed for teams that need security, auditability, and performance. 
            From multi-tenant isolation to automated compliance reporting.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureDetail 
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}