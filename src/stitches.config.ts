import { createStitches, globalCss } from "@stitches/react";

const { styled, css, theme } = createStitches({
  theme: {
    colors: {
      black: "#151522",
      gray900: "#333",
      gray400: "#666",
      gray200: "#999",
      gray50: "#E4E4E4",
      white: "#fff",

      purple700: "#56279E",
      purple500: "#8854D0",
      purple200: "#BB82FF",
      green700: "#00AB53",
      green500: "#26DE81",
      green200: "#6EFFB1",
      blue700: "#2F80ED",
      blue500: "#2D9CDB",
      blue200: "#56CCF2",
      red500: "#EB5757",
      orange500: "#F2994A",
      yellow500: "#F2C94C",

      // alias
      primary: "$purple500",
      secondary: "$green500",
      tertiary: "$blue500",
      link: "$blue500",
      background: "$gray50",
      border: "$gray900",
    },
    space: {
      xs: "0.25rem",
      s: "0.5rem",
      m: "1rem",
      l: "2rem",
      xl: "3rem",
    },
    radii: {
      small: "0.25rem",
      medium: "0.5rem",
      full: "50%",
      extraLarger: "99rem",
    },
  },
});

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    padding: "$l",
    backgroundColor: "$background",
    height: "100vh",
  },
  "div#root": {
    width: "100vw",
    "@media (min-width: 1024px)": {
      width: "1024px",
    },
  },
});

const cssColorsVariants = {
  color: {
    primary: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      "&:hover": {
        filter: "brightness(95%)",
        transitionDelay: "0.1s",
      },
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      color: theme.colors.white,
      "&:hover": {
        filter: "brightness(95%)",
        transitionDelay: "0.1s",
      },
    },
    tertiary: {
      backgroundColor: theme.colors.tertiary,
      color: theme.colors.white,
    },
    disabled: {
      backgroundColor: theme.colors.gray50,
      color: theme.colors.gray400,
      "&:hover": {
        backgroundColor: theme.colors.gray50,
      },
    },
  },
};

export { styled, css, globalStyles, cssColorsVariants, theme };
