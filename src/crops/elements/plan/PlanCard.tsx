"use client";

import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";
import { PlanTab } from "./PlanTabs";
import Image from "next/image";
import { Sparkles, Award, Brain, Code } from "lucide-react";

// ✅ Lottieは SSR 無効で読み込み
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// =========================
// 💅 styled-components定義
// =========================

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme?.surface ?? "#fff"};
  padding: ${({ theme }) => theme?.spacing?.md ?? "2rem"};
  border-radius: ${({ theme }) => theme?.radius?.md ?? "8px"};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.md ?? "2rem"};
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.sm ?? "0.75rem"};
`;

const Title = styled.h3`
  font-size: ${({ theme }) =>
    theme?.typography?.fontSize?.["2xl"] ?? "1.5rem"};
  color: ${({ theme }) => theme?.text ?? "#111"};
`;

const LottieBox = styled.div`
  width: 48px;
  height: 48px;

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme?.accent ?? "#00bcb4"};
  font-size: ${({ theme }) =>
    theme?.typography?.fontSize?.base ?? "1rem"};
`;

const Description = styled.p`
  text-align: center;
  max-width: 600px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme?.spacing?.sm ?? "1rem"};
  justify-content: center;
`;

const MiniCard = styled.div`
  background-color: ${({ theme }) => theme?.bg ?? "#f9f9f9"};
  padding: ${({ theme }) => theme?.spacing?.sm ?? "1rem"};
  border-radius: ${({ theme }) => theme?.radius?.sm ?? "6px"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
  flex: 1 1 200px;
`;

const PlanImage = styled(Image)`
  border-radius: ${({ theme }) => theme?.radius?.sm ?? "6px"};
  margin-top: ${({ theme }) => theme?.spacing?.sm ?? "1rem"};
`;

// =========================
// 🎨 アイコンマップ
// =========================

const iconMap = {
  sparkles: Sparkles,
  award: Award,
  brain: Brain,
  code: Code,
};

// =========================
// 🧩 コンポーネント本体
// =========================

export const PlanCard: React.FC<{ plan: PlanTab }> = ({ plan }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{plan.name}</Title>
        <LottieBox>
          <Player
            autoplay
            loop
            src={plan.lottie}
            style={{ width: "100%", height: "100%" }}
          />
        </LottieBox>
      </TitleWrapper>

      <Subtitle>{plan.subtitle}</Subtitle>
      <Description>{plan.description}</Description>

      <Cards>
        {plan.cards.map((card, idx) => {
          const Icon = iconMap[card.icon as keyof typeof iconMap] ?? Sparkles;
          return (
            <MiniCard key={idx}>
              <Icon size={24} style={{ marginBottom: 8 }} />
              <h4>{card.title}</h4>
              <p>{card.description}</p>
            </MiniCard>
          );
        })}
      </Cards>

      <PlanImage
        src={plan.image}
        alt={plan.name}
        width={400}
        height={240}
        priority
      />
    </Wrapper>
  );
};

export default PlanCard;

