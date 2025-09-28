"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotateX(-210deg) rotateY(0deg) rotateZ(185deg); }
  100% { transform: rotateX(-210deg) rotateY(360deg) rotateZ(185deg); }
`;

const shine = keyframes`
  50%, 100% {
    border-color: #10101000;
    box-shadow: 0 0 1px 1px #10101000, 0 0 1px 1px #10101000 inset;
    filter: hue-rotate(540deg);
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000vmin;
  background: radial-gradient(circle at 50% 100%, #101010, #000);
`;

const Sphere = styled.div`
  --s: 2s; /* speed */
  --d: 40; /* delay */
  --c: #ff6600; /* base color */

  width: 50vmin;
  height: 50vmin;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spin} 5s linear infinite;
  transform-style: preserve-3d;

  &:hover {
    animation-play-state: paused;
  }
`;

const Ring = styled.div<{ index: number }>`
  --sz: 23%;
  --dv: calc(var(--s) / var(--d));
  --dl: calc(var(--dv) * -${({ index }) => index});
  width: var(--sz);
  height: var(--sz);
  position: absolute;
  border: 0.25vmin solid var(--c);
  border-radius: 100%;
  transform: rotateX(90deg) translateZ(
    calc(24.5vmin - ${({ index }) => index * 2.5}vmin)
  );
  box-shadow: 0 0 0.5vmin 0.5vmin var(--c),
    0 0 0.5vmin 0.5vmin var(--c) inset;
  animation: ${shine} var(--s) linear var(--dl) infinite;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border: 0.25vmin solid var(--c);
    border-radius: 100%;
    box-shadow: 0 0 0.5vmin 0.5vmin var(--c),
      0 0 0.5vmin 0.5vmin var(--c) inset;
    animation: ${shine} var(--s) linear
      calc(var(--dl) * -1) infinite;
  }
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Sphere>
        {Array.from({ length: 21 }).map((_, i) => (
          <Ring key={i} index={i + 1} />
        ))}
      </Sphere>
    </Wrapper>
  );
};

