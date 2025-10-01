// src/crops/pages/noira-book/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #eee;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Indie Flower", cursive;
  position: relative;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 1rem;
  text-align: center;
`;

const Credit = styled.div`
  font-size: 0.9em;
  margin-top: 1rem;
  color: #777;
`;

const Container = styled.div`
  position: relative;
  width: 420px;
  height: 320px;
  perspective: 1200px;
  perspective-origin: center 50px;
  filter: drop-shadow(0px 10px 8px rgba(0, 0, 0, 0.25));
  transform: scale(1.1);
`;

const Book = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

// ページめくり
const flip = keyframes`
  0%   { transform: rotateY(0deg); }
  40%  { transform: rotateY(-180deg); }
  60%  { transform: rotateY(-180deg); }
  100% { transform: rotateY(-360deg); }
`;

const Page = styled.div<{ delay: number }>`
  width: 210px;
  height: 300px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform-origin: left;
  transform-style: preserve-3d;
  animation: ${flip} 12s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

// 表面と裏面
const Face = styled.div<{ bg?: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  border: solid #555 2px;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : "none")};

  &.back {
    transform: rotateY(180deg);
  }
`;

export const Hero: React.FC = () => {
  const [pages, setPages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`book/page0${i}.png`, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      setPages(urls);
    };
    loadImages();
  }, []);

  if (pages.length < 10) return <Wrapper>Loading book...</Wrapper>;

  return (
    <Wrapper>
      <Title>Turning pages with CSS</Title>
      <Container>
        <Book>
          {/* ページ1 */}
          <Page delay={0}>
            <Face bg={pages[0]} />
            <Face className="back" bg={pages[1]} />
          </Page>
          {/* ページ2 */}
          <Page delay={4}>
            <Face bg={pages[2]} />
            <Face className="back" bg={pages[3]} />
          </Page>
          {/* ページ3 */}
          <Page delay={8}>
            <Face bg={pages[4]} />
            <Face className="back" bg={pages[5]} />
          </Page>
          {/* ページ4 */}
          <Page delay={12}>
            <Face bg={pages[6]} />
            <Face className="back" bg={pages[7]} />
          </Page>
          {/* ページ5 */}
          <Page delay={16}>
            <Face bg={pages[8]} />
            <Face className="back" bg={pages[9]} />
          </Page>
        </Book>
      </Container>
      <Credit>* Images loaded from Supabase storage</Credit>
    </Wrapper>
  );
};

