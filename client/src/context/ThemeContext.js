import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('light');
  const themeColours = {
    light: {
      color: '#343434',
      backgroundColor: '#fefefe'
    },
    dark: {
      color: '#fefefe',
      backgroundColor: '#191b1f'
    }
  };

  const setTheme = (themeName) => {
    document.body.style.setProperty('--color', themeColours[themeName].color);
    document.body.style.setProperty(
      '--background-color',
      themeColours[themeName].backgroundColor
    );
    setThemeMode(themeName);
    localStorage.setItem('PLUSINFINITYLABS_THEME', themeName);
  };

  useEffect(() => {
    let themeName = '';
    try {
      themeName = localStorage.getItem('PLUSINFINITYLABS_THEME');
    } catch (error) {
      console.log(error);
    }
    if (themeName === 'light' || themeName === 'dark') {
      setTheme(themeName);
    } else {
      let isDarkOS = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDarkOS ? 'dark' : 'light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
