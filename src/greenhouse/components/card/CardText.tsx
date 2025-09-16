"use client";

import React from "react";
import TextBlock from "@/greenhouse/components/text/TextBlock";
import type { TextBlockProps } from "@/greenhouse/components/text/TextBlock.styles";

type Props = TextBlockProps & {
  title?: React.ReactNode;        // ✅ string から ReactNode に変更
  subtitle?: React.ReactNode;     // ✅ string から ReactNode に変更
  description?: React.ReactNode;  // ✅ string から ReactNode に変更
};

export const CardText: React.FC<Props> = ({
  title,
  subtitle,
  description,
  align = "left",
  color = "text",
  font = "sans",
  maxWidth = "800px",
}) => {
  return (
    <TextBlock
      title={title}
      subtitle={subtitle}
      description={description}
      align={align}
      color={color}
      font={font}
      maxWidth={maxWidth}
    />
  );
};

export default CardText;


