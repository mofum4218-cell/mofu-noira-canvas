"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// ===== キーフレーム =====
const rotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const gradientFade = keyframes`
  from { transform: translate(10%, -10%) rotate(0deg); }
  to { transform: translate(50%, -50%) rotate(360deg); }
`;

const gradientFadeAlt = keyframes`
  from { transform: translate(-20%, 20%) rotate(0deg); }
  to { transform: translate(-60%, 60%) rotate(360deg); }
`;

const draw = keyframes`
  from { stroke-dashoffset: 1000; }
  to { stroke-dashoffset: 0; }
`;

const bounce1 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(50px); }
  100% { transform: translateY(0); }
`;

const bounce2 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0); }
`;

const bounce3 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(30px); }
  100% { transform: translateY(0); }
`;

// ===== スタイル =====
const Wrapper = styled.div`
  background: linear-gradient(#3800e7, #8a15ff);
  height: 100vh;
  font-family: "DM Mono", monospace;
  font-weight: 300;
  color: white;
  text-align: center;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: -19px;
    height: 30em;
    width: 30em;
    border-radius: 30em;
    background: linear-gradient(#3800e7, #8a15ff);
    animation: ${gradientFade} 8s ease-in-out 3s infinite alternate;
    z-index: -3;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 30px;
    height: 10em;
    width: 10em;
    border-radius: 10em;
    background: linear-gradient(#3800e7, #8a15ff);
    animation: ${gradientFadeAlt} 6s ease-in-out 3s infinite alternate;
    z-index: -3;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  padding: 2em;

  &::before {
    content: "";
    position: absolute;
    top: -3em;
    right: -3em;
    width: 13em;
    height: 13em;
    opacity: 0.7;
    border-radius: 13em;
    background: linear-gradient(#15e0ff, #8a15ff);
    animation: ${rotation} 7s linear infinite;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -20em;
    width: 20em;
    height: 20em;
    border-radius: 20em;
    background: linear-gradient(#d000c5, #8a15ff);
    animation: ${rotation} 7s linear infinite;
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0.2em;
`;

const Subtitle = styled.h2`
  font-size: 2em;
`;

const DottedCircle = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.3;
  animation: ${rotation} 38s linear infinite;
`;

const Arrow = styled.div<{ variant: "top" | "bottom" }>`
  z-index: 1000;
  opacity: 0.5;
  position: absolute;
  ${({ variant }) =>
    variant === "top"
      ? `top: 0; left: -5em;`
      : `bottom: 0; right: 3em;`}
`;

const StyledPath = styled.path`
  stroke-dasharray: 1000;
  stroke-dashoffset: 10;
  animation: ${draw} 15s ease-in-out alternate infinite;
`;

const Bounce1 = styled.g`
  animation: ${bounce1} 10s ease infinite;
`;

const Bounce2 = styled.g`
  animation: ${bounce2} 10s ease infinite;
`;

const Bounce3 = styled.g`
  animation: ${bounce3} 10s ease infinite;
`;

// ===== コンポーネント =====
export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Arrow variant="top">
        <svg xmlns="http://www.w3.org/2000/svg" width="270.11" height="649.9" overflow="visible">
          <g className="item-to">
            <Bounce1>
              <path
                className="geo-arrow"
                d="M135.06 142.564L267.995 275.5 135.06 408.434 2.125 275.499z"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              />
            </Bounce1>
          </g>
          <Bounce2>
            <circle cx="194.65" cy="69.54" r="7.96" stroke="#fff" strokeWidth="2" fill="none" />
          </Bounce2>
          <circle cx="194.65" cy="39.5" r="7.96" stroke="#fff" strokeWidth="2" fill="none" />
          <Bounce3>
            <circle cx="194.65" cy="9.46" r="7.96" stroke="#fff" strokeWidth="2" fill="none" />
          </Bounce3>
          <Bounce2>
            <StyledPath d="M181.21 619.5l13.27 27 13.27-27zM194.48 644.5v-552" stroke="#fff" />
          </Bounce2>
        </svg>
      </Arrow>

      <Arrow variant="bottom">
        <svg xmlns="http://www.w3.org/2000/svg" width="31.35" height="649.9" overflow="visible">
          <Bounce1>
            <Bounce3>
              <circle cx="15.5" cy="580.36" r="7.96" stroke="#fff" strokeWidth="2" fill="none" />
            </Bounce3>
            <circle cx="15.5" cy="610.4" r="7.96" stroke="#fff" strokeWidth="2" fill="none" />
            <Bounce2>
              <circle cx="15.5" cy="640.44" r="7.96" stroke="#fff" strokeWidth="2" fill="none" />
            </Bounce2>
            <Bounce2>
              <StyledPath d="M28.94 30.4l-13.26-27-13.27 27zM15.68 5.4v552" stroke="#fff" />
            </Bounce2>
          </Bounce1>
        </svg>
      </Arrow>

      <Main>
        <TextWrapper>
          <Title>Transitions & Animations</Title>
          <Subtitle>Combined with SVGs</Subtitle>
          <DottedCircle xmlns="http://www.w3.org/2000/svg" width="352" height="352" overflow="visible">
            <circle
              cx="176"
              cy="176"
              r="174"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeDasharray="12.921,11.9271"
            />
          </DottedCircle>
        </TextWrapper>
      </Main>
    </Wrapper>
  );
};

