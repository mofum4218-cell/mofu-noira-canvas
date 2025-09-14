"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { PlanCard } from "./PlanCard";
import { FeatureItem } from "@/types/section";

export type PlanTab = {
  name: string;
  subtitle: string;
  description: string;
  lottie: string;
  cards: FeatureItem[];
  image: string;
};

type Props = {
  tabs: PlanTab[];
};

const TabsWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme?.spacing?.sm ?? "1rem"};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme?.spacing?.md ?? "2rem"};
  flex-wrap: wrap;
`;

const TabButton = styled.button<{ $active: boolean }>`
  padding: ${({ theme }) => theme?.spacing?.xs ?? "0.5rem"}
    ${({ theme }) => theme?.spacing?.sm ?? "1rem"};
  border: none;
  background-color: ${({ theme, $active }) =>
    $active ? theme?.accent ?? "#00bcb4" : theme?.surface ?? "#fff"};
  color: ${({ theme, $active }) =>
    $active ? theme?.bg ?? "#fff" : theme?.text ?? "#333"};
  border-radius: ${({ theme }) => theme?.radius?.sm ?? "6px"};
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme?.accent ?? "#00bcb4"};
    color: ${({ theme }) => theme?.bg ?? "#fff"};
  }
`;

export const PlanTabs: React.FC<Props> = ({ tabs }) => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <>
      <TabsWrapper>
        {tabs.map((tab, idx) => (
          <TabButton
            key={idx}
            onClick={() => setActive(idx)}
            $active={idx === active}
          >
            {tab.name}
          </TabButton>
        ))}
      </TabsWrapper>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <PlanCard plan={current} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PlanTabs;

