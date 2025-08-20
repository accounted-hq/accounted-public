"use client"

import {motion} from "framer-motion"
import {Button} from "@/components/ui/button"
import {Github, Heart, MessageSquare} from "lucide-react"
import Link from "next/link"
import {site} from "@/lib/site-config"

export function Contributing() {
    return (
        <section className="mb-20">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
                className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 lg:p-12"
            >
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Join our community</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Accounted is built by developers, for developers. Contribute code, report issues,
                        or help improve our documentation. Every contribution matters.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                                <Github className="w-5 h-5 text-foreground"/>
                            </div>
                            <div>
                                <div className="font-semibold">Source Code</div>
                                <div className="text-sm text-muted-foreground">View, fork, contribute</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-foreground"/>
                            </div>
                            <div>
                                <div className="font-semibold">Issues & Discussions</div>
                                <div className="text-sm text-muted-foreground">Report bugs, request features</div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                                <Heart className="w-5 h-5 text-red-500"/>
                            </div>
                            <div>
                                <div className="font-semibold">Community Support</div>
                                <div className="text-sm text-muted-foreground">Help other users</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <Link href={site.repoUrl} target="_blank">
                                <Github className="w-4 h-4 mr-2"/>
                                View on GitHub
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={`${site.repoUrl}/issues`} target="_blank">
                                Report an Issue
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}