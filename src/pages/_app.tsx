"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalThemeStyle } from "@/greenhouse/themes/GlobalThemeStyle";
import { getTheme } from "@/greenhouse/themes/colors";
import { ThemeName } from "@/greenhouse/themes/types";
import { ThemeContext } from "@/greenhouse/themes/ThemeContext";
import { log } from "@/utils/logger";
import { Navbar } from "@/crops/elements/Navbar";
import "@/styles/globals.css";

// ⬇️ Footerのimportを忘れずに！
import Footer from "@/crops/elements/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<ThemeName>("forest");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as ThemeName | null;
      if (saved && saved !== themeName) {
        log.info("🗃 restoring theme from localStorage:", saved);
        setThemeName(saved);
      }
    } catch (e) {
      log.warn("localStorage read failed:", e);
    }
  }, []);

  const theme = useMemo(() => {
    const t = getTheme(themeName);
    log.info("🚀 getTheme:", themeName, t);
    return t;
  }, [themeName]);

  const handleSetTheme = useCallback((name: ThemeName) => {
    log.info("🔁 setTheme:", name);
    try {
      localStorage.setItem("theme", name);
    } catch (e) {
      log.warn("localStorage write failed:", e);
    }
    setThemeName(name);
  }, []);

  const contextValue = useMemo(
    () => ({ currentTheme: themeName, setTheme: handleSetTheme }),
    [themeName, handleSetTheme]
  );

  return (
    <ThemeProvider key={themeName} theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <GlobalThemeStyle />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // ⬅️ これで全体の高さを確保
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>
            {/* 中身の高さがなくても伸びるように */}
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

