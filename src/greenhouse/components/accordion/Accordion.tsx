// src/greenhouse/components/accordion/Accordion.tsx
"use client";

import React from "react";
import styled from "styled-components";
import AccordionItem from "./AccordionItem";
import type { FAQItem } from "@/types/section"; // FAQ型をインポート

// ✅ Props型に items: FAQItem[] を追加
type Props = {
  items: FAQItem[];
};

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme?.spacing?.md ?? "1rem"};
`;

const Accordion: React.FC<Props> = ({ items }) => {
  return (
    <AccordionWrapper>
      {items.map((faq, idx) => (
        <AccordionItem
          key={idx}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </AccordionWrapper>
  );
};

export default Accordion;

