import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FAQS from "../pages/FAQS";
import { TabBar } from "../components/TabBar";
import "leaflet/dist/leaflet.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "& .MuiBottomNavigationAction-label": {
            fontSize: "1rem !important", // Tamaño fijo
            fontWeight: "normal",
            textTransform: "uppercase",
            fontFamily: 'Exo Black, sans-serif', // Aplica la fuente globalmente
            color: "white",
            transition: "none", // Evita que se anime
          },
          "&.Mui-selected .MuiBottomNavigationAction-label": {
            fontSize: "1rem !important", // Mantiene el mismo tamaño al seleccionar
            color: "#ff8e12", // Cambia solo el color
          },
        },
      },
    },
  },
});

const TABBAR_HEIGHT = '20vh'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TabBar />
        <div style={{ marginTop: `${TABBAR_HEIGHT}px` }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/FAQS" element={<FAQS />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
};
