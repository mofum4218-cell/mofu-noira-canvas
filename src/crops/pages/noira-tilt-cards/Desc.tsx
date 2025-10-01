// src/crops/pages/noira-tilt-cards/Desc.tsx
"use client";

import React from "react";
import config from "@/config/pages/noira-tilt-cards.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraTiltCardsDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

