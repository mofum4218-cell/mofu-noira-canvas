import { DefaultTheme } from "styled-components";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { typography } from "./typography";

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
  }
};

