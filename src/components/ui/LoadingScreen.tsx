// src/components/ui/LoadingScreen.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import dynamic from "next/dynamic";

// ✅ LottiePlayerはSSR無効で読み込み
const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// 🎬 緞帳のように下から上に消えるアニメーション
const slideUp = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

const Overlay = styled.div<{ $hide: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme?.bg ?? "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: all 0.6s ease-in-out;

  ${({ $hide }) =>
    $hide &&
    css`
      animation: ${slideUp} 1s ease-in-out forwards;
    `}
`;

const LottieBox = styled.div`
  width: 160px;
  height: 160px;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const LoadingScreen: React.FC = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 5000); // 5秒後に非表示

    return () => clearTimeout(timer);
  }, []);

  return (
    <Overlay $hide={hide}>
      <LottieBox>
        <Player autoplay loop src="/lottie/sample.json" />
      </LottieBox>
    </Overlay>
  );
};

export default LoadingScreen;

