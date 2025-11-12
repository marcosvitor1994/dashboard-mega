import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Capa from "./pages/Capa/Capa"
import LinhaTempo from "./pages/LinhaTempo/LinhaTempo"
import EstrategiaOnline from "./pages/EstrategiaOnline/EstrategiaOnline"
import VisaoGeral from "./pages/VisaoGeral/VisaoGeral"
import Alcance from "./pages/Alcance/Alcance"
import Visualizacoes from "./pages/Visualizacoes/Visualizacoes"
import CriativosTikTok from "./pages/CriativosTikTok/CriativosTikTok"
import CriativosMeta from "./pages/CriativosMetaAds/CriativosMetaAds"
import Glossario from "./pages/Glossario/Glossario"
import CriativosPinterest from "./pages/CriativosPinterest/CriativosPinterest"
import TrafegoEngajamento from "./pages/TrafegoEngajamento/TrafegoEngajamento"
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Redirecionar para Capa ao invés de Dashboard */}
          <Route path="/" element={<Navigate to="/capa" replace />} />
          <Route path="/capa" element={<Capa />} />
          <Route path="/linha-tempo" element={<LinhaTempo />} />
          <Route path="/estrategia-online" element={<EstrategiaOnline />} />
          <Route path="/visao-geral" element={<VisaoGeral />} />
          <Route path="/alcance" element={<Alcance />} />
          <Route path="/visualizacoes" element={<Visualizacoes />} />
          <Route path="/trafego-engajamento" element={<TrafegoEngajamento />} />
          <Route path="/criativos-meta" element={<CriativosMeta />} />
          <Route path="/criativos-tiktok" element={<CriativosTikTok />} />
          <Route path="/criativos-pinterest" element={<CriativosPinterest />} />
          <Route path="/glossario" element={<Glossario />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
