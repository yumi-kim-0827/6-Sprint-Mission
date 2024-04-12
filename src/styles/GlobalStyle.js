import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #3692ff;
    --nav-text-color: #4B5563;
    --main-text-color: #1F2937;
    --input-color: #9CA3AF;
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular';
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

  input {
    border: none;
  }

  input:focus {
    outline: none;
  }

  h1 {
    font-family: 'ROKAF Sans';
    font-size: 25.63px;
    font-weight: 700;
    line-height: 34.6px;
  }
`;

export default GlobalStyle;
