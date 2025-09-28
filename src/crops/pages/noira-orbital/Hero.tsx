"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// キーフレーム定義
const sceneRotate = keyframes`
  0% { transform: rotateX(60deg) rotateZ(0deg); }
  100% { transform: rotateX(60deg) rotateZ(360deg); }
`;

const shadow = keyframes`
  from {
    transform: translate(calc(var(--x) * -6.2vmin), calc(var(--y) * -6.2vmin))
      rotateZ(360deg) translateX(-36vmin);
  }
  to {
    transform: translate(calc(var(--x) * -6.2vmin), calc(var(--y) * -6.2vmin))
      rotateZ(0deg) translateX(-36vmin);
  }
`;

const light = keyframes`
  0%, 100% { opacity: 1; }
  25% { opacity: calc((var(--height, 0) + 2) * 0.3 + 0.1); }
`;

const iAnim = keyframes`
  0%, 100% { transform: translateZ(2.5vmin); }
  25% { transform: translateZ(calc(var(--height, 0) * 7.5vmin)); }
`;

const ballRotate = keyframes`
  from { transform: rotateZ(360deg) translateX(-33vmin) rotateZ(0deg); }
  to { transform: rotateZ(0deg) translateX(-33vmin) rotateZ(360deg); }
`;

const ballCounterRotate = keyframes`
  from { transform: rotateZ(360deg) rotateX(-60deg); }
  to { transform: rotateZ(0deg) rotateX(-60deg); }
`;

// スタイル定義
const Scene = styled.div`
  position: relative;
  animation: ${sceneRotate} var(--sceneRotateDuration, 48s) infinite linear;
  --ballRotateDuration: 4s;
  --sceneRotateDuration: 48s;
`;

const Grid = styled.div`
  position: absolute;
  inset: -47.5vmin;
  aspect-ratio: 1;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
  gap: 1vmin;

  & > i {
    --dist: sqrt(var(--x) * var(--x) + var(--y) * var(--y));
    --height: calc(cos(var(--dist) / 1.8) - 1);
    --angle: calc(sin(atan2(var(--y), var(--x)) / -6));
    --delay: calc((var(--angle) - 1.75) * var(--ballRotateDuration));
    --hue: calc(var(--angle) * 360);

    width: 100%;
    height: 100%;
    background-color: hsl(var(--hue) 100% 20%);
    animation: ${iAnim} var(--ballRotateDuration) var(--delay) infinite ease-in-out;

    & > i:nth-child(1) {
      position: absolute;
      inset: 0;
      background-color: #fff;
      animation: ${light} var(--ballRotateDuration) var(--delay) infinite ease-in-out;
    }

    & > i:nth-child(2) {
      position: absolute;
      inset: -10vmin;
      background-image: radial-gradient(#000e 5vmin, #0000 12.5vmin);
      animation: ${shadow} var(--ballRotateDuration) infinite linear;
    }
  }
`;

const Ball = styled.div`
  position: absolute;
  translate: 0 0 -7.5vmin;
  animation: ${ballRotate} var(--ballRotateDuration) infinite linear;

  & > i {
    position: absolute;
    inset: -7.5vmin;
    border-radius: 50%;
    background-color: #ddd;
    background-image: radial-gradient(circle at top, #0000, #000);
    animation: ${ballCounterRotate} var(--sceneRotateDuration) infinite linear;
  }
`;

// ヒーローコンポーネント
export const Hero: React.FC = () => {
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        perspective: "800px",
        overflow: "hidden",
      }}
    >
      <Scene>
        <Grid>
          {Array.from({ length: 256 }).map((_, idx) => (
            <i key={idx}>
              <i></i>
              <i></i>
            </i>
          ))}
        </Grid>
        <Ball>
          <i></i>
        </Ball>
      </Scene>
    </div>
  );
};

