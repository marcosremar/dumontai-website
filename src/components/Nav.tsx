import { Link } from 'react-router-dom'

interface NavProps {
  variant?: 'full' | 'minimal'
}

export function Nav({ variant = 'full' }: NavProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border/50 supports-[backdrop-filter]:bg-brand-bg/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-brand-border to-brand-bg rounded-lg border border-white/5 shadow-inner-light group-hover:border-brand-green/30 transition-colors">
              <svg className="w-5 h-5 text-brand-text group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">Dumont <span className="text-brand-muted font-normal">AI</span></span>
          </Link>

          {variant === 'full' ? (
            <>
              <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-brand-muted">
                <Link to="/recursos" className="hover:text-white transition-colors">Recursos</Link>
                <Link to="/manifesto" className="hover:text-white transition-colors">Manifesto</Link>
                <Link to="/precos" className="hover:text-white transition-colors">Precos</Link>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <Link to="/login" className="text-[13px] font-medium text-brand-muted hover:text-white transition-colors">Login</Link>
                <Link to="/login">
                  <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-1.5 rounded-md text-[13px] font-semibold transition-all border border-[rgba(240,246,252,0.1)] shadow-sm">
                    Testar Beta
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-brand-muted">
              <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
