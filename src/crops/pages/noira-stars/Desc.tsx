"use client";

import React from "react";
import config from "@/config/pages/noira-stars.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraStarsDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

