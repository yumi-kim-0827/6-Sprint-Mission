// src/styles/theme.d.ts
declare module "src/styles/theme.ts" {
  const theme: {
    colors: {
      gray: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        200: string;
        100: string;
        50: string;
      };
      blue: {
        primary: string;
        hover: string;
        focus: string;
      };
      red: string;
      white: string;
      black: string;
    };
    mediaQuery: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };

  export default theme;
}
