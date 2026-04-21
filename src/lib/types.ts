export type TechLayer = 'hardware' | 'systems' | 'web' | 'infra'

export interface TechBadgeData {
  label: string
  layer: TechLayer
}

export type ProjectStatus = 'active' | 'archived' | 'in-progress'

export interface ProjectSpec {
  filePath: string
  summary: string
  detail: string
  specs: string[]
}

export interface TechProjectCardData {
  projectName: string
  subtitle: string
  status: ProjectStatus
  spec: ProjectSpec
  techStack: TechBadgeData[]
  externalUrl?: string
  externalLabel?: string
  defaultExpanded?: boolean
}

export interface StatusEntry {
  key: string
  value: string
  highlight?: boolean
}

export interface StatusDashboardData {
  entries: StatusEntry[]
  lastUpdated: string
}

export interface HeroLayer {
  index: number
  label: string
  technologies: string[]
  layer: TechLayer
}

export interface ModeContextValue {
  isSourceMode: boolean
  toggleMode: () => void
}

export interface TerminalLine {
  prefix: string
  text: string
  highlight?: boolean
}
