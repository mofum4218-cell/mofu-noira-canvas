"use client";

import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  padding: 4rem;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

export const Contact: React.FC = () => {
  return <ContactSection>Hello. ContactPage</ContactSection>;
};

export default Contact;

