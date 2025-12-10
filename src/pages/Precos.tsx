import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects } from '../components'

const CheckIcon = () => (
  <svg className="w-4 h-4 text-brand-green mr-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export function Precos() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects />
      <Nav />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Planos e Precos</h1>
            <p className="text-lg text-brand-muted">Escolha o plano ideal para suas necessidades de desenvolvimento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Gratuito */}
            <div className="glass-card rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Gratuito</h3>
                <div className="text-4xl font-bold text-brand-green mb-4">R$ 0</div>
                <p className="text-sm text-brand-muted">Perfeito para comecar</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Ate 100 sugestoes por mes
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Suporte basico
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Contexto brasileiro
                </li>
              </ul>

              <Link to="/login" className="block w-full bg-brand-surface text-center py-3 px-4 rounded-md font-semibold hover:bg-brand-border transition-all">
                Comecar Gratuitamente
              </Link>
            </div>

            {/* Plano Profissional */}
            <div className="glass-card rounded-xl p-8 border-2 border-brand-green relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand-green text-white px-3 py-1 rounded-full text-xs font-semibold">Mais Popular</span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Profissional</h3>
                <div className="text-4xl font-bold text-brand-green mb-4">R$ 49<span className="text-lg">/mes</span></div>
                <p className="text-sm text-brand-muted">Para desenvolvedores individuais</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Sugestoes ilimitadas
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Suporte prioritario
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Engenharia reversa avancada
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Integracao com ferramentas
                </li>
              </ul>

              <Link to="/login" className="block w-full bg-brand-green text-center py-3 px-4 rounded-md font-semibold hover:bg-brand-greenHighlight transition-all">
                Assinar Profissional
              </Link>
            </div>

            {/* Plano Empresarial */}
            <div className="glass-card rounded-xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Empresarial</h3>
                <div className="text-4xl font-bold text-brand-gold mb-4">Sob Consulta</div>
                <p className="text-sm text-brand-muted">Para equipes e empresas</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Tudo do plano Profissional
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Suporte dedicado 24/7
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  Treinamento personalizado
                </li>
                <li className="flex items-center text-sm">
                  <CheckIcon />
                  SLA garantido
                </li>
              </ul>

              <Link to="/login" className="block w-full bg-brand-surface text-center py-3 px-4 rounded-md font-semibold hover:bg-brand-border transition-all">
                Falar com Vendas
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-muted mb-4">Todos os planos incluem criptografia de ponta a ponta e conformidade com LGPD.</p>
            <p className="text-sm text-brand-border">Precos em Reais (BRL). Sem taxas ocultas.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
