import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { Theme } from 'src/utils/const';

const ThemeContext = createContext();

const useThemeContext = () => (
  useContext(ThemeContext)
);

const ThemeProvider = ({ children }) => {
  const activeTheme = localStorage.getItem('theme') || Theme.light.id;
  document.documentElement.setAttribute('data-theme', activeTheme);
  const [themeId, setThemeId] = useState(activeTheme);

  const setTheme = (id) => {
    localStorage.setItem('theme', id);
    document.documentElement.setAttribute('data-theme', id);
    setThemeId(id);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  useThemeContext,
  ThemeProvider,
};
