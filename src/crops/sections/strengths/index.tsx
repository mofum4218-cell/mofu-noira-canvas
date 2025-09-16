"use client";

import React from "react";
import styled from "styled-components";

const StrengthsSection = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const Strengths: React.FC = () => {
  return <StrengthsSection>Hello. StrengthsPage</StrengthsSection>;
};

export default Strengths;

