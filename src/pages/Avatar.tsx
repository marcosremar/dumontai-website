import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects, ParisBackground } from '../components'

export function Avatar() {
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
                            <div className="w-16 h-16 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center text-brand-green">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold text-white mb-2">DuMont Avatar</h1>
                                <p className="text-brand-muted">Conversação Natural e Aprendizado de Idiomas</p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">Visão Geral</h2>
                        <div className="mb-8 rounded-lg overflow-hidden border border-brand-green/20 shadow-[0_0_30px_rgba(46,160,67,0.15)]">
                            <img src="/avatar-feature.png" alt="DuMont Avatar Voice Interface" className="w-full h-auto" />
                        </div>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            DuMont Avatar oferece uma experiência de conversação natural que vai além dos assistentes de voz tradicionais.
                            Com latência ultra-baixa e síntese de voz emocional, você pode praticar idiomas ou ter conversas complexas.
                        </p>
                        <p className="text-brand-muted leading-relaxed">
                            Com voz natural e expressões faciais realistas, o avatar responde instantaneamente, corrige erros sutilmente
                            e adapta o nível de dificuldade ao seu progresso.
                        </p>
                    </section>

                    {/* Key Features */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Recursos Principais</h2>
                        <div className="grid gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    conversas com LowLatency Voice AI
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Tecnologia de síntese de voz de última geração com latência ultra-baixa. O avatar responde em milissegundos,
                                    criando uma experiência de conversação tão natural quanto falar com uma pessoa real.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Avatar Interativo Realista
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Expressões faciais sincronizadas com a fala, linguagem corporal natural e visual envolvente.
                                    O avatar reage emocionalmente ao contexto da conversa, tornando a interação mais humana e memorável.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Múltiplos Idiomas
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    Pratique inglês, espanhol, francês, alemão, mandarim e muito mais. Cada idioma com sotaques nativos autênticos
                                    e contextos culturais apropriados para um aprendizado verdadeiramente global.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Adaptação Inteligente
                                </h3>
                                <p className="text-brand-muted text-sm leading-relaxed">
                                    O sistema aprende com você. Identifica suas dificuldades, ajusta o vocabulário ao seu nível e
                                    gradualmente aumenta a complexidade conforme você progride.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Learning Scenarios */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Cenários de Aprendizado</h2>
                        <div className="grid gap-4">
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Conversação Casual</h3>
                                <p className="text-sm text-brand-muted">Pratique diálogos do dia a dia sobre hobbies, clima, trabalho e interesses pessoais.</p>
                            </div>
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Negócios e Profissional</h3>
                                <p className="text-sm text-brand-muted">Prepare-se para reuniões, apresentações e negociações em ambiente corporativo.</p>
                            </div>
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Viagens e Turismo</h3>
                                <p className="text-sm text-brand-muted">Aprenda frases essenciais para restaurantes, hotéis, aeroportos e situações de emergência.</p>
                            </div>
                            <div className="bg-brand-surface/30 border border-brand-border rounded-lg p-4">
                                <h3 className="font-semibold text-white mb-2">Acadêmico e Técnico</h3>
                                <p className="text-sm text-brand-muted">Desenvolva vocabulário especializado para sua área de estudo ou profissão.</p>
                            </div>
                        </div>
                    </section>

                    {/* Benefits */}
                    <section className="glass-card rounded-xl p-8 mb-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Por Que Funciona</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Prática Sem Pressão</h3>
                                    <p className="text-sm text-brand-muted">Erre à vontade sem medo de julgamento. O avatar é paciente e encoraja você a experimentar.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Disponível 24/7</h3>
                                    <p className="text-sm text-brand-muted">Pratique quando quiser, quantas vezes quiser. Sem agendamentos ou horários fixos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Feedback Imediato</h3>
                                    <p className="text-sm text-brand-muted">Correções em tempo real com explicações claras sobre gramática e pronúncia.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="glass-card rounded-xl p-8 bg-gradient-to-br from-brand-green/5 to-transparent border border-brand-green/20">
                        <h2 className="text-2xl font-bold text-white mb-4">Comece Sua Jornada Linguística</h2>
                        <p className="text-brand-muted mb-6">
                            Transforme seu aprendizado de idiomas com conversações reais, imersivas e personalizadas.
                        </p>
                        <Link to="/login">
                            <button className="bg-brand-green hover:bg-brand-green/80 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                                Começar Gratuitamente
                            </button>
                        </Link>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}
