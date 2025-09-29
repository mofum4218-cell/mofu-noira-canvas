"use client";

import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blow = keyframes`
  0% {
    transform: translate(-50%, -50%);
    opacity: 1;
    filter: hue-rotate(0deg);
  }
  100% {
    transform: translate(-50%, -1000%);
    opacity: 0;
    filter: hue-rotate(720deg);
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  background: #55b9f3;
  height: 100vh;
  width: 100vw;
  position: relative;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

const Circle = styled.span`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  background: #55b9f3;
  box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
  transform: translate(-50%, -50%);
  animation: ${blow} 4s linear forwards;
`;

export const Hero: React.FC = () => {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const circle = document.createElement("span");
      const size = Math.random() * 100;

      circle.style.left = e.pageX + "px";
      circle.style.top = e.pageY + "px";
      circle.style.width = 20 + size + "px";
      circle.style.height = 20 + size + "px";
      circle.style.position = "absolute";
      circle.style.borderRadius = "50%";
      circle.style.pointerEvents = "none";
      circle.style.background = "#55b9f3";
      circle.style.boxShadow =
        "20px 20px 60px #489dcf, -20px -20px 60px #62d5ff";
      circle.style.transform = "translate(-50%, -50%)";
      circle.style.animation = "blow 4s linear forwards";

      document.body.appendChild(circle);
      setTimeout(() => circle.remove(), 1800);
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return <Wrapper>MOVE MOUSE</Wrapper>;
};

