// src/greenhouse/components/sections/GenericSection.tsx
import React from "react";
import { SectionWrapper } from "./SectionWrapper";

type SectionColor = "bg" | "primary" | "secondary" | "accent" | "hover" | "text";

type GenericSectionProps = {
  id: string;
  bgColor?: SectionColor;
  bgImage?: string;
  children: React.ReactNode;
};

export const GenericSection: React.FC<GenericSectionProps> = ({
  id,
  bgColor = "bg",
  bgImage,
  children,
}) => {
  return (
    <SectionWrapper id={id} $bgColor={bgColor} $bgImage={bgImage}>
      {children}
    </SectionWrapper>
  );
};

