'use client'

import { motion } from 'framer-motion'
import { useMode } from '@/components/providers/ModeProvider'

export default function TerminalToggle() {
  const { isSourceMode, toggleMode } = useMode()

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 300, damping: 20 }}
      onClick={toggleMode}
      className="fixed bottom-6 right-6 z-50 border border-orange bg-base text-orange font-mono text-label uppercase tracking-widest px-4 py-2.5 hover:bg-orange hover:text-base transition-colors shadow-orange-glow-sm"
      aria-label={isSourceMode ? 'Switch to Visual Mode' : 'Switch to Source Mode'}
    >
      {isSourceMode ? '[ VISUAL ]' : '[ SOURCE ]'}
    </motion.button>
  )
}
