// src/crops/pages/noira-profile/Desc.tsx
"use client";

import React from "react";
import config from "@/config/pages/noira-profile.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraProfileDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

