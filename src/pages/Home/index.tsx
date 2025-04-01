import vera from "../../assets/artistas/vera.png";
import bug from "../../assets/artistas/bug.png";
import pepa from "../../assets/artistas/pepa.png";
import MVRK from "../../assets/artistas/MVRK.png";
import DISOBEY from "../../assets/artistas/DISOBEY.png";
import Artist from "../../assets/artistas/Artist.png";

import MapComponent from "../../components/MapComponent";
import MarqueeComponent from "../../components/MarqueeComponent";
import MarqueeComponent2 from "../../components/MarqueeComponent2";

import { Artists } from "../../components/ArtistComponent2";
import { TicketsComponent } from "../../components/TicketsComponent";
import { PartnerComponent } from "../../components/PartnerComponent";

const Home = () => {
  const artists = [
    {
      image: MVRK,
      url: "https://open.spotify.com/intl-es/artist/6WCTfR8dIuTqWrFrzt2yl0?si=gXzOfDYITVCqh0aZwPVfGA",
    },
    {
      image: DISOBEY,
      url: "https://open.spotify.com/intl-es/artist/5kJ11J2oaWbK7kRjAKcgNC?si=5lL6t3LRQd2IUz1yk2ZQdA",
    },
    {
      image: bug,
      url: "https://open.spotify.com/intl-es/artist/6o4L5N0aiAhdtN3pqEwG0P?si=vst8mi5wQWiUag7EZZyLBA",
    },
    {
      image: vera,
      url: "https://open.spotify.com/intl-es/artist/03ibrSvByQ6WCX79oFaORa?si=D2jdQ2ltS4q8BLS5ia7XXg",
    },
    {
      image: pepa,
      url: "https://www.instagram.com/casa__pepa/?hl=es",
    },
  ];

  return (
    <>
      <section id="home">
        <MarqueeComponent />
      </section>

      <div className="background-container">
        <img src={Artist} className="artist-lineup" />

        <section id="lineup">
          <Artists artists={artists} />
        </section>

        <section id="tickets">
          <MarqueeComponent2 />
          <TicketsComponent />
        </section>

        <section id="mapa">
          <MapComponent />
        </section>

        <section id="terminos">
          <PartnerComponent />
        </section>
      </div>
    </>
  );
};

export default Home;
