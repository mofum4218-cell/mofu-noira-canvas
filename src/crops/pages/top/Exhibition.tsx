"use client";

import React from "react";
import styled from "styled-components";
import letterConfig from "@/config/pages/letter.json";
import noiraRainbowConfig from "@/config/pages/noira-rainbow.json";
import noiraBottleConfig from "@/config/pages/noira-bottle.json";
import warpTunnelConfig from "@/config/pages/warp-tunnel.json";
import noiraOrbitalConfig from "@/config/pages/noira-orbital.json";
import luminousSphereConfig from "@/config/pages/luminous-sphere.json";
import noiraPolyConfig from "@/config/pages/noira-poly.json";
import noiraFlowConfig from "@/config/pages/noira-flow.json";
import noiraStarsConfig from "@/config/pages/noira-stars.json";
import noiraGridConfig from "@/config/pages/noira-grid.json";
import { GalleryCard } from "@/crops/elements/Card/GalleryCard";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

export const Exhibition: React.FC = () => {
  return (
    <Grid>
      <GalleryCard
        id={letterConfig.id}
        title={letterConfig.title}
        subtitle={letterConfig.subtitle}
      />
      <GalleryCard
        id={noiraRainbowConfig.id}
        title={noiraRainbowConfig.title}
        subtitle={noiraRainbowConfig.subtitle}
      />
      <GalleryCard
        id={noiraBottleConfig.id}
        title={noiraBottleConfig.title}
        subtitle={noiraBottleConfig.subtitle}
      />
      <GalleryCard
        id={warpTunnelConfig.id}
        title={warpTunnelConfig.title}
        subtitle={warpTunnelConfig.subtitle}
      />
      <GalleryCard
        id={noiraOrbitalConfig.id}
        title={noiraOrbitalConfig.title}
        subtitle={noiraOrbitalConfig.subtitle}
      />
      <GalleryCard
        id={luminousSphereConfig.id}
        title={luminousSphereConfig.title}
        subtitle={luminousSphereConfig.subtitle}
      />
      <GalleryCard
        id={noiraPolyConfig.id}
        title={noiraPolyConfig.title}
        subtitle={noiraPolyConfig.subtitle}
      />
      <GalleryCard
        id={noiraFlowConfig.id}
        title={noiraFlowConfig.title}
        subtitle={noiraFlowConfig.subtitle}
      />
      <GalleryCard
        id={noiraStarsConfig.id}
        title={noiraStarsConfig.title}
        subtitle={noiraStarsConfig.subtitle}
      />
      <GalleryCard
        id={noiraGridConfig.id}
        title={noiraGridConfig.title}
        subtitle={noiraGridConfig.subtitle}
      />
    </Grid>
  );
};

