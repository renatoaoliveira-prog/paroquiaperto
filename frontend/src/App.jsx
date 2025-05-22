import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Paroquias from './pages/Paroquias';
import Contato from './pages/Contato';


function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paroquias" element={<Paroquias />} />
          <Route path="/contato" element={<Contato />} />
          {/* outras rotas */}
        </Routes>
      </main>
    </>
  );
}

export default App;
