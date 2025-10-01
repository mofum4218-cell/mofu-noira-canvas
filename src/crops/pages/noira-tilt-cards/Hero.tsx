// src/crops/pages/noira-tilt-cards/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #2c3138;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 90rem;
  perspective-origin: 34% 61%;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80vw;
  transform: rotateX(23deg) rotateZ(-9deg) rotateY(15deg) scale3d(1, 1, -0.9);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-out;
  will-change: transform;

  &:hover {
    transform: translateY(-10px) scale(1.05) rotateX(5deg);
    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.25));
  }

  &:hover .cover {
    transform: translateY(-14px) scale(1.08);
  }
  &:hover .cover::after {
    opacity: 1;
    transform: scale(1.05);
    filter: blur(30px) brightness(1.5);
  }
`;

const Cover = styled.div<{ $bg: string }>`
  position: relative;
  transition: all 400ms ease-in-out;

  img {
    width: 160px;
    display: block;
    transition: all 260ms ease-in-out;
    border-radius: 12px;
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 20px;
    left: -20px;
    width: 160px;
    height: 214px;
    opacity: 0;
    background: url(${(p) => p.$bg}) center/cover no-repeat;
    filter: blur(24px) brightness(1.2);
    transition: all 400ms ease-in-out;
    transform: scale(0.6);
    border-radius: 12px;
  }
`;
const Button = styled.button<{ $color: string; $label: string }>`
  cursor: pointer;
  outline: 0;
  width: 180px;
  height: 48px;
  border-radius: 8px;
  background-color: #2c3138;
  margin-top: 40px;
  overflow: hidden;
  transform: scale(0.7);
  border: 1px solid ${(p) => p.$color};
  color: #fff;
  font-size: 22px;
  text-align: right;
  padding-right: 20px;
  line-height: 40px;
  position: relative;

  &::before {
    content: "${(p) => p.$label}";
    position: absolute;
    top: -44px;
    left: 10px;
    color: ${(p) => p.$color};
    font-size: 21px;
    font-weight: 300;
    transition: color 200ms ease;
  }
  &:hover::before {
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    top: -85px;
    left: -7px;
    width: 48px;
    height: 107%;
    background-color: ${(p) => p.$color};
    border-radius: 6px 0 0 6px;
  }
`;

export const Hero: React.FC = () => {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 3; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`card/card0${i}.png`, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      setCards(urls);
    };
    loadImages();
  }, []);

  if (cards.length < 3) {
    return <Wrapper>Loading cards…</Wrapper>;
  }

  return (
    <Wrapper>
      <Container>
        <Box>
          <Cover $bg={cards[0]}>
            <img src={cards[0]} alt="Card 1" />
          </Cover>
          <Button $color="#00BF9C" $label="Sensebot">
            <div></div>
          </Button>
        </Box>
        <Box>
          <Cover $bg={cards[1]}>
            <img src={cards[1]} alt="Card 2" />
          </Cover>
          <Button $color="#653EE6" $label="OnePass">
            <div></div>
          </Button>
        </Box>
        <Box>
          <Cover $bg={cards[2]}>
            <img src={cards[2]} alt="Card 3" />
          </Cover>
          <Button $color="#008BFF" $label="DeepKnow">
            <div></div>
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
};

