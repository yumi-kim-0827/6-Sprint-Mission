import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #3692ff;
    --text-color: #374151;
    --background-color: #cfe5ff;
    --white-color: #ffffff;
    --black-color: #111827;
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
  }

  body {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
    font-size: 40px;
    font-weight: 700;
    line-height: 56px;
    color: var(--text-color);
  }
  
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0.08em;
    color: var(--text-color);
  }
`;

export default GlobalStyle;
