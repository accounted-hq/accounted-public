import {ParityTable} from "@/components/site/parity-table"
import {HostingOptions} from "@/components/site/hosting-options"
import {ArchitectureOverview} from "@/components/site/architecture-overview"
import {Contributing} from "@/components/site/contributing"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {site} from "@/lib/site-config"
import { generateMetadata, pageMetadata } from "@/lib/metadata"

export const metadata = generateMetadata(pageMetadata.openSource)

export default function OpenSourcePage() {
    return (
        <div className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold mb-6">
                        Run it your way
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                        Use our hosted cloud or deploy on your own stack. Same core. Same rigor.
                        Transparent code with complete control over your accounting infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Button size="lg" asChild>
                            <Link href={site.appUrl} target="_blank">
                                Try hosted cloud
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={site.repoUrl} target="_blank">
                                View source code
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Philosophy Section */}
                <div className="mb-20">
                    <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 lg:p-12">
                        <h2 className="text-2xl font-bold mb-6">Our philosophy</h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground">
                            <p className="mb-4">
                                Financial software should be transparent, auditable, and under your control.
                                That&apos;s why Accounted is open source from day one.
                            </p>
                            <p className="mb-4">
                                Whether you choose our hosted cloud for convenience or self-host for maximum
                                control, you get the same enterprise-grade accounting platform with identical features.
                            </p>
                            <p>
                                No vendor lock-in. No hidden functionality. No compromises on security or compliance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Hosting Options */}
                <HostingOptions/>

                {/* Feature Parity Table */}
                <ParityTable/>

                {/* Architecture Overview */}
                <ArchitectureOverview/>

                {/* Contributing Section */}
                <Contributing/>
            </div>
        </div>
    )
}