import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	  const [isDark, setIsDark] = useState(() => {
		      const saved = localStorage.getItem('theme');
		      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
		    });

	  useEffect(() => {
		      const root = document.documentElement;
		      if (isDark) {
			            root.classList.add('dark');
			            root.classList.remove('light');
			            localStorage.setItem('theme', 'dark');
			          } else {
					        root.classList.add('light');
					        root.classList.remove('dark');
					        localStorage.setItem('theme', 'light');
					      }
		    }, [isDark]);

	  const toggleTheme = () => setIsDark(prev => !prev);

	  return (
		      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
		        {children}
		      </ThemeContext.Provider>
		    );
};
