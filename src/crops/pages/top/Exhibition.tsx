"use client";

import React from "react";
import styled from "styled-components";
import config from "@/config/pages/letter.json";
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
        id={config.id}
        title={config.title}
        subtitle={config.subtitle}
      />
    </Grid>
  );
};

