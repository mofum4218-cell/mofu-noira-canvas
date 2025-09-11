// src/crops/sections/contact/index.tsx

"use client";

import React from "react";
import styled from "styled-components";
import { Section } from "@/greenhouse/types"; // ✅ 共通型から受け取る
import SectionTitle from "@/greenhouse/components/sections/SectionTitle/SectionTitle";

const ContactSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const Contact: React.FC<Section> = (section) => {
  return (
    <ContactSection id={section.id}>
      <SectionTitle
        title={section.title}
        subtitle={section.subtitle}
        description={section.description}
        lottieSrc={section.lottieSrc} // ✅ JSONに追加すれば自動反映
      />
      {/* この下にフォームなど追記できる */}
    </ContactSection>
  );
};

export default Contact;

