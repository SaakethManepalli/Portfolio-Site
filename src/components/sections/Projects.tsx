'use client'

import { motion } from 'framer-motion'
import TechProjectCard from '@/components/ui/TechProjectCard'
import { projects } from '@/lib/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div className="space-y-2">
            <div className="font-mono text-label text-orange uppercase tracking-widest">
              {'// projects'}
            </div>
            <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-paper">
              Selected Work
            </h2>
          </div>
          <span className="hidden md:block font-mono text-label text-paper-dim/40 uppercase tracking-widest">
            {projects.length} entries
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.projectName}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
            >
              <TechProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
