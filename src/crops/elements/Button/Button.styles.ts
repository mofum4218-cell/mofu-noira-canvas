import styled, { css } from "styled-components";

// StyledButton: variant / size / theme に応じてスタイル調整
export const StyledButton = styled.button<{
  $variant: "default" | "outline" | "circle";
  $size?: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  transition: all 0.3s ease;

  font-size: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "0.75rem";
      case "lg":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};

  padding: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "0.25rem 0.5rem";
      case "lg":
        return "0.75rem 1.5rem";
      default:
        return "0.5rem 1rem";
    }
  }};

  color: ${({ theme, $variant }) =>
    $variant === "outline" ? theme.accent : theme.text};

  background-color: ${({ theme, $variant }) =>
    $variant === "outline" ? "transparent" : theme.accent};

  border: ${({ $variant, theme }) =>
    $variant === "outline" ? `2px solid ${theme.accent}` : "none"};

  border-radius: ${({ $variant, theme }) =>
    $variant === "circle" ? "50%" : theme.radius.md};

  ${({ $variant }) =>
    $variant === "circle" &&
    css`
      width: 40px;
      height: 40px;
      padding: 0;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.hover};
    color: ${({ $variant, theme }) =>
      $variant === "outline" ? theme.text : "inherit"};
  }
`;

// ImageButton: 画像ボタン用（装飾なし）
export const ImageButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: inline-block;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

