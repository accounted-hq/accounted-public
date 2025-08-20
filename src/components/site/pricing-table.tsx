"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Check, X} from "lucide-react"
import Link from "next/link"
import {site} from "@/lib/site-config"

interface PlanFeature {
    feature: string
    starter: boolean | string
    pro: boolean | string
    enterprise: boolean | string
}

const plans = [
    {
        id: "starter",
        name: "Starter",
        description: "For small teams getting started",
        price: "$29",
        period: "per month",
        highlighted: false,
        ctaText: "Start free trial",
        ctaHref: site.appUrl
    },
    {
        id: "pro",
        name: "Pro",
        description: "For growing companies",
        price: "$99",
        period: "per month",
        highlighted: true,
        ctaText: "Start free trial",
        ctaHref: site.appUrl
    },
    {
        id: "enterprise",
        name: "Enterprise",
        description: "SSO, custom SLAs, dedicated support",
        price: "Custom",
        period: "contact sales",
        highlighted: false,
        ctaText: "Contact sales",
        ctaHref: `mailto:${site.contactEmail}`
    }
]

const features: PlanFeature[] = [
    {
        feature: "Multi-tenancy & RBAC",
        starter: true,
        pro: true,
        enterprise: true
    },
    {
        feature: "Immutable journals",
        starter: true,
        pro: true,
        enterprise: true
    },
    {
        feature: "Period controls",
        starter: true,
        pro: true,
        enterprise: true
    },
    {
        feature: "Multi-currency support",
        starter: true,
        pro: true,
        enterprise: true
    },
    {
        feature: "Public API access",
        starter: true,
        pro: true,
        enterprise: true
    },
    {
        feature: "Bank import & reconciliation",
        starter: true,
        pro: true,
        enterprise: true
    },
    {
        feature: "Monthly tenants",
        starter: "Up to 5",
        pro: "Up to 50",
        enterprise: "Unlimited"
    },
    {
        feature: "Monthly transactions",
        starter: "Up to 10k",
        pro: "Up to 500k",
        enterprise: "Unlimited"
    },
    {
        feature: "Data retention",
        starter: "2 years",
        pro: "7 years",
        enterprise: "Unlimited"
    },
    {
        feature: "Support hours",
        starter: "Business hours",
        pro: "Extended hours",
        enterprise: "24/7"
    },
    {
        feature: "Backup frequency",
        starter: "Daily",
        pro: "Every 6 hours",
        enterprise: "Continuous"
    },
    {
        feature: "SSO integration",
        starter: false,
        pro: false,
        enterprise: true
    },
    {
        feature: "Custom SLAs",
        starter: false,
        pro: false,
        enterprise: true
    },
    {
        feature: "Dedicated support",
        starter: false,
        pro: false,
        enterprise: true
    },
    {
        feature: "On-premise deployment",
        starter: false,
        pro: false,
        enterprise: true
    }
]

function FeatureValue({value}: { value: boolean | string }) {
    if (value === true) {
        return (
            <div className="flex justify-center">
                <div
                    className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400"/>
                </div>
            </div>
        )
    }

    if (value === false) {
        return (
            <div className="flex justify-center">
                <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-600 dark:text-red-400"/>
                </div>
            </div>
        )
    }

    return (
        <div className="text-center">
            <span className="text-sm font-medium">{value}</span>
        </div>
    )
}

export function PricingTable() {
    return (
        <section className="py-16">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, delay: index * 0.1}}
                            viewport={{once: true}}
                            className={`relative rounded-2xl p-8 ${
                                plan.highlighted
                                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20'
                                    : 'bg-background border'
                            }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <Badge className="px-4 py-1">Most Popular</Badge>
                                </div>
                            )}

                            <div className="text-center">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-muted-foreground mb-6">{plan.description}</p>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold mb-1">{plan.price}</div>
                                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                                </div>

                                <Button
                                    className="w-full"
                                    size="lg"
                                    variant={plan.highlighted ? "default" : "outline"}
                                    asChild
                                >
                                    <Link href={plan.ctaHref}
                                          target={plan.ctaHref.startsWith('mailto:') ? undefined : "_blank"}>
                                        {plan.ctaText}
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Comparison Table */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="bg-background border rounded-2xl overflow-hidden"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-4 bg-muted/30 border-b">
                        <div className="p-6">
                            <h3 className="font-semibold text-lg">Features</h3>
                        </div>
                        <div className="p-6 text-center border-x">
                            <h3 className="font-semibold text-lg">Starter</h3>
                        </div>
                        <div className="p-6 text-center border-x">
                            <h3 className="font-semibold text-lg">Pro</h3>
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="font-semibold text-lg">Enterprise</h3>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.feature}
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 0.3, delay: index * 0.02}}
                                viewport={{once: true}}
                                className="grid grid-cols-4 hover:bg-muted/20 transition-colors"
                            >
                                <div className="p-4">
                                    <span className="text-sm font-medium">{feature.feature}</span>
                                </div>
                                <div className="p-4 border-x">
                                    <FeatureValue value={feature.starter}/>
                                </div>
                                <div className="p-4 border-x">
                                    <FeatureValue value={feature.pro}/>
                                </div>
                                <div className="p-4">
                                    <FeatureValue value={feature.enterprise}/>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}