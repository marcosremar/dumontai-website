import { Nav, Footer, BackgroundEffects } from '../components'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    ),
    title: 'Contexto Local',
    description: 'Entende leis brasileiras, documentacao do Banco Central e padroes nacionais sem alucinacoes.',
    color: 'blue'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
      </svg>
    ),
    title: 'Engenharia Reversa',
    description: 'Explica codigos legados complexos em portugues claro, identificando debitos tecnicos instantaneamente.',
    color: 'gold'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
    title: 'Seguranca em Primeiro Lugar',
    description: 'Seu codigo nunca e usado para treinar modelos publicos. Privacidade total para empresas.',
    color: 'green'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    ),
    title: 'Sugestoes Inteligentes',
    description: 'Sugestoes contextuais baseadas em padroes de codigo e melhores praticas brasileiras.',
    color: 'blue'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
      </svg>
    ),
    title: 'Documentacao Integrada',
    description: 'Acesso direto a documentacao tecnica brasileira e normas do mercado.',
    color: 'gold'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z"></path>
      </svg>
    ),
    title: 'Suporte 24/7',
    description: 'Equipe dedicada de engenheiros brasileiros disponiveis para ajudar.',
    color: 'green'
  }
]

const colorClasses = {
  blue: {
    bg: 'bg-brand-blue/10',
    border: 'border-brand-blue/20',
    text: 'text-brand-blue'
  },
  gold: {
    bg: 'bg-brand-gold/10',
    border: 'border-brand-gold/20',
    text: 'text-brand-gold'
  },
  green: {
    bg: 'bg-brand-green/10',
    border: 'border-brand-green/20',
    text: 'text-brand-green'
  }
}

export function Recursos() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects />
      <Nav />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Recursos</h1>
            <p className="text-lg text-brand-muted">Descubra todas as funcionalidades que tornam o Dumont AI uma ferramenta poderosa para desenvolvedores brasileiros.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const colors = colorClasses[feature.color as keyof typeof colorClasses]
              return (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-4 ${colors.text}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-brand-muted">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
