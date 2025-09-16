// src/greenhouse/components/text/TextBlock.tsx
"use client";

import React from "react";
import { TextBlockWrapper, type TextBlockProps } from "./TextBlock.styles";

type Props = TextBlockProps & {
  title?: React.ReactNode;       // ← ✅ JSX対応に変更！
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
};

export const TextBlock: React.FC<Props> = ({
  title,
  subtitle,
  description,
  align = "left",
  color = "text",
  font = "sans",
  maxWidth = "800px",
}) => {
  return (
    <TextBlockWrapper
      align={align}
      color={color}
      font={font}
      $maxWidth={maxWidth}
    >
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      {description && <div>{description}</div>} {/* ✅ もうここはJSX想定でOK！ */}
    </TextBlockWrapper>
  );
};

export default TextBlock;


