
import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects, ParisBackground } from '../components'
import { ProjectCarousel } from '../components/ProjectCarousel'

export function Home() {
  return (
    <div className="relative isolate min-h-screen bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white">
      <BackgroundEffects />
      <ParisBackground />
      <Nav />

      {/* Hero Carousel */}
      <main className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ProjectCarousel />
        </div>
      </main>

      {/* DuMont Ecosystem Detailed Cards */}
      <section className="py-24 border-t border-brand-border/30 bg-[#06090f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore Cada Projeto</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">
              Conheça em detalhes cada componente do ecossistema DuMont AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* DuMont Code */}
            <div className="glass-card rounded-xl p-8 hover:bg-[#161b22] transition-all duration-300 group border border-brand-blue/10 hover:border-brand-blue/30">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DuMont Code</h3>
              <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                Agente de codificação autônomo que executa tarefas complexas de desenvolvimento com precisão cirúrgica.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Execução paralela multi-agente com LangGraph</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>RAG semântico com ChromaDB e Tree-sitter</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Orquestração Docker/Kubernetes nativa</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-brand-border/30 flex items-center justify-between">
                <span className="text-xs font-mono text-brand-blue/70">v17.0 • Multi-Agent</span>
                <Link to="/code" className="text-xs font-medium text-brand-blue hover:text-brand-blue/80 transition-colors flex items-center gap-1">
                  Saiba Mais
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

            {/* DuMont Pilot */}
            <div className="glass-card rounded-xl p-8 hover:bg-[#161b22] transition-all duration-300 group border border-brand-gold/10 hover:border-brand-gold/30">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DuMont Pilot</h3>
              <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                Automação de desktop "human-like" que interage com seu computador como um usuário experiente.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Fork do Agent-S + Browser-Use</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Roteamento híbrido browser/desktop</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Cross-platform: Linux, macOS, Windows</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-brand-border/30 flex items-center justify-between">
                <span className="text-xs font-mono text-brand-gold/70">Named after Santos Dumont</span>
                <Link to="/pilot" className="text-xs font-medium text-brand-gold hover:text-brand-gold/80 transition-colors flex items-center gap-1">
                  Saiba Mais
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

            {/* DuMont Avatar */}
            <div className="glass-card rounded-xl p-8 hover:bg-[#161b22] transition-all duration-300 group border border-brand-green/10 hover:border-brand-green/30">
              <div className="w-12 h-12 rounded-lg bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">DuMont Avatar</h3>
              <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                Pratique idiomas em tempo real com um avatar interativo e voz natural para conversação fluida.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Conversação com voz em tempo real</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Avatar interativo com expressões naturais</span>
                </li>
                <li className="flex items-start gap-2 text-xs text-brand-muted">
                  <svg className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Aprendizado imersivo de múltiplos idiomas</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-brand-border/30 flex items-center justify-between">
                <span className="text-xs font-mono text-brand-green/70">Real-time Voice AI</span>
                <Link to="/avatar" className="text-xs font-medium text-brand-green hover:text-brand-green/80 transition-colors flex items-center gap-1">
                  Saiba Mais
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
