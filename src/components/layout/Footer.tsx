export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="font-mono text-sm space-y-2">
          <div className="text-paper-dim/40">{'// EOF'}</div>
          <div className="text-paper-dim/60">
            {'// saaketh-manepalli — Full-Stack Engineer | ECE @ UT Austin | Founder, Ainstein'}
          </div>
          <div className="mt-4 space-y-1.5">
            <div className="flex gap-2">
              <span className="text-orange">{'>'}</span>
              <span className="text-paper-dim">CONTACT:</span>
              <a
                href="mailto:saakethmanepalli@utexas.edu"
                className="text-paper hover:text-orange transition-colors"
              >
                saakethmanepalli@utexas.edu
              </a>
            </div>
            <div className="flex gap-2">
              <span className="text-orange">{'>'}</span>
              <span className="text-paper-dim">GITHUB:</span>
              <a
                href="https://github.com/SaakethManepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-orange transition-colors"
              >
                github.com/SaakethManepalli
              </a>
            </div>
            <div className="flex gap-2">
              <span className="text-orange">{'>'}</span>
              <span className="text-paper-dim">LINKEDIN:</span>
              <a
                href="https://linkedin.com/in/saaketh-manepalli-a8727b305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-orange transition-colors"
              >
                linkedin.com/in/saaketh-manepalli
              </a>
            </div>
            <div className="flex gap-2">
              <span className="text-orange">{'>'}</span>
              <span className="text-paper-dim">AGENCY:</span>
              <a
                href="https://ainstein.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper hover:text-orange transition-colors"
              >
                ainstein.dev
              </a>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-border text-paper-dim/30">
            © {new Date().getFullYear()} Saaketh Manepalli. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
