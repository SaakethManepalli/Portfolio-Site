'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 h-nav flex items-center transition-colors duration-300',
        scrolled ? 'bg-base/90 backdrop-blur-sm border-b border-border' : 'bg-transparent',
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="font-grotesk font-bold text-orange text-lg">SM</span>
          <span className="hidden sm:block font-mono text-sm text-paper-dim group-hover:text-paper transition-colors">
            Saaketh Manepalli
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-paper-dim hover:text-paper transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:saakethmanepalli@utexas.edu"
            className="border border-orange text-orange font-mono text-sm px-4 py-1.5 hover:bg-orange hover:text-base transition-colors uppercase tracking-wider"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden font-mono text-paper-dim text-sm uppercase tracking-widest"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-nav left-0 right-0 bg-base border-b border-border md:hidden">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-mono text-sm text-paper-dim hover:text-paper transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:saakethmanepalli@utexas.edu"
              className="block font-mono text-sm text-orange uppercase tracking-wider"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
