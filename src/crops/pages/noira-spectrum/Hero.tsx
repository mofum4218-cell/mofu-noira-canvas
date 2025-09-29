"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import config from "@/config/pages/noira-spectrum.json";

// 🔄 回転アニメーション
const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #111;
`;

const RainbowBox = styled.div`
  position: relative;
  z-index: 0;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
  color: #111;

  /* 🌈 回転枠 */
  &::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #399953;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: 
      linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300),
      linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    animation: ${rotate} 4s linear infinite;
  }

  /* 内側の白背景 */
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <RainbowBox>
        <Title>{config.title}</Title>
        <Subtitle>{config.subtitle}</Subtitle>
      </RainbowBox>
    </Wrapper>
  );
};

