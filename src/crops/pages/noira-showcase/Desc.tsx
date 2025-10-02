"use client";

import React from "react";
import config from "@/config/pages/noira-showcase.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraShowcaseDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

