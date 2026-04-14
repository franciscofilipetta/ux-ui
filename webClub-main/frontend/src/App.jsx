import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CampaniaDetalle from './pages/CampaniaDetalle'
import CrearCampania from './pages/CrearCampania'
import Perfil from './pages/Perfil'
import ComoFunciona from './pages/ComoFunciona'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campania/:id" element={<CampaniaDetalle />} />
            <Route path="/crear" element={<CrearCampania />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
