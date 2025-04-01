import "../styles/Tickets.css";

export const TicketsComponent = () => {
  return (
    <div className="ticket-cards-container">
    <div className="ticket-card">
      <h3>
        ENTRADA AL FESTIVAL
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
        PULSERA DE REACCESO
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
        BILLETE AUTOBUS{" "}
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
        CAMBIO DE NOMBRE{" "}
      </h3>
      <p className="price">4€</p>
      <div className="next-price">Hasta el 9 de Mayo</div>
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
  )
}

