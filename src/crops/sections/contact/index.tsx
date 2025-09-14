// src/crops/sections/contact/index.tsx
"use client";

import React from "react";
import styled from "styled-components";
import { ContactSection as ContactType } from "@/types/section"; // 型も専用で
import SectionTitle from "@/greenhouse/components/sections/SectionTitle/SectionTitle";
import Accordion from "@/greenhouse/components/accordion/Accordion"; // ✅ motionアコーディオン

const ContactWrapper = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const Contact: React.FC<ContactType> = (section) => {
  return (
    <ContactWrapper id={section.id}>
      <SectionTitle
        title={section.title}
        subtitle={section.subtitle}
        description={section.description}
        lottieSrc={section.lottieSrc}
      />

      {/* 💬 FAQアコーディオン */}
      {section.faq && section.faq.length > 0 && (
        <Accordion items={section.faq} />
      )}
    </ContactWrapper>
  );
};

export default Contact;

