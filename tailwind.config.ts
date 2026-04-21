import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: '#0D0D0D',
        'base-secondary': '#141414',
        'base-tertiary': '#1A1A1A',
        paper: '#F0EDE8',
        'paper-dim': '#C8C5C0',
        orange: {
          DEFAULT: '#FF4500',
          dim: '#CC3700',
          glow: 'rgba(255,69,0,0.15)',
          'glow-strong': 'rgba(255,69,0,0.30)',
        },
        green: {
          signal: '#00FF41',
          'signal-dim': '#00CC34',
        },
        blue: {
          system: '#00A8FF',
          'system-dim': '#0080CC',
        },
        border: {
          DEFAULT: 'rgba(240,237,232,0.12)',
          bright: 'rgba(240,237,232,0.25)',
          accent: 'rgba(255,69,0,0.40)',
        },
      },
      fontFamily: {
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1.0' }],
        'hero-lg': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1' }],
        label: ['0.65rem', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(255,69,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,69,0,0.04) 1px, transparent 1px)',
        'blueprint-grid-fine':
          'linear-gradient(rgba(240,237,232,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,232,0.025) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-coarse': '60px 60px',
        'grid-fine': '12px 12px',
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.2s step-start infinite',
        'signal-pulse': 'signal-pulse 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'signal-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.75)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(255,69,0,0.25), 0 0 60px rgba(255,69,0,0.10)',
        'orange-glow-sm': '0 0 8px rgba(255,69,0,0.30)',
        'inset-top': 'inset 0 1px 0 rgba(240,237,232,0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        nav: '64px',
      },
    },
  },
  plugins: [],
}

export default config
