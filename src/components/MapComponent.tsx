import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../styles/Popup.css"; // si tienes estilos personalizados

const festivalLocation = {
  lng: -3.7067934802994342,
  lat: 37.117121118503576,
};

const MapComponent = () => {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://api.maptiler.com/maps/hybrid/style.json?key=S46GvHIbNND54TumOIwx",
      center: [festivalLocation.lng, festivalLocation.lat],
      zoom: 17,
      attributionControl: false,
      scrollZoom: false,
    });

    // Oculta los controles de zoom
    map.addControl(
      new maplibregl.NavigationControl({ showZoom: true, showCompass: false }),
      "top-right"
    );

    // Añadir marcador con popup
    new maplibregl.Marker()
      .setLngLat([festivalLocation.lng, festivalLocation.lat])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML(`
          <div class="maplibregl-popup-content">
            <span>
              📍 <strong>Kalima Fest</strong><br />
              Granada, Complejo Embrujo<br />
              <a href="https://www.google.com/maps?q=37.117121118503576,-3.7067934802994342"
                 target="_blank"
                 rel="noopener noreferrer">Cómo llegar 🚗</a>
            </span>
          </div>
        `)
      )
      .addTo(map);

    // Limpieza del mapa al desmontar
    return () => map.remove();
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "100%",
        margin: "0 auto",
        marginTop: "10px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    />
  );
};

export default MapComponent;
