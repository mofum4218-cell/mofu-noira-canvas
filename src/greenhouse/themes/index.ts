import { DefaultTheme } from "styled-components";
import { radius } from "./radius";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints/breakpoints";

export const theme: Record<string, DefaultTheme> = {
  pop: {
    bg: "#FFF9F0", // 明るめ背景
    text: "#1E1E1E", // 黒に近い
    primary: "#FF6B81", // ピンク系主色
    secondary: "#FFD166", // イエロー系副色
    accent: "#00B8D9", // アクセントブルー
    hover: "#FFADAD",
    surface: "#FFFFFF", // カードなど
    radius,
    spacing,
    typography,
    breakpoints,
  },
  night: {
    bg: "#121212", // 暗め背景
    text: "#E0E0E0", // 明るいグレー
    primary: "#1F1F1F",
    secondary: "#444",
    accent: "#FF4081", // ビビッドピンク
    hover: "#333333",
    surface: "#1E1E1E",
    radius,
    spacing,
    typography,
    breakpoints,
  },
  clear: {
    bg: "#F0FCFF", // 青白っぽい透明感
    text: "#1A1A1A",
    primary: "#A0E7E5", // 水色
    secondary: "#B4F8C8", // 淡いグリーン
    accent: "#FBE7C6", // 薄オレンジ
    hover: "#C9F3F2",
    surface: "#FFFFFF",
    radius,
    spacing,
    typography,
    breakpoints,
  }
};

