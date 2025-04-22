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
import "../styles/TabBar.css";

export const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setDrawerOpen(false);
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
    setDrawerOpen(false);

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

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Paper className="tabbar-container" elevation={0}>
      <Box component="img" src={logo} alt="Logo" className="tabbar-logo" />

      {isMobile ? (
        <>
          <IconButton
            onClick={() => setDrawerOpen((prev) => !prev)}
            className="tabbar-menu-button"
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <div
  ref={drawerRef}
  className={`tabbar-drawer ${drawerOpen ? "open" : "closed"}`}
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
                      className: "tabbar-drawer-text",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </>
      ) : (
        <BottomNavigation
          showLabels
          className="tabbar-bottom-nav"
          value={value}
          onChange={handleChange}
        >
          {["Home", "LineUp", "Tickets", "Mapa", "FAQs"].map((text) => (
            <BottomNavigationAction
              key={text}
              label={text}
              value={`/${text.toLowerCase()}`}
              disableRipple
              className="tabbar-bottom-nav"
            />
          ))}
        </BottomNavigation>
      )}
    </Paper>
  );
};
