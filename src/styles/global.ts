import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%; //1rem = 10px
  }

  html, body, #__next {
    height: 100%;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
  }
`
