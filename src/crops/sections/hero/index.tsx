// src/crops/sections/hero/index.tsx
"use client";

import styled from "styled-components";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";

type HeroProps = { title: string; subtitle: string };

const HeroSection = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
   return (
    <HeroSection>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ThemeSwitcher />
    </HeroSection>
  );
};

export default Hero;

