import React from 'react';
import './App.css';
import { GlobalStyle } from './config/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './config/theme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <div>
          Content goes here!
        </div>
    </ThemeProvider>
  );
}

export default App;
