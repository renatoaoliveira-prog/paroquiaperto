import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Paroquias from './pages/Paroquias'
import ParoquiaDetalhe from './pages/ParoquiaDetalhe'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paroquias" element={<Paroquias />} />
        <Route path="/paroquia/:id" element={<ParoquiaDetalhe />} />
      </Routes>
    </div>
  )
}

export default App
