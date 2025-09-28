"use client";

import React from "react";
import styled from "styled-components";
import { useTheme } from "@/greenhouse/themes/ThemeContext";
import { getTheme } from "@/greenhouse/themes/colors";
import { ThemeName } from "@/greenhouse/themes/types";
import { getPublicUrl } from "@/lib/supabaseUtils";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import Image from "next/image";

const HeroWrapper = styled.section<{ $bg: string }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ $bg }) => $bg};
  position: relative;
`;

const SwitcherBox = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Hero: React.FC = () => {
  const { currentTheme } = useTheme();
  const theme = getTheme(currentTheme as ThemeName);

  const logoUrl = getPublicUrl("common/noira-mark.svg");

  return (
    <HeroWrapper $bg={theme.bg || "#000"}>
      {logoUrl && (
        <Image
          src={logoUrl}
          alt="Noira Logo"
          width={300}
          height={120}
          style={{ height: "auto", width: "300px" }}
          priority
        />
      )}
      <SwitcherBox>
        <ThemeSwitcher />
      </SwitcherBox>
    </HeroWrapper>
  );
};

