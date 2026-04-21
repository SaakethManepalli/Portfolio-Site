export interface HackathonEntry {
  year: string
  event: string
  project: string
  result?: string
  tech: string
  description: string
}

export const hackathons: HackathonEntry[] = [
  {
    year: '2024',
    event: 'HoyaHacks — Georgetown University',
    project: 'PomEEGo',
    result: '3rd Place Overall',
    tech: 'EEG hardware, Python, signal processing',
    description:
      'Real-time EEG headset integration for focus monitoring. Processes raw brainwave data into actionable focus metrics via a Python signal pipeline.',
  },
  {
    year: '2024',
    event: 'BitCamp — University of Maryland',
    project: 'ParseDoD',
    result: undefined,
    tech: 'NLP, Python, Next.js',
    description:
      'Government contract analysis tool. NLP pipeline extracts key clauses and obligations from DoD procurement documents.',
  },
  {
    year: '2024',
    event: 'TCNJ Hackathon',
    project: 'AI Diet Tracker',
    result: 'Best Freshman Project',
    tech: 'React, Node.js, OpenAI API',
    description:
      'Conversational diet logging app using GPT-4 for food recognition and macro estimation from natural language input.',
  },
  {
    year: '2023',
    event: 'TechHacks LI',
    project: 'FirstShot',
    result: undefined,
    tech: 'Python, OpenCV, CS2 API',
    description:
      'CS2 aim analysis tool. Uses computer vision to track crosshair movement patterns and generate personalized training recommendations.',
  },
  {
    year: '2023',
    event: 'HackNYU — New York University',
    project: 'SoundKey',
    result: undefined,
    tech: 'Web Audio API, JavaScript, Node.js',
    description:
      'Music-based password authentication system. Encodes credentials as rhythmic patterns, providing an accessibility-first 2FA alternative.',
  },
]
