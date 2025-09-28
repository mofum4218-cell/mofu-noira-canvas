"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// アニメーション時間（秒）
const animationDuration = 3;

// キーフレーム
const fly = keyframes`
  0% {
    transform: translateZ(600px) scale(0.1) rotate(0deg);
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateZ(-800px) scale(2.5) rotate(360deg);
    opacity: 0;
  }
`;

// 全体コンテナ
const TunnelSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #000;
  overflow: hidden;
  perspective: 1000px;
`;

// フレーム1つ
const CubeFrame = styled.div<{ delay: string; disable?: boolean }>`
  position: absolute;
  width: 100px;
  height: 100px;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  border: 2px solid rgba(128, 255, 255, 0.6);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3), 0 0 60px rgba(0, 128, 255, 0.2);
  mix-blend-mode: screen;
  filter: drop-shadow(2px 0 red) drop-shadow(-2px 0 blue);
  animation: ${fly} ${animationDuration}s linear infinite;
  animation-delay: ${({ delay }) => delay};
  ${({ disable }) => disable && `animation: none !important;`}
`;

export const Hero: React.FC = () => {
  return (
    <TunnelSection>
      {Array.from({ length: 8 }).map((_, i) => (
        <CubeFrame
          key={i}
          delay={`${(animationDuration / 8) * i}s`}
          disable={i === 7}
        />
      ))}
    </TunnelSection>
  );
};

