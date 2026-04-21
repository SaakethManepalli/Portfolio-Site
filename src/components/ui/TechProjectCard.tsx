'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import TechBadge from './TechBadge'
import TerminalBlock from './TerminalBlock'
import { useMode } from '@/components/providers/ModeProvider'
import type { TechProjectCardData, ProjectStatus } from '@/lib/types'

const statusConfig: Record<ProjectStatus, { label: string; dotClass: string; textClass: string }> = {
  active: {
    label: 'ACTIVE',
    dotClass: 'bg-green-signal animate-signal-pulse',
    textClass: 'text-green-signal',
  },
  'in-progress': {
    label: 'IN PROGRESS',
    dotClass: 'bg-orange',
    textClass: 'text-orange',
  },
  archived: {
    label: 'ARCHIVED',
    dotClass: 'bg-paper-dim/40',
    textClass: 'text-paper-dim',
  },
}

export default function TechProjectCard({
  projectName,
  subtitle,
  status,
  spec,
  techStack,
  externalUrl,
  externalLabel,
  defaultExpanded = false,
}: TechProjectCardData) {
  const [expanded, setExpanded] = useState(defaultExpanded)
  const { isSourceMode } = useMode()
  const { label, dotClass, textClass } = statusConfig[status]

  const specLines = spec.specs.map((s, i) => ({
    prefix: `SPEC_${String(i + 1).padStart(2, '0')}`,
    text: s,
    highlight: false,
  }))

  if (isSourceMode) {
    return (
      <div className="font-mono text-sm border border-border bg-base-secondary p-4 space-y-2">
        <div className="text-paper-dim">
          {'// '}{spec.filePath}
        </div>
        <div className="text-paper-dim">
          {'// STATUS: '}{status.toUpperCase()}{' | LAYER: '}{techStack.map(t => t.layer).filter((v, i, a) => a.indexOf(v) === i).join('+')}
        </div>
        <div className="mt-2">
          <span className="text-orange">{'> '}</span>
          <span className="text-paper font-bold">{projectName}</span>
          <span className="text-paper-dim ml-3">{subtitle}</span>
        </div>
        <div className="mt-1">
          <span className="text-orange">{'> '}</span>
          <span className="text-paper-dim">SUMMARY: </span>
          <span className="text-paper">{spec.summary}</span>
        </div>
        {specLines.map((line, i) => (
          <div key={i}>
            <span className="text-orange">{'> '}</span>
            <span className="text-paper-dim">{line.prefix}: </span>
            <span className="text-paper">{line.text}</span>
          </div>
        ))}
        {externalUrl && (
          <div className="mt-2 pt-2 border-t border-border">
            <a href={externalUrl} target="_blank" rel="noopener noreferrer"
              className="text-orange hover:underline">
              {'> '}LINK: {externalLabel ?? externalUrl}
            </a>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="corner-brackets relative border border-border bg-base-secondary flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-sm font-bold text-paper tracking-wider">
          [{projectName}]
        </span>
        <span className="font-mono text-label text-paper-dim/60 uppercase tracking-widest hidden sm:block">
          {spec.filePath}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Subtitle + status */}
        <div className="flex items-start justify-between gap-4">
          <p className="font-grotesk text-paper-dim text-sm">{subtitle}</p>
          <div className={cn('flex items-center gap-1.5 shrink-0', textClass)}>
            <span className={cn('h-1.5 w-1.5 rounded-full', dotClass)} />
            <span className="font-mono text-label uppercase tracking-widest">{label}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-paper text-sm leading-relaxed">{spec.summary}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((t) => (
            <TechBadge key={t.label} label={t.label} layer={t.layer} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-border">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-mono text-label text-orange hover:text-paper-dim uppercase tracking-widest transition-colors flex items-center gap-1"
            aria-expanded={expanded}
          >
            {expanded ? '[ COLLAPSE ▲ ]' : '[ EXPAND SPEC ▼ ]'}
          </button>
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto font-mono text-label text-paper-dim hover:text-orange uppercase tracking-widest transition-colors"
            >
              {externalLabel ?? '↗ LINK'}
            </a>
          )}
          {!externalUrl && externalLabel && (
            <span className="ml-auto font-mono text-label text-paper-dim/40 uppercase tracking-widest">
              {externalLabel}
            </span>
          )}
        </div>
      </div>

      {/* Expandable spec */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border"
          >
            <TerminalBlock
              lines={specLines}
              title={spec.filePath}
              showCursor={false}
              className="border-0 border-t-0"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
