import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../styles/Popup.css";
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const festivalLocation = { lat: 37.117121118503576, lng: -3.7067934802994342 };

const customIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapComponent = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div>Cargando mapa...</div>;

  return (
    <div 
      style={{
        height: '400px',
        width: '100%',
        margin: '0 auto',  // Centra el mapa horizontalmente
        marginTop: '50px',
        borderRadius: '100px',  // Redondea las esquinas del mapa
        boxSizing: 'border-box'  // Asegura que el borde no afecte el tamaño
      }}
    >
      <MapContainer center={festivalLocation} zoom={25} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
        />
        <Marker position={festivalLocation} icon={customIcon}>
          <Popup 
            className="custom-popup"
          >
            <span>📍 <strong>Kalima Fest </strong><br />  Granada, Complejo Embrujo  <br />
            <a
              href={`https://www.google.com/maps?q=${festivalLocation.lat},${festivalLocation.lng}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              Cómo llegar 🚗
            </a></span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
