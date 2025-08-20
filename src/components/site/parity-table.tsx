"use client"

import {motion} from "framer-motion"
import {Check, X} from "lucide-react"

const features = [
    {
        capability: "Core accounting (journals, periods)",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Multi-tenancy & RBAC",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Immutable journals with hash chaining",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Period controls and automation",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Multi-currency support",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Comprehensive audit logging",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Public API with idempotency",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Bank import and deduplication",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Tax calculations and reporting",
        hosted: true,
        selfHosted: true
    },
    {
        capability: "Automated backups",
        hosted: true,
        selfHosted: "Self-managed"
    },
    {
        capability: "24/7 monitoring",
        hosted: true,
        selfHosted: "Self-managed"
    },
    {
        capability: "SLA guarantees",
        hosted: true,
        selfHosted: false
    },
    {
        capability: "Dedicated support",
        hosted: true,
        selfHosted: "Community"
    },
    {
        capability: "One-click updates",
        hosted: true,
        selfHosted: false
    },
    {
        capability: "Custom compliance setup",
        hosted: "Limited",
        selfHosted: true
    },
    {
        capability: "Infrastructure control",
        hosted: false,
        selfHosted: true
    }
]

function FeatureStatus({status}: { status: boolean | string }) {
    if (status === true) {
        return (
            <div className="flex items-center justify-center">
                <div
                    className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400"/>
                </div>
            </div>
        )
    }

    if (status === false) {
        return (
            <div className="flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-600 dark:text-red-400"/>
                </div>
            </div>
        )
    }

    return (
        <div className="text-center">
            <span className="text-sm text-muted-foreground font-medium">{status}</span>
        </div>
    )
}

export function ParityTable() {
    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Feature parity comparison</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Core accounting features are identical. Choose based on your operational preferences.
                </p>
            </div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: true}}
                className="bg-background border rounded-2xl overflow-hidden"
            >
                {/* Table Header */}
                <div className="grid grid-cols-3 bg-muted/30 border-b">
                    <div className="p-6">
                        <h3 className="font-semibold text-lg">Capability</h3>
                    </div>
                    <div className="p-6 text-center border-x">
                        <h3 className="font-semibold text-lg">Hosted Cloud</h3>
                    </div>
                    <div className="p-6 text-center">
                        <h3 className="font-semibold text-lg">Self-Hosted</h3>
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.capability}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 0.3, delay: index * 0.05}}
                            viewport={{once: true}}
                            className="grid grid-cols-3 hover:bg-muted/20 transition-colors"
                        >
                            <div className="p-4">
                                <span className="text-sm font-medium">{feature.capability}</span>
                            </div>
                            <div className="p-4 border-x">
                                <FeatureStatus status={feature.hosted}/>
                            </div>
                            <div className="p-4">
                                <FeatureStatus status={feature.selfHosted}/>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}