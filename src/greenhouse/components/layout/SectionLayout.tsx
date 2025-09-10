import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

type ThemeColorKey = "bg" | "primary" | "secondary" | "hover" | "accent" | "text";

type SectionLayoutProps = {
  $bgColor?: ThemeColorKey;
  $padding?: keyof DefaultTheme["spacing"];
};

export const SectionLayout = styled.section<SectionLayoutProps>`
  ${({ theme, $bgColor = "bg", $padding = "lg" }) => css`
    background-color: ${theme[$bgColor]};
    padding: ${theme.spacing[$padding]};
    width: 100%;
  `}
`;

