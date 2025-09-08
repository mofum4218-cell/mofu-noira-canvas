// src/crops/sections/hero/HeroEffect.tsx
"use client";
import dynamic from "next/dynamic";

const Vanta = dynamic(() => import("./effects/VantaBirds"), { ssr: false });
const Three = dynamic(() => import("./effects/ThreeScene"), { ssr: false });

export const HeroEffect: React.FC<{ type?: "none" | "vanta" | "three" }> = ({ type }) => {
  if (type === "vanta") return <Vanta />;
  if (type === "three") return <Three />;
  return null;
};

