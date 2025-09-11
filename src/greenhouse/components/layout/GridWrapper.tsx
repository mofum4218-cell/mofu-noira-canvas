// src/greenhouse/components/layout/GridWrapper.tsx
import styled, { DefaultTheme } from "styled-components";
import { mq } from "./ResponsiveHelpers";

type GridProps = {
  columns?: number;         // 💡 通常（md以上）のカラム数
  mobileColumns?: number;   // 💡 モバイル用カラム数（追加）
  gap?: keyof DefaultTheme["spacing"];
};

export const GridWrapper = styled.div<GridProps>`
  display: grid;

  // 💡 モバイルでは props でカラム数を切り替え
  grid-template-columns: repeat(${({ mobileColumns }) => mobileColumns ?? 1}, 1fr);

  gap: ${({ theme, gap }) => theme?.spacing?.[gap ?? "md"] ?? "16px"};

  ${mq("md")} {
    grid-template-columns: repeat(${({ columns }) => columns ?? 2}, 1fr);
  }

  ${mq("lg")} {
    grid-template-columns: repeat(${({ columns }) => columns ?? 3}, 1fr);
  }
`;

