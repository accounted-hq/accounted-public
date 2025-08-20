"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Check, Cloud, Server} from "lucide-react"
import Link from "next/link"
import {site} from "@/lib/site-config"

const hostedFeatures = [
    "Instant setup and deployment",
    "Automatic updates and patches",
    "24/7 monitoring and support",
    "Backup and disaster recovery",
    "SLA guarantees",
    "Dedicated support team"
]

const selfHostedFeatures = [
    "Complete control over infrastructure",
    "Docker Compose deployment",
    "Migration scripts included",
    "Community support channels",
    "No vendor lock-in",
    "Custom compliance requirements"
]

export function HostingOptions() {
    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Choose your deployment</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Same powerful platform, different deployment options to fit your needs.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Hosted Cloud */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="bg-gradient-to-br from-primary/5 to-background border rounded-2xl p-8 relative"
                >
                    <div className="absolute top-4 right-4">
                        <Badge variant="secondary">Recommended</Badge>
                    </div>

                    <div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                        <Cloud className="w-6 h-6 text-primary"/>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Hosted Cloud</h3>
                    <p className="text-muted-foreground mb-6">
                        Focus on your business while we handle the infrastructure, updates, and monitoring.
                    </p>

                    <div className="space-y-4 mb-8">
                        {hostedFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div
                                    className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-primary"/>
                                </div>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full" size="lg" asChild>
                        <Link href={site.appUrl} target="_blank">
                            Start free trial
                        </Link>
                    </Button>
                </motion.div>

                {/* Self-Hosted */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: 0.1}}
                    viewport={{once: true}}
                    className="bg-background border rounded-2xl p-8"
                >
                    <div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-6">
                        <Server className="w-6 h-6 text-foreground"/>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Self-Hosted</h3>
                    <p className="text-muted-foreground mb-6">
                        Deploy on your own infrastructure with complete control and customization options.
                    </p>

                    <div className="space-y-4 mb-8">
                        {selfHostedFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <div
                                    className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3 h-3 text-foreground"/>
                                </div>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <Button variant="outline" className="w-full" size="lg" asChild>
                        <Link href={site.repoUrl} target="_blank">
                            Deploy self-hosted
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}