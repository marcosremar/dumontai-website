import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-brand-border/30 bg-[#030406] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-brand-border/30 flex items-center justify-center border border-white/10">
            <svg className="w-3 h-3 text-brand-muted" viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
          </div>
          <span className="text-xs text-brand-muted">&copy; 2025 Dumont AI Inc.</span>
        </div>
        <div className="flex gap-6 text-xs text-brand-muted font-medium">
          <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          <a href="https://twitter.com/dumontai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          <a href="https://github.com/dumontai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
