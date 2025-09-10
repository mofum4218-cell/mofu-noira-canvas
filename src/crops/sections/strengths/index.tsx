// src/crops/sections/Strengths/index.tsx
"use client";

import styled from "styled-components";
import { imageTokens } from "@/config/images/imageTokens";
import { useResponsiveImage } from "@/hooks/useResponsiveImage";

type StrengthsProps = {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  bg?: string;
};

const StrengthsSection = styled.section<{ $bg: string }>`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

const Strengths: React.FC<StrengthsProps> = ({ title, subtitle, bg }) => {
  const fallback = imageTokens.content?.sample1 || "";

  const background = useResponsiveImage(
    {
      mobile: bg || fallback,
      tablet: bg || fallback,
      desktop: bg || fallback,
    },
    fallback
  );

  return (
    <StrengthsSection $bg={background}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </StrengthsSection>
  );
};

export default Strengths;

