import { useState, type FormEvent } from 'react'
import { Nav, BackgroundEffects } from '../components'

export function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (username === 'demo' && password === 'demo') {
      window.location.href = '/app'
    } else {
      setError(true)
    }
  }

  return (
    <div className="bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-green selection:text-white min-h-screen">
      <BackgroundEffects />
      <Nav variant="minimal" />

      <main className="relative z-10 pt-32 pb-20">
        <div className="max-w-md mx-auto px-6">
          <div className="glass-card rounded-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">Acesso ao App</h1>
              <p className="text-brand-muted text-sm">Use as credenciais demo para testar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-brand-text mb-2">Usuario</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-md text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-brand-text mb-2">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-brand-surface border border-brand-border rounded-md text-brand-text placeholder-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm">Credenciais invalidas. Use demo/demo.</div>
              )}

              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-greenHighlight text-white font-semibold py-2.5 px-4 rounded-md transition-all border border-brand-green/20 shadow-sm"
              >
                Entrar
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-brand-muted">Para teste: usuario <strong>demo</strong>, senha <strong>demo</strong></p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
