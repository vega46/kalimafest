import React from "react";
import carioca from "../assets/logos/carioca.png";
import antique from "../assets/logos/antique.png";
import fourvenues from "../assets/logos/fourvenues.png";
import { useMediaQuery } from "@mui/material";

export const PartnerComponent = () => {
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <div className="logos-container">
      <div className="logos-row">
        <img src={carioca} className="partner" alt="Logo Carioca" />
        <img src={antique} className="partner" alt="Logo Antique" />
        {/* Solo se muestra en desktop/tablet */}
        {!isMobile && (
          <img src={fourvenues} className="partner2" alt="Logo Fourvenues" />
        )}
      </div>

      {/* Segunda fila (solo en móvil, aunque vacía de momento) */}
      {isMobile && (
        <div className="logos-row">
          <img src={fourvenues} className="partner2" alt="Logo Fourvenues" />
        </div>
      )}
    </div>
  );
};
