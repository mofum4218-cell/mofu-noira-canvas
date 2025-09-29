"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// 上部テキストアニメーション
const showTopText = keyframes`
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

// 下部テキストアニメーション
const showBottomText = keyframes`
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const Wrapper = styled.div`
  color: #222;
  font-family: "Roboto", Arial, sans-serif;
  height: 100vh; /* ← ページ全体にする */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerBox = styled.div`
  width: 90vmin;
  height: 90vmin;
  position: relative;
`;

const Section = styled.div`
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
`;

const Inner = styled.div<{
  $anim: ReturnType<typeof keyframes>;
  $delay: string;
  $pos: string;
}>`
  font-size: 12vmin;
  padding: 2vmin 0;
  position: absolute;
  ${({ $pos }) => ($pos === "top" ? "bottom: 0;" : "top: 0;")}
  transform: ${({ $pos }) =>
    $pos === "top" ? "translate(0, 100%)" : "translate(0, -100%)"};
  animation: ${({ $anim }) => $anim} ${({ $pos }) => ($pos === "top" ? "1s" : "0.5s")};
  animation-delay: ${({ $delay }) => $delay};
  animation-fill-mode: forwards;

  span {
    display: block;
  }

  span:first-child {
    color: #767676;
  }
`;

const CenterLine = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: #000;
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <InnerBox>
        {/* 上段 */}
        <Section style={{ borderBottom: "none", top: 0 }}>
          <Inner $anim={showTopText} $delay="0.5s" $pos="top">
            <span>Noira</span>
            <span>Vision</span>
          </Inner>
        </Section>

        {/* 下段 */}
        <Section style={{ bottom: 0 }}>
          <Inner $anim={showBottomText} $delay="1.75s" $pos="bottom">
            Experience the Future
          </Inner>
        </Section>

        {/* 中央ライン */}
        <CenterLine />
      </InnerBox>
    </Wrapper>
  );
};

