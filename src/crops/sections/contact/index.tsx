"use client";

import styled from "styled-components";

type ContactProps = {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  bg?: string;
};

// ✅ styled.section に明示的に id を渡す
const ContactSection = styled.section.attrs<{ id: string }>((props) => ({
  id: props.id,
}))`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
`;

export const Contact: React.FC<ContactProps> = ({ id, title, subtitle }) => {
  return (
    <ContactSection id={id}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </ContactSection>
  );
};

export default Contact;

