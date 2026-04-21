'use client'

import { motion } from 'framer-motion'
import { hackathons } from '@/lib/data/hackathons'

const education = [
  {
    year: '2025 – PRESENT',
    institution: 'University of Texas at Austin',
    role: 'B.S. Electrical & Computer Engineering — Fields & Waves Focus',
    highlight: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-12 space-y-2">
          <div className="font-mono text-label text-orange uppercase tracking-widest">
            {'// experience & hackathons'}
          </div>
          <h2 className="font-grotesk text-3xl md:text-4xl font-bold text-paper">Timeline</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education column */}
          <div>
            <div className="font-mono text-label text-paper-dim/60 uppercase tracking-widest mb-6">
              {'// education'}
            </div>
            <div className="relative pl-6 border-l border-orange/40 space-y-6">
              {education.map((entry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.7rem] top-1 w-2.5 h-2.5 border border-orange bg-base" />
                  <div className="font-mono text-label text-orange uppercase tracking-widest mb-1">
                    {entry.year}
                  </div>
                  <div className="font-grotesk font-semibold text-paper">{entry.institution}</div>
                  <div className="font-mono text-sm text-paper-dim mt-0.5">{entry.role}</div>
                </motion.div>
              ))}

              {/* Ainstein */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="relative"
              >
                <span className="absolute -left-[1.7rem] top-1 w-2.5 h-2.5 border border-green-signal bg-base" />
                <div className="font-mono text-label text-green-signal uppercase tracking-widest mb-1">
                  2025 – PRESENT
                </div>
                <div className="font-grotesk font-semibold text-paper">Ainstein</div>
                <div className="font-mono text-sm text-paper-dim mt-0.5">Founder — Production Solutions & Web Building</div>
              </motion.div>
            </div>
          </div>

          {/* Hackathons column */}
          <div>
            <div className="font-mono text-label text-paper-dim/60 uppercase tracking-widest mb-6">
              {'// hackathons'}
            </div>
            <div className="relative pl-6 border-l border-border space-y-5">
              {hackathons.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="relative group"
                >
                  <span className="absolute -left-[1.7rem] top-1 w-2 h-2 border border-border bg-base group-hover:border-orange/60 transition-colors" />
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-mono text-label text-paper-dim/60 uppercase tracking-widest">{h.year}</span>
                    {h.result && (
                      <span className="font-mono text-label text-orange uppercase tracking-widest">
                        — {h.result}
                      </span>
                    )}
                  </div>
                  <div className="font-grotesk font-semibold text-paper text-sm mt-0.5">{h.project}</div>
                  <div className="font-mono text-label text-paper-dim/60 uppercase tracking-widest">{h.event}</div>
                  <div className="font-mono text-xs text-paper-dim mt-1">{h.tech}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
