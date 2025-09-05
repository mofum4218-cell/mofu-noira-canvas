// src/pages/_app.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalThemeStyle } from "@/greenhouse/themes/GlobalThemeStyle";
import { getTheme } from "@/greenhouse/themes/colors";
import { ThemeName } from "@/greenhouse/themes/types";
import { ThemeContext } from "@/greenhouse/themes/ThemeContext";
import { log } from "@/utils/logger"; // ← ロガー追加！
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<ThemeName>("forest");

  // ✅ 初回：localStorageから復元
  useEffect(() => {
    const saved = localStorage.getItem("theme") as ThemeName | null;
    if (saved && saved !== themeName) {
      log.info("🗃 restoring theme from localStorage:", saved);
      setThemeName(saved);
    }
  }, []);

  // ✅ themeName変更ごとにthemeオブジェクトを再取得
  const theme = useMemo(() => {
    const t = getTheme(themeName);
    log.info("🚀 getTheme called with:", themeName);
    log.info("🎨 theme passed to ThemeProvider:", t);
    return t;
  }, [themeName]);

  // ✅ setThemeのラッパー（ログ & 保存）
  const handleSetTheme = (name: ThemeName) => {
    log.info("🔁 setTheme called with:", name);
    localStorage.setItem("theme", name);
    setThemeName(name);
  };

  return (
    <ThemeProvider key={themeName} theme={theme}>
      <ThemeContext.Provider value={{ currentTheme: themeName, setTheme: handleSetTheme }}>
        <GlobalThemeStyle />
        <Component key={themeName} {...pageProps} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

