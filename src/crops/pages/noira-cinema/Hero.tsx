// src/crops/pages/noira-cinema/Hero.tsx
"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #111;
  background-image: radial-gradient(#333, #111);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
`;

const flyIn = keyframes`
  0% { opacity: 0; filter: blur(20px); transform: scale(12); }
  3% { opacity: 1; filter: blur(0); transform: scale(1); }
  10% { opacity: 1; filter: blur(0); transform: scale(.9); }
  13% { opacity: 0; filter: blur(10px); transform: scale(.1); }
  80% { opacity: 0; }
  100% { opacity: 0; }
`;

const FlyIn = styled.div`
  font-size: 4em;
  text-align: center;
  width: 80vw;
  position: relative;

  div {
    position: fixed;
    margin: 2vh 0;
    opacity: 0;
    left: 10vw;
    width: 80vw;
    animation: ${flyIn} 32s linear infinite;
  }

  div:nth-child(2) {
    animation-delay: 4s;
  }
  div:nth-child(3) {
    animation-delay: 8s;
  }
  div:nth-child(4) {
    animation-delay: 12s;
  }
  div:nth-child(5) {
    animation-delay: 16s;
  }
  div:nth-child(6) {
    animation-delay: 20s;
  }
  div:nth-child(7) {
    animation-delay: 24s;
  }
  div:nth-child(8) {
    animation-delay: 28s;
  }

  span {
    display: block;
    font-size: 0.4em;
    opacity: 0.8;
  }
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <FlyIn>
        <div>
          <span>Very</span>Cinematic
        </div>
        <div>
          Fade Away<span>into the distance</span>
        </div>
        <div>
          Still Loops <span>for eternity</span>
        </div>
        <div>
          <span>Just CSS</span> and HTML
        </div>
        <div>
          <span>Very</span>Cinematic
        </div>
        <div>
          Fade Away<span>into the distance</span>
        </div>
        <div>
          Still Loops <span>for eternity</span>
        </div>
        <div>
          <span>Just CSS</span> and HTML
        </div>
      </FlyIn>
    </Wrapper>
  );
};

