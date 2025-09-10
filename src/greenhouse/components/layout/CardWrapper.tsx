// src/greenhouse/components/layout/CardWrapper.tsx
import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.surface};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

