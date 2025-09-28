//greenhouse/tyhemes/index.tsx

import { DefaultTheme } from "styled-components";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints/breakpoints";

export const theme: Record<string, DefaultTheme> = {
  noir: {
    bg: "#000000",
    text: "#FFFFFF",
    primary: "#000000",
    secondary: "#1A1A1A",
    hover: "#333333",
    accent: "#7FDBFF",
    surface: "#FFFFFF",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  aura: {
    bg: "#FFFFFF",
    text: "#111111",
    primary: "#FFFFFF",
    secondary: "#F5F5F5",
    hover: "#E0E0E0",
    accent: "#FF4081",
    surface: "#FFFFFF",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  solaris: {
    bg: "#FFF8E1",
    text: "#212121",
    primary: "#FF9800",
    secondary: "#FFB74D",
    hover: "#FFD54F",
    accent: "#FF5722",
    surface: "#FFFFFF",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  cosmos: {
    bg: "#0D0D1A",
    text: "#E8EAF6",
    primary: "#3F51B5",
    secondary: "#5C6BC0",
    hover: "#3949AB",
    accent: "#7C4DFF",
    surface: "#FFFFFF",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  eden: {
    bg: "#F1F8E9",
    text: "#1B5E20",
    primary: "#4CAF50",
    secondary: "#81C784",
    hover: "#66BB6A",
    accent: "#2E7D32",
    surface: "#FFFFFF",
    radius,
    spacing,
    typography,
    breakpoints,
  },
};

