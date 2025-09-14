import React from "react";
import { HighlightSpan } from "@/greenhouse/components/text/HighlightSpan";
import { BigTextSpan } from "@/greenhouse/components/text/BigTextSpan";
import { BoldSpan } from "@/greenhouse/components/text/BoldSpan";
import { ColorSpan } from "@/greenhouse/components/text/ColorSpan";
import { SketchSpan } from "@/greenhouse/components/text/SketchSpan";

// 🔍 すべての記法を正規表現で抽出（順番大事！）
const pattern = /(<<?.*?>>|%%.*?%%|@@.*?@@|\*\*.*?\*\*|~~.*?~~)/g;

export const parseHighlightText = (text: string): React.ReactNode[] => {
  const parts = text.split(pattern);

  return parts.map((part, idx) => {
    if (!part) return null;

    // <<マーカー>>
    if (part.startsWith("<<") && part.endsWith(">>")) {
      const content = part.slice(2, -2);
      return <HighlightSpan key={idx}>{content}</HighlightSpan>;
    }

    // %%デカ文字%%
    if (part.startsWith("%%") && part.endsWith("%%")) {
      const content = part.slice(2, -2);
      return <BigTextSpan key={idx}>{content}</BigTextSpan>;
    }

    // **太字**
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return <BoldSpan key={idx}>{content}</BoldSpan>;
    }

    // ~~スケッチ風~~
    if (part.startsWith("~~") && part.endsWith("~~")) {
      const content = part.slice(2, -2);
      return <SketchSpan key={idx}>{content}</SketchSpan>;
    }

    // @@color:内容@@
    if (part.startsWith("@@") && part.endsWith("@@")) {
      const inner = part.slice(2, -2); // "red:Hello"
      const [color, ...rest] = inner.split(":");
      const content = rest.join(":"); // コロンを含む文でもOK
      return <ColorSpan key={idx} $color={color}>{content}</ColorSpan>;
    }

    // 通常テキスト
    return <span key={idx}>{part}</span>;
  });
};

