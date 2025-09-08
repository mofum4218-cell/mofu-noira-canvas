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

export default function App({ Component, pageProps }: AppProps) {
  const [themeName, setThemeName] = useState<ThemeName>("forest");
  const [mounted, setMounted] = useState(false);

  // 初回：localStorage からテーマを復元し、終わったら mounted=true
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
    // （任意）別タブでの変更も同期したい場合は storage イベントを使う
    // const onStorage = (ev: StorageEvent) => {
    //   if (ev.key === "theme" && ev.newValue) setThemeName(ev.newValue as ThemeName);
    // };
    // window.addEventListener("storage", onStorage);
    // return () => window.removeEventListener("storage", onStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // themeName -> theme オブジェクト
  const theme = useMemo(() => {
    const t = getTheme(themeName);
    log.info("🎨 getTheme:", themeName, t);
    return t;
  }, [themeName]);

  // Contextに渡す setTheme（保存＋state更新）
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

  // 復元完了前は描画しない（水和ズレ/チラつき回避）
  if (!mounted) return null; // ここをローディングUIにしてもOK

  return (
    // keyは付けても付けなくてもOK。付けるとテーマ変更時に貼り替えが確実（子の内部状態は維持したいなら外しても可）
    <ThemeProvider key={themeName} theme={theme}>
      <ThemeContext.Provider value={contextValue}>
        <GlobalThemeStyle />
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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

