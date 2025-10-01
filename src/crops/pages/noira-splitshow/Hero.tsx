// src/crops/pages/noira-splitshow/Hero.tsx
"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #110101;
  color: #fff;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const SplitSlideshow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const Slideshow = styled.div<{ $mirror?: boolean }>`
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
  ${(p) => (p.$mirror ? "transform: scaleX(-1);" : "")}
`;

const SlideImage = styled(motion.div)<{ $bg: string }>`
  width: 100%;
  height: 100%;
  background: url(${(p) => p.$bg}) center/cover no-repeat;
  position: absolute;
  top: 0;
  left: 0;
`;

const SlideshowText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 80px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  letter-spacing: 20px;
  line-height: 1;
  z-index: 10;

  span {
    display: block;
    font-size: 0.5em;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: 10px;
  }
`;

export const Hero: React.FC = () => {
  const [slides, setSlides] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  // Supabase から画像取得
  useEffect(() => {
    const load = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 4; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`splitshow/slide0${i}.jpg`, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      setSlides(urls);
    };
    load();
  }, []);

  // 自動でスライド切り替え
useEffect(() => {
  if (slides.length === 0) return;
  const timer = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 2500); // 2.5秒ごとに切り替え（短くした）
  return () => clearInterval(timer);
}, [slides]);

  if (slides.length < 4) return <Wrapper>Loading slideshow…</Wrapper>;

  const texts = ["Canyon", "Desert", "Erosion", "Shape"];

  return (
    <Wrapper>
      <SplitSlideshow>
      {/* 左側 */}
<Slideshow>
  <AnimatePresence>
    <SlideImage
      key={index}
      $bg={slides[index]}
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  </AnimatePresence>
</Slideshow>

{/* 右側 */}
<Slideshow $mirror>
  <AnimatePresence>
    <SlideImage
      key={index}
      $bg={slides[index]}
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
  </AnimatePresence>
</Slideshow>
               {/* 中央テキスト */}
        <SlideshowText>
          {texts[index]}
          <span>Noira Splitshow</span>
        </SlideshowText>
      </SplitSlideshow>
    </Wrapper>
  );
};

