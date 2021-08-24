import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --highlight: #e20e8d; //#FFCD00
    --background: #030518; //#191919
    --white: #eeeeee;
    --spots: #3EB595;

    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-size: 62.5%; //1rem = 10px
    background-color: var(--background);
    color: var(--white);
  }

  html, body, #__next {
    height: 100%;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
    text-decoration: none;
  }
`
