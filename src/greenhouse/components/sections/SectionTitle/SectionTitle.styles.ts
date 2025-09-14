// src/greenhouse/components/sections/SectionTitle/SectionTitle.styles.ts
import styled from "styled-components";
import { TextBlockWrapper } from "@/greenhouse/components/text/TextBlock.styles";

// 💡 maxWidth を props で受けるようにする！
export const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme?.spacing?.lg ?? "2rem"};
`;

export const StyledLottie = styled.div`
  width: 120px;
  height: 120px;
  margin-bottom: ${({ theme }) => theme?.spacing?.sm ?? "1rem"};

  @media (min-width: ${({ theme }) => theme?.breakpoints?.md ?? "768px"}) {
    width: 160px;
    height: 160px;
  }
`;

// ✅ maxWidth を props で明示的に吸収！
export const StyledTextBlock = styled(TextBlockWrapper)<{ $maxWidth?: string }>`
  text-align: center;
  max-width: ${({ $maxWidth }) => $maxWidth ?? "800px"};

  h2 {
    font-size: ${({ theme }) => theme?.typography?.fontSize?.["2xl"] ?? "2rem"};
    margin-bottom: ${({ theme }) => theme?.spacing?.sm ?? "1rem"};
  }

  h3 {
    font-size: ${({ theme }) => theme?.typography?.fontSize?.lg ?? "1.25rem"};
    margin-bottom: ${({ theme }) => theme?.spacing?.xs ?? "0.5rem"};
  }

  p {
    font-size: ${({ theme }) => theme?.typography?.fontSize?.base ?? "1rem"};
    line-height: ${({ theme }) => theme?.typography?.lineHeight?.relaxed ?? "1.6"};
  }
`;

