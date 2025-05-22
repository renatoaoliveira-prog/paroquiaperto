import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Paroquias from './pages/Paroquias';
import Contato from './pages/Contato';
import './styles/Navbar.css';
import LoadingScreen from './components/LoadingScreen';


function App() {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;
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
