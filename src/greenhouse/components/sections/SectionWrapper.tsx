// SectionWrapper.tsx
import styled, { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

type SectionWrapperProps = {
  id?: string; // 👈 ← 明示的に受け取る
  $bgColor?: keyof DefaultTheme;
  $bgImage?: string;
};

export const SectionWrapper = styled.section.attrs<SectionWrapperProps>(props => ({
  id: props.id, // ← ここが超重要！
}))<SectionWrapperProps>`
  ${({ theme, $bgColor, $bgImage }) => {
    const color = theme[$bgColor || "bg"];
    return css`
      width: 100%;
      padding: ${theme.spacing?.lg ?? "2rem"};
      background-color: ${typeof color === "string" ? color : theme.bg};

      ${$bgImage &&
      css`
        background-image: url(${$bgImage});
        background-size: cover;
        background-position: center;
      `}
    `;
  }}
`;

