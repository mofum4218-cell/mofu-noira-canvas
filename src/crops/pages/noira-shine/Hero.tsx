"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const shine = keyframes`
  0% {
    background-position-x: -500%;
  }
  100% {
    background-position-x: 500%;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

const ShinyText = styled.p`
  font-weight: 700;
  text-align: center;
  font-size: 40px;
  font-family: Hack, sans-serif;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000, #fff, #000);
  letter-spacing: 5px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${shine} 5s linear infinite;
  position: relative;
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <ShinyText>Noira Shine</ShinyText>
    </Wrapper>
  );
};

