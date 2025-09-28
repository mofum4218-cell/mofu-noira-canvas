"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// 🌌 オーロラの揺れアニメーション
const auroraAnim = keyframes`
  0% { transform: translateX(-50%) translateY(0) scaleY(1); }
  50% { transform: translateX(-50%) translateY(-20px) scaleY(1.2); }
  100% { transform: translateX(-50%) translateY(0) scaleY(1); }
`;

const AuroraWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  position: relative;
`;

const AuroraLayer = styled.div<{ $gradient: string; $delay: string }>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 120%;
  height: 100%;
  background: ${({ $gradient }) => $gradient};
  opacity: 0.5;
  filter: blur(60px);
  animation: ${auroraAnim} 8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

export const Hero: React.FC = () => {
  return (
    <AuroraWrapper>
      {/* レイヤーを重ねることで幻想的な表現 */}
      <AuroraLayer
        $gradient="linear-gradient(120deg, rgba(0,255,200,0.6), rgba(0,100,255,0.4))"
        $delay="0s"
      />
      <AuroraLayer
        $gradient="linear-gradient(200deg, rgba(255,0,200,0.5), rgba(0,255,150,0.4))"
        $delay="2s"
      />
      <AuroraLayer
        $gradient="linear-gradient(160deg, rgba(100,0,255,0.6), rgba(0,200,255,0.3))"
        $delay="4s"
      />
      <AuroraLayer
        $gradient="linear-gradient(90deg, rgba(255,255,200,0.4), rgba(0,150,255,0.5))"
        $delay="6s"
      />
    </AuroraWrapper>
  );
};

