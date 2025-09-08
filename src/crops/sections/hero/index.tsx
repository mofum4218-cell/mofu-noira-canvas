// src/crops/sections/hero/index.tsx
"use client";
import styled from "styled-components";
import { ThemeSwitcher } from "@/crops/elements/ThemeSwitcher";
import { HeroEffect } from "./HeroEffect";

type HeroProps = {
  title: string;
  subtitle: string;
  effect?: "none" | "vanta" | "three";
};

const HeroSection = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const Hero: React.FC<HeroProps> = ({ title, subtitle, effect = "none" }) => {
  return (
    <HeroSection>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ThemeSwitcher />
      <HeroEffect type={effect} />
    </HeroSection>
  );
};
export default Hero;

