"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { site, badges } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Radial gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="mb-6">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              Open source + Cloud
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 hero-gradient-text">
            {site.tagline}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Multi-tenant accounting with strict period controls, immutable journals, 
            audit logging, multi-currency revaluation, and a stable public API.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <Button size="lg" asChild>
              <Link href={site.appUrl} target="_blank">
                Launch app
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href={site.repoUrl} target="_blank">
                Deploy self-hosted
              </Link>
            </Button>
            <Button size="lg" variant="link" asChild>
              <Link href="/api">
                View API →
              </Link>
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {badges.map((badge) => (
              <Badge key={badge} variant="outline" className="text-sm px-3 py-1">
                {badge}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}