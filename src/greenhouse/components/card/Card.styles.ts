// src/greenhouse/components/card/Card.styles.ts
import styled, { css, DefaultTheme } from "styled-components";

type WrapperProps = {
  $surfaceColor: keyof DefaultTheme;
  $textColor: keyof DefaultTheme;
  $bgImage?: string;
  $layout: "vertical" | "horizontal";
  $hasImage: boolean;
  $imagePosition: "top" | "left" | "right";
};

const getWrapperStyle = ({
  theme,
  $surfaceColor,
  $textColor,
  $bgImage,
  $layout,
  $imagePosition,
}: WrapperProps & { theme: DefaultTheme }) => {
  const surface = String(theme?.[$surfaceColor as keyof typeof theme] ?? "#fff");
  const text = String(theme?.[$textColor as keyof typeof theme] ?? "#333");
  const hover = String(theme?.hover ?? "#ccc");
  const borderRadius = theme?.radius?.md ?? "8px";
  const padding = theme?.spacing?.md ?? "16px";
  const gap = theme?.spacing?.md ?? "16px";
  const bpMd = theme?.breakpoints?.md ?? "768px";

  return css`
    display: flex;
    flex-direction: ${$layout === "horizontal"
      ? $imagePosition === "right"
        ? "row-reverse"
        : "row"
      : "column"};

    background-color: ${surface};
    color: ${text};

    ${$bgImage &&
    css`
      background-image: url(${$bgImage});
      background-size: cover;
      background-position: center;
      background-blend-mode: overlay;
    `}

    border-radius: ${borderRadius};
    padding: ${padding};
    gap: ${gap};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${hover};
    }

    @media (max-width: ${bpMd}) {
      flex-direction: column;
    }
  `;
};

export const CardWrapper = styled.div<WrapperProps>`
  ${({ theme, ...rest }) => getWrapperStyle({ ...rest, theme })}
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme?.radius?.sm ?? "6px"};

  @media (min-width: ${({ theme }) => theme?.breakpoints?.md ?? "768px"}) {
    width: 200px;
    height: auto;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: ${({ theme }) =>
      theme?.typography?.fontSize?.lg ?? "1.125rem"};
    margin: 0 0 ${({ theme }) => theme?.spacing?.xs ?? "8px"} 0;
  }

  h4 {
    font-size: ${({ theme }) =>
      theme?.typography?.fontSize?.base ?? "1rem"};
    margin: 0 0 ${({ theme }) => theme?.spacing?.xs ?? "8px"} 0;
  }

  p {
    font-size: ${({ theme }) =>
      theme?.typography?.fontSize?.sm ?? "0.875rem"};
    line-height: ${({ theme }) =>
      theme?.typography?.lineHeight?.relaxed ?? "1.625"};
    margin: 0;
  }
`;

export const StyledCardImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;

  @media (min-width: ${({ theme }) => theme?.breakpoints?.md ?? "768px"}) {
    width: 200px;
    height: auto;
  }
`;
