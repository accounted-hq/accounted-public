import {PricingTable} from "@/components/site/pricing-table"
import {FAQAccordion} from "@/components/site/faq-accordion"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Download, Github} from "lucide-react"
import Link from "next/link"
import {site} from "@/lib/site-config"
import { generateMetadata, pageMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(pageMetadata.pricing)

export default function PricingPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        Start on a simple plan
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Scale to enterprise with SSO and custom SLAs. Or self-host for full control.
                        All plans include the same core accounting features.
                    </p>
                </div>

                {/* Pricing Table */}
                <PricingTable/>

                {/* Self-Hosted Section */}
                <div className="my-20">
                    <div className="bg-gradient-to-r from-muted/30 to-background border rounded-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-4">
                                    <Badge variant="outline" className="mr-3">Free to use</Badge>
                                    <Badge variant="outline">Open Source</Badge>
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Self-hosted deployment</h2>
                                <p className="text-xl text-muted-foreground mb-6">
                                    Deploy Accounted on your own infrastructure with Docker Compose.
                                    Bring your own infrastructure and maintain complete control over your data.
                                </p>
                                <ul className="space-y-3 mb-8 text-muted-foreground">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"/>
                                        Complete feature parity with hosted plans
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"/>
                                        Docker Compose setup included
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"/>
                                        Migration scripts and documentation
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"/>
                                        Community support and contributions
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"/>
                                        No licensing fees or usage limits
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center lg:text-right">
                                <div className="bg-background border rounded-xl p-6 mb-6">
                                    <div className="text-2xl font-bold mb-2">$0</div>
                                    <div className="text-muted-foreground mb-4">Self-hosted license</div>
                                    <div className="text-sm text-muted-foreground">
                                        Bring your own infrastructure
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href={site.repoUrl} target="_blank">
                                            <Github className="w-4 h-4 mr-2"/>
                                            View on GitHub
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="ghost" asChild>
                                        <Link href={`${site.repoUrl}/releases`} target="_blank">
                                            <Download className="w-4 h-4 mr-2"/>
                                            Download Latest
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <FAQAccordion/>

                {/* Final CTA */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Try our hosted cloud free for 14 days or deploy self-hosted in minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button size="lg" asChild>
                            <Link href={site.appUrl} target="_blank">
                                Start free trial
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={site.repoUrl} target="_blank">
                                Deploy self-hosted
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}