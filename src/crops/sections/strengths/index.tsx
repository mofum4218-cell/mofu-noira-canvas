"use client";

import styled from "styled-components";

type StrengthsProps = {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  bg?: string;
};

// ✅ styled.section に明示的に id を渡す
const StrengthsSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const Strengths: React.FC<StrengthsProps> = ({ id, title, subtitle }) => {
  return (
    <StrengthsSection id={id}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </StrengthsSection>
  );
};

export default Strengths;

