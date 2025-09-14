"use client";

import React from "react";
import styled from "styled-components";
import { StrengthsSection as StrengthsType, FeatureItem } from "@/types/section";
import { SectionTitle } from "@/greenhouse/components/sections/SectionTitle/SectionTitle";
import { Card } from "@/greenhouse/components/card/Card";
import { Sparkles, Award, Brain, Code } from "lucide-react";

// 🧱 セクション全体のスタイル
const StrengthsSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme?.bg ?? "#f9f9f9"};
  color: ${({ theme }) => theme?.text ?? "#333"};
  position: relative;
  overflow: hidden;
`;

// 🧩 inカード用ミニ要素
const MiniCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme?.spacing?.sm ?? "8px"};
  background-color: ${({ theme }) => theme?.surface ?? "#fff"};
  padding: ${({ theme }) => theme?.spacing?.sm ?? "8px"};
  border-radius: ${({ theme }) => theme?.radius?.sm ?? "6px"};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  margin-top: ${({ theme }) => theme?.spacing?.sm ?? "8px"};
`;

const IconWrapper = styled.div`
  color: ${({ theme }) => theme?.accent ?? "#00bcd4"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapper = styled.div`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.sm ?? "0.875rem"};
  line-height: ${({ theme }) => theme?.typography?.lineHeight?.relaxed ?? "1.625"};
`;

// 🧠 アイコンマップ
const iconMap = {
  Sparkles: Sparkles,
  Award: Award,
  Brain: Brain,
  Code: Code,
};

// 🧩 Strengthsセクション本体
export const Strengths: React.FC<StrengthsType> = (section) => {
  const features: FeatureItem[] = section.features || [];

  return (
    <StrengthsSection id={section.id}>
      <SectionTitle
        title={section.title}
        subtitle={section.subtitle}
        description={section.description}
        lottieSrc={section.lottieSrc}
      />

      <Card
        title={section.title || "特徴"}
        subtitle={section.subtitle}
        layout="vertical"
      >
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap] || Sparkles;

          return (
            <MiniCard key={idx}>
              <IconWrapper>
                <Icon size={20} />
              </IconWrapper>
              <TextWrapper>
                <strong>{feature.title}</strong>
                {feature.subtitle && <div>{feature.subtitle}</div>}
                {feature.description && <p>{feature.description}</p>}
              </TextWrapper>
            </MiniCard>
          );
        })}
      </Card>
    </StrengthsSection>
  );
};

export default Strengths;

