// src/crops/pages/noira-radiance/Desc.tsx
"use client";

import React from "react";
import config from "@/config/pages/noira-radiance.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function RadianceDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

