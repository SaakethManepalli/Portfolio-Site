import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import TerminalToggle from '@/components/layout/TerminalToggle'
import Hero from '@/components/sections/Hero'
import StatusDashboard from '@/components/sections/StatusDashboard'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatusDashboard />
        <Projects />
        <Experience />
      </main>
      <Footer />
      <TerminalToggle />
    </>
  )
}
