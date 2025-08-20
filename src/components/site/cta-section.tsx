"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site-config"

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/5 to-blue-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      <div className="container mx-auto max-w-7xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Start now</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Launch the app or deploy it yourself.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" asChild>
              <Link href={site.appUrl} target="_blank">
                Launch app
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={site.repoUrl} target="_blank">
                Deploy self-hosted
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}