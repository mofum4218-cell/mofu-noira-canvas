// src/greenhouse/components/card/CardImage.tsx
"use client";

import React from "react";
import { StyledCardImage } from "./Card.styles";

type Props = {
  src: string;
  alt?: string;
};

export const CardImage: React.FC<Props> = ({ src, alt = "image" }) => {
  return <StyledCardImage src={src} alt={alt} />;
};

export default CardImage;

