import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects } from '../components'

export function Home() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects />
      <Nav />

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-border/30 border border-brand-border text-xs font-mono text-brand-gold mb-8 animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
                v1.0 Santos-Dumont
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                O seu copiloto<br />
                <span className="text-brand-muted">de codigo</span>
                <span className="text-gold-gradient"> brasileiro.</span>
              </h1>

              <p className="text-lg text-brand-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Mais que um autocomplete. Um engenheiro de software senior que entende seu contexto, sua lingua e suas regras de negocio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/login">
                  <button className="group bg-white text-black px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Comecar agora
                    <svg className="w-4 h-4 text-gray-500 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
                <Link to="/recursos">
                  <button className="px-6 py-3.5 rounded-lg border border-brand-border text-brand-text font-medium text-sm hover:border-brand-text hover:text-white transition-all bg-brand-surface/50">
                    Ver documentacao
                  </button>
                </Link>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-xs text-brand-border">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-gray-600 border border-black"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-500 border border-black"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-400 border border-black"></div>
                </div>
                <span className="text-brand-muted">Usado por +2.000 devs brasileiros</span>
              </div>
            </div>

            {/* Right Content: Code Editor */}
            <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-float perspective-1000">
              {/* Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue/30 to-brand-green/30 blur-2xl opacity-20 rounded-xl"></div>

              {/* Editor Frame */}
              <div className="relative bg-[#0d1117] rounded-xl border border-[#30363d] shadow-2xl overflow-hidden flex flex-col h-[400px]">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#010409] border-b border-[#30363d]">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#fa7970] border border-black/20"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffaa5f] border border-black/20"></div>
                      <div className="w-3 h-3 rounded-full bg-[#5eda6e] border border-black/20"></div>
                    </div>
                    <div className="text-[11px] text-brand-muted font-medium ml-2">aviao.ts</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-[#21262d]"></div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex bg-[#010409] border-b border-[#30363d]">
                  <div className="px-4 py-2 text-[12px] text-white border-t-2 border-brand-gold bg-[#0d1117] border-r border-[#30363d]">
                    navigation.tsx
                  </div>
                  <div className="px-4 py-2 text-[12px] text-brand-muted border-r border-[#30363d]">
                    styles.css
                  </div>
                </div>

                {/* Code Area */}
                <div className="flex-1 p-6 font-mono text-[13px] leading-6 overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0d1117] border-r border-[#30363d]/30 flex flex-col items-end pr-3 pt-6 text-[#484f58] select-none">
                    <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
                  </div>

                  <div className="pl-12">
                    <div><span className="text-[#ff7b72]">import</span> {'{'} <span className="text-[#d2a8ff]">Aerodinamica</span> {'}'} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'./fisica'</span>;</div>
                    <div className="h-6"></div>
                    <div><span className="text-[#8b949e] italic">// Otimizando sustentacao para decolagem curta</span></div>
                    <div><span className="text-[#ff7b72]">export async function</span> <span className="text-[#d2a8ff]">calcularDecolagem</span><span className="text-[#c9d1d9]">(</span><span className="text-[#79c0ff]">peso</span>: <span className="text-[#ff7b72]">number</span><span className="text-[#c9d1d9]">)</span> {'{'}</div>
                    <div className="pl-4"><span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">velocidade</span> = <span className="text-[#79c0ff]">Aerodinamica</span>.<span className="text-[#d2a8ff]">analisarVento</span>();</div>
                    <div className="h-6"></div>
                    <div className="pl-4"><span className="text-[#ff7b72]">if</span> (<span className="text-[#79c0ff]">velocidade</span> {'>'} <span className="text-[#79c0ff]">LIMIT_CRITICO</span>) {'{'}</div>

                    {/* AI Suggestion Highlight */}
                    <div className="relative pl-8 group cursor-pointer">
                      <div className="absolute inset-0 bg-brand-blue/10 border border-brand-blue/20 rounded -ml-2 -mr-2 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-between">
                        <span className="text-brand-text opacity-50"><span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">null</span>; <span className="text-[#8b949e]">// fallback</span></span>
                        <span className="text-[10px] bg-brand-blue/20 text-brand-blue px-1.5 py-0.5 rounded border border-brand-blue/30 font-semibold tracking-wide flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          DUMONT
                        </span>
                      </div>
                      <div className="text-[#8b949e] text-[10px] mt-1 pl-0 font-sans opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-0 w-full whitespace-nowrap">
                        Sugestao baseada em padroes de seguranca aerea (ISO-9001)
                      </div>
                    </div>

                    <div className="pl-4">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#21262d] flex items-center justify-between px-3 text-[10px] text-brand-muted select-none">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-brand-blue">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                      0 errors
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                      0 warnings
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>Ln 8, Col 24</span>
                    <span>UTF-8</span>
                    <span>TypeScript</span>
                    <div className="flex items-center gap-1.5 text-white">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
                      Dumont: Ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Grid */}
      <section className="py-24 border-t border-brand-border/30 bg-[#06090f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="glass-card rounded-xl p-8 hover:bg-[#161b22] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Contexto Local</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Entende leis brasileiras, documentacao do Banco Central e padroes nacionais sem alucinacoes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card rounded-xl p-8 hover:bg-[#161b22] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Engenharia Reversa</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Explica codigos legados complexos em portugues claro, identificando debitos tecnicos instantaneamente.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card rounded-xl p-8 hover:bg-[#161b22] transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Seguranca em Primeiro Lugar</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Seu codigo nunca e usado para treinar modelos publicos. Privacidade total para empresas.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
