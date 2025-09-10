import styled from "styled-components";

export type TextBlockProps = {
  align?: "left" | "center" | "right";
  color?: string;
  font?: string;
  maxWidth?: string;
};

export const TextBlockWrapper = styled.div<TextBlockProps>`
  ${({ align = "left", maxWidth = "800px" }) => `
    text-align: ${align};
    max-width: ${maxWidth};
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

