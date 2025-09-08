// src/greenhouse/themes/ThemeContext.tsx

import { createContext, useContext } from "react";
import { ThemeName } from "./types";
import { log } from "@/utils/logger"; // ← ロガー追加

type ThemeContextType = {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  log.info("🧠 useTheme context:", context);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

