"use client";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import styled from "styled-components";

const Hero = dynamic(() => import("@/crops/pages/noira-scrollfilm/Hero").then((m) => m.Hero), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const FixedBg = styled.div<{ $bg?: string }>`
  position: fixed;
  inset: 0;
  background: ${({ $bg }) => `url(${$bg}) center/cover no-repeat`};
  z-index: -1;
`;

export default function NoiraScrollfilmPage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [winterBg, setWinterBg] = useState("");
  const [showHero, setShowHero] = useState(false);
  const horizontalRef = useRef<HTMLDivElement>(null);

  // Supabase読み込み
  useEffect(() => {
    const load = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 3; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`sample/showcase${i}.jpg`, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }
      const { data: bgData } = await supabase.storage
        .from("noira-canvas")
        .createSignedUrl("sample/winter.jpg", 600);
      if (bgData?.signedUrl) setWinterBg(bgData.signedUrl);
      setImageUrls(urls);
    };
    load();
  }, []);

  // 横スクロール設定
  useEffect(() => {
    if (!horizontalRef.current || imageUrls.length === 0) return;
    const el = horizontalRef.current;
    const totalWidth = el.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: () => `+=${totalWidth + window.innerHeight * 1.5}`,
        scrub: 1,
        pin: true,
        onLeave: () => setShowHero(true),
        onEnterBack: () => setShowHero(false),
      },
    });

    tl.to(el, { x: -totalWidth, ease: "none" });

    return () => {
      tl.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [imageUrls]);

  return (
    <>
      {/* 🧊 背景は常に固定 */}
      <FixedBg $bg={winterBg} />

      {/* 横スクロール */}
      <div
        ref={horizontalRef}
        style={{
          display: "flex",
          width: `${imageUrls.length * 100}vw`,
          height: "100vh",
        }}
      >
        {imageUrls.map((url, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 100vw",
              height: "100vh",
              background: `url(${url}) center/cover no-repeat`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero（縦ゾーン） */}
      <div
        style={{
          opacity: showHero ? 1 : 0,
          transform: showHero ? "translateY(0)" : "translateY(100vh)",
          transition: "opacity 1s ease, transform 1.2s ease",
          zIndex: 10,
          position: "relative",
        }}
      >
        {showHero && <Hero />}
      </div>
    </>
  );
}

