import {Metadata} from "next"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {site} from "@/lib/site-config"
import {ArrowRight, Book, Code, ExternalLink, Terminal, Users} from "lucide-react"

export const metadata: Metadata = {
    title: "Documentation",
    description: "Complete documentation for Accounted - API reference, deployment guides, and integration examples."
}

const docSections = [
    {
        icon: Book,
        title: "Getting Started",
        description: "Quick start guides and basic concepts",
        items: [
            {name: "Introduction", href: "#introduction"},
            {name: "Installation", href: "#installation"},
            {name: "First Steps", href: "#first-steps"},
            {name: "Basic Concepts", href: "#concepts"}
        ]
    },
    {
        icon: Code,
        title: "API Reference",
        description: "Complete REST API documentation",
        items: [
            {name: "Authentication", href: "#auth"},
            {name: "Tenants", href: "#tenants"},
            {name: "Journal Entries", href: "#journals"},
            {name: "Accounts", href: "#accounts"}
        ]
    },
    {
        icon: Terminal,
        title: "Self-Hosting",
        description: "Deploy and manage your own instance",
        items: [
            {name: "Docker Setup", href: "#docker"},
            {name: "Environment Variables", href: "#env"},
            {name: "Database Setup", href: "#database"},
            {name: "Security Configuration", href: "#security"}
        ]
    },
    {
        icon: Users,
        title: "Integrations",
        description: "Connect with other systems",
        items: [
            {name: "Webhooks", href: "#webhooks"},
            {name: "SDKs", href: "#sdks"},
            {name: "Third-party Apps", href: "#integrations"},
            {name: "Import/Export", href: "#data"}
        ]
    }
]

const quickLinks = [
    {
        title: "API Explorer",
        description: "Interactive API documentation with examples",
        href: "/api",
        external: false
    },
    {
        title: "GitHub Repository",
        description: "Source code, issues, and contributions",
        href: site.repoUrl,
        external: true
    },
    {
        title: "Self-Hosting Guide",
        description: "Step-by-step deployment instructions",
        href: "/open-source",
        external: false
    }
]

export default function DocsPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <Badge variant="secondary" className="mb-4">Documentation</Badge>
                    <h1 className="text-4xl font-bold mb-6">
                        Everything you need to build with{" "}
                        <span className="hero-gradient-text bg-clip-text text-transparent">{site.name}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Comprehensive guides, API reference, and examples to help you integrate
                        and deploy {site.name} for your organization.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {quickLinks.map((link) => (
                        <div key={link.title}
                             className="bg-background border rounded-2xl p-6 hover:shadow-lg transition-shadow group">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                <Link href={link.href} target={link.external ? "_blank" : undefined}
                                      className="flex items-center space-x-2">
                                    <span>{link.title}</span>
                                    {link.external ? (
                                        <ExternalLink className="w-4 h-4"/>
                                    ) : (
                                        <ArrowRight className="w-4 h-4"/>
                                    )}
                                </Link>
                            </h3>
                            <p className="text-muted-foreground text-sm">{link.description}</p>
                        </div>
                    ))}
                </div>

                {/* Documentation Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {docSections.map((section) => (
                        <div key={section.title} className="bg-background border rounded-2xl p-6">
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                                    <section.icon className="w-5 h-5 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                                    <p className="text-muted-foreground text-sm">{section.description}</p>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {section.items.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2"
                                        >
                                            <ArrowRight className="w-3 h-3"/>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Placeholder Notice */}
                <div className="bg-gradient-to-r from-muted/30 to-background border rounded-2xl p-8 text-center mb-16">
                    <h2 className="text-2xl font-bold mb-4">Documentation Coming Soon</h2>
                    <p className="text-muted-foreground mb-6">
                        We&apos;re currently building comprehensive documentation for {site.name}.
                        In the meantime, you can explore our API reference and check out the source code on GitHub.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button asChild>
                            <Link href="/api">
                                Explore API
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href={site.repoUrl} target="_blank">
                                View Source Code
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Help Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                    <p className="text-muted-foreground mb-6">
                        Have questions or need support? We&apos;re here to help you succeed with {site.name}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button asChild variant="outline">
                            <Link href={`mailto:${site.contactEmail}`}>
                                Contact Support
                            </Link>
                        </Button>
                        <Button asChild variant="ghost">
                            <Link href={`${site.repoUrl}/issues`} target="_blank">
                                Report an Issue
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}