import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;
  }
  html {
    font-size: 62.5%;
  }
  html, body {
    height: 100%;
    background-color: #f9f9f9;
  }
  body {
    font-family: 'Inter', sans-serif;
  }
`
