// src/greenhouse/components/layout/CardContentGrid.tsx
import styled, { DefaultTheme } from "styled-components";
import { mq } from "./ResponsiveHelpers";

type CardContentGridProps = {
  split?: "horizontal" | "vertical";
  gap?: keyof DefaultTheme["spacing"];
};

export const CardContentGrid = styled.div<CardContentGridProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) =>
    theme.spacing[gap ?? "sm"] || theme.spacing["sm"]};

  ${mq("md")} {
    flex-direction: ${({ split }) =>
      split === "horizontal" ? "row" : "column"};
  }
`;

