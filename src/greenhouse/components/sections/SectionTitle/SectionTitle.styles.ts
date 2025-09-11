// src/greenhouse/components/sections/SectionTitle/SectionTitle.styles.ts

import styled from "styled-components";
import { TextBlockWrapper } from "@/greenhouse/components/text/TextBlock.styles";

export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme?.spacing?.lg ?? "32px"};
`;

export const StyledLottie = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: ${({ theme }) => theme?.spacing?.sm ?? "16px"};

  @media (min-width: ${({ theme }) => theme?.breakpoints?.md ?? "768px"}) {
    width: 160px;
    height: 160px;
  }
`;

export const StyledTextBlock = styled(TextBlockWrapper)`
  text-align: center;

  h2 {
    font-size: ${({ theme }) => theme?.typography?.fontSize?.["2xl"] ?? "1.5rem"};
    margin-bottom: ${({ theme }) => theme?.spacing?.sm ?? "16px"};
  }

  h3 {
    font-size: ${({ theme }) => theme?.typography?.fontSize?.lg ?? "1.125rem"};
    margin-bottom: ${({ theme }) => theme?.spacing?.xs ?? "8px"};
  }

  p {
    font-size: ${({ theme }) => theme?.typography?.fontSize?.base ?? "1rem"};
    line-height: ${({ theme }) => theme?.typography?.lineHeight?.relaxed ?? "1.625"};
  }
`;

