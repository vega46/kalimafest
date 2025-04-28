import React, { useRef, useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/FAQS.css";
import MarqueeComponent from "../../components/MarqueeComponent";

const FAQS = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleChange = (panel: string, index: number) => (
    _: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);

    // Scroll si se va a expandir
    if (isExpanded && refs.current[index]) {
      setTimeout(() => {
        refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200); // Esperamos un poco a que se expanda
    }
  };

  const faqs = [
    {
      title: "1. Si al final no puedo ir, ¿Podría devolver mi abono?",
      content: "No, no es posible tramitar devoluciones.",
    },
    {
      title: "2. ¿Puedo acudir al festival si soy menor de edad?",
      content: (
        <>
          Sí, los menores de edad pueden asistir al festival siempre y cuando presenten una autorización firmada por su tutor legal.
          <br />
          Para ello, es necesario descargar, completar y llevar impreso el siguiente formulario de autorización:
          <br />
          👉{" "}
          <a href="https://drive.google.com/file/d/12GM2zBCHqeEYSGevH5VUswN04ycKuojW/view?usp=drivesdk">
            Formulario de autorización para menores.
          </a>
        </>
      ),
    },
    {
      title: "3. ¿Son nominales las entradas y abonos?",
      content: (
        <>
          Sí, todas las entradas y abonos son nominales, lo que significa que están asociadas a un nombre y apellido.
          <br />
          Si necesitas cambiar el nombre en tu entrada, puedes hacerlo a través del siguiente enlace:
          <br />
          👉 <a href="https://www.fourvenues.com/es/cambio">Link para cambio de nombre</a>
        </>
      ),
    },
    {
      title: "4. ¿Puedo entrar y salir del recinto?",
      content: (
        <>
          Una vez que hayas salido del festival, no se permite la reentrada con la misma entrada.
          <br />
          Para poder salir y volver a entrar, deberás adquirir una pulsera de reacceso.
          <br />
          Esta pulsera se podrá comprar en taquilla o a través del siguiente enlace:
          <br />
          👉 <a href="https://www.fourvenues.com/kalima-fest/9O9L">Link para compra de pulsera de reacceso</a>
        </>
      ),
    },
  ];

  return (
    <>
      <MarqueeComponent />

      <div className="faqs-background-container">
        <div className="faqs-content">
          <Typography variant="h3" className="faq-title">
            PREGUNTAS FRECUENTES
          </Typography>

          <div className="faq-accordion-container">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`, index)}
                className="faq-accordion"
                ref={(el) => (refs.current[index] = el)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography variant="h6">{faq.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQS;
