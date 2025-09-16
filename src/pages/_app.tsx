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

// ✅ ローディング画面
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<ThemeName>("clear");
  const [mounted, setMounted] = useState(false);
  const [showLoading, setShowLoading] = useState(true);

  // ✅ 初回 localStorage 読み出し + ローディング制御（依存配列は [] でOK）
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 5500);

    return () => clearTimeout(loadingTimer);
  }, []);

  // ✅ テーマオブジェクト取得
  const theme = useMemo(() => {
    const t = getTheme(themeName);
    log.info("🎨 getTheme:", themeName, t);
    return t;
  }, [themeName]);

  // ✅ テーマ切り替え関数（contextに渡す）
  const handleSetTheme = useCallback((name: ThemeName) => {
    log.info("🔁 setTheme:", name);
    try {
      localStorage.setItem("theme", name);
    } catch (e) {
      log.warn("localStorage write failed:", e);
    }
    setThemeName(name);
  }, []);

  // ✅ contextに渡す値（テーマ状態とsetter）
  const contextValue = useMemo(
    () => ({ currentTheme: themeName, setTheme: handleSetTheme }),
    [themeName, handleSetTheme]
  );

  // ✅ 初回マウント完了前はnull（SSRチラつき防止）
  if (!mounted) return null;

  return (
    <ThemeProvider key={themeName} theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <GlobalThemeStyle />

        {/* ✅ ローディング画面 */}
        {showLoading && <LoadingScreen />}

        {/* ✅ メインUI（ローディング中は非表示） */}
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

