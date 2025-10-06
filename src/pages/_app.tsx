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
import "@/styles/globals.css";
import Footer from "@/crops/elements/Footer";

// ✅ コメントアウト：LoadingScreenのインポート
// import LoadingScreen from "@/components/ui/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<ThemeName>("noir");
  const [mounted, setMounted] = useState(false);

  // ✅ コメントアウト：ローディング用state
  // const [showLoading, setShowLoading] = useState(true);

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

    // ✅ コメントアウト：ローディングタイマー
    // const loadingTimer = setTimeout(() => {
    //   setShowLoading(false);
    // }, 8600);
    // return () => clearTimeout(loadingTimer);
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
        {/* ✅ コメントアウト：ローディング画面 */}
        {/* {showLoading && <LoadingScreen />} */}

        {/* ✅ showLoading制御削除・常時表示 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <div style={{ flex: 1 }}>
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

