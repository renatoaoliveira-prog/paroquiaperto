import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrigir problema de ícone padrão no Leaflet com React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const paroquiasMock = [
  {
    id: 1,
    nome: "Paróquia de São Nicolau",
    lat: 41.1459,
    lng: -8.6110,
  },
  {
    id: 2,
    nome: "Paróquia de Cedofeita",
    lat: 41.1543,
    lng: -8.6280,
  },
  {
    id: 3,
    nome: "Paróquia da Sé do Porto",
    lat: 41.1425,
    lng: -8.6113,
  },
];

export default function Mapa() {
  const [posicao, setPosicao] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocalização não suportada pelo navegador.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosicao({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => {
        alert("Não foi possível obter sua localização.");
      }
    );
  }, []);

  // Se não tem posição do usuário ainda, mostra um texto ou spinner
  if (!posicao) return <p>Carregando mapa e localização...</p>;

  return (
    <MapContainer
      center={[posicao.lat, posicao.lng]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Marcador da posição do usuário */}
      <Marker position={[posicao.lat, posicao.lng]}>
        <Popup>Sua localização</Popup>
      </Marker>

      {/* Marcadores das paroquias */}
      {paroquiasMock.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]}>
          <Popup>{p.nome}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
