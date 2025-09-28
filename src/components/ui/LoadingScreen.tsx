// src/components/ui/LoadingScreen.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// -------------------- circle --------------------
const circleAnim = keyframes`
  0% { transform: scale(0); }
  20% { transform: scale(3); }
  50% { transform: scale(1); }
  90% { transform: scale(5); }
  100% { transform: scale(0); }
`;

const move1 = keyframes`
  0% { transform: translate(0) scale(0); }
  20% { transform: translate(-100px, -100px) scale(1); }
  40% { transform: translate(-100px, 100px) scale(1); }
  60% { transform: translate(100px, 100px) scale(1); }
  80% { transform: translate(100px, -100px) scale(1); }
  100% { transform: translate(0) scale(1); }
`;

const move2 = keyframes`
  0% { transform: translate(0) scale(0); }
  20% { transform: translate(-100px, 100px) scale(1); }
  40% { transform: translate(100px, 100px) scale(1); }
  60% { transform: translate(100px, -100px) scale(1); }
  80% { transform: translate(-100px, -100px) scale(1); }
  100% { transform: translate(0) scale(1); }
`;

const move3 = keyframes`
  0% { transform: translate(0) scale(0); }
  20% { transform: translate(100px, 100px) scale(1); }
  40% { transform: translate(100px, -100px) scale(1); }
  60% { transform: translate(-100px, -100px) scale(1); }
  80% { transform: translate(-100px, 100px) scale(1); }
  100% { transform: translate(0) scale(1); }
`;

const move4 = keyframes`
  0% { transform: translate(0) scale(0); }
  20% { transform: translate(100px, -100px) scale(1); }
  40% { transform: translate(-100px, -100px) scale(1); }
  60% { transform: translate(-100px, 100px) scale(1); }
  80% { transform: translate(100px, 100px) scale(1); }
  100% { transform: translate(0) scale(1); }
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  div {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
  }
  div:nth-child(1) { animation: ${circleAnim} 2s forwards; }
  div:nth-child(2) { animation: ${move1} 2s 2s; }
  div:nth-child(3) { animation: ${move2} 2s 2s; }
  div:nth-child(4) { animation: ${move3} 2s 2s; }
  div:nth-child(5) { animation: ${move4} 2s 2s; }
`;

// -------------------- big expanding circles --------------------
const bigExpand = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const BigWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  div {
    position: absolute;
    top: calc(50% - 1500px);
    left: calc(50% - 1500px);
    width: 3000px;
    height: 3000px;
    border-radius: 50%;
    transform: scale(0);
  }
  div:nth-child(1) { background: #fffcee; animation: ${bigExpand} .5s 4s forwards; }
  div:nth-child(2) { background: #bd8e99; animation: ${bigExpand} .5s 4.5s forwards; }
  div:nth-child(3) { background: #9e3f57; animation: ${bigExpand} .5s 5s forwards; }
`;

// -------------------- tri --------------------
const triUp = keyframes`
  100% { transform: translateY(-300vw); }
`;

const Tri = styled.div`
  position: absolute;
  bottom: -300vw;
  left: -100vw;
  width: 0;
  height: 0;
  border-left: 150vw solid transparent;
  border-right: 150vw solid transparent;
  border-bottom: 300vw solid rgb(255, 251, 189);
  animation: ${triUp} .6s 5.3s linear forwards;
`;

// -------------------- squ --------------------
const squAppear = keyframes`
  0% { transform: translateY(100px) scale(0); }
  20% { transform: translateY(100px) scale(1); }
  99% { transform: translateY(0) scale(1); }
  100% { transform: translateY(0) scale(0); }
`;

const moveSqu1 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-300px); border-radius: 0; }
`;
const moveSqu2 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(0); border-radius: 0; }
`;
const moveSqu3 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(300px); border-radius: 0; }
`;

const SquWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  div {
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    background: #3a6e9a;
    border-radius: 50%;
    transform: scale(0);
  }
  div:nth-child(1) { animation: ${squAppear} .6s 5.8s cubic-bezier(0, 0.73, 0.54, 2.4) forwards; }
  div:nth-child(2) { animation: ${moveSqu1} .8s 6.5s forwards; }
  div:nth-child(3) { animation: ${moveSqu2} .8s 6.5s forwards; }
  div:nth-child(4) { animation: ${moveSqu3} .8s 6.5s forwards; }
`;

// -------------------- END text --------------------
const endText = keyframes`
  100% { opacity: 1; }
`;

const EndWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-size: 60px;
    font-weight: bold;
    color: #fff;
    opacity: 0;
    animation: ${endText} 1s 7.4s forwards;
  }
`;

const Overlay = styled.div<{ $hide: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
  overflow: hidden;
  ${({ $hide }) =>
    $hide &&
    `
      display: none;
    `}
`;

const LoadingScreen: React.FC = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 8500); // アニメ全体が終わる頃に非表示
    return () => clearTimeout(timer);
  }, []);

  return (
    <Overlay $hide={hide}>
      <CircleWrapper>
        <div /><div /><div /><div /><div />
      </CircleWrapper>
      <BigWrapper>
        <div /><div /><div />
      </BigWrapper>
      <Tri />
      <SquWrapper>
        <div /><div /><div /><div />
      </SquWrapper>
      <EndWrapper>
        <div>NOIRA START</div>
      </EndWrapper>
    </Overlay>
  );
};

export default LoadingScreen;

