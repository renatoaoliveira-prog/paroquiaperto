import React from 'react';
import '../styles/LoadingScreen.css';
import logo from '../assets/logo.png'; 

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Paróquia Perto" className="loading-logo" />
    </div>
  );
};

export default LoadingScreen;
