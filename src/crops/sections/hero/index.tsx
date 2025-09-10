// src/crops/sections/hero/index.ts
"use client";

import styled from "styled-components";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import { HeroEffect } from "./HeroEffect";
import { useResponsiveImage } from "@/hooks/useResponsiveImage";
import { imageTokens } from "@/config/images/imageTokens";

type HeroProps = {
  title: string;
  subtitle: string;
  effect?: "none" | "vanta" | "three";
};

// 💡 背景画像はpropsで渡す想定にして、styled-componentsで制御
const HeroSection = styled.section<{ $bg: string }>`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
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
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ThemeSwitcher />
      <HeroEffect type={effect} />
    </HeroSection>
  );
};

export default Hero;

