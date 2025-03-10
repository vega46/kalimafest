import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Paper, Box, BottomNavigation, BottomNavigationAction, styled, createStyles, Theme } from '@mui/material';
import logo from '../assets/logo.png';

export const TabBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    if (newValue === '/FAQS') {
      navigate(newValue);
    } else {
      const sectionId = newValue.substring(1).toLowerCase();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: '#4d96ff',
        boxShadow: 'none',
      }}
      elevation={0}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{ height: 100, marginRight: 'auto', ml: 5, mb: 4, mt: 2 }}
      />
      <BottomNavigation
        showLabels
        sx={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          padding: 0,
          backgroundColor: '#4d96ff',
          minHeight: 80,
          fontSize: 80,
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="/home"
          disableRipple
          classes={{ label: 'label' }}  // Aplica el estilo del label
        />
        <BottomNavigationAction
          label="LineUp"
          value="/lineup"
          disableRipple
          classes={{ label: 'label' }}  // Aplica el estilo del label
        />
        <BottomNavigationAction
          label="Tickets"
          value="/tickets"
          disableRipple
          classes={{ label: 'label' }}  // Aplica el estilo del label
        />
        <BottomNavigationAction
          label="Mapa"
          value="/map"
          disableRipple
          classes={{ label: 'label' }}  // Aplica el estilo del label
        />
        <BottomNavigationAction
          label="FAQs"
          value="/FAQS"
          disableRipple
          sx={{ mr: 10}}
          classes={{ label: 'label' }}  // Aplica el estilo del label
        />
      </BottomNavigation>
    </Paper>
  );
};
