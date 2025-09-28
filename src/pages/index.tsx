// src/pages/index.tsx
"use client";

import React from "react";
import Seo from "@/components/Seo";
import TopPage from "./top";

export default function Home() {
  return (
    <>
      <Seo />
      <TopPage />
    </>
  );
}

