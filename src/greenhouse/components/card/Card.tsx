// src/greenhouse/components/card/Card.tsx
"use client";

import React from "react";
import { CardWrapper, CardImage, CardContent } from "./Card.styles";
import { DefaultTheme } from "styled-components";
import CardText from "./CardText";

export type CardProps = {
  title: string;
  subtitle?: string;
  description?: string;

  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "top" | "left" | "right";

  surfaceColor?: keyof DefaultTheme;
  textColor?: keyof DefaultTheme;
  bgImage?: string;

  layout?: "vertical" | "horizontal";
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
      <CardText
  title={title}
  subtitle={subtitle}
  description={description}
/>
             </CardContent>
    </CardWrapper>
  );
};

export default Card;

