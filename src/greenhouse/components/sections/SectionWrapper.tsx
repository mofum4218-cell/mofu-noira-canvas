import styled, { css } from "styled-components";
import type { DefaultTheme } from "styled-components";

type SectionWrapperProps = {
  $bgColor?: keyof DefaultTheme;
  $bgImage?: string;
};

export const SectionWrapper = styled.section<SectionWrapperProps>`
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

