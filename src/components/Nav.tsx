import { Link } from 'react-router-dom'
import { PaperPlaneTilt, CaretRight } from 'phosphor-react'
import { useState, useEffect } from 'react'

interface NavProps {
  variant?: 'full' | 'minimal'
}

export function Nav({ variant = 'full' }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#030406]/80 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${scrolled ? 'bg-white/5' : 'bg-white/10 group-hover:bg-white/20'}`}>
              <PaperPlaneTilt
                size={24}
                weight="duotone"
                className={`transition-all duration-500 ${scrolled ? 'text-brand-gold' : 'text-white'} group-hover:rotate-12 group-hover:-translate-y-0.5`}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white font-display leading-none">Dumont</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-muted font-medium">Pilot</span>
            </div>
          </Link>

          {variant === 'full' ? (
            <>
              <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-sm">
                {['Recursos', 'Manifesto', 'Preços'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="px-5 py-2 rounded-full text-sm font-medium text-brand-muted hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-4">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link to="/login">
                  <button className="group relative px-5 py-2.5 rounded-lg bg-brand-gold text-black text-sm font-bold shadow-lg shadow-brand-gold/20 hover:shadow-brand-gold/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-1">
                      Testar Beta
                      <CaretRight weight="bold" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
              <Link to="/" className="hover:text-white transition-colors">Voltar ao Início</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
