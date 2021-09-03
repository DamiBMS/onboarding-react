import React from 'react';
import './App.css';
import { GlobalStyle } from './config/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './config/theme'
import { Home } from './pages/Home'
import {  Route, Switch } from 'react-router-dom'
import { PropsPractice } from './pages/PropsPractice'
import { Header } from './components/Header'

function App() {
  const menuLinks = [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Props Practice',
      path: '/props',
      component: PropsPractice,
    },
  ]

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header dataLinks={menuLinks} />

      <main>
          <Switch>
            {menuLinks.map((link) => (
              <Route key={link.name} path={link.path} component={link.component} exact />
            ))}
          </Switch>
      </main>
    </ThemeProvider>
  );
}

export default App;
