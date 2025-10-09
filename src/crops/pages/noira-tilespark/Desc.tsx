"use client";

import React from "react";
import config from "@/config/pages/noira-tilespark.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraTilesparkDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

