import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Manifesto, Precos, Privacidade, Recursos, Termos } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/precos" element={<Precos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/termos" element={<Termos />} />
      </Routes>
    </Router>
  )
}

export default App
