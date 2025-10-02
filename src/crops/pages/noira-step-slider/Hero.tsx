"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.6s ease;
  overflow: hidden;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
`;

const Controls = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  gap: 1rem;

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    svg rect {
      fill: #2d2d2d;
      transition: fill 0.3s;
    }

    &:hover svg rect {
      fill: #fff;
    }
  }
`;

const Slides = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "active" && prop !== "bg" && prop !== "accent",
})<{ active: boolean; bg: string; accent: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  transform: ${({ active }) =>
    active ? "translate(0,0)" : "translate(-300px,100%)"};
  transition: transform 0.6s ease, opacity 0.6s ease;
  background-color: ${({ bg }) => bg};
  color: #000;
  padding: 3rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 8px;
  
  /* 高さを中身に合わせる */
  min-height: auto;
  height: auto;

 &::before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: -10px;
  height: 100%; /* 高さをスライド本体に追従 */
  background-color: ${({ accent }) => accent};
  z-index: -1;
  transform: skewY(-2deg);
  border-radius: 8px;
}

  h3 {
    margin: 0;
    font-size: 2rem;
    text-transform: uppercase;
  }

  p {
    margin: 0.5rem 0;
    max-width: 600px;
    font-size: 1rem;
    line-height: 1.6;
    overflow: visible; /* ← 切らさない */
    display: block; /* ← line-clamp解除 */
    -webkit-line-clamp: unset;
    -webkit-box-orient: unset;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2rem;

    p {
      max-width: 100%;
    }
  }
`;

const ImageThumb = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "url",
})<{ url: string }>`
  width: 280px;
  min-height: 200px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 6px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
  }
`;

type SlideData = {
  url: string;
  bg: string;
  accent: string;
  title: string;
  text: string;
  categories: string[];
};

export const Hero: React.FC = () => {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [active, setActive] = useState(0);
  const [bg, setBg] = useState("#c84977");

  // supabaseから画像取得
  useEffect(() => {
    const load = async () => {
      const fetched: SlideData[] = [];
      const colors = ["#c84977", "#db5944", "#e2c142", "#43cab1", "#466cba"];
      for (let i = 1; i <= 5; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`step/slide0${i}.jpg`, 600);
        if (data?.signedUrl) {
          const baseColor = colors[i - 1];
          fetched.push({
            url: data.signedUrl,
            bg: baseColor,
            accent: tinycolor(baseColor).lighten(20).toString(), // 中間色
            title: `Slide Title ${i}`,
            text: `これはサンプルの説明テキストです (${i})。もっと長く書いて、テキスト依存で高さが出るかを確認するテスト用の文章です。テキストが増えるとスライドが伸びるはずです。`,
            categories: ["Blog", "Music", "Travel"],
          });
        }
      }
      setSlides(fetched);
      if (fetched[0]) {
        setBg(tinycolor(fetched[0].bg).lighten(15).toString());
      }
    };
    load();
  }, []);

  const next = () => {
    const newIndex = (active + 1) % slides.length;
    setActive(newIndex);
    setBg(tinycolor(slides[newIndex].bg).lighten(15).toString());
  };

  const prev = () => {
    const newIndex = (active - 1 + slides.length) % slides.length;
    setActive(newIndex);
    setBg(tinycolor(slides[newIndex].bg).lighten(15).toString());
  };

  if (slides.length === 0) return <Wrapper>Loading Slider…</Wrapper>;

  return (
    <Wrapper style={{ backgroundColor: bg }}>
      <Slider>
        <Controls>
          <button onClick={prev}>
            <svg width="24" height="24" viewBox="0 0 68 106">
              <rect x="4" y="4" width="21" height="21" />
              <rect x="23" y="23" width="21" height="21" />
              <rect x="42" y="42" width="21" height="21" />
            </svg>
          </button>
          <button onClick={next}>
            <svg width="24" height="24" viewBox="0 0 68 106">
              <rect x="4" y="4" width="21" height="21" />
              <rect x="23" y="23" width="21" height="21" />
              <rect x="42" y="42" width="21" height="21" />
            </svg>
          </button>
        </Controls>
        <Slides>
          {slides.map((s, i) => (
            <Slide key={i} active={i === active} bg={s.bg} accent={s.accent}>
              <ImageThumb url={s.url} />
              <div>
                <div className="slider__slide__content__categories">
                  {s.categories.join(", ")}
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <a href="#" className="read-more">
                  Read More
                </a>
              </div>
            </Slide>
          ))}
        </Slides>
      </Slider>
    </Wrapper>
  );
};

