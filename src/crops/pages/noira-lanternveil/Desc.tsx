"use client";

import React from "react";
import config from "@/config/pages/noira-lanternveil.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraLanternveilDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

