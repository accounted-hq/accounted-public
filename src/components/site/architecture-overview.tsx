"use client"

import {motion} from "framer-motion"
import {Archive, Database, Shield} from "lucide-react"

export function ArchitectureOverview() {
    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Architecture overview</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Built on proven patterns with security and scalability at the core.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Architecture Diagram */}
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="order-2 lg:order-1"
                >
                    <div className="bg-gradient-to-br from-muted/30 to-background border rounded-2xl p-8">
                        {/* Simple Architecture Diagram */}
                        <div className="space-y-8">
                            {/* API Layer */}
                            <div className="flex items-center justify-center">
                                <div className="bg-primary/10 border border-primary/20 rounded-xl px-6 py-4">
                                    <span className="font-semibold text-primary">Public API</span>
                                </div>
                            </div>

                            {/* Bidirectional Arrow */}
                            <div className="flex justify-center">
                                <div className="w-px h-8 bg-border"></div>
                            </div>

                            {/* Application Layer */}
                            <div className="flex items-center justify-center">
                                <div className="bg-muted border rounded-xl px-8 py-6 text-center">
                                    <div className="font-semibold mb-2">Application Server</div>
                                    <div className="text-sm text-muted-foreground">Multi-tenant Logic</div>
                                </div>
                            </div>

                            {/* Bidirectional Arrow */}
                            <div className="flex justify-center">
                                <div className="w-px h-8 bg-border"></div>
                            </div>

                            {/* Database Layer with RLS */}
                            <div className="flex items-center justify-center">
                                <div
                                    className="bg-background border-2 border-primary/20 rounded-xl px-8 py-6 text-center relative">
                                    <div className="font-semibold mb-2">PostgreSQL Database</div>
                                    <div className="text-sm text-muted-foreground mb-3">Row-Level Security (RLS)</div>
                                    <div
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
                                        <Shield className="w-3 h-3 text-primary"/>
                                    </div>
                                </div>
                            </div>

                            {/* Side connection to Audit Storage */}
                            <div className="flex items-center justify-end">
                                <div className="bg-muted/50 border rounded-lg px-4 py-3 text-center">
                                    <div className="flex items-center space-x-2">
                                        <Archive className="w-4 h-4 text-muted-foreground"/>
                                        <span className="text-sm font-medium">Audit Storage</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Architecture Description */}
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                    className="order-1 lg:order-2"
                >
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <Database className="w-5 h-5 text-primary mr-2"/>
                                Database-First Security
                            </h3>
                            <p className="text-muted-foreground">
                                PostgreSQL Row-Level Security (RLS) ensures complete tenant isolation
                                at the database level. No application bugs can cause data leakage.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <Shield className="w-5 h-5 text-primary mr-2"/>
                                Multi-Layered Protection
                            </h3>
                            <p className="text-muted-foreground">
                                Authentication, authorization, and data access controls work together
                                to provide defense-in-depth security for your financial data.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <Archive className="w-5 h-5 text-primary mr-2"/>
                                Immutable Audit Trail
                            </h3>
                            <p className="text-muted-foreground">
                                Every change is recorded in separate audit storage with cryptographic
                                integrity. Perfect for compliance and forensic analysis.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}