import { Link } from 'react-router-dom'
import { Nav, Footer, BackgroundEffects } from '../components'

export function Manifesto() {
  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects />
      <Nav />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Manifesto</h1>
            <p className="text-lg text-brand-muted">Nossa visao para revolucionar o desenvolvimento de software no Brasil.</p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-brand-text mb-6">
              Acreditamos que a inteligencia artificial deve ser uma ferramenta que eleva o profissional brasileiro, nao o substitui.
              O Dumont AI nasce da necessidade de um assistente que entende nosso contexto, nossa legislacao e nossas praticas de desenvolvimento.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nossos Principios</h2>
            <ul className="list-disc list-inside text-brand-muted space-y-2 mb-6">
              <li><strong className="text-white">Contexto Brasileiro:</strong> Entendemos leis, normas e padroes nacionais sem precisar de explicacoes adicionais.</li>
              <li><strong className="text-white">Privacidade Primeiro:</strong> Seu codigo nunca e usado para treinar modelos publicos ou compartilhado com terceiros.</li>
              <li><strong className="text-white">Transparencia Total:</strong> Sempre explicamos nossas sugestoes e decisoes de forma clara e fundamentada.</li>
              <li><strong className="text-white">Suporte Local:</strong> Equipe brasileira disponivel 24/7 para ajudar com suas necessidades especificas.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Nossa Missao</h2>
            <p className="text-brand-text mb-6">
              Democratizar o acesso a tecnologia de ponta para empresas e desenvolvedores brasileiros,
              criando ferramentas que entendem e respeitam nossa realidade cultural, legal e tecnica.
            </p>

            <div className="bg-brand-surface/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Junte-se a Revolucao</h3>
              <p className="text-brand-muted mb-4">
                Seja parte do futuro do desenvolvimento brasileiro. Teste o Dumont AI hoje mesmo e experimente
                como a IA pode ser uma aliada verdadeiramente util para profissionais brasileiros.
              </p>
              <Link to="/login" className="inline-block bg-brand-green hover:bg-brand-greenHighlight text-white font-semibold py-2 px-6 rounded-md transition-all">
                Comecar Agora
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
