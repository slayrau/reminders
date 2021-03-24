import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Theme } from 'src/utils/const';

const ThemeContext = createContext();

const useThemeContext = () => (
  useContext(ThemeContext)
);

const ThemeProvider = ({ children }) => {
  const [themeId, setThemeId] = useState(localStorage.getItem('theme') || Theme.light.id);

  const setTheme = (id) => {
    setThemeId(id);
    localStorage.setItem('theme', id);
  };

  const setDataTheme = (id) => {
    document.documentElement.setAttribute('data-theme', id);
  };

  const setMatchedTheme = useCallback((match) => {
    if (match) {
      setDataTheme(Theme.dark.id);
    } else {
      setDataTheme(Theme.light.id);
    }
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const darkSchemeListener = (event) => {
      if (themeId !== Theme.auto.id) return;
      setMatchedTheme(event.matches);
    };

    if (themeId !== Theme.auto.id) {
      setDataTheme(themeId);
    } else {
      setMatchedTheme(prefersDark.matches);
    }

    prefersDark.addListener(darkSchemeListener);
    return () => prefersDark.removeListener(darkSchemeListener);
  }, [themeId, setMatchedTheme]);

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        setTheme,
        setThemeId,
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
