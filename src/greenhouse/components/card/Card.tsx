// src/greenhouse/components/card/Card.tsx
"use client";

import React from "react";
import { CardWrapper, CardImage, CardContent } from "./Card.styles";
import { DefaultTheme } from "styled-components";
import CardText from "./CardText";

export type CardProps = {
    title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
    imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "top" | "left" | "right";
  surfaceColor?: keyof DefaultTheme;
  textColor?: keyof DefaultTheme;
  bgImage?: string;
  layout?: "vertical" | "horizontal";
  children?: React.ReactNode; // 🆕 子要素受け取り可能に
};

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "card image",
  imagePosition = "top",
  surfaceColor = "surface",
  textColor = "text",
  bgImage,
  layout = "vertical",
  children
}) => {
  return (
    <CardWrapper
      $surfaceColor={surfaceColor}
      $textColor={textColor}
      $bgImage={bgImage}
      $layout={layout}
      $hasImage={!!imageSrc}
      $imagePosition={imagePosition}
    >
      {imageSrc && <CardImage src={imageSrc} alt={imageAlt} />}
      <CardContent>
        <CardText title={title} subtitle={subtitle} description={description} />
        {children}
      </CardContent>
    </CardWrapper>
  );
};

export default Card;



