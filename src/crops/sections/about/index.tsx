"use client";

import styled from "styled-components";

type AboutProps = {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  bg?: string;
};

// ✅ styled.section に明示的に id を渡す
const AboutSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const About: React.FC<AboutProps> = ({ id, title, subtitle }) => {
  return (
    <AboutSection id={id}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </AboutSection>
  );
};

export default About;

