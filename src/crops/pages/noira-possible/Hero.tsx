// src/crops/pages/noira-possible/Hero.tsx
"use client";

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #484848;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;

  span {
    transition: 0.5s linear;
  }

  &:hover span:nth-child(1) {
    margin-right: 5px;
  }
  &:hover span:nth-child(1)::after {
    content: "'";
  }
  &:hover span:nth-child(2) {
    margin-left: 30px;
  }
  &:hover span {
    color: #fff;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
  }
`;

export const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        <span>I</span>M<span>POSSIBLE</span>
      </Title>
    </Wrapper>
  );
};

