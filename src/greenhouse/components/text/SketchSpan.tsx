// src/greenhouse/components/text/SketchSpan.tsx
"use client";
import styled, { keyframes } from "styled-components";

// ✨ ゆらゆらアニメーション（落ち着いた揺れ）
const sketchy = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-1px); }
  50% { transform: translateX(1px); }
  75% { transform: translateX(-1px); }
  100% { transform: translateX(0); }
`;

export const SketchSpan = styled.span`
  position: relative;
  display: inline-block;
  font-weight: bold;
  color: ${({ theme }) => theme.accent};
  padding: 0 0.2em;
  animation: ${sketchy} 0.5s ease-in-out infinite;
  background: linear-gradient(
    120deg,
    ${({ theme }) => theme.accent + "55"} 0%,
    transparent 100%
  );
`;

