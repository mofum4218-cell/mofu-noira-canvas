// src/pages/index.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { getSection } from "@/lib/getSection";
import Seo from "@/components/Seo";

// セクション読み込み
const Hero = dynamic(() => import("@/crops/sections/hero"), { ssr: false });
const About = dynamic(() => import("@/crops/sections/about"), { ssr: false }); // 👈 追加

export default function Home() {
  const heroSection = getSection("hero");

  return (
    <>
      <Seo />

      <Hero
        title={heroSection?.title || "タイトル"}
        subtitle={heroSection?.subtitle || "サブタイトル"}
      />

      <About /> {/* 👈 ここで表示OK！ */}
    </>
  );
}

