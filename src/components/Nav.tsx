import { Link } from 'react-router-dom'
import { PaperPlaneTilt, CaretRight, CaretDown, Microphone, TreeStructure, Article, Books, SpeakerHigh, Lightbulb } from 'phosphor-react'
import { useState, useEffect, useRef } from 'react'

interface NavProps {
  variant?: 'full' | 'minimal'
}

const products = [
  { name: 'AeroPod', href: 'https://aeropod.dumontai.com', icon: Microphone, description: 'Editor de podcasts com IA' },
  { name: 'AirMap', href: 'https://airmap.dumontai.com', icon: TreeStructure, description: 'Mapas mentais com IA' },
  { name: 'SkyWrite', href: 'https://skywrite.dumontai.com', icon: Article, description: 'Editor de teses academicas' },
  { name: 'Glider', href: 'https://glider.dumontai.com', icon: Books, description: 'Assistente de pesquisa' },
  { name: 'Soar', href: 'https://soar.dumontai.com', icon: SpeakerHigh, description: 'Text-to-Speech AI' },
  { name: 'MicroFly', href: 'https://microfly.dumontai.com', icon: Lightbulb, description: 'Microlearning com IA' },
]

export function Nav({ variant = 'full' }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
                {/* Products Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="flex items-center gap-1 px-5 py-2 rounded-full text-sm font-medium text-brand-muted hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Produtos
                    <CaretDown
                      weight="bold"
                      className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {productsOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-[#0a0b0f]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                      {products.map((product) => {
                        const Icon = product.icon
                        const isExternal = product.href.startsWith('http')

                        if (isExternal) {
                          return (
                            <a
                              key={product.name}
                              href={product.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                              onClick={() => setProductsOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <Icon weight="duotone" className="w-5 h-5 text-brand-gold" />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">{product.name}</div>
                                <div className="text-xs text-brand-muted">{product.description}</div>
                              </div>
                            </a>
                          )
                        }

                        return (
                          <Link
                            key={product.name}
                            to={product.href}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                            onClick={() => setProductsOpen(false)}
                          >
                            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                              <Icon weight="duotone" className="w-5 h-5 text-brand-gold" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{product.name}</div>
                              <div className="text-xs text-brand-muted">{product.description}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>

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
