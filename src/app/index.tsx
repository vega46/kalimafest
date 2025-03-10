import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tickets from "../pages/Tickets";
import FAQS from "../pages/FAQS";
import { TabBar } from "../components/TabBar";
import LineUp from "../pages/LineUp";
import "leaflet/dist/leaflet.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "& .MuiBottomNavigationAction-label": {
            fontSize: "1.5rem !important", // Tamaño fijo
            fontWeight: "normal",
            textTransform: "uppercase",
            fontStyle: "italic",
            color: "white",
            transition: "none", // Evita que se anime
          },
          "&.Mui-selected .MuiBottomNavigationAction-label": {
            fontSize: "1.5rem !important", // Mantiene el mismo tamaño al seleccionar
            color: "#551a8b", // Cambia solo el color
          },
        },
      },
    },
  },
});

const TABBAR_HEIGHT = 147;

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <TabBar />
        <div style={{ marginTop: `${TABBAR_HEIGHT}px` }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/FAQS" element={<FAQS />} />
            <Route path="/LineUp" element={<LineUp />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
};
