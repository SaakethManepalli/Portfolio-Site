import { cn } from '@/lib/utils/cn'
import type { TerminalLine } from '@/lib/types'

interface TerminalBlockProps {
  lines: TerminalLine[]
  title?: string
  showCursor?: boolean
  className?: string
}

export default function TerminalBlock({
  lines,
  title = 'terminal',
  showCursor = true,
  className,
}: TerminalBlockProps) {
  return (
    <div className={cn('border border-border bg-base-secondary', className)}>
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-paper-dim/20" />
        <span className="h-2 w-2 rounded-full bg-paper-dim/20" />
        <span className="h-2 w-2 rounded-full bg-paper-dim/20" />
        <span className="ml-2 font-mono text-label text-paper-dim/60 uppercase tracking-widest">
          {'// '}{title}
        </span>
      </div>

      {/* Lines */}
      <div className="space-y-1 p-4 font-mono text-sm">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2">
            <span className="shrink-0 text-orange select-none">{'>'}</span>
            <span className="text-paper-dim shrink-0 uppercase tracking-wide">{line.prefix}:</span>
            <span
              className={cn(
                'break-all',
                line.highlight ? 'text-orange font-medium' : 'text-paper',
              )}
            >
              {line.text}
            </span>
          </div>
        ))}
        {showCursor && (
          <div className="flex gap-2">
            <span className="text-orange select-none">{'>'}</span>
            <span className="inline-block h-4 w-2 bg-orange animate-cursor-blink" />
          </div>
        )}
      </div>
    </div>
  )
}
