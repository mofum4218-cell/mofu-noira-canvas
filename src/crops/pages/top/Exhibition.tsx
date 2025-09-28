"use client";

import React from "react";
import styled from "styled-components";
import letterConfig from "@/config/pages/letter.json";
import noiraRainbowConfig from "@/config/pages/noira-rainbow.json";
import noiraBottleConfig from "@/config/pages/noira-bottle.json";
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
    </Grid>
  );
};

