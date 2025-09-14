"use client";

import styled from "styled-components";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import { HeroEffect } from "./HeroEffect";
import { useResponsiveImage } from "@/hooks/useResponsiveImage";
import { imageTokens } from "@/config/images/imageTokens";

type HeroProps = {
  title?: string;
  subtitle?: string;
  effect?: "none" | "vanta" | "three";
};

// 💡 背景付き Hero セクション（オーバーレイ追加）
const HeroSection = styled.section<{ $bg: string }>`
  padding: 4rem;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  color: white; /* ← 常に白文字 */

  background-color: ${({ theme }) => theme.bg};
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-position: center top;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6); /* ← 黒の60% */
    z-index: 1;
  }
`;

// 💬 テキストラップ（中央寄せ）
const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
`;

// 🏷 タイトル・サブタイトル
const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// 🎛 Theme切り替えボタン用ラッパー
const ThemeWrapper = styled.div`
  margin-top: 2rem;
  position: relative;
  z-index: 2;
`;

export const Hero: React.FC<HeroProps> = ({ title, subtitle, effect = "none" }) => {
  const bg = useResponsiveImage(
    {
      mobile: imageTokens.content?.heroBg,
      tablet: imageTokens.content?.heroBg,
      desktop: imageTokens.content?.heroBg,
    },
    imageTokens.content?.heroBg || ""
  );

  return (
    <HeroSection $bg={bg}>
      <ContentWrapper>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
      </ContentWrapper>

      <ThemeWrapper>
        <ThemeSwitcher />
      </ThemeWrapper>

      <ThemeWrapper>
        <HeroEffect type={effect} />
      </ThemeWrapper>
    </HeroSection>
  );
};

export default Hero;

