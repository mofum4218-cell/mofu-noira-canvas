"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const come2life = keyframes`
  0% {
    transform: scale3d(0,0,1) rotate(0.02deg);
    opacity: 0;
    filter: blur(10px);
  }
  25% {
    transform: scale3d(1,1,1) rotate(0.02deg);
    opacity: 1;
    filter: blur(0px);
  }
  40% {
    opacity: 1;
    filter: blur(0px);
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: scale3d(4,4,1) rotate(0.02deg);
    filter: blur(10px);
  }
`;

const Container = styled.section`
  background: #000;
  width: 100vw;
  height: 100vh;
  font-weight: bold;
  font-size: 36px;
  color: #fff;
  position: relative;
  overflow: hidden;
`;

const PhantomText = styled.div<{ $delay: string; $left: string; $top: string }>`
  position: absolute;
  width: 250px;
  height: 200px;
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${come2life} 10s linear infinite;
  animation-delay: ${({ $delay }) => $delay};
  backface-visibility: hidden;
`;

export const Hero: React.FC = () => {
  return (
    <Container>
      <PhantomText $left="30vw" $top="30vh" $delay="0s">
        Hello, This is block of a text
      </PhantomText>
      <PhantomText $left="70vw" $top="30vh" $delay="4s">
        Hello, This is another block of text
      </PhantomText>
      <PhantomText $left="50vw" $top="50vh" $delay="8s">
        Hello, This is yet another block of text
      </PhantomText>
      <PhantomText $left="30vw" $top="70vh" $delay="6s">
        Hello, This is also a block of text
      </PhantomText>
      <PhantomText $left="70vw" $top="70vh" $delay="2s">
        Hello, This is the last block of text
      </PhantomText>
    </Container>
  );
};

