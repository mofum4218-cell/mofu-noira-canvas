"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/greenhouse/themes/ThemeContext";
import { themeList } from "@/greenhouse/themes/themeList";
import styled from "styled-components";
import { log } from "@/utils/logger";
import Button from "@/crops/elements/Button";

const SwitcherWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap; /* ← 折り返し禁止 */
  gap: 0.5rem;
  margin-top: 2rem;
  justify-content: center;
  overflow-x: auto; /* ← モバイルで横スクロール許可 */
  -webkit-overflow-scrolling: touch; /* iOS スムーズスクロール */

  @media (max-width: 768px) {
    padding: 0 0.5rem;
    justify-content: flex-start; /* 左寄せ or centerに変えてもOK */
  }
`;

export const ThemeSwitcher: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    log.info("🍑 ThemeSwitcher mounted");
  }, []);

  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error(
      "ThemeContext is undefined. Make sure you are inside a ThemeContext.Provider."
    );
  }

  const { currentTheme, setTheme } = themeContext;

  if (!mounted) {
    return null; // SSR対策
  }

  return (
    <SwitcherWrapper>
      {themeList.map(({ name, label }) => {
        const isActive = name === currentTheme;

        return (
          <Button
            key={name}
            onClick={() => {
              log.info("🎯 Theme button clicked:", name);
              setTheme(name);
            }}
            variant={isActive ? "default" : "outline"}
            size="sm"
            ariaLabel={`Switch to ${name} theme`}
          >
            {label}
          </Button>
        );
      })}
    </SwitcherWrapper>
  );
};

