import React, { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'light' | 'dark';

type Context = {
  theme: Theme | null;
  changeTheme: (arg1: Theme) => void;
};

const ThemeContext = createContext<Context | null>(null);

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const STORAGE_KEY = 'theme.preferences';

const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  const getColorPreference = (): Theme => {
    if (localStorage.getItem(STORAGE_KEY)) {
      return localStorage.getItem(STORAGE_KEY) as Theme;
    } else
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  };

  const changeTheme = (value: Theme): void => {
    setTheme(value);
    if (value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(STORAGE_KEY, value);
  };

  useEffect(() => {
    changeTheme(getColorPreference());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeState = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('no provider');
  }

  return context;
};

export { useThemeState, ThemeProvider };
