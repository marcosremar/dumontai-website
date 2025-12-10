import { Nav, Footer, BackgroundEffects } from '../components'

export function Privacidade() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects showGrid={false} />
      <Nav variant="minimal" />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-xl p-8">
            <h1 className="text-3xl font-bold text-white mb-6">Politica de Privacidade</h1>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-brand-text mb-4">
                A Dumont AI Inc. ("nos", "nosso" ou "Dumont AI") esta comprometida em proteger sua privacidade.
                Esta Politica de Privacidade descreve como coletamos, usamos e protegemos suas informacoes pessoais.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Informacoes que Coletamos</h2>
              <p className="text-brand-muted mb-4">
                Coletamos apenas as informacoes necessarias para fornecer nossos servicos de assistencia ao desenvolvimento de software.
                Nao armazenamos seu codigo fonte ou dados de desenvolvimento.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Uso de Dados</h2>
              <p className="text-brand-muted mb-4">
                Seus dados sao usados exclusivamente para melhorar sua experiencia com o Dumont AI.
                Nunca compartilhamos suas informacoes com terceiros ou usamos seus dados para treinar modelos publicos.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Conformidade com LGPD</h2>
              <p className="text-brand-muted mb-4">
                Estamos totalmente em conformidade com a Lei Geral de Protecao de Dados (LGPD) do Brasil.
                Voce tem controle total sobre seus dados e pode solicitar sua exclusao a qualquer momento.
              </p>

              <h2 className="text-xl font-semibold text-white mt-6 mb-3">Contato</h2>
              <p className="text-brand-muted">
                Para questoes sobre privacidade, entre em contato conosco atraves do email:{' '}
                <a href="mailto:privacidade@dumontai.com" className="text-brand-blue hover:text-brand-blue/80">privacidade@dumontai.com</a>
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
