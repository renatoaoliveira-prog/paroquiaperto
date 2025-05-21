import React, { useEffect, useState } from 'react';
import ParoquiaCard from '../components/ParoquiaCard';
import Mapa from '../components/Mapa';
import '../styles/Paroquias.css';

// Lista de algumas paróquias do Porto
const paroquiasPorto = [
  { id: 1, nome: 'Sé do Porto', lat: 41.142517, lng: -8.61104, endereco: 'Largo da Sé' },
  { id: 2, nome: 'Igreja de São Francisco', lat: 41.14311, lng: -8.61172, endereco: 'R. de São Francisco' },
  { id: 3, nome: 'Paróquia de Cedofeita', lat: 41.15430, lng: -8.62804, endereco: 'Rua de Cedofeita' },
  { id: 4, nome: 'Igreja de Santo Ildefonso', lat: 41.15130, lng: -8.61150, endereco: 'Praça da Batalha' },
  { id: 5, nome: 'Igreja de Nossa Senhora da Conceição', lat: 41.14200, lng: -8.61350, endereco: 'Travessa dos Lóios' },
];

// Função Haversine para calcular distância em km
function calcularDistancia(lat1, lon1, lat2, lon2) {
  const toRad = x => (x * Math.PI) / 180;
  const R = 6371; // raio da Terra em km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const Paroquias = () => {
  const [lista, setLista] = useState([]);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLista(paroquiasPorto);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ latitude, longitude });
        const ordenadas = paroquiasPorto
          .map(p => ({
            ...p,
            distancia: calcularDistancia(latitude, longitude, p.lat, p.lng)
          }))
          .sort((a, b) => a.distancia - b.distancia);
        setLista(ordenadas);
      },
      () => {
        // usuário negou ou erro => exibe ordem original
        setLista(paroquiasPorto);
      }
    );
  }, []);

  return (
    <div className="paroquias-page">
      <h2 className="paroquias-title">Paróquias Próximas</h2>

      {/* Mapa com Leaflet */}
      <div className="paroquias-mapa">
        <Mapa paroquias={lista.length ? lista : paroquiasPorto} coords={coords} />
      </div>

      {/* Lista de cartões */}
      <div className="paroquias-lista">
        {lista.map(p => (
          <ParoquiaCard
            key={p.id}
            nome={p.nome}
            endereco={p.endereco}
            distancia={p.distancia ? p.distancia.toFixed(1) : '-'}
          />
        ))}
      </div>
    </div>
  );
};

export default Paroquias;
