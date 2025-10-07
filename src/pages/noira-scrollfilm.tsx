"use client";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { supabase } from "@/lib/supabaseClient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

// 遅延ロード（SSR無効化で安全に）
const Hero = dynamic(() => import("@/crops/pages/noira-scrollfilm/Hero").then((m) => m.Hero), {
  ssr: false,
});
const FDesc = dynamic(() => import("@/crops/pages/noira-scrollfilm/FDesc").then((m) => m.FDesc), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

/* 🧊 固定背景レイヤー */
const FixedBg = styled.div<{ $bg?: string; $color?: string }>`
  position: fixed;
  inset: 0;
  background: ${({ $bg, $color }) =>
    $color
      ? $color
      : $bg
      ? `url(${$bg}) center/cover no-repeat`
      : "transparent"};
  transition: background 1.2s ease-in-out, background-image 1.2s ease-in-out;
  z-index: -1;
  will-change: transform;
  transform: translateZ(0);
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

export default function NoiraScrollfilmPage() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [winterBg, setWinterBg] = useState("");
  const [starBg, setStarBg] = useState("");
  const [currentBg, setCurrentBg] = useState("");
  const [bgColor, setBgColor] = useState<string | undefined>();
  const [showHero, setShowHero] = useState(false);

  const horizontalRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const colorTriggerRef = useRef<HTMLDivElement>(null);

  /* 🖼 Supabase画像ロード */
  useEffect(() => {
    const load = async () => {
      const urls: string[] = [];
      for (let i = 1; i <= 3; i++) {
        const { data } = await supabase.storage
          .from("noira-canvas")
          .createSignedUrl(`sample/showcase${i}.jpg`, 600);
        if (data?.signedUrl) urls.push(data.signedUrl);
      }

      // 背景2枚を取得
      const [winterRes, starRes] = await Promise.all([
        supabase.storage.from("noira-canvas").createSignedUrl("sample/winter.jpg", 600),
        supabase.storage.from("noira-canvas").createSignedUrl("sample/star.jpg", 600),
      ]);

      const winter = winterRes.data?.signedUrl || "";
      const star = starRes.data?.signedUrl || "";

      setWinterBg(winter);
      setStarBg(star);
      setCurrentBg(winter); // 初期はwinter背景
      setImageUrls(urls);
    };
    load();
  }, []);

  /* 🌈 横スクロール設定 */
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
        anticipatePin: 1,
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

  /* 🌠 背景切り替え: Heroの下で star → green へ */
  useEffect(() => {
    if (!showHero || !footerRef.current || !colorTriggerRef.current) return;
    if (!winterBg || !starBg) return;

    // ❄ winter → 🌠 star
    const trigger1 = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 90%",
      onEnter: () => {
        console.log("🌠 背景 → star");
        setCurrentBg(starBg);
        setBgColor(undefined);
      },
      onLeaveBack: () => {
        console.log("❄ 背景 → winter");
        setCurrentBg(winterBg);
        setBgColor(undefined);
      },
    });

    // 🌠 star → 🌿 green
    const trigger2 = ScrollTrigger.create({
      trigger: colorTriggerRef.current,
      start: "top 90%",
      onEnter: () => {
        console.log("🌿 背景 → green");
        setCurrentBg("");
        setBgColor("linear-gradient(135deg, #5fa868, #3b7d48)");
      },
      onLeaveBack: () => {
        console.log("🌠 背景 → star");
        setBgColor(undefined);
        setCurrentBg(starBg);
      },
    });

    ScrollTrigger.refresh(); // ✅ 要素出現後に再スキャン

    return () => {
      trigger1.kill();
      trigger2.kill();
    };
  }, [showHero, footerRef.current, colorTriggerRef.current, winterBg, starBg]);

  return (
    <>
      {/* 🧊 固定背景（切り替え制御） */}
      <FixedBg $bg={currentBg} $color={bgColor} />

      {/* 横スクロールゾーン */}
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
              filter: "brightness(0.9)",
            }}
          ></div>
        ))}
      </div>

      {/* Hero（縦スクロールゾーン） */}
      <div
        style={{
          opacity: showHero ? 1 : 0,
          transform: showHero ? "translateY(0)" : "translateY(100vh)",
          transition: "opacity 1s ease, transform 1.2s ease",
          position: "relative",
          zIndex: 10,
        }}
      >
        {showHero && <Hero />}
      </div>

      {/* Desc（Heroの下） */}
      {showHero && (
        <>
          <div
            ref={footerRef}
            style={{
              background: "#fff",
              color: "#111",
              textAlign: "center",
              padding: "6rem 2rem",
              fontFamily: "Noto Sans, sans-serif",
            }}
          >
            <FDesc />
          </div>

          {/* 🌿 背景切り替えゾーン */}
          <div
            ref={colorTriggerRef}
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontSize: "2rem",
              fontWeight: 500,
              textAlign: "center",
              fontFamily: "Noto Sans, sans-serif",
            }}
          >
            🌿 The world turns green again. Everything breathes once more.
          </div>
        </>
      )}
    </>
  );
}

