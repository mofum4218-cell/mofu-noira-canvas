"use client";

import React from "react";
import config from "@/config/pages/warp-tunnel.json";
import { DescWrapper } from "@/crops/common/DescWrapper";

export default function WarpTunnelDesc() {
  return (
    <DescWrapper
      title={config.title}
      feature={config.feature}
      arrange={config.arrange}
    />
  );
}

