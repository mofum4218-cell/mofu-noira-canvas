"use client";

import React from "react";
import styled from "styled-components";
import { Card } from "@/greenhouse/components/card/Card";
import { GridWrapper } from "@/greenhouse/components/layout/GridWrapper";
import { SectionTitle } from "@/greenhouse/components/sections/SectionTitle/SectionTitle";

type StrengthsProps = {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  theme: string;
  bg?: string;
  lottieSrc?: string;
};

const StrengthsSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const Strengths: React.FC<StrengthsProps> = ({
  id,
  title,
  subtitle,
  description,
  lottieSrc,
}) => {
  return (
    <StrengthsSection id={id}>
      {/* ✅ セクション共通タイトル */}
      <SectionTitle
        title={title}
        subtitle={subtitle}
        description={description}
        lottieSrc={lottieSrc}
      />

      {/* 🅰 左画像・右テキスト → モバイルも2列のまま */}
      <GridWrapper columns={2} mobileColumns={2} gap="lg" style={{ marginTop: "3rem" }}>
        {[1, 2, 1, 2].map((num, idx) => (
          <Card
            key={`card-left-${idx}`}
            title={`Card Left ${idx + 1}`}
            subtitle="副題"
            description="これは左画像のカードです。"
            imageSrc={`/img/card${num}.png`}
            imagePosition="left"
            layout="horizontal"
          />
        ))}
      </GridWrapper>

      {/* 🅱 画像上・テキスト下 → モバイルは1列に */}
      <GridWrapper columns={3} mobileColumns={1} gap="lg" style={{ marginTop: "4rem" }}>
        {[1, 2, 1].map((num, idx) => (
          <Card
            key={`card-top-${idx}`}
            title={`Card Top ${idx + 1}`}
            subtitle="上に画像"
            description="上画像・下テキストのカードです。"
            imageSrc={`/img/card${num}.png`}
          />
        ))}
      </GridWrapper>

      {/* 🆎 右画像・左テキスト → モバイルは1列に */}
      <GridWrapper columns={2} mobileColumns={1} gap="lg" style={{ marginTop: "4rem" }}>
        {[2, 1, 2, 1].map((num, idx) => (
          <Card
            key={`card-right-${idx}`}
            title={`Card Right ${idx + 1}`}
            subtitle="副題"
            description="これは右画像のカードです。"
            imageSrc={`/img/card${num}.png`}
            imagePosition="right"
            layout="horizontal"
          />
        ))}
      </GridWrapper>
    </StrengthsSection>
  );
};

export default Strengths;

