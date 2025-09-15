// src/crops/elements/Button/Button.styles.ts
import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  $variant: string;
  $size?: string;
  $block?: boolean;
  $disabled?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  border-radius: ${({ theme }) => theme?.radius?.md ?? "8px"};
  font-weight: bold;
  text-align: center;

  ${({ $block }) =>
    $block &&
    css`
      display: flex;
      width: 100%;
    `}

  ${({ $size }) => {
    switch ($size) {
      case "sm":
        return css`
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
        `;
      case "lg":
        return css`
          font-size: 1.25rem;
          padding: 0.75rem 1.5rem;
        `;
      default:
        return css`
          font-size: 1rem;
          padding: 0.5rem 1rem;
        `;
    }
  }}

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outline":
        return css`
          background-color: transparent;
          color: ${theme.accent};
          border: 2px solid ${theme.accent};
        `;
      case "circle":
        return css`
          border-radius: 50%;
          width: 40px;
          height: 40px;
          padding: 0;
          background-color: ${theme.accent};
          color: ${theme.text};
        `;
      default:
        return css`
          background-color: ${theme.accent};
          color: ${theme.text};
        `;
    }
  }}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

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
// 下部に追記（同じ見た目で <a> をボタン化）
export const StyledLinkButton = styled.a<{
  $variant: string;
  $size?: string;
  $block?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-decoration: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme?.radius?.md ?? "8px"};
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

  ${({ $block }) => $block && `width: 100%;`}
  background-color: ${({ theme, $variant }) =>
    $variant === "outline" ? "transparent" : theme.accent};
  color: ${({ theme }) => theme.text};

  ${({ $variant, theme }) =>
    $variant === "outline" &&
    `
    border: 2px solid ${theme.accent};
  `}

  ${({ $variant }) =>
    $variant === "circle" &&
    `
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;
  `}

  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`;

