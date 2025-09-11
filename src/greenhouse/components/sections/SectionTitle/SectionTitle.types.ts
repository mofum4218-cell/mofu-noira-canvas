// src/greenhouse/components/sections/SectionTitle/SectionTitle.types.ts

import { DefaultTheme } from "styled-components";

export type SectionTitleProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  lottieSrc?: string;
  align?: "left" | "center" | "right";
  color?: keyof DefaultTheme;
  font?: keyof DefaultTheme["typography"]["fontFamily"];
  maxWidth?: string;
};

