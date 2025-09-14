// ✅ Strengths.tsx
"use client";

import React from "react";
import styled from "styled-components";
import { SectionTitle } from "@/greenhouse/components/sections/SectionTitle/SectionTitle";
import { StrengthsSection } from "@/types/section";
import { PlanTabs } from "@/crops/elements/plan/PlanTabs";

const Wrapper = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const Strengths: React.FC<StrengthsSection> = (section) => {
  return (
    <Wrapper id={section.id}>
      <SectionTitle
        title={section.title}
        subtitle={section.subtitle}
        description={section.description}
        lottieSrc={section.lottieSrc}
      />

      {/* ✅ タブ式プラン表示 */}
       {section.tabs && section.tabs.length > 0 && (
        <PlanTabs tabs={section.tabs} />
      )}
         </Wrapper>
  );
};

export default Strengths;

