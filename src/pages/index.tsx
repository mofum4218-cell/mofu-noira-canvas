// pages/index.tsx
"use client";

import React from "react";
import Seo from "@/components/Seo";
import SectionMapper from "@/crops/sections/SectionMapper";

export default function Home() {
  return (
    <>
      <Seo />
      <SectionMapper />
    </>
  );
}

