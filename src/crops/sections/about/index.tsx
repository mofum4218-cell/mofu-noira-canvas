"use client";

import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const About: React.FC = () => {
  return <AboutSection>Hello. AboutPage</AboutSection>;
};

export default About;

