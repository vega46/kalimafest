import React, { useRef, useState, useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Fade from "@mui/material/Fade"; // Importa el componente Fade de MUI
import "../styles/Artists.css";

interface Artist {
  image?: string;
  url: string;
}

interface ArtistsProps {
  artists: Artist[];
}

export const Artists = ({ artists }: ArtistsProps) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.4 } // Se activa cuando el 40% de la imagen es visible
    );

    observerRef.current = observer;

    const elements = document.querySelectorAll(".artist-image-container");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <h2 className="artist-title">Descubre a los artistas</h2>
      <div className="artists-grid-wrapper">
        <Grid2
          container
          justifyContent="center"
          className="artist-images-container"
        
          spacing={0} // Espaciado entre los elementos
          style={{ paddingLeft: 0, paddingRight: 0 }} // ✅ Quita el padding lateral

        >
          {artists.map((artist, index) =>
            artist.image ? (
              <Grid2
                key={index}
                xs={6}
                sm={6}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                className="artist-image-container"
                data-index={index}
              >
                <Fade in={visibleIndexes.includes(index)} timeout={2000}>
                  <a href={artist.url} rel="noopener noreferrer">
                    <img
                      src={artist.image}
                      className="artist-image"
                      alt={`artist-${index}`}
                    />
                  </a>
                </Fade>
              </Grid2>
            ) : null
          )}
        </Grid2>
      </div>
    </>
  );
};
