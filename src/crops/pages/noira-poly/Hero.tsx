"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// 背景スクロール用アニメーション
const animateSurface = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-200px); }
`;

// キューブ回転アニメーション
const animateCube = keyframes`
  0% { transform: rotate(0deg); }
  60%, 70%, 80%, 100% { transform: rotate(90deg); }
  65% { transform: rotate(85deg); }
  75% { transform: rotate(87.5deg); }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  transform: rotate(-35deg);
`;

const Box = styled.div`
  position: relative;
  left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 400px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #000);
  animation: ${animateSurface} 1.5s ease-in-out infinite;
`;

const Cube = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #03e9f4;
  box-shadow: 
    0 0 5px rgba(3, 233, 244, 1),
    0 0 25px rgba(3, 233, 244, 1),
    0 0 50px rgba(3, 233, 244, 1),
    0 0 150px rgba(3, 233, 244, 1);
  transform-origin: bottom right;
  animation: ${animateCube} 1.5s ease-in-out infinite;
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Box>
          <Cube />
        </Box>
      </Container>
    </Wrapper>
  );
};

