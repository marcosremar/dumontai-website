import { Nav, Footer, BackgroundEffects } from '../components'

export function Termos() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects showGrid={false} />
      <Nav variant="minimal" />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-xl p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Termos de Uso</h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-brand-text mb-4">
                Estes Termos de Uso ("Termos") regem o uso do servico Dumont AI.
                Ao acessar ou usar nosso servico, voce concorda com estes termos.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Descricao do Servico</h2>
              <p className="text-brand-muted mb-4">
                O Dumont AI e uma ferramenta de assistencia ao desenvolvimento de software que utiliza inteligencia artificial
                para fornecer sugestoes contextuais e ajudar no processo de codificacao.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Uso Aceitavel</h2>
              <p className="text-brand-muted mb-4">
                Voce concorda em usar o servico apenas para fins legais e de acordo com nossas diretrizes.
                Nao e permitido usar o servico para atividades que violem leis ou direitos de terceiros.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Propriedade Intelectual</h2>
              <p className="text-brand-muted mb-4">
                Todo o conteudo gerado pelo Dumont AI e propriedade do usuario.
                O Dumont AI mantem direitos sobre sua tecnologia e algoritmos proprietarios.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Limitacao de Responsabilidade</h2>
              <p className="text-brand-muted mb-4">
                O servico e fornecido "como esta". Nao garantimos que o servico estara sempre disponivel ou livre de erros.
                O uso das sugestoes do Dumont AI e de responsabilidade do usuario.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Contato</h2>
              <p className="text-brand-muted">
                Para duvidas sobre estes termos, entre em contato:{' '}
                <a href="mailto:legal@dumontai.com" className="text-brand-blue hover:text-brand-blue/80">legal@dumontai.com</a>
              </p>

              <p className="text-sm text-brand-border mt-6">
                Ultima atualizacao: 4 de dezembro de 2025
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
