import styled from "styled-components";

// ✅ after（maxWidth も追加！）
export type TextBlockProps = {
  align?: "left" | "center" | "right";
  color?: string;
  font?: string;
  $maxWidth?: string; // styled-components用
  maxWidth?: string;  // ← これが props として使われる！
};

export const TextBlockWrapper = styled.div<TextBlockProps>`
  ${({ align = "left", $maxWidth = "800px" }) => `
    text-align: ${align};
    max-width: ${$maxWidth}; // ← ✅ 修正ポイント!!
    margin: 0 auto;
  `}

  ${({ theme }) => `
    padding: ${theme?.spacing?.md ?? "16px"};
  `}

  ${({ theme, color = "text" }) => `
    color: ${theme?.[color as keyof typeof theme] ?? theme?.text ?? "#333"};
  `}

  ${({ theme, font = "sans" }) => {
    const fonts = theme?.typography?.fontFamily;
    const selectedFont = fonts?.[font as keyof typeof fonts] ?? "sans-serif";
    return `font-family: ${selectedFont};`;
  }}
`;
