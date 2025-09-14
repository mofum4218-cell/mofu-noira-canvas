// src/greenhouse/components/text/ColorSpan.tsx
"use client";
import styled from "styled-components";

// 💡 $color を props で受け取るように修正！
export const ColorSpan = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-weight: bold;
  display: inline-block;
`;

