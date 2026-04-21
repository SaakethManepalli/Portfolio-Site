import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ModeProvider } from '@/components/providers/ModeProvider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saaketh Manepalli',
  description: 'Full-Stack Engineer | ECE @ UT Austin | Founder, Ainstein. Building from ARM Assembly to Next.js.',
  openGraph: {
    title: 'Saaketh Manepalli',
    description: 'Full-Stack Engineer | ECE @ UT Austin | Founder, Ainstein',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-base text-paper font-grotesk antialiased overflow-x-hidden visual-mode">
        <ModeProvider>
          {children}
        </ModeProvider>
      </body>
    </html>
  )
}
