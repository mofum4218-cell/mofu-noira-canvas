"use client";

import React from "react";
import config from "@/config/pages/noira-fragments.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraFragmentsDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

