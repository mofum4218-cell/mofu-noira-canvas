// src/crops/sections/hero/index.ts
"use client";

import styled from "styled-components";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import { HeroEffect } from "./HeroEffect";
import { useResponsiveImage } from "@/hooks/useResponsiveImage";
import { imageTokens } from "@/config/images/imageTokens";
import Image from "next/image";
import { mq } from "@/greenhouse/components/layout/ResponsiveHelpers";

type HeroProps = {
  title?: string;
  subtitle?: string;
  effect?: "none" | "vanta" | "three";
};

// 💡 背景付き Hero セクション
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

// 🧱 グリッド配置（画像用）
const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme?.spacing?.md || "16px"};
  margin-top: 2rem;

  ${mq("md")} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// 🖼 画像ラッパー
const GridImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radius.md};
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

  const images = [
    "/img/grid1.png",
    "/img/grid2.png",
    "/img/grid3.png",
    "/img/grid4.png",
    "/img/grid5.png",
  ];

  return (
    <HeroSection $bg={bg}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ThemeSwitcher />
      <HeroEffect type={effect} />

      {/* 🧊 グリッド画像表示 */}
      <ImageGrid>
        {images.map((src, idx) => (
          <GridImage
            key={idx}
            src={src}
            alt={`Grid Image ${idx + 1}`}
            width={400}
            height={300}
          />
        ))}
      </ImageGrid>
    </HeroSection>
  );
};

export default Hero;

