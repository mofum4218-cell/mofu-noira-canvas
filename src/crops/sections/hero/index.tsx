"use client";

import styled from "styled-components";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import { HeroEffect } from "./HeroEffect";
import { getImageUrl } from "@/utils/getImageUrl";
import { useTheme } from "@/greenhouse/themes/ThemeContext";
import { getTextByTheme } from "@/utils/getTextByTheme";
import Image from "next/image";

// 🌄 セクション全体
const HeroSection = styled.section`
  padding: 6rem 4rem 4rem; // ✅ 上に余白追加（ナビバー対策）
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.bg};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 7rem; // PC版も追加
  }
`;

// 👈 左側（テキスト＋画像）
const Left = styled.div`
  flex: 1;
  z-index: 2;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.["4xl"] ?? "2rem"};
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.xl ?? "1.25rem"};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 600px;
  white-space: pre-line;
  font-size: ${({ theme }) => theme?.typography?.fontSize?.base ?? "1rem"};
  margin-bottom: 2rem;
`;

const HeroImage = styled(Image)`
  width: 60%;
  height: auto;
  max-width: 360px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

// 👉 右側（ボタン＋背景）
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

// ✅ 背景Box：ボタンの後ろに縦に伸びる！
const ButtonBackgroundBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0; // ✅ 画像と高さ合わせて下に配置
  width: 100%;
  max-width: 400px;
  min-height: 260px; // ✅ 最低限の縦幅確保
  height: auto; // ✅ 縦に伸びても大丈夫
  background-color: ${({ theme }) => theme.accent + "20"};
  border-top-left-radius: 60px;
  border-bottom-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  @media (max-width: 768px) {
    border-radius: 40px;
    max-width: 90%;
  }
`;

const ThemeArea = styled.div`
  z-index: 2;
  padding: 2rem;
`;

export const Hero: React.FC = () => {
  const { currentTheme } = useTheme();

  const bgImage = getImageUrl(`/img/${currentTheme}-hero.png`);
  const text = getTextByTheme("hero", currentTheme);

  const title = text?.title ?? "Default Title";
  const subtitle = text?.subtitle ?? "Default Subtitle";
  const description = text?.description ?? "Default description.";

  return (
    <HeroSection>
      <Left>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>

        {/* ✅ テーマに応じた画像（中央寄せ） */}
        <HeroImage
          src={bgImage}
          alt={title}
          width={360}
          height={360}
          priority
        />
      </Left>

      <Right>
        <ButtonBackgroundBox />
        <ThemeArea>
          <ThemeSwitcher />
        </ThemeArea>
      </Right>

      <HeroEffect type="none" />
    </HeroSection>
  );
};

export default Hero;

