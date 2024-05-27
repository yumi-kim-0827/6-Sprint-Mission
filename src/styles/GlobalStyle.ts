import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import COLORS from "./palette";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body,
  input,
  button,
  textarea {
    font-family: Pretendard, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  input,
  textarea {
    font-weight: 400;
    line-height: 24px;
    color: ${COLORS.COOL_GRAY_800};
  }
`;

export default GlobalStyle;
