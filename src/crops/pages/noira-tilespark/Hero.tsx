"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import { Package, Layers } from "lucide-react"; // ← アイコンを lucide から

// 🪞 --- アニメーション定義 ---
const tileAnim = keyframes`
  0%, 12.5%, 100% { opacity: 1; }
  25%, 82.5% { opacity: 0; }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #18181b;
  font-family: "Inter", Arial, sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 32px;
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 600px;
`;

// --- カードコンテナ ---
const Card = styled.div`
  position: relative;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.03);
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.05),
    0 8px 15px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.08);
  padding: 56px 16px 16px;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.1),
      0 15px 25px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.25);

    .shine {
      opacity: 1;
    }

    .tiles {
      opacity: 1;
      .tile {
        animation: ${tileAnim} 8s infinite;
      }
    }

    .line {
      opacity: 1;
      &:before {
        transform: scaleX(1);
      }
      &:after {
        transform: scaleY(1);
      }
    }
  }
`;

const IconWrap = styled.div`
  position: relative;
  display: table;
  padding: 8px;
  margin-bottom: 12px;

  &::after {
    content: "";
    position: absolute;
    inset: 4.5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(2px);
  }

  svg {
    position: relative;
    z-index: 2;
    width: 24px;
    height: 24px;
    color: #d4d4d8;
    transition: color 0.3s;
  }

  ${Card}:hover & svg {
    color: #34d399;
  }
`;

const Shine = styled.div`
  border-radius: inherit;
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.6s;

  &::before {
    content: "";
    width: 150%;
    padding-bottom: 150%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 55%;
    filter: blur(35px);
    opacity: 0.12;
    transform: translateX(-50%);
    background-image: conic-gradient(
      from 205deg at 50% 50%,
      rgba(16, 185, 129, 0) 0deg,
      #10b981 25deg,
      rgba(52, 211, 153, 0.18) 295deg,
      rgba(16, 185, 129, 0) 360deg
    );
  }
`;

const Background = styled.div`
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
  -webkit-mask-image: radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%);
`;

const Tiles = styled.div`
  opacity: 0;
  transition: opacity 0.25s;

  .tile {
    position: absolute;
    background: rgba(16, 185, 129, 0.05);
    opacity: 0;

    &.tile-1 {
      top: 0;
      left: 0;
      height: 10%;
      width: 22.5%;
    }
    &.tile-2 {
      top: 0;
      left: 22.5%;
      height: 10%;
      width: 27.5%;
    }
    &.tile-3 {
      top: 0;
      left: 50%;
      height: 10%;
      width: 27.5%;
    }
    &.tile-4 {
      top: 0;
      left: 77.5%;
      height: 10%;
      width: 22.5%;
    }
  }
`;

const Line = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.35s;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: #2a2b2c;
    transition: transform 0.4s ease;
  }

  &:before {
    left: 0;
    right: 0;
    height: 1px;
    transform-origin: 0 50%;
    transform: scaleX(0);
  }

  &:after {
    top: 0;
    bottom: 0;
    width: 1px;
    transform-origin: 50% 0;
    transform: scaleY(0);
  }

  &.line-1:before {
    top: 10%;
  }
  &.line-2:before {
    top: 32.5%;
  }
  &.line-3:before {
    top: 55%;
  }
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 8px 0 4px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: #a1a1aa;
`;

export const Hero: React.FC = () => {
  const cards = [
    {
      icon: <Package />,
      title: "Products",
      text: "A showcase of modular MergeLab components, evolving through every iteration of design.",
    },
    {
      icon: <Layers />,
      title: "Categories",
      text: "Layered ecosystems that define interaction between AI modules and human interfaces.",
    },
  ];

  return (
    <HeroSection>
      <Grid>
        {cards.map((card, i) => (
          <Card key={i}>
            <IconWrap>{card.icon}</IconWrap>
            <Title>{card.title}</Title>
            <Text>{card.text}</Text>
            <Shine className="shine" />
            <Background className="background">
              <Tiles className="tiles">
                <div className="tile tile-1" />
                <div className="tile tile-2" />
                <div className="tile tile-3" />
                <div className="tile tile-4" />
              </Tiles>
              <Line className="line line-1" />
              <Line className="line line-2" />
              <Line className="line line-3" />
            </Background>
          </Card>
        ))}
      </Grid>
    </HeroSection>
  );
};

