import React from 'react';
import { useTheme } from './themecoloured';

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme (Currently: {theme === 'light' ? 'Light' : 'Dark'})
      </button>
    </div>
  );
}

export default ThemeToggler;
