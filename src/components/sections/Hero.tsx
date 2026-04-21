'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BlueprintGrid from '@/components/ui/BlueprintGrid'
import LayerStack from '@/components/ui/LayerStack'
import { heroLayers } from '@/lib/data/hero'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <motion.section
      ref={ref}
      id="home"
      style={{ opacity }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <BlueprintGrid />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Left: Identity */}
          <div className="space-y-6">
            {/* File path label */}
            <div className="font-mono text-label text-orange uppercase tracking-widest">
              {'// saaketh-manepalli / index.tsx'}
            </div>

            {/* Name */}
            <div>
              <h1 className="font-grotesk text-hero-xl font-bold text-paper leading-none">
                Saaketh
              </h1>
              <h1 className="font-grotesk text-hero-xl font-bold text-paper leading-none ml-6 md:ml-12">
                Manepalli
              </h1>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <p className="font-mono text-sm text-orange">Full-Stack Engineer</p>
              <p className="font-mono text-sm text-paper-dim">
                ECE @ UT Austin &nbsp;|&nbsp; Founder, Ainstein
              </p>
            </div>

            {/* Brief */}
            <p className="text-paper-dim leading-relaxed max-w-sm">
              I build across the full stack — from ARM assembly and embedded firmware to production
              web apps and iOS. Currently studying Fields & Waves.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="border border-orange text-orange font-mono text-sm px-5 py-2.5 hover:bg-orange hover:text-base transition-colors uppercase tracking-wider"
              >
                View Work
              </a>
              <a
                href="https://ainstein.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-paper-dim font-mono text-sm px-5 py-2.5 hover:border-paper-dim hover:text-paper transition-colors uppercase tracking-wider"
              >
                Ainstein ↗
              </a>
            </div>
          </div>

          {/* Right: Layer Stack */}
          <div className="space-y-3">
            <div className="font-mono text-label text-paper-dim/60 uppercase tracking-widest mb-4">
              {'// skill-layers'}
            </div>
            <LayerStack layers={heroLayers} />
          </div>
        </div>
      </div>

      {/* Bottom border / section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </motion.section>
  )
}
