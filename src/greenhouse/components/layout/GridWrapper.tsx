// src/greenhouse/components/layout/GridWrapper.tsx
import styled, { DefaultTheme } from "styled-components";
import { mq } from "./ResponsiveHelpers";

type GridProps = {
  columns?: number;
  gap?: keyof DefaultTheme["spacing"];
};

export const GridWrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 1}, 1fr);
  gap: ${({ theme, gap }) => theme?.spacing?.[gap ?? "md"] ?? "16px"};

  ${mq("md")} {
    grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
  }

  ${mq("lg")} {
    grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  }
`;

