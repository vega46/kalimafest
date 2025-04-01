import React from "react";
import carioca from "../assets/logos/carioca.png";
import antique from "../assets/logos/antique.png";
import fourvenues from "../assets/logos/fourvenues.png";

export const PartnerComponent = () => {
  return (
    <div className="logos-container">
      {/* Primera fila con .partner */}
      <div className="logos-row">
        <img src={carioca} className="partner" alt="Logo Carioca" />
        <img src={antique} className="partner" alt="Logo Antique" />
      </div>

      {/* Segunda fila con .partner2 */}
      <div className="logos-row">
        <img src={fourvenues} className="partner2" alt="Logo Fourvenues" />
      </div>
    </div>
  );
};
