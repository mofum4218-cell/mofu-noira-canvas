"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "@/greenhouse/themes/ThemeContext";
import { getTheme } from "@/greenhouse/themes/colors";
import { ThemeName } from "@/greenhouse/themes/types";
import { getSignedUrl } from "@/lib/supabaseUtils";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import Image from "next/image";

// 🖼️ HeroWrapper 全画面
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

// 🎛️ ThemeSwitcher の位置
const SwitcherBox = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Hero: React.FC = () => {
  const { currentTheme } = useTheme();
  const theme = getTheme(currentTheme as ThemeName);

  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    // ロゴ画像の signed URL を取得
    getSignedUrl("common/noira-mark.svg", 300).then((signed) => {
      setLogoUrl(signed);
    });
  }, []);

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

