// src/crops/pages/noira-pixels/Desc.tsx
"use client";

import React from "react";
import config from "@/config/pages/noira-pixels.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraPixelsDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

