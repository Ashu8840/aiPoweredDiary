import React, { createContext, useState, useEffect, useMemo } from 'react';

export type Theme = 'jungle' | 'cyberpunk' | 'barbie' | 'space' | 'mars';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'cyberpunk',
  setTheme: () => {},
});

const themes = {
  jungle: {
    '--background': '#0f172a',
    '--background-light': '#1e293b',
    '--card': '#1e293b',
    '--primary': '#10b981',
    '--secondary': '#facc15',
    '--text-primary': '#f1f5f9',
    '--text-secondary': '#94a3b8',
  },
  cyberpunk: {
    '--background': '#020617',
    '--background-light': '#0f172a',
    '--card': '#0f172a',
    '--primary': '#00ffff',
    '--secondary': '#f000b8',
    '--text-primary': '#e5e7eb',
    '--text-secondary': '#6b7280',
  },
  barbie: {
    '--background': '#fdf2f8',
    '--background-light': '#fce7f3',
    '--card': '#fce7f3',
    '--primary': '#db2777',
    '--secondary': '#9333ea',
    '--text-primary': '#831843',
    '--text-secondary': '#be185d',
  },
  space: {
    '--background': '#000000',
    '--background-light': '#1f2937',
    '--card': '#111827',
    '--primary': '#818cf8',
    '--secondary': '#f87171',
    '--text-primary': '#d1d5db',
    '--text-secondary': '#9ca3b9',
  },
  mars: {
    '--background': '#4a0404',
    '--background-light': '#7a0909',
    '--card': '#2f0b0b',
    '--primary': '#fb923c',
    '--secondary': '#fef08a',
    '--text-primary': '#fff7ed',
    '--text-secondary': '#fed7aa',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('cyberpunk');

  useEffect(() => {
    const root = window.document.documentElement;
    const selectedTheme = themes[theme];
    Object.entries(selectedTheme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    // Also apply a base background color to the body for better transitions
    document.body.style.backgroundColor = selectedTheme['--background'];
    
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
