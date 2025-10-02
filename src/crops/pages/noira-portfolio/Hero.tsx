"use client";

import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div<{ url: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: -1;
`;

const Slider = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 100%;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Slide = styled.div`
  flex: 0 0 400px;
  height: 500px;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const SlideImage = styled.div<{ url: string }>`
  width: 100%;
  height: 70%;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
`;

const SlideContent = styled.div`
  padding: 1rem;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    font-size: 0.9rem;
    margin: 0.5rem 0 0;
    color: #444;
  }
`;

/* 拡大ビュー用 */
const Overlay = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 50;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  padding: 2rem;
`;

const OverlayImage = styled.div<{ url: string }>`
  width: 80%;
  max-width: 900px;
  height: 60vh;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
`;

type SlideData = {
  url: string;
  title: string;
  text: string;
};

export const Hero: React.FC = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [bg, setBg] = useState<string>("");
  const [selected, setSelected] = useState<SlideData | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // supabaseから画像ロード
  useEffect(() => {
    const load = async () => {
      const fetched: SlideData[] = [];

      // 背景画像
      const { data: bgData } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/winter.jpg", 600);
      if (bgData?.signedUrl) setBg(bgData.signedUrl);

      // スライド画像
      for (let i = 1; i <= 4; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`splitshow/slide0${i}.jpg`, 600);
        if (data?.signedUrl) {
          fetched.push({
            url: data.signedUrl,
            title: `Project 0${i}`,
            text: `これはNoiraPortfolioのサンプルスライド${i}です。`,
          });
        }
      }

      setSlides(fetched);
    };

    load();
  }, []);

  // wheelでカードごとにスナップ移動
  const handleWheel = (e: React.WheelEvent) => {
    if (!sliderRef.current) return;
    e.preventDefault();
    const container = sliderRef.current;
    const cardWidth = 400 + 32; // カード幅＋gap(2rem=32px)
    if (e.deltaY > 0) {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    } else {
      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  if (!bg) return <Wrapper>Loading...</Wrapper>;

  return (
    <Wrapper>
      <Background url={bg} />
      <Slider ref={sliderRef} onWheel={handleWheel}>
        {slides.map((s, i) => (
          <Slide key={i} onClick={() => setSelected(s)}>
            <SlideImage url={s.url} />
            <SlideContent>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </SlideContent>
          </Slide>
        ))}
      </Slider>

      {/* 拡大ビュー */}
      <Overlay $visible={!!selected}>
        {selected && (
          <>
            <OverlayImage url={selected.url} />
            <h2>{selected.title}</h2>
            <p>{selected.text}</p>
            <CloseButton onClick={() => setSelected(null)}>Close</CloseButton>
          </>
        )}
      </Overlay>
    </Wrapper>
  );
};

