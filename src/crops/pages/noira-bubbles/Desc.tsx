"use client";

import React from "react";
import config from "@/config/pages/noira-bubbles.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraBubblesDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

