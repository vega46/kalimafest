import "../styles/Tickets.css";

export const TicketsComponent = () => {
  return (
    <div className="ticket-cards-container">
    <div className="ticket-card">
      <h3>
        ENTRADA AL FESTIVAL
      </h3>
      <p className="price">26,5€</p>
      <div className="next-price">Próximo tramo: 30€</div>
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
      <div className="next-price">Precio más alto en taquilla</div>
      <button
        className="buy-button"
        onClick={() =>
          (window.location.href =
            "https://www.fourvenues.com/kalima-fest/9O9L")
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
            "https://www.enterticket.es/eventos/autobus-kalima-sabado-10-mayo-2025-740568?fbclid=PAZXh0bgNhZW0CMTEAAadzhDGktp-MUfb9WxgLqqRThTlQRPVjmAIan4VWoXCw7Fxdb9Zn3qcM_ON4tg_aem_TgtkY66WK1hsE-nMWLqrpQ")
        }
      >
        Comprar billete
      </button>
    </div>

    <div className="ticket-card">
      <h3>
        CAMBIO DE NOMBRE{" "}
      </h3>
      <p className="price">8€</p>
      <div className="next-price">Hasta el 9 de Mayo</div>
      <button
        className="buy-button"
        onClick={() =>
          (window.location.href =
            "https://www.fourvenues.com/es/cambio")
        }
      >
        Cambiar nombre
      </button>
    </div>
  </div>
  )
}

