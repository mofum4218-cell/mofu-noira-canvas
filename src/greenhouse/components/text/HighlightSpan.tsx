// src/greenhouse/components/text/HighlightSpan.tsx
"use client";
import styled, { keyframes } from "styled-components";

// 🎬 左からスッと登場するアニメーション
const slideInMarker = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HighlightSpan = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1.4;
  z-index: 0; // テキストが前に来るように

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0.15em; // テキスト下側に寄せる
    width: 100%;
    height: 0.5em; // 高さ：文字の半分
    background-color: ${({ theme }) => theme.accent + "99"}; // 約60%透明
    z-index: -1;
    animation: ${slideInMarker} 0.6s ease-out both;
  }
`;

