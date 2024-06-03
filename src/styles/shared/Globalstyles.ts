import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* Mobile styles */

/* Updated color palette */
:root {
  /* Gray scale */
  --gray-900: #111827;
  --gray-800: #1F2937;
  --gray-700: #374151;
  --gray-600: #4b5563;
  --gray-500: #6b7280;
  --gray-400: #9ca3af;
  --gray-200: #e5e7eb;
  --gray-100: #f3f4f6;
  --gray-50: #f9fafb;

  /* Primary color */
  --blue: #3692ff;

  --red: #f74747;

  /* Layout dimensions */
  --header-height: 70px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

button,
input,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
}

img,
svg {
  vertical-align: bottom;
}

body {
  color: var(--gray-700);
  word-break: keep-all;
  font-family: "Pretendard", sans-serif;
}

`;
