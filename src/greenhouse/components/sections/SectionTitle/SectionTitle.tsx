// src/greenhouse/components/sections/SectionTitle/SectionTitle.tsx

"use client";

import React from "react";
import { SectionTitleProps } from "./SectionTitle.types";
import { SectionTitleWrapper, StyledLottie, StyledTextBlock } from "./SectionTitle.styles";
import { Player } from "@lottiefiles/react-lottie-player";

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  description,
  lottieSrc,
  align = "center",
  color = "text",
  font = "noto",
  maxWidth = "800px",
}) => {
  return (
    <SectionTitleWrapper>
      {lottieSrc && (
        <StyledLottie>
          <Player
            autoplay
            loop
            src={lottieSrc}
            style={{ width: "100%", height: "100%" }}
          />
        </StyledLottie>
      )}
      <StyledTextBlock align={align} color={color} font={font} maxWidth={maxWidth}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {description && <p>{description}</p>}
      </StyledTextBlock>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;

