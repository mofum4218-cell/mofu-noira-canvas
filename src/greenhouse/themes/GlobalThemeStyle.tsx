import { createGlobalStyle } from "styled-components";

export const GlobalThemeStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;

