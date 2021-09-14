import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body,
  html {
    font-family: ${(props: any): string => props.theme.fontFamily.openSans};
    color: ${props => props.theme.colors.text};
    background: #FFFFFF !important;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin:0;
    padding:0;
  }

  span {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  
  }
  
  menu,
    nav {
    ul,
      li {
      margin: 0;
      padding: 0;
    }
  }
  
  
  html,
    button {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  
  h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-family: ${props => props.theme.fontFamily.openSans};
    color: ${props => props.theme.colors.text};
    margin: 10px 0;
  }
  
  h1 {
    font-size: ${props => props.theme.fontSizes['5xl']};
    font-weight: ${props => props.theme.fontWeights.regular};
  }
  
  h2 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    font-weight: ${props => props.theme.fontWeights.regular};
    border-bottom: none;
  }
  
  h3 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  
  h4 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  
  h5 {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  
  h6 {
    font-size: ${props => props.theme.fontSizes.lg};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
  
  p {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`