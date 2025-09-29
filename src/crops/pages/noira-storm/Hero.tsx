"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

/* 一つだけの落下アニメ。バラつきは duration / delay / start top で出す */
const fall = keyframes`
  0%   { transform: translateY(0);   opacity: 1; }
  100% { transform: translateY(120vh); opacity: 0; }
`;

/* クリック時の稲光 */
const lightningFlash = keyframes`
  0%, 100% { background: linear-gradient(180deg, #07131c, #305472); }
  50%      { background: radial-gradient(circle at 50% 20%, #ffffff, #305472 80%); }
`;

const RainWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #07131c, #305472);
  cursor: pointer;

  /* クリックで稲光 */
  &:active {
    animation: ${lightningFlash} 0.25s ease-in-out;
  }
`;

/* 雨粒：横向きにならないよう細い縦矩形で描く。クリックを透過させる */
const Drop = styled.div<{
  $left: number;
  $top: number;
  $delay: number;
  $duration: number;
  $height: number;
}>`
  position: absolute;
  left: ${({ $left }) => $left}vw;
  top:  ${({ $top }) => $top}vh;

  width: 2px;
  height: ${({ $height }) => $height}px;
  background: rgba(171, 194, 233, 0.85);
  border-radius: 1px;

  pointer-events: none;           /* ← クリックがWrapperに届くように */
  will-change: transform, opacity;

  animation: ${fall} ${({ $duration }) => $duration}s
                     ${({ $delay }) => $delay}s linear infinite;
`;

export const Hero: React.FC = () => {
  const COUNT = 220; // お好みで
  const drops = Array.from({ length: COUNT }, (_, i) => {
    // 画面幅にバラけさせる
    const left = Math.random() * 100;      // 0–100 vw
    // 上の見切れた位置から出現させる（-100〜0 vh）
    const top = Math.random() * -100;      // -100–0 vh
    // 2.0〜5.0 秒で落下
    const duration = 2 + Math.random() * 3;
    // −5〜0 秒の負の遅延で流れに連続性を出す
    const delay = Math.random() * -5;
    // 雨粒の長さをランダム化（短すぎる/長すぎるのを避ける）
    const height = 10 + Math.random() * 25; // 10〜35px

    return { left, top, duration, delay, height, key: i };
  });

  return (
    <RainWrapper>
      {drops.map(({ key, left, top, duration, delay, height }) => (
        <Drop
          key={key}
          $left={left}
          $top={top}
          $duration={duration}
          $delay={delay}
          $height={height}
        />
      ))}
    </RainWrapper>
  );
};

