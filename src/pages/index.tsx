// src/pages/index.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { getSection } from "@/lib/getSection";
import Seo from "@/components/Seo";  // ← ここ！

const Hero = dynamic(() => import("@/crops/sections/hero"), { ssr: false });

export default function Home() {
  const section = getSection("hero");

  return (
    <>
      <Seo /> {/* ← ここで全部SEO処理OK！ */}

      <Hero
        title={section?.title || "タイトル"}
        subtitle={section?.subtitle || "サブタイトル"}
      />
    </>
  );
}

