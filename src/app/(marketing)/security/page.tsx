import {Metadata} from "next"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {AlertTriangle, Archive, Database, Lock, Shield, Users} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Security",
    description: "Defense-in-depth with tenant isolation, least privilege, encryption, signed audits, and tested recovery."
}

const securityFeatures = [
    {
        icon: "Users",
        title: "Roles & Least Privilege",
        description: "Granular role-based access control with minimum necessary permissions.",
        details: [
            "Predefined roles: Admin, Accountant, Viewer, Auditor",
            "Custom role creation with specific permissions",
            "Automatic permission inheritance and conflict resolution",
            "Regular access reviews and permission auditing"
        ]
    },
    {
        icon: "Shield",
        title: "Tenant Isolation",
        description: "Complete data separation using PostgreSQL Row-Level Security.",
        details: [
            "Database-level tenant isolation with RLS policies",
            "Schema-level separation for enterprise customers",
            "No shared resources between tenant boundaries",
            "Cryptographic tenant ID verification"
        ]
    },
    {
        icon: "Lock",
        title: "Data Encryption",
        description: "End-to-end encryption for data at rest and in transit.",
        details: [
            "AES-256 encryption for data at rest",
            "TLS 1.3 for all data in transit",
            "Encrypted database backups with key rotation",
            "Hardware Security Module (HSM) integration"
        ]
    },
    {
        icon: "Archive",
        title: "Audit Logging",
        description: "Immutable audit trail with cryptographic integrity.",
        details: [
            "Every action logged with cryptographic signatures",
            "Tamper-evident audit logs with hash chaining",
            "Configurable retention policies (2-10+ years)",
            "Real-time audit log monitoring and alerting"
        ]
    },
    {
        icon: "Database",
        title: "Backup & Recovery",
        description: "Tested disaster recovery with documented commitments.",
        details: [
            "Point-in-time recovery up to 30 days",
            "RTO: 4 hours, RPO: 15 minutes",
            "Monthly disaster recovery testing",
            "Encrypted offsite backup storage"
        ]
    },
    {
        icon: "AlertTriangle",
        title: "Incident Response",
        description: "24/7 security monitoring with rapid response protocols.",
        details: [
            "Security Operations Center (SOC) monitoring",
            "Automated threat detection and response",
            "Incident escalation and customer notification",
            "Post-incident analysis and remediation"
        ]
    }
]

const iconMap = {
    Users,
    Shield,
    Lock,
    Archive,
    Database,
    AlertTriangle
}

export default function SecurityPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4">Security First</Badge>
                    <h1 className="text-4xl font-bold mb-6">
                        Defense-in-depth security
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Multi-layered protection with tenant isolation, least privilege access,
                        encryption everywhere, and comprehensive audit logging.
                    </p>
                </div>

                {/* Security Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {securityFeatures.map((feature) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap]

                        return (
                            <div key={feature.title} className="bg-background border rounded-2xl p-6">
                                <div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/5 flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-red-600 dark:text-red-400"/>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground mb-4">{feature.description}</p>
                                <ul className="space-y-2">
                                    {feature.details.map((detail, detailIndex) => (
                                        <li key={detailIndex} className="flex items-start space-x-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"/>
                                            <span className="text-sm text-muted-foreground">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>

                {/* Compliance Section */}
                <div className="mb-20">
                    <div className="bg-gradient-to-r from-muted/30 to-background border rounded-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Compliance & Certifications</h2>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Badge variant="outline">SOC 2 Type II</Badge>
                                        <span className="text-sm text-muted-foreground">Annual compliance audits</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Badge variant="outline">ISO 27001</Badge>
                                        <span
                                            className="text-sm text-muted-foreground">Information security management</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Badge variant="outline">GDPR Ready</Badge>
                                        <span className="text-sm text-muted-foreground">European data protection compliance</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Badge variant="outline">CCPA Ready</Badge>
                                        <span
                                            className="text-sm text-muted-foreground">California privacy regulations</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-background border rounded-xl p-6">
                                <h3 className="font-semibold mb-4">Security Documentation</h3>
                                <div className="space-y-3">
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <Link href="/security/whitepaper.pdf" target="_blank">
                                            Security Whitepaper
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <Link href="/security/compliance.pdf" target="_blank">
                                            Compliance Reports
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start" asChild>
                                        <Link href="/security/pentest.pdf" target="_blank">
                                            Penetration Test Results
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Responsible Disclosure */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">Responsible Disclosure</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Help us keep Accounted secure. Report security vulnerabilities responsibly.
                        </p>
                    </div>

                    <div className="bg-background border rounded-2xl p-8 max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Reporting Process</h3>
                                <ol className="space-y-3 text-sm text-muted-foreground">
                                    <li className="flex items-start space-x-3">
                                        <span
                                            className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                                        <span>Email security@accounted.app with vulnerability details</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span
                                            className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                                        <span>We acknowledge receipt within 24 hours</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span
                                            className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                                        <span>Initial assessment and severity classification within 72 hours</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span
                                            className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                                        <span>Resolution timeline provided based on severity</span>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <span
                                            className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                                        <span>Public disclosure coordination after fix deployment</span>
                                    </li>
                                </ol>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">Bug Bounty Program</h3>
                                <div className="space-y-4">
                                    <div className="bg-muted/30 rounded-lg p-4">
                                        <div className="font-semibold mb-2">Reward Ranges</div>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span>Critical</span>
                                                <span className="font-mono">$5,000 - $10,000</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>High</span>
                                                <span className="font-mono">$1,000 - $5,000</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Medium</span>
                                                <span className="font-mono">$500 - $1,000</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Low</span>
                                                <span className="font-mono">$100 - $500</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full" asChild>
                                        <Link href="mailto:security@accounted.app">
                                            Report Vulnerability
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Contact */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Security Questions?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Our security team is available to discuss your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button size="lg" asChild>
                            <Link href="mailto:security@accounted.app">
                                Contact Security Team
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/security/whitepaper.pdf" target="_blank">
                                Download Security Whitepaper
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}