import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Paper,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import logo from "../assets/logos/logo.png";

export const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setDrawerOpen(false); // Cierra el menú si se hace clic fuera
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_: any, newValue: string) => {
    setValue(newValue);
    setDrawerOpen(false); // Cierra el menú

    if (newValue === "/faqs") {
      navigate(newValue);
    } else {
      const sectionId = newValue.substring(1).toLowerCase();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const delayedElement = document.getElementById(sectionId);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    }
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw", // Siempre 100vw
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 2000,
        backgroundColor: "#4d96ff",
        boxShadow: "none",
        padding: "2.8vh 5vw",
        overflow: "visible", 
        borderRadius: 0, 
      }}
      elevation={0}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          height: isMobile ? "5vh" : "8vh",
          transition: "height 0.3s ease-in-out",
        }}
      />

      {isMobile ? (
        <>
          <IconButton
            onClick={() => setDrawerOpen((prev) => !prev)} // Aquí se alterna el estado
            sx={{ color: "white", marginLeft: "auto", mr: 2.5 }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Menú persistente, montado como hijo absoluto del TabBar */}
          {drawerOpen && (
            <div
              ref={drawerRef}
              style={{
                position: "absolute",
                top: "100%", // justo debajo del TabBar
                right: 0,
                width: "30vw", // Igual que el TabBar
                height: "100vh", // Aproximadamente hasta la mitad de la pantalla
                backgroundColor: "#4d96ff",
                boxShadow: "0px 3px 15px rgba(0,0,0,0.5)",
                zIndex: 1500,
                padding: "1rem",
                transform: drawerOpen ? "translateX(0)" : "translateX(100%)", // Usamos translateX para controlar la transición
                transition: "transform 1.3s ease-in-out", // Agre
              }}
            >
              <List>
                {["Home", "LineUp", "Tickets", "Mapa", "FAQs"].map((text) => (
                  <ListItem
                    key={text}
                    onClick={() => handleChange(null, `/${text.toLowerCase()}`)}
                  >
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        sx: {
                          color: "white",
                          textTransform: "uppercase",
                          fontFamily: '"Exo Black", sans-serif',
                          fontSize:'1.6rem'
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          )}
        </>
      ) : (
        <BottomNavigation
          showLabels
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "right",
            backgroundColor: "#4d96ff",
            minHeight: "8vh",
            width: "auto",
          }}
          value={value}
          onChange={handleChange}
        >
          {["Home", "LineUp", "Tickets", "Mapa", "FAQs"].map((text) => (
            <BottomNavigationAction
              key={text}
              label={text}
              value={`/${text.toLowerCase()}`}
              disableRipple
            />
          ))}
        </BottomNavigation>
      )}
    </Paper>
  );
};
