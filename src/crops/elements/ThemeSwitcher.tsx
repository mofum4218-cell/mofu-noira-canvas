"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/greenhouse/themes/ThemeContext";
import { themeList } from "@/greenhouse/themes/themeList";
import styled from "styled-components";
import { log } from "@/utils/logger";

const SwitcherWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const ThemeButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radius?.md ?? "8px"};
  background-color: ${({ theme, $active }) =>
    $active ? theme.accent : theme.secondary};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.hover};
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
    // SSR / Hydrationずれ防止用
    return null;
  }

  return (
    <SwitcherWrapper>
      {themeList.map(({ name, label }) => (
        <ThemeButton
          key={name}
          $active={name === currentTheme}
          onClick={() => {
            log.info("🎯 Theme button clicked:", name);
            setTheme(name);
          }}
        >
          {label}
        </ThemeButton>
      ))}
    </SwitcherWrapper>
  );
};

