import React from 'react';
import { useTheme } from './themecoloured';

function ThemedComponent() {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#eee' : '#333', color: theme === 'light' ? '#333' : '#eee', padding: '20px' }}>
      <h2>Themed Component</h2>
      <p>This component changes its style based on the current theme.</p>
    </div>
  );
}

export default ThemedComponent;
