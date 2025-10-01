"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div`
  width: 900px;
  height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Btn = styled.button`
  --size: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 3;
  &:hover {
    opacity: 1;
  }
  svg {
    width: var(--size);
    height: var(--size);
    stroke: white;
  }
`;

const SlidesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  & > * {
    grid-area: 1 / -1;
  }
`;

const Slide = styled.div<{ $bg: string }>`
  --slide-width: 300px;
  --slide-aspect: 2 / 3;
  width: var(--slide-width);
  aspect-ratio: var(--slide-aspect);
  background: url(${(p) => p.$bg}) center/cover no-repeat;
  border-radius: 12px;
  transition: transform 0.2s ease, filter 0.6s ease;
  filter: brightness(0.7);
`;

const Background = styled.div<{ $bg: string; $active: boolean; $pos: "prev" | "next" | "current" }>`
  position: absolute;
  inset: -20%;
  background: url(${(p) => p.$bg}) center/cover no-repeat;
  z-index: 0;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transform: ${(p) =>
    p.$pos === "prev" ? "translateX(-10%)" : p.$pos === "next" ? "translateX(10%)" : "translateX(0)"};
  transition: opacity 0.8s ease, transform 0.8s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
  }
`;

const SlideInfo = styled.div<{ $active: boolean }>`
  position: absolute;
  bottom: 15%;
  left: 10%;
  z-index: 2;
  transition: opacity 0.6s ease, transform 0.6s ease;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transform: ${(p) => (p.$active ? "translateY(0)" : "translateY(40px)")};

  h2 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    margin: 0.5rem 0 0;
  }
`;

export const Hero: React.FC = () => {
  const [slides, setSlides] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [rot, setRot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const load = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 3; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`voyage/slide0${i}.png`, 300);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      setSlides(urls);
    };
    load();
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const onMouseMove = (e: React.MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const offsetX = e.clientX - innerWidth / 2;
    const offsetY = e.clientY - innerHeight / 2;
    setRot({
      x: -(offsetY / innerHeight) * 10,
      y: (offsetX / innerWidth) * 10,
    });
  };
  const onMouseLeave = () => setRot({ x: 0, y: 0 });

  if (slides.length < 3) return <Wrapper>Loading…</Wrapper>;

  return (
    <Wrapper onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {/* 背景 */}
      {slides.map((url, i) => {
        const pos =
          i === index ? "current" : i === (index + 1) % slides.length ? "next" : "prev";
        return <Background key={i} $bg={url} $active={i === index} $pos={pos} />;
      })}

      <Slider>
        <Btn onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Btn>

               <SlidesWrapper>
          {slides.map((url, i) => {
            const state =
              i === index
                ? "current"
                : i === (index + 1) % slides.length
                ? "next"
                : "previous";
            const isCurrent = state === "current";
            const transform =
              isCurrent
                ? `scale(1.2) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`
                : state === "next"
                ? `translateX(320px) rotateY(-45deg) rotateX(${rot.x * 0.5}deg) rotateY(${rot.y * 0.5}deg)`
                : `translateX(-320px) rotateY(45deg) rotateX(${rot.x * 0.5}deg) rotateY(${rot.y * 0.5}deg)`;

            return (
              <Slide
                key={i}
                $bg={url}
                style={{ transform }}
                className="slide"
              />
            );
          })}
        </SlidesWrapper>

        <Btn onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Btn>
      </Slider>

      {/* タイトル・説明 */}
      {slides.map((_, i) => (
        <SlideInfo key={i} $active={i === index}>
          <h2>Slide {i + 1}</h2>
          <p>Description for slide {i + 1}</p>
        </SlideInfo>
      ))}
    </Wrapper>
  );
};

