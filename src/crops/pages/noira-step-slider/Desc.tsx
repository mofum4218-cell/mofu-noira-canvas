"use client";

import React from "react";
import config from "@/config/pages/noira-step-slider.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraStepSliderDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

