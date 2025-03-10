import { useState } from "react";
import "../styles/Artists.css";

interface Artist {
  name: string;
  revealed: boolean;
  image: string;
}

interface ArtistsProps {
  artists: Artist[];
}

export const Artists = ({ artists }: ArtistsProps) => {
  const [revealedArtists, setRevealedArtists] = useState(artists);

  const revealArtist = (index: number) => {
    const newArtists = [...revealedArtists];
    newArtists[index].revealed = true;
    setRevealedArtists(newArtists);
  };

  return (
    <div>
      {/* Cuadrícula para los nombres de los artistas */}
      <div className="artist-names-container">
        {revealedArtists.map((artist, index) => (
          <div
            key={index}
            className={`artist-name ${artist.revealed ? "" : "blurred"}`}
            onClick={() => revealArtist(index)}
          >
            {artist.name}
          </div>
        ))}
      </div>

      <div>
      {/* Título de los artistas */}
      <section id="lineup">
        <div>
          <h2 className="artist-title">Descubre a los artistas</h2>

          {/* Contenedor de imágenes de los artistas */}
          <div className="artist-images-container">
            <div className="artist-images-grid">
              {revealedArtists.map((artist, index) => (
                <div key={index} className="artist-card">
                  <div className="artist-shadow"></div> 
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="artist-image"
                    onClick={() => revealArtist(index)}
                  />
                  <p className="artist-name2">{artist.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </section>
      </div>

    </div>
  );
};
