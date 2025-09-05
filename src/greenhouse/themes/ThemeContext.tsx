// src/greenhouse/themes/ThemeContext.tsx

import React, { createContext, useContext } from "react";
import { ThemeName } from "./types";

type ThemeContextType = {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
    console.log("🧠 useTheme context:", context); // ← ここ追加！
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

