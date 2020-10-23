import React, { createContext, useState } from 'react';

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
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
