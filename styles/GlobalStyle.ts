import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular';
    font-size: 62.5%;
  }

  body {
    font-family: 'Pretendard-Regular';
  }

  button {
    border: none;
    cursor: pointer;
    outline: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  input, textarea {
    border: none;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  textarea {
    resize: none;
  }
`;

export default GlobalStyle;