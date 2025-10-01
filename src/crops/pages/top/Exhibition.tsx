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
import noiraSystemConfig from "@/config/pages/noira-system.json";
import noiraAuroraConfig from "@/config/pages/noira-aurora.json";
import noiraPhantomConfig from "@/config/pages/noira-phantom.json";
import noiraShineConfig from "@/config/pages/noira-shine.json";
import noiraSpectrumConfig from "@/config/pages/noira-spectrum.json";
import noiraBubblesConfig from "@/config/pages/noira-bubbles.json";
import noiraStormConfig from "@/config/pages/noira-storm.json";
import noiraMagazineConfig from "@/config/pages/noira-magazine.json";
import noiraVisionConfig from "@/config/pages/noira-vision.json";
import noiraProfileConfig from "@/config/pages/noira-profile.json";
import noiraTypewriterConfig from "@/config/pages/noira-typewriter.json";
import noiraLiquidConfig from "@/config/pages/noira-liquid.json";
import noiraParticlesConfig from "@/config/pages/noira-particles.json";
import noiraPossibleConfig from "@/config/pages/noira-possible.json"; // ← 追加！
import noiraCarouselConfig from "@/config/pages/noira-carousel.json";
import noiraBookConfig from "@/config/pages/noira-book.json"; // ← 追加
import noiraVoyageConfig from "@/config/pages/noira-voyage.json"; // ← 追加！
import noiraPixelsConfig from "@/config/pages/noira-pixels.json"; // ← 追加！

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
      <GalleryCard id={letterConfig.id} title={letterConfig.title} subtitle={letterConfig.subtitle} />
      <GalleryCard id={noiraRainbowConfig.id} title={noiraRainbowConfig.title} subtitle={noiraRainbowConfig.subtitle} />
      <GalleryCard id={noiraBottleConfig.id} title={noiraBottleConfig.title} subtitle={noiraBottleConfig.subtitle} />
      <GalleryCard id={warpTunnelConfig.id} title={warpTunnelConfig.title} subtitle={warpTunnelConfig.subtitle} />
      <GalleryCard id={noiraOrbitalConfig.id} title={noiraOrbitalConfig.title} subtitle={noiraOrbitalConfig.subtitle} />
      <GalleryCard id={luminousSphereConfig.id} title={luminousSphereConfig.title} subtitle={luminousSphereConfig.subtitle} />
      <GalleryCard id={noiraPolyConfig.id} title={noiraPolyConfig.title} subtitle={noiraPolyConfig.subtitle} />
      <GalleryCard id={noiraFlowConfig.id} title={noiraFlowConfig.title} subtitle={noiraFlowConfig.subtitle} />
      <GalleryCard id={noiraStarsConfig.id} title={noiraStarsConfig.title} subtitle={noiraStarsConfig.subtitle} />
      <GalleryCard id={noiraGridConfig.id} title={noiraGridConfig.title} subtitle={noiraGridConfig.subtitle} />
      <GalleryCard id={noiraSystemConfig.id} title={noiraSystemConfig.title} subtitle={noiraSystemConfig.subtitle} />
      <GalleryCard id={noiraAuroraConfig.id} title={noiraAuroraConfig.title} subtitle={noiraAuroraConfig.subtitle} />
      <GalleryCard id={noiraPhantomConfig.id} title={noiraPhantomConfig.title} subtitle={noiraPhantomConfig.subtitle} />
      <GalleryCard id={noiraShineConfig.id} title={noiraShineConfig.title} subtitle={noiraShineConfig.subtitle} />
      <GalleryCard id={noiraSpectrumConfig.id} title={noiraSpectrumConfig.title} subtitle={noiraSpectrumConfig.subtitle} />
      <GalleryCard id={noiraBubblesConfig.id} title={noiraBubblesConfig.title} subtitle={noiraBubblesConfig.subtitle} />
      <GalleryCard id={noiraStormConfig.id} title={noiraStormConfig.title} subtitle={noiraStormConfig.subtitle} />
      <GalleryCard id={noiraMagazineConfig.id} title={noiraMagazineConfig.title} subtitle={noiraMagazineConfig.subtitle} />
      <GalleryCard id={noiraVisionConfig.id} title={noiraVisionConfig.title} subtitle={noiraVisionConfig.subtitle} />
      <GalleryCard id={noiraProfileConfig.id} title={noiraProfileConfig.title} subtitle={noiraProfileConfig.subtitle} />
      <GalleryCard id={noiraTypewriterConfig.id} title={noiraTypewriterConfig.title} subtitle={noiraTypewriterConfig.subtitle} />
      <GalleryCard id={noiraLiquidConfig.id} title={noiraLiquidConfig.title} subtitle={noiraLiquidConfig.subtitle} />
      <GalleryCard id={noiraParticlesConfig.id} title={noiraParticlesConfig.title} subtitle={noiraParticlesConfig.subtitle} />
      <GalleryCard id={noiraPossibleConfig.id} title={noiraPossibleConfig.title} subtitle={noiraPossibleConfig.subtitle} /> {/* ← 追加！ */}
      <GalleryCard id={noiraCarouselConfig.id} title={noiraCarouselConfig.title} subtitle={noiraCarouselConfig.subtitle}/> {/* ← 追加 */}
      <GalleryCard id={noiraBookConfig.id} title={noiraBookConfig.title} subtitle={noiraBookConfig.subtitle}/> {/* ← 追加 */}
      <GalleryCard id={noiraVoyageConfig.id} title={noiraVoyageConfig.title} subtitle={noiraVoyageConfig.subtitle}/> {/* ← 追加！ */}
      <GalleryCard id={noiraPixelsConfig.id} title={noiraPixelsConfig.title} subtitle={noiraPixelsConfig.subtitle}/> {/* ← 追加 */}
    </Grid>
  );
};

