import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
