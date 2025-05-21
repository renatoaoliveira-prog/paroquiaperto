import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Paróquia Perto" className="home-logo" />
      <h1 className="home-title">Bem-vindo ao Paróquia Perto</h1>
      <p className="home-description">
        Descubra facilmente paróquias próximas de você. Conheça horários de missas, eventos e muito mais.
      </p>
      <Link to="/paroquias" className="home-button">
        Saiba mais
      </Link>
    </div>
  );
};

export default Home;
