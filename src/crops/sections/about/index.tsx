"use client";

import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/greenhouse/components/sections/SectionTitle/SectionTitle";
import { TextBlock } from "@/greenhouse/components/text/TextBlock";
import { GridWrapper } from "@/greenhouse/components/layout/GridWrapper";
import { parseHighlightText } from "@/utils/parseHighlightText";

type AboutBlock = {
  title?: string;
  subtitle?: string;
  description?: string;
};

type AboutProps = {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  lottieSrc?: string;
  theme: string;
  bg?: string;
  blocks?: AboutBlock[]; // ✅ JSONのblocksに対応
};

const AboutSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const About: React.FC<AboutProps> = ({
  id,
  title,
  subtitle,
  description,
  lottieSrc,
  blocks = [], // ← デフォルトで空配列
}) => {
  return (
    <AboutSection id={id}>
      <SectionTitle
        title={title}
        subtitle={subtitle}
        description={description}
        lottieSrc={lottieSrc}
      />

      <GridWrapper columns={1} gap="md" style={{ marginTop: "3rem" }}>
        {blocks.map((block, idx) => (
          <TextBlock
            key={idx}
            title={block.title}
            subtitle={block.subtitle}
            description={
              block.description
                ? parseHighlightText(block.description)
                : undefined
            }
            align="left"
            color="text"
            font="noto"
          />
        ))}
      </GridWrapper>
    </AboutSection>
  );
};

export default About;

