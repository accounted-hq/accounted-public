import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {site} from "@/lib/site-config"
import {Code, Globe, Shield, Users, Zap} from "lucide-react"
import { generateMetadata, pageMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(pageMetadata.about)

const values = [
    {
        icon: Shield,
        title: "Security First",
        description: "Built with enterprise-grade security from the ground up. Every feature is designed with data protection and compliance in mind."
    },
    {
        icon: Code,
        title: "Open Source",
        description: "Complete transparency in our code. Audit, contribute, and extend our platform to meet your unique needs."
    },
    {
        icon: Users,
        title: "Team-Focused",
        description: "Designed for collaboration with multi-tenant architecture, role-based access, and comprehensive audit trails."
    },
    {
        icon: Zap,
        title: "Performance",
        description: "Optimized for speed and reliability. Our API-first approach ensures fast, consistent operations at scale."
    }
]

export default function AboutPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <Badge variant="secondary" className="mb-4">About {site.name}</Badge>
                    <h1 className="text-5xl font-bold mb-6">
                        Building the future of
                        <span className="hero-gradient-text bg-clip-text text-transparent"> accounting software</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        We&apos;re on a mission to provide transparent, secure, and powerful accounting tools
                        that teams can trust and extend. Open-source by design, enterprise-ready by nature.
                    </p>
                </div>

                {/* Mission */}
                <div className="mb-20">
                    <div
                        className="bg-gradient-to-r from-primary/5 via-primary/3 to-background border rounded-3xl p-8 lg:p-12">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Traditional accounting software is often opaque, restrictive, and expensive.
                                We believe financial tools should be transparent, flexible, and accessible to teams of
                                all sizes.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {site.name} provides enterprise-grade accounting with complete visibility into how your
                                data is processed,
                                stored, and secured. Whether you choose our hosted solution or self-deploy,
                                you maintain full control over your financial data.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide how we build and operate {site.name}.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value) => (
                            <div key={value.title} className="bg-background border rounded-2xl p-6">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                        <value.icon className="w-6 h-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                        <p className="text-muted-foreground">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Open Source */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Open Source?</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    <strong className="text-foreground">Transparency:</strong> You can audit every line
                                    of code
                                    that processes your financial data. No black boxes, no hidden algorithms.
                                </p>
                                <p>
                                    <strong className="text-foreground">Trust:</strong> Open-source software builds
                                    trust through
                                    community review, security audits, and complete visibility.
                                </p>
                                <p>
                                    <strong className="text-foreground">Extensibility:</strong> Modify and extend the
                                    platform
                                    to meet your specific industry needs or compliance requirements.
                                </p>
                                <p>
                                    <strong className="text-foreground">Independence:</strong> Never be locked into a
                                    vendor.
                                    Self-host or migrate your data at any time.
                                </p>
                            </div>
                        </div>
                        <div className="bg-muted/30 rounded-2xl p-8">
                            <div className="text-center">
                                <Globe className="w-16 h-16 text-primary mx-auto mb-4"/>
                                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                                <p className="text-muted-foreground mb-6">
                                    Contribute to the future of accounting software. Whether you&apos;re fixing bugs,
                                    adding features, or improving documentation, we welcome all contributions.
                                </p>
                                <Button asChild>
                                    <Link href={site.repoUrl} target="_blank">
                                        View on GitHub
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div
                        className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 lg:p-12">
                        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Try {site.name} today and experience accounting software that puts you in control.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                            <Button asChild size="lg">
                                <Link href={site.appUrl} target="_blank">
                                    Launch App
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/open-source">
                                    Self-Host Guide
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}