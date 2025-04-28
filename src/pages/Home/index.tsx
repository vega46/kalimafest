
import Artist from "../../assets/artistas/Artist.png";

import MapComponent from "../../components/MapComponent";
import MarqueeComponent from "../../components/MarqueeComponent";import MarqueeComponent2 from "../../components/MarqueeComponent2";

import { Artists } from "../../components/ArtistComponent";
import { TicketsComponent } from "../../components/TicketsComponent";
import { PartnerComponent } from "../../components/PartnerComponent";

import BATAPOST from "../../assets/artistas2/BATAPOST.png";
import CASAPEPA from "../../assets/artistas2/CASAPEPA.png";
import CHOKOLATE from "../../assets/artistas2/CHOKOLATE.png";
import DANIBM from "../../assets/artistas2/DANIBM.png";
import DISOBEY from "../../assets/artistas2/DISOBEY_POST.png";
import DVALENTINO from "../../assets/artistas2/DVALENTINO_POST.png";
import ELBUGG from "../../assets/artistas2/ELBUGG_POST.png";
import ESCANEZ from "../../assets/artistas2/ESCANEZ.png";
import JOANCORTES from "../../assets/artistas2/JOANCORTES.png";
import KRATOS from "../../assets/artistas2/KRATOS.png";
import LUCIAREINA from "../../assets/artistas2/LUCIA REINA.png";
import MIKELDASS from "../../assets/artistas2/MIKELDASS.png";
import MVRK from "../../assets/artistas2/MVRK_POST.png";
import PAULAGARCIA from "../../assets/artistas2/PAULAGARCIA.png";
import POPI from "../../assets/artistas2/POPI.png";
import SERRATO from "../../assets/artistas2/SERRATO.png";
import SOTEPOST from "../../assets/artistas2/SOTEPOST.png";
import VERAGRV from "../../assets/artistas2/VERAGRV_POST.png";

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
    image: ELBUGG,
    url: "https://open.spotify.com/intl-es/artist/6o4L5N0aiAhdtN3pqEwG0P?si=vst8mi5wQWiUag7EZZyLBA",
  },
  {
    image: VERAGRV,
    url: "https://open.spotify.com/intl-es/artist/03ibrSvByQ6WCX79oFaORa?si=3SAMowrEQgSuFruhrzKLhg",
  },
  {
    image: DVALENTINO,
    url: "https://open.spotify.com/intl-es/artist/01WzyfcDKX94myMXnGfU4N?si=Z9LKmWRtTz6RTzlgurZKfw",
  },
  {
    image: CASAPEPA,
    url: "https://www.instagram.com/casa__pepa/?hl=es",
  },
  {
    image: LUCIAREINA,
    url: "https://www.instagram.com/_luciareina/?hl=es",
  },
  {
    image: POPI,
    url: "",
  },
  {
    image: JOANCORTES,
    url: "",
  },
  {
    image: BATAPOST,
    url: "",
  },
  {
    image: SOTEPOST,
    url: "",
  },
  {
    image: DANIBM,
    url: "",
  },
  {
    image: ESCANEZ,
    url: "",
  },
  {
    image: CHOKOLATE,
    url: "",
  },
  {
    image: SERRATO,
    url: "",
  },
];

const Home = () => {

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
