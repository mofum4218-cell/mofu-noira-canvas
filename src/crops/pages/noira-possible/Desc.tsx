"use client";

import React from "react";
import config from "@/config/pages/noira-possible.json"; // ← noira-possible.json を参照
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function NoiraPossibleDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

