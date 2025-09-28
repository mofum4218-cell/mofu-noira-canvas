"use client";

import React from "react";
import config from "@/config/pages/noira-system.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraSystemDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

