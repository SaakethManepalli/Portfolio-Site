import { cn } from '@/lib/utils/cn'

interface BlueprintGridProps {
  className?: string
}

export default function BlueprintGrid({ className }: BlueprintGridProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden visual-only', className)}>
      <div className="absolute inset-0 bg-blueprint-grid bg-grid-coarse" />
      <div className="absolute inset-0 bg-blueprint-grid-fine bg-grid-fine" />
    </div>
  )
}
