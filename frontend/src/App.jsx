import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Paroquias from './pages/Paroquias';
import Contato from './pages/Contato';
import './styles/Navbar.css';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Quando a rota muda, ativa o loading
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800); 
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/paroquias" element={<Paroquias />} />
            <Route path="/contato" element={<Contato />} />
            {/* outras rotas */}
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;
