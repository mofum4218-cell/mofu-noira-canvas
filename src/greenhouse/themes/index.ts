import { DefaultTheme } from "styled-components";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints/breakpoints";

export const theme: Record<string, DefaultTheme> = {
  forest: {
    bg: "#E8F5E9",
    text: "#1B5E20",
    primary: "#4CAF50",
    secondary: "#81C784",
    hover: "#66BB6A",
    accent: "#1DE9B6",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  ocean: {
    bg: "#E1F5FE",
    text: "#01579B",
    primary: "#0288D1",
    secondary: "#4FC3F7",
    hover: "#03A9F4",
    accent: "#00ACC1",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  dark: {
    bg: "#121212",
    text: "#FAFAFA",
    primary: "#212121",
    secondary: "#616161",
    hover: "#616161",
    accent: "#FF5722",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  neonViolet: {
     primary: "#8373C7",
    secondary: "#39FF14",
    bg: "#121212",
    text: "#FFFFFF",
    accent: "#39FF14",
    hover: "#A29BFE",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  burningRed: {
    primary: "#FF3830",
    secondary: "#FFD700",
    bg: "#121212",
    text: "#FFFFFF",
    accent: "#FF6F61",
    hover: "#FF5733",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  iceBlue: {
     primary: "#A4DFFF",
    secondary: "#D3D3D3",
    bg: "#FFFFFF",
    text: "#121212",
    accent: "#E0F7FA",
    hover: "#B2EBF2",
    radius,
    spacing,
    typography,
    breakpoints,
  }
};

