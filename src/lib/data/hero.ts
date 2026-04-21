import type { HeroLayer } from '@/lib/types'

export const heroLayers: HeroLayer[] = [
  {
    index: 1,
    label: 'HARDWARE / ECE',
    technologies: ['ARM Assembly', 'C', 'MSPM0', 'KiCad', 'Fields & Waves'],
    layer: 'hardware',
  },
  {
    index: 2,
    label: 'SYSTEMS / iOS',
    technologies: ['Swift', 'SwiftUI', 'CoreBluetooth', 'CoreML', 'Xcode'],
    layer: 'systems',
  },
  {
    index: 3,
    label: 'PRODUCTION / WEB',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Node.js'],
    layer: 'web',
  },
]
