// src/greenhouse/components/layout/FlexWrapper.tsx
import styled, { DefaultTheme } from "styled-components";
import { mq } from "./ResponsiveHelpers";

type FlexProps = {
  direction?: "row" | "column";
  gap?: keyof DefaultTheme["spacing"];
};

export const FlexWrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, gap }) => theme.spacing[gap || "md"]};

  ${mq("md")} {
    flex-direction: ${({ direction }) => direction || "row"};
  }
`;

