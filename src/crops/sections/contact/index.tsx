// src/crops/sections/Contact/index.tsx
"use client";

import styled from "styled-components";

type ContactProps = {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  bg?: string; // stringとして受け取るが、今回は使わない
};

const ContactSection = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const Contact: React.FC<ContactProps> = ({ title, subtitle }) => {
  return (
    <ContactSection>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </ContactSection>
  );
};

export default Contact;


