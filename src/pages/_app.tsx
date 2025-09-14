// src/pages/_app.tsx
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
import Footer from "@/crops/elements/Footer";

// ✅ 追加
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<ThemeName>("forest");
  const [mounted, setMounted] = useState(false);
  const [showLoading, setShowLoading] = useState(true); // ✅ ローディング制御

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as ThemeName | null;
      if (saved && saved !== themeName) {
        log.info("🗃 restoring theme from localStorage:", saved);
        setThemeName(saved);
      }
    } catch (e) {
      log.warn("localStorage read failed:", e);
    } finally {
      setMounted(true);
    }

    // ✅ ローディング終了タイマー
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 5500); // 5秒+αで自然にアニメ終わるの待つ

    return () => clearTimeout(loadingTimer);
  }, []);

  const theme = useMemo(() => {
    const t = getTheme(themeName);
    log.info("🎨 getTheme:", themeName, t);
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

  if (!mounted) return null;

  return (
    <ThemeProvider key={themeName} theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <GlobalThemeStyle />
        {showLoading && <LoadingScreen />} {/* ✅ ローディング画面 */}
        <div
          style={{
            display: showLoading ? "none" : "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          <div style={{ flex: 1 }}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

