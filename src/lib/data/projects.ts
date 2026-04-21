import type { TechProjectCardData } from '@/lib/types'

export const projects: TechProjectCardData[] = [
  {
    projectName: 'CLOSED_LOOP_BIOMETRIC',
    subtitle: 'MedTech — Closed Loop Biometric System',
    status: 'in-progress',
    spec: {
      filePath: 'closed-loop-biometric/hardware/embedded',
      summary:
        'Closed loop biometric control system with MSPM0 embedded controller and Swift iOS companion app for real-time physiological feedback.',
      detail:
        'A closed loop biometric system bridging hardware and software: a Texas Instruments MSPM0 (ARM Cortex-M0+) drives the control loop via a deterministic state machine, while a Swift iOS app provides the operator interface over CoreBluetooth. Hardware pipeline: sensor input → MCU decision → actuation → iOS UI feedback.',
      specs: [
        'MCU: Texas Instruments MSPM0 (ARM Cortex-M0+)',
        'Firmware: C + ARM Assembly, deterministic 4-state machine',
        'Interface: UART serial bridge → CoreBluetooth BLE',
        'iOS: Swift 5.9, CoreBluetooth, SwiftUI',
        'PCB: Custom KiCad schematic',
      ],
    },
    techStack: [
      { label: 'ARM Assembly', layer: 'hardware' },
      { label: 'C', layer: 'hardware' },
      { label: 'MSPM0', layer: 'hardware' },
      { label: 'Swift', layer: 'systems' },
      { label: 'CoreBluetooth', layer: 'systems' },
    ],
  },
  {
    projectName: 'BUDGET_APP',
    subtitle: 'Fintech — Premium iOS Personal Finance',
    status: 'active',
    spec: {
      filePath: 'budget-app/ios/production',
      summary:
        'High-fidelity iOS budgeting app with Plaid bank integration, real-time transaction categorization, and a 90-day spending forecast engine.',
      detail:
        'Built with SwiftUI and backed by Plaid Link for secure OAuth bank connections. Transactions are categorized by a local rule engine with CoreML fallback. The forecast engine uses a rolling 90-day weighted average. CloudKit sync keeps data consistent across devices.',
      specs: [
        'Platform: iOS 16+, Swift 5.9, SwiftUI',
        'Bank Integration: Plaid Link SDK (OAuth 2.0)',
        'Local DB: CoreData with CloudKit sync',
        'Categorization: Rule engine + CoreML model',
        'Auth: Sign in with Apple',
      ],
    },
    techStack: [
      { label: 'Swift', layer: 'systems' },
      { label: 'SwiftUI', layer: 'systems' },
      { label: 'Plaid API', layer: 'web' },
      { label: 'CoreML', layer: 'systems' },
      { label: 'CoreData', layer: 'systems' },
    ],
    externalLabel: 'App Store (Coming Soon)',
  },
  {
    projectName: 'AINSTEIN',
    subtitle: 'AI Agency — Production Solutions & Web',
    status: 'active',
    spec: {
      filePath: 'ainstein/web/production',
      summary:
        'Ainstein is a full-stack software agency delivering web, mobile, and AI integration projects. Founded Spring 2025, based in Austin TX.',
      detail:
        'Ainstein operates as the parent entity for client web work and internal tooling. The agency stack centers on Next.js + Tailwind for client-facing products and Python/FastAPI for AI pipeline services. All client deployments run on Vercel or Railway.',
      specs: [
        'Entity: Texas LLC, founded Spring 2025',
        'Primary stack: Next.js 14, Tailwind, Node.js',
        'AI services: Python, FastAPI, OpenAI API',
        'Deployment: Vercel, Railway',
        'Focus: Production web + AI integration',
      ],
    },
    techStack: [
      { label: 'Next.js', layer: 'web' },
      { label: 'Tailwind', layer: 'web' },
      { label: 'Node.js', layer: 'web' },
      { label: 'Python', layer: 'infra' },
      { label: 'OpenAI API', layer: 'infra' },
    ],
    externalUrl: 'https://ainstein.dev',
    externalLabel: 'ainstein.dev ↗',
  },
]
