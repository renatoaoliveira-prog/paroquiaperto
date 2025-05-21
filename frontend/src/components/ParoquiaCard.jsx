import React from 'react';
import '../styles/ParoquiaCard.css'; 
import { MapPin } from 'lucide-react';

export default function ParoquiaCard({ nome, endereco, distancia }) {
  return (
    <div className="paroquia-card">
      <h3>{nome}</h3>
      <p><MapPin size={16} /> {endereco}</p>
      {distancia !== '-' && (
        <span className="paroquia-distancia">{distancia} km</span>
      )}
    </div>
  );
}
