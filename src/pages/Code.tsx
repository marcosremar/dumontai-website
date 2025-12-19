import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects, ParisBackground } from '../components'

export function Code() {
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
                            <div className="w-16 h-16 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">DuMont Code</h1>
                                <p className="text-brand-muted">Agente de Codificação Autônomo Multi-Agente</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Visão Geral</h2>
                        <div className="mb-8 rounded-lg overflow-hidden border border-brand-blue/20 shadow-[0_0_30px_rgba(88,166,255,0.15)]">
                            <img src="/code-feature.png" alt="DuMont Code Interface" className="w-full h-auto" />
                        </div>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            DuMont Code é um agente de codificação autônomo de última geração que revoluciona o desenvolvimento de software.
                            Com execução paralela multi-agente e contexto semântico profundo, ele executa tarefas complexas com precisão cirúrgica.
                        </p>
                        <p className="text-brand-muted leading-relaxed">
                            Construído sobre tecnologias de ponta como LangGraph, ChromaDB e Tree-sitter, o DuMont Code não é apenas uma
                            ferramenta de autocomplete — é um engenheiro de software senior que entende seu código, sua arquitetura e seus objetivos.
                        </p>
                    </section>

                    {/* Key Features */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Recursos Principais</h2>
                        <div className="grid gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Execução Paralela Multi-Agente
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Orquestração sofisticada com LangGraph permitindo múltiplos agentes especializados trabalhando simultaneamente
                                    em diferentes aspectos do código. Cada agente tem expertise em domínios específicos como backend, frontend,
                                    testes ou infraestrutura.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    RAG Semântico Avançado
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Utiliza ChromaDB para embeddings vetoriais e Tree-sitter para análise sintática precisa. Isso permite
                                    compreensão profunda do contexto do código, identificando padrões, dependências e relacionamentos em todo o projeto.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Infraestrutura Cloud-Native
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Orquestração nativa com Docker e Kubernetes. O agente pode provisionar ambientes isolados, executar testes
                                    em containers, e gerenciar deployments complexos com facilidade.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Observabilidade Completa
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Integração com OpenTelemetry para rastreamento distribuído, métricas e logs. Acompanhe cada decisão do agente
                                    e entenda o raciocínio por trás de cada mudança de código.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Stack Tecnológico</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['LangGraph', 'ChromaDB', 'Tree-sitter', 'Docker', 'Kubernetes', 'OpenTelemetry', 'LiteLLM', 'Redis', 'PostgreSQL'].map((tech) => (
                                <div key={tech} className="bg-brand-surface/50 border border-brand-border rounded-lg p-3 text-center">
                                    <span className="text-sm font-medium text-white">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="glass-card rounded-xl p-8 bg-gradient-to-br from-brand-blue/5 to-transparent border border-brand-blue/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Pronto para Revolucionar Seu Desenvolvimento?</h2>
                        <p className="text-brand-muted mb-6">
                            Experimente o DuMont Code e veja como a automação inteligente pode acelerar seu fluxo de trabalho.
                        </p>
                        <Link to="/login">
                            <button className="bg-brand-blue hover:bg-brand-blue/80 text-white px-6 py-3 rounded-lg font-semibold transition-all">
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
