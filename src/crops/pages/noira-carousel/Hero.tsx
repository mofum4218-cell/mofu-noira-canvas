// src/crops/pages/noira-carousel/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { supabase } from "@/lib/supabaseClient";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stage = styled.div`
  width: 300px;
  height: 400px;
  perspective: 2000px;
`;

const Ring = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  cursor: grab;
  position: relative;
`;

const ImgDiv = styled.div<{ $bg?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ $bg }) => `url(${$bg})`};
  background-size: cover;
  background-position: center;
  backface-visibility: hidden;
  opacity: 1;
`;

export const Hero: React.FC = () => {
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [imgs, setImgs] = useState<string[]>([]);
  const xPos = useRef(0);

  // Supabaseから10枚の画像を取得
  useEffect(() => {
    const loadImgs = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const filename = `carousel/img${String(i).padStart(2, "0")}.png`;
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(filename, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      setImgs(urls);
    };
    loadImgs();
  }, []);

  // GSAP初期化
  useEffect(() => {
    if (!ringRef.current || imgs.length === 0) return;

    const ring = ringRef.current;
    const imgsEls = ring.querySelectorAll(".img");

    gsap.set(ring, { rotationY: 180 }); // 初期回転

    gsap.set(imgsEls, {
      rotateY: (i: number) => i * -36, // 360/10 = 36°
      transformOrigin: "50% 50% 500px",
      z: -500,
      backfaceVisibility: "hidden",
    });

    gsap.from(imgsEls, {
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      ease: "expo",
    });

    let dragging = false;

    const dragStart = (e: MouseEvent | TouchEvent) => {
      xPos.current = "touches" in e ? e.touches[0].clientX : e.clientX;
      dragging = true;
      gsap.set(ring, { cursor: "grabbing" });
    };

    const drag = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - xPos.current) % 360;
      gsap.to(ring, {
        rotationY: `-=${delta}`,
        onUpdate: () => {
          // parallax用 背景位置補正 (今回は簡易)
          imgsEls.forEach((el, i) => {
            (el as HTMLElement).style.backgroundPosition = `${
              100 - ((gsap.getProperty(ring, "rotationY") as number) - 180 - i * 36) % 360
            }px 0px`;
          });
        },
      });
      xPos.current = clientX;
    };

    const dragEnd = () => {
      dragging = false;
      gsap.set(ring, { cursor: "grab" });
    };

    window.addEventListener("mousedown", dragStart);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("mousemove", drag);
    window.addEventListener("touchmove", drag);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchend", dragEnd);

    return () => {
      window.removeEventListener("mousedown", dragStart);
      window.removeEventListener("touchstart", dragStart);
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("touchmove", drag);
      window.removeEventListener("mouseup", dragEnd);
      window.removeEventListener("touchend", dragEnd);
    };
  }, [imgs]);

  return (
    <Wrapper>
      <Stage>
        <Ring ref={ringRef}>
          {imgs.map((url, i) => (
            <ImgDiv key={i} className="img" $bg={url} />
          ))}
        </Ring>
      </Stage>
    </Wrapper>
  );
};

