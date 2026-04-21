import { cn } from '@/lib/utils/cn'
import type { TechLayer } from '@/lib/types'

const layerStyles: Record<TechLayer, string> = {
  hardware: 'border-orange/50 text-orange bg-orange-glow',
  systems: 'border-blue-system/50 text-blue-system bg-blue-system/10',
  web: 'border-green-signal/50 text-green-signal bg-green-signal/10',
  infra: 'border-paper-dim/30 text-paper-dim bg-paper/5',
}

interface TechBadgeProps {
  label: string
  layer: TechLayer
  className?: string
}

export default function TechBadge({ label, layer, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-block border px-2 py-0.5 font-mono text-label uppercase tracking-widest',
        layerStyles[layer],
        className,
      )}
    >
      {label}
    </span>
  )
}
