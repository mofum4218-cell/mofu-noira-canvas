// src/greenhouse/components/text/BigTextSpan.tsx
"use client";
import styled from "styled-components";

export const BigTextSpan = styled.span`
  font-size: ${({ theme }) => theme?.typography?.fontSize?.["2xl"] ?? "2rem"};
  font-weight: bold;
  line-height: 1.6;
  display: inline-block;
`;

