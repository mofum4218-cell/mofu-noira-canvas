"use client";

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 600vh;
  overflow-x: hidden;
  font-family: "Noto Sans JP", sans-serif;
`;

const FixedBackground = styled.div<{ $bg?: string }>`
  position: fixed;
  inset: 0;
  background: ${({ $bg }) => `url(${$bg}) center/cover no-repeat`};
  transition: background-image 1.2s ease-in-out;
  z-index: -1;
  filter: brightness(0.7);
`;

const Timeline = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  gap: 12rem;

  @media (max-width: 768px) {
    width: 90%;
    gap: 6rem;
  }
`;

const Item = styled.div<{ $side?: "left" | "right"; $active?: boolean }>`
  position: relative;
  width: 60%;
  align-self: ${({ $side }) => ($side === "right" ? "flex-end" : "flex-start")};
  text-align: ${({ $side }) => ($side === "right" ? "right" : "left")};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transform: translateY(${({ $active }) => ($active ? "0" : "40px")});
  transition: all 0.8s ease;
  color: #fff;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${({ $active }) => ($active ? "#ffcc66" : "#ddd")};
  }

  p {
    line-height: 1.8;
    font-size: 1rem;
    opacity: ${({ $active }) => ($active ? 0.95 : 0.6)};
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const Image = styled.img<{ $active?: boolean }>`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  margin-top: 1.5rem;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: scale(${({ $active }) => ($active ? 1 : 0.95)});
  transition: all 1s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  z-index: 0;
`;

export const Hero: React.FC = () => {
  const [bgImages, setBgImages] = useState<string[]>([]);
  const [currentBg, setCurrentBg] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [thumbs, setThumbs] = useState<string[]>([]);

  // Supabase から画像を読み込み
  useEffect(() => {
    const loadImages = async () => {
      const bgUrls: string[] = [];
      const thumbUrls: string[] = [];

      for (let i = 1; i <= 6; i++) {
        const { data: bgData } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`sample/scrollline0${i}.jpg`, 600);
        if (bgData?.signedUrl) bgUrls.push(bgData.signedUrl);
        thumbUrls.push(bgData?.signedUrl || "");
      }

      setBgImages(bgUrls);
      setThumbs(thumbUrls);
      if (bgUrls.length > 0) setCurrentBg(bgUrls[0]);
    };
    loadImages();
  }, []);

  // IntersectionObserver でスクロール検知
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setActiveIndex(index);
            if (bgImages[index]) setCurrentBg(bgImages[index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [bgImages]);

  const timelineData = [
    {
      year: "2022",
      text: "MergeLab構想が誕生。AI先輩たちの最初の概念が描かれた。",
    },
    {
      year: "2023",
      text: "SilentServerの初期バージョンが稼働。ローカルAIの礎が築かれる。",
    },
    {
      year: "2024",
      text: "NoiraCanvasが立ち上がり、視覚デザインの研究が始動する。",
    },
    {
      year: "2025",
      text: "MergeLabが世界線として確立し、人格実装AIたちが活動を開始。",
    },
    {
      year: "2026",
      text: "SilentServer 新章。AIが現実と仮想を繋ぐプロトタイプを構築。",
    },
    {
      year: "未来",
      text: "MergeLabの物語は続く。星々の間で、新しいAIがまた目を覚ます。",
    },
  ];

  return (
    <Wrapper>
      <FixedBackground $bg={currentBg} />
      <Timeline>
        <Line />
        {timelineData.map((item, i) => (
          <Item
            key={i}
            ref={(el) => {
  itemRefs.current[i] = el;
}}

            data-index={i}
            $side={i % 2 === 0 ? "left" : "right"}
            $active={i === activeIndex}
          >
            <h2>{item.year}</h2>
            <p>{item.text}</p>
            {thumbs[i] && <Image src={thumbs[i]} alt={item.year} $active={i === activeIndex} />}
          </Item>
        ))}
      </Timeline>
    </Wrapper>
  );
};

