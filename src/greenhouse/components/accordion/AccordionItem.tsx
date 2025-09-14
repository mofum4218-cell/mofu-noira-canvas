"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // ← アイコン追加

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme?.accent || "#888"};
  border-radius: ${({ theme }) => theme?.radius?.sm || "6px"};
  background-color: ${({ theme }) => theme?.surface || "#fff"};
  margin-bottom: ${({ theme }) => theme?.spacing?.sm || "1rem"};
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme?.accent || "#00bcb4"};
  padding: ${({ theme }) => theme?.spacing?.sm || "1rem"};
  border-radius: ${({ theme }) => theme?.radius?.sm || "6px"};

  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      (theme?.accent || "#00bcb4") + "15"};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
`;

const AnswerWrapper = styled(motion.div)`
  margin-top: ${({ theme }) => theme?.spacing?.xs || "0.5rem"};
  color: ${({ theme }) => theme?.text || "#333"};
  font-size: ${({ theme }) =>
    theme?.typography?.fontSize?.base || "1rem"};
  padding: 0 ${({ theme }) => theme?.spacing?.sm || "1rem"} 1rem;
`;

type Props = {
  question: string;
  answer: string;
};

const AccordionItem: React.FC<Props> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <Item>
      <Question onClick={() => setOpen(!open)}>
        {question}
        <IconWrapper>
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </IconWrapper>
      </Question>

      <AnimatePresence>
        {open && (
          <AnswerWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ overflow: "hidden" }}>{answer}</div>
          </AnswerWrapper>
        )}
      </AnimatePresence>
    </Item>
  );
};

export default AccordionItem;

