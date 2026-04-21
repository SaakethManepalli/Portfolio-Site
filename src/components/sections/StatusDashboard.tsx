import TerminalBlock from '@/components/ui/TerminalBlock'
import { statusData } from '@/lib/data/status'

export default function StatusDashboard() {
  const lines = statusData.entries.map((entry) => ({
    prefix: entry.key,
    text: entry.value,
    highlight: entry.highlight ?? false,
  }))

  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            <div className="font-mono text-label text-orange uppercase tracking-widest">
              {'// status-dashboard'}
            </div>
            <h2 className="font-grotesk text-2xl font-bold text-paper">Current Status</h2>
            <p className="font-mono text-sm text-paper-dim">
              Last updated: {statusData.lastUpdated}
            </p>
          </div>
          <div className="md:col-span-2">
            <TerminalBlock
              lines={lines}
              title={`system-status — ${statusData.lastUpdated}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
