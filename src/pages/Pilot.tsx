import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects, ParisBackground } from '../components'

export function Pilot() {
    return (
        <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
            <BackgroundEffects />
            <ParisBackground />
            <Nav variant="minimal" />

            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <Link to="/" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors mb-6">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            Voltar
                        </Link>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">DuMont Pilot</h1>
                                <p className="text-brand-muted">Automação de Desktop e Browser Human-Like</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Visão Geral</h2>
                        <div className="mb-8 rounded-lg overflow-hidden border border-brand-gold/20 shadow-[0_0_30px_rgba(210,153,34,0.15)]">
                            <img src="/pilot-feature.png" alt="DuMont Pilot Desktop Interface" className="w-full h-auto" />
                        </div>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            DuMont Pilot é seu assistente pessoal de automação que utiliza seu computador exatamente como você.
                            Ele pode navegar na web, usar aplicativos desktop, preencher formulários e extrair dados de sistemas complexos.
                        </p>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            DuMont Pilot é nomeado em homenagem a <strong className="text-white">Santos Dumont</strong>, o pioneiro da aviação brasileiro
                            que compartilhou suas invenções abertamente com o mundo. Assim como Santos Dumont democratizou o voo,
                            o DuMont Pilot democratiza a automação de computadores.
                        </p>
                        <p className="text-brand-muted leading-relaxed">
                            Este agente autônomo de desktop combina o poder do Agent-S com Browser-Use para criar uma experiência de automação
                            verdadeiramente "human-like" que interage com seu computador como um usuário experiente faria.
                        </p>
                    </section>

                    {/* Key Features */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Recursos Principais</h2>
                        <div className="grid gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Roteamento Híbrido Inteligente
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Classifica automaticamente cada tarefa e decide se deve usar navegador ou desktop. Tarefas web são direcionadas
                                    para Browser-Use com Playwright, enquanto tarefas de desktop usam Agent-S com visão computacional.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Interface Web Moderna
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Frontend React com design premium, permitindo controle intuitivo do agente. Visualize em tempo real
                                    as ações sendo executadas e acompanhe o progresso de tarefas complexas.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Multi-Plataforma
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Suporte completo para Linux, macOS e Windows. O agente adapta-se automaticamente ao sistema operacional
                                    e suas peculiaridades, garantindo automação consistente em qualquer ambiente.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Suporte Multi-LLM
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Funciona com OpenAI, Anthropic, Gemini, OpenRouter e mais. Escolha o modelo ideal para cada tipo de tarefa,
                                    otimizando custo e performance.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Use Cases */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Casos de Uso</h2>
                        <div className="grid gap-4">
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Automação de Testes E2E</h3>
                                <p className="text-sm text-brand-muted">Execute cenários complexos de teste que envolvem múltiplas aplicações e workflows.</p>
                            </div>
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Data Entry & Web Scraping</h3>
                                <p className="text-sm text-brand-muted">Automatize preenchimento de formulários e extração de dados de sites complexos.</p>
                            </div>
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Workflows Cross-Application</h3>
                                <p className="text-sm text-brand-muted">Conecte diferentes aplicações desktop e web em fluxos de trabalho unificados.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Baseado Em</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-brand-surface/50 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Agent-S</h3>
                                <p className="text-xs text-brand-muted">Framework de automação desktop com visão computacional</p>
                            </div>
                            <div className="bg-brand-surface/50 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Browser-Use</h3>
                                <p className="text-xs text-brand-muted">Biblioteca de automação web com Playwright</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="glass-card rounded-xl p-8 bg-gradient-to-br from-brand-gold/5 to-transparent border border-brand-gold/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Automatize Como Nunca Antes</h2>
                        <p className="text-brand-muted mb-6">
                            Deixe o DuMont Pilot assumir tarefas repetitivas enquanto você foca no que realmente importa.
                        </p>
                        <Link to="/login">
                            <button className="bg-brand-gold hover:bg-brand-gold/80 text-black px-6 py-3 rounded-lg font-semibold transition-all">
                                Começar Agora
                            </button>
                        </Link>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
