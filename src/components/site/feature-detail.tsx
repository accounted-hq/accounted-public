"use client"

import {motion} from "framer-motion"
import {Archive, Check, Coins, Database, Globe, Layers, Lock, Plug, Receipt, Shield} from "lucide-react"

const iconMap = {
    Shield,
    Layers,
    Lock,
    Coins,
    Receipt,
    Archive,
    Database,
    Globe,
    Plug
}

interface FeatureDetailProps {
    feature: {
        id: string
        icon: string
        title: string
        description: string
        details: string[]
        whatYouGet: string[]
    }
    index: number
}

export function FeatureDetail({feature, index}: FeatureDetailProps) {
    const {icon: iconName, title, description, details, whatYouGet} = feature
    const Icon = iconMap[iconName as keyof typeof iconMap]
    const isReversed = index % 2 !== 0

    return (
        <motion.section
            id={feature.id}
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
            className="scroll-mt-20"
        >
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <div
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-primary"/>
                    </div>

                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-xl text-muted-foreground mb-8">{description}</p>

                    <div className="space-y-4 mb-8">
                        {details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"/>
                                <p className="text-muted-foreground">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* What You Get Box */}
                <div className={isReversed ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="bg-gradient-to-br from-muted/50 to-background border rounded-2xl p-8">
                        <h3 className="text-lg font-semibold mb-6 text-primary">What you get</h3>
                        <div className="space-y-4">
                            {whatYouGet.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex items-center space-x-3">
                                    <div
                                        className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-primary"/>
                                    </div>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}