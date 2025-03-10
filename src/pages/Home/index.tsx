import "../../styles/Marquee2.css";
import "../../styles/Tickets.css";
import { Artists } from "../../components/ArtistComponent2";
import logo from "../../assets/logo.png";
import jhonp from "../../assets/jhonp.jpeg";
import juicy from "../../assets/juicy.jpg";
import MVRK from "../../assets/MVRK.png";
import diso from "../../assets/diso.jpeg";
import fourvenues from "../../assets/fourvenues.png";

import MapComponent from "../../components/MapComponent";

const Home = () => {
  const artists = [
    { name: "MVRK", revealed: true, image: MVRK, url: "" },
    { name: "DISOBEY", revealed: true, image: diso, url: "" },
    { name: "?", revealed: false, image: logo, url: "" },
    { name: "JUICY BAE", revealed: true, image: juicy, url: "" },
    { name: "?", revealed: false, image: logo, url: "" },
    { name: "?", revealed: true, image: logo, url: "" },
    {
      name: "JOHN POLLÓN",
      revealed: true,
      image: jhonp,
      url: "https://open.spotify.com/intl-es/artist/4tPyn1bQTAqAb7Ek5OorKH",
    },
    { name: "?", revealed: false, image: logo, url: "" },
    { name: "?", revealed: false, image: logo, url: "" },
  ];

  return (
    <div>
      <section id="home">
        <div className="marquee-container">
          <div className="marquee-text-wrapper">
            <div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div>
            <div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div><div className="marquee-text">
              ¡ENTRADAS YA A LA VENTA PARA EL FESTIVAL KALIMA FEST! | GRANADA -
              10 MAYO 2025 | COMPLEJO EMBRUJO | HOSTED BY
              <img src={logo} alt="Imagen 1" className="hosted-image" />
              X
              <img src={logo} alt="Imagen 2" className="hosted-image" />
            </div>
          </div>
        </div>
      </section>

      <Artists artists={artists} />

      <section id="tickets">
        <div className="marquee-container">
          <div className="marquee-text-wrapper2">
            <div className="marquee-text">
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS
              ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS LIMITADAS ENTRADAS
              LIMITADAS
            </div>
            <div className="marquee-text"></div>
          </div>
        </div>

        <div className="ticket-cards-container">
          <div className="ticket-card">
            <h3>
              <br></br>Entrada al festival
            </h3>
            <p className="price">20€</p>
            <div className="next-price">Próximo precio: 35€</div>
            <button
              className="buy-button"
              onClick={() =>
                (window.location.href =
                  "https://www.fourvenues.com/fr/kalima-fest/events/kalima-fest--10-05-2025-IU5F")
              }
            >
              Comprar entrada
            </button>
          </div>

          <div className="ticket-card">
            <h3>
              <br></br>Pulsera de reacceso
            </h3>
            <p className="price">5€</p>
            <div className="next-price">En taquilla: 15€</div>
            <button
              className="buy-button"
              onClick={() =>
                (window.location.href =
                  "https://www.fourvenues.com/fr/kalima-fest/events/kalima-fest--10-05-2025-IU5F")
              }
            >
              Comprar pulsera
            </button>
          </div>

          <div className="ticket-card">
            <h3>
              <br></br>Billete autobus{" "}
            </h3>
            <p className="price">5€</p>
            <div className="next-price">Solo en página web</div>
            <button
              className="buy-button"
              onClick={() =>
                (window.location.href =
                  "https://www.fourvenues.com/fr/kalima-fest/events/kalima-fest--10-05-2025-IU5F")
              }
            >
              Comprar billete
            </button>
          </div>

          <div className="ticket-card">
            <h3>
              <br></br>Cambio de nombre{" "}
            </h3>
            <p className="price">4€</p>
            <div className="next-price">Solo hasta el 9 de Mayo</div>
            <button
              className="buy-button"
              onClick={() =>
                (window.location.href =
                  "https://www.fourvenues.com/fr/kalima-fest/events/kalima-fest--10-05-2025-IU5F")
              }
            >
              Cambiar nombre
            </button>
          </div>
        </div>
      </section>
      <section id="map"></section>

      <MapComponent />

      <div className="logos-container">
        <img src={logo} alt="MVRK" className="logo" />
        <img src={logo} alt="DISOBEY" className="logo" />
        <img src={logo} alt="JUICY BAE" className="logo" />
        <img src={fourvenues} alt="JOHN POLLÓN" className="logo" />
      </div>
    </div>
  );
};

export default Home;
