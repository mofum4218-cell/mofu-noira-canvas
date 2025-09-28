"use client";

import React from "react";
import config from "@/config/pages/luminous-sphere.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function LuminousSphereDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

