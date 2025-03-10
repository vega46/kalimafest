import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../../styles/FAQS.css';

const FAQS = () => {
  return (
    <div style={{ padding: '20px' }}>
      {/* Título centrado y en mayúsculas */}
      <Typography variant="h3" className="faq-title">
        Preguntas frecuentes
      </Typography>

      {/* Pregunta 1 */}
      <Accordion className="faq-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">1. Si al final no puedo ir, ¿Podría devolver mi abono?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, no es posible tramitar devoluciones.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Pregunta 2 */}
      <Accordion className="faq-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">2. ¿Puedo acudir al festival si soy menor de edad?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sí, los menores de edad pueden asistir al festival siempre y cuando presenten una autorización firmada por su tutor legal.
            <br />
            Para ello, es necesario descargar, completar y llevar impreso el siguiente formulario de autorización:
            <br />
            👉 <a href="#">Formulario de autorización para menores.</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Pregunta 3 */}
      <Accordion className="faq-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">3. ¿Son nominales las entradas y abonos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sí, todas las entradas y abonos son nominales, lo que significa que están asociadas a un nombre y apellido.
            <br />
            Si necesitas cambiar el nombre en tu entrada, puedes hacerlo a través del siguiente enlace:
            <br />
            👉 <a href="#">Link para cambio de nombre</a>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Pregunta 4 */}
      <Accordion className="faq-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h6">4. ¿Puedo entrar y salir del recinto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Una vez que hayas salido del festival, no se permite la reentrada con la misma entrada.
            <br />
            Para poder salir y volver a entrar, deberás adquirir una pulsera de reacceso.
            <br />
            Esta pulsera se podrá comprar en taquilla o a través del siguiente enlace:
            <br />
            👉 <a href="#">Link para compra de pulsera de reacceso</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQS;
