// src/greenhouse/components/sections/GenericSection.tsx
import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { log } from "@/utils/logger"; // 👈 ロガーインポート

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
  // 📝 ログ出力
  log.info(`[GenericSection] rendering section`, {
    id,
    bgColor,
    bgImage,
  });

  return (
    <SectionWrapper id={id} $bgColor={bgColor} $bgImage={bgImage}>
      {children}
    </SectionWrapper>
  );
};

