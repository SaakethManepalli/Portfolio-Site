'use client'

import { createContext, useContext, useEffect, useReducer } from 'react'
import type { ModeContextValue } from '@/lib/types'

const ModeContext = createContext<ModeContextValue | null>(null)

const STORAGE_KEY = 'sm-portfolio-mode'

type ModeAction = 'TOGGLE' | 'SET_SOURCE' | 'SET_VISUAL'

function modeReducer(state: boolean, action: ModeAction): boolean {
  switch (action) {
    case 'TOGGLE': return !state
    case 'SET_SOURCE': return true
    case 'SET_VISUAL': return false
  }
}

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [isSourceMode, dispatch] = useReducer(modeReducer, false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'source') dispatch('SET_SOURCE')
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isSourceMode ? 'source' : 'visual')
    document.body.classList.toggle('source-mode', isSourceMode)
    document.body.classList.toggle('visual-mode', !isSourceMode)
  }, [isSourceMode])

  return (
    <ModeContext.Provider value={{ isSourceMode, toggleMode: () => dispatch('TOGGLE') }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode(): ModeContextValue {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode must be used inside ModeProvider')
  return ctx
}
