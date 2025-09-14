// src/greenhouse/components/text/TextBlock.tsx
"use client";

import React from "react";
import { TextBlockWrapper, type TextBlockProps } from "./TextBlock.styles";

type Props = TextBlockProps & {
  title?: string;
  subtitle?: string;
  description?: string | React.ReactNode;
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
    $maxWidth={maxWidth}    //ハイドレーション対策
    >
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}

      {/* ✅ ここで JSX or string を出し分け！ */}
      {description && (
        typeof description === "string"
          ? <p>{description}</p>
          : <>{description}</> // ← JSX（マーカーなど）をそのまま挿入
      )}
    </TextBlockWrapper>
  );
};

export default TextBlock;

