"use client";

import React from "react";
import dynamic from "next/dynamic";
import { getSection } from "@/lib/getSection";
//import { Hero } from "@/crops/sections/hero";

// Heroを動的import（SSRオフ）
const Hero = dynamic(() => import("@/crops/sections/hero"), { ssr: false });

export default function Home() {
  const section = getSection("hero");

  return (
    <>
      <Hero
        title={section?.title || "タイトル"}
        subtitle={section?.subtitle || "サブタイトル"}
      />
    </>
  );
}

