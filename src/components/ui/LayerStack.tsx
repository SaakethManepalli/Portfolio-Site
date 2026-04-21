'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import TechBadge from './TechBadge'
import type { HeroLayer, TechLayer } from '@/lib/types'
import { useMode } from '@/components/providers/ModeProvider'

const layerAccent: Record<TechLayer, string> = {
  hardware: 'border-orange/50 text-orange',
  systems: 'border-blue-system/50 text-blue-system',
  web: 'border-green-signal/50 text-green-signal',
  infra: 'border-paper-dim/30 text-paper-dim',
}

const layerLabelColor: Record<TechLayer, string> = {
  hardware: 'text-orange',
  systems: 'text-blue-system',
  web: 'text-green-signal',
  infra: 'text-paper-dim',
}

interface LayerStackProps {
  layers: HeroLayer[]
}

export default function LayerStack({ layers }: LayerStackProps) {
  const { isSourceMode } = useMode()

  if (isSourceMode) {
    return (
      <div className="font-mono text-sm space-y-1">
        {layers.map((layer) => (
          <div key={layer.index}>
            <span className="text-paper-dim">{'  '.repeat(layer.index - 1)}</span>
            <span className="text-orange">L{layer.index}</span>
            <span className="text-paper-dim mx-2">{'//'}</span>
            <span className="text-paper">{layer.label}</span>
            <div className="ml-6 text-paper-dim/70 mt-0.5">
              {layer.technologies.join(', ')}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="relative space-y-3">
      {layers.map((layer, idx) => (
        <motion.div
          key={layer.index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
          style={{ marginLeft: `${(layers.length - 1 - idx) * 12}px` }}
          className={cn(
            'border bg-base-secondary px-4 py-3',
            layerAccent[layer.layer],
          )}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className={cn('font-mono text-label font-bold', layerLabelColor[layer.layer])}>
                L{layer.index}
              </span>
              <span className="font-grotesk font-semibold text-paper text-sm tracking-widest uppercase">
                {layer.label}
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {layer.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} layer={layer.layer} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
